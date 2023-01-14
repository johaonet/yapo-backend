import { Router } from 'express';
import TracksController from '../controllers/TracksController';

class CourseRoutes {
  router = Router();
  tracksController = new TracksController();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route('/').get(this.tracksController.getTracksByArtisrt);
  }
}
export default new CourseRoutes().router;