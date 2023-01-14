import { Application } from 'express';
import tracksRouter from './TracksRouter'; 
export default class Routes {

  constructor(app: Application) {
    // tracks reoutes
    app.use('/api/tracks', tracksRouter); 
  }
}