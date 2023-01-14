import axios from "axios";

export default class ITunesApi {
    constructor() { }

    async searchMusicByTerm(term : string) {

        try {
          let url = `${process.env.API_ITUNES}/search?term=${term}`
          const response = await axios.get(url);
          return response.data;
        
        } catch (error) { 
          return null;
        }
      }
}