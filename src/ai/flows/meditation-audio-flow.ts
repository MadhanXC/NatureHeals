
'use server';
/**
 * @fileOverview A guided meditation audio generation flow.
 *
 * - generateMeditationAudio - Generates a meditation script and converts it to audio.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import wav from 'wav';

const MeditationInputSchema = z.object({
  theme: z.enum(['Calm', 'Energy', 'Focus']).default('Calm'),
});

const MeditationOutputSchema = z.object({
  script: z.string(),
  audioDataUri: z.string(),
});

export async function generateMeditationAudio(input: z.infer<typeof MeditationInputSchema>) {
  return meditationAudioFlow(input);
}

const meditationAudioFlow = ai.defineFlow(
  {
    name: 'meditationAudioFlow',
    inputSchema: MeditationInputSchema,
    outputSchema: MeditationOutputSchema,
  },
  async (input) => {
    // 1. Generate the meditation script
    const scriptPrompt = `You are a professional meditation guide. Write a very short, soothing guided meditation script (about 4-5 sentences) focused on the theme: ${input.theme}. Use calming language.`;
    const { text: script } = await ai.generate(scriptPrompt);

    // 2. Convert script to audio using Gemini TTS
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: `Please speak this meditation script clearly and slowly with a soothing voice: ${script}`,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate audio media.');
    }

    // 3. Convert PCM to WAV
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    const wavBase64 = await toWav(audioBuffer);

    return {
      script,
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', (d) => bufs.push(d));
    writer.on('end', () => {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}
