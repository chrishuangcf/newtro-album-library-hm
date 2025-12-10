export type MediaType = 'vinyl' | 'cassette' | 'minidisc' | 'cd';

export interface Album {
  id: string;
  title: string;
  artist: string;
  tracks: number;
  duration: string;
  format: string; // e.g., 'flac', 'mp3', 'mqa'
  formatColor: 'yellow' | 'blue' | 'purple' | 'orange';
  coverUrl: string;
  isHiRes?: boolean;
  qualityBadge?: string; // e.g. "24:96"
}

export interface MediaItemProps {
  type: MediaType;
  onClick: (type: MediaType) => void;
  className?: string;
}
