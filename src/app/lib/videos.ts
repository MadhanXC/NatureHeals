export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
}

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: "AVqjmo8mOaI",
    title: "Nature Heals - Holistic Wellness",
    description: "Experience the profound impact of natural therapy and acupuncture on chronic health conditions."
  },
  {
    id: "a9cDxBP7xvQ",
    title: "Understanding Natural Rhythms",
    description: "Learn how aligning your daily habits with nature can significantly improve your mental and physical health."
  },
  {
    id: "rBz_9FAWDP4",
    title: "The Path to Rejuvenation",
    description: "Discover the healing power of silence and traditional mudras in our specialized camps."
  },
  {
    id: "YvGVNNBx_60",
    title: "Wisdom in Natural Healing",
    description: "Exploring deep-rooted natural healing practices for a balanced life."
  },
  {
    id: "gY6GGu-d9Lo",
    title: "Nature's Restorative Power",
    description: "Connecting with the natural world to restore internal balance and vitality."
  },
  {
    id: "avC6kTj2Q_U",
    title: "Traditional Healing Wisdom",
    description: "Guided insights into natural wellness and restorative practices."
  }
];

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@NatureHeals";
