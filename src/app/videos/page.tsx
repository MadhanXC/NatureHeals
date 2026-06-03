import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Youtube, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { YOUTUBE_VIDEOS, YOUTUBE_CHANNEL_URL, YouTubeVideo } from "@/app/lib/videos"

async function getVideosFromAPI(): Promise<YouTubeVideo[] | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return null;

  try {
    const channelHandle = 'NatureHeals';
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${channelHandle}&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    const channelData = await channelRes.json();
    
    if (!channelData.items || channelData.items.length === 0) return null;
    
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=12&key=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    const videosData = await videosRes.json();

    return videosData.items.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url
    }));
  } catch (error) {
    console.error("Failed to fetch videos from YouTube API:", error);
    return null;
  }
}

export default async function VideosPage() {
  const apiVideos = await getVideosFromAPI();
  const displayVideos = apiVideos || YOUTUBE_VIDEOS;

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24 text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <div className="mx-auto bg-white/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4 sm:mb-6">
              <Youtube className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-headline">Healing Wisdom on Video</h1>
            <p className="text-base sm:text-xl opacity-90 max-w-2xl mx-auto font-light px-4">
              Watch guided sessions, educational lectures, and success stories from Healer Vasanthi's YouTube channel.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full w-full sm:w-auto">
                <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  Visit Our Channel <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full -mr-32 -mt-32 sm:-mr-48 sm:-mt-48 blur-3xl opacity-50" />
        </section>

        {/* Video Grid */}
        <section className="py-12 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
              {displayVideos.map((video, index) => (
                <div key={video.id + index} className="group flex flex-col">
                  <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-muted bg-muted">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Showcase Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border rounded-[2rem] sm:rounded-[3rem] p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary leading-tight">
                  Stay Updated with Weekly <br className="hidden sm:block" />Healing Tips
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We regularly upload new content focused on simple, natural ways to improve your daily health. 
                  Subscribe to get notified about our latest rejuvenation tips and full-length lectures.
                </p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 rounded-full px-8 w-full sm:w-auto">
                    <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                      Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative aspect-video w-full max-w-lg rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center p-8 sm:p-12 border border-primary/5">
                <Image 
                  src="/logo.svg" 
                  alt="Nature Heals Logo" 
                  width={400} 
                  height={132} 
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
