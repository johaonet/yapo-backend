import { Price } from './Price';

export interface Song {
    id: number;
    albumName: string;
    themeName: string;
    previewUrl: string;
    releaseDate: string;
    price: Price;
}