import { Song } from "./Song";

export interface TracksByArtist {
    totalAlbums: number;
    totalSongs: number;
    albums: string[];
    songs: Song[];
}