import { Song } from '../dto/Song';
;
class TracksModel {

    songs: Song[];

    constructor() {
      this.songs = [];
    }

    findAll = async () => {  
        return this.songs ;
    }

}

export default new TracksModel()