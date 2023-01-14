import TracksModel from '../models/TracksModel';
import ITunesApi from '../api/itunes/ItunesApi';
import Utils from '../utils/Utils';
import { TracksByArtist } from '../dto/TracksByArtist';
import { ResponseItunes } from '../dto/ResponseItunes';
import Mapper from '../mapper/Mapper';
import { Song } from '../dto/Song';

class TracksRepository {
  iTunesApi = new ITunesApi();
  utils = new Utils();
  mapper = new Mapper();
  constructor() { }

async getTracksByArtisrt(term : string) {

    const responseItunesApi  : ResponseItunes = await this.iTunesApi.searchMusicByTerm(term);
    const songsByArtist  = responseItunesApi.results.filter(track => this.utils.removeAccents(track.artistName.toLowerCase()) == this.utils.removeAccents(term.toLowerCase()));
    const songs  : Song [] = this.mapper.ConvertResultToSongs(songsByArtist).slice(0,25);
    const albums: string [] = getAlbums(groupBy(songs,"albumName"));
    const tracksByArtist : TracksByArtist = { songs : songs, totalAlbums : albums.length, totalSongs : songs.length, albums : albums}
   return  tracksByArtist;
  }
}

const getAlbums =  (albumsGroup) => {
  let albums : string [] = []
  for (const key in albumsGroup) {
    albums.push(key)
  }
  return albums;
}

const groupBy = (arr, key) => {
  const initialValue = {};
  return arr.reduce((acc, cval) => {
    const myAttribute = cval[key];
    acc[myAttribute] = [...(acc[myAttribute] || []), cval]
    return acc;
  }, initialValue);
};

export default new TracksRepository()