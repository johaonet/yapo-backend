import {  Result } from "../dto/ResponseItunes";
import { Song } from "../dto/Song";

export default class Mapper {
    constructor() { }

    ConvertResultToSongs(results : Result[]) : Song[] {
        let songs :Song[] = []; 

        results.forEach((element : Result)  => {
            let song :Song = {
                id : element.trackId,
                albumName : element.collectionName,
                themeName :  element.trackName,
                previewUrl :  element.previewUrl,
                releaseDate :  element.releaseDate,
                price : { currency : element.currency, value : element.trackPrice }
            };  
            songs.push(song)
        });
        return songs;
    }

}