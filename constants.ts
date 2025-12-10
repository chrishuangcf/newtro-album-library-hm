import { Album } from './types';

export const MOCK_ALBUMS: Album[] = [
  {
    id: '1',
    title: 'Ludwig van Beethoven',
    artist: 'Symphony No. 9',
    tracks: 1,
    duration: '12:08',
    format: 'flac',
    formatColor: 'orange',
    coverUrl: 'https://picsum.photos/300/300?grayscale',
    isHiRes: false
  },
  {
    id: '2',
    title: 'Blue Monday FM',
    artist: 'New Order',
    tracks: 1,
    duration: '0:39',
    format: '24:96',
    formatColor: 'blue',
    coverUrl: 'https://picsum.photos/300/300?blur=2',
    isHiRes: true,
    qualityBadge: 'Hi-Res AUDIO'
  },
  {
    id: '3',
    title: 'David Elias ~ Crossing',
    artist: 'David Elias',
    tracks: 1,
    duration: '5:59',
    format: 'mqa',
    formatColor: 'orange',
    coverUrl: 'https://picsum.photos/300/300?random=1',
    isHiRes: true,
    qualityBadge: 'Hi-Res AUDIO'
  },
  {
    id: '4',
    title: 'Unknown Artist',
    artist: 'Unknown Artist',
    tracks: 1,
    duration: '0:10',
    format: 'm4a',
    formatColor: 'yellow',
    coverUrl: 'https://picsum.photos/300/300?random=2',
    isHiRes: false
  },
  {
    id: '5',
    title: 'Blue Eye Samurai',
    artist: 'Amie Doherty',
    tracks: 4,
    duration: '11:41',
    format: 'mp3',
    formatColor: 'orange',
    coverUrl: 'https://picsum.photos/300/300?random=3',
    isHiRes: false
  },
  {
    id: '6',
    title: 'Unknown Artist',
    artist: 'Unknown Artist',
    tracks: 1,
    duration: '1:00',
    format: 'mp4',
    formatColor: 'yellow',
    coverUrl: 'https://picsum.photos/300/300?random=4',
    isHiRes: false
  },
  {
    id: '7',
    title: 'Unknown Artist',
    artist: 'Unknown Artist',
    tracks: 1,
    duration: '0:06',
    format: 'ogg',
    formatColor: 'orange',
    coverUrl: 'https://picsum.photos/300/300?random=5',
    isHiRes: false
  },
  {
    id: '8',
    title: 'Unknown Artist',
    artist: 'Unknown Artist',
    tracks: 1,
    duration: '0:14',
    format: 'wav',
    formatColor: 'yellow',
    coverUrl: 'https://picsum.photos/300/300?random=6',
    isHiRes: false
  }
];
