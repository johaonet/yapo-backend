import { Request, Response, NextFunction } from 'express';
import TracksRepository from '../repositories/TracksRepository';
import { apiErrorHandler } from '../handlers/errorHandler';

export default class TracksController {
  constructor() { }

  async getTracksByArtisrt(req: Request, res: Response, next: NextFunction) {
    try {
      const artist = (req.query.artist ? String(req.query.artist) : ''  );

      const list = await TracksRepository.getTracksByArtisrt(artist);
      res.json(list);
    } catch (error) {
      apiErrorHandler(error, req, res, 'Fetch Tracks failed.');
    }
  }
}