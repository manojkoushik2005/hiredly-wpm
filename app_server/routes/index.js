const express = require('express');
const router = express.Router();
const ctrlLocations =
require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const getJobs = require('../controllers/jobs');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/jobs/Google_SDE', getJobs.Google);
router.get('/jobs/Microsoft_DL_Intern', getJobs.Microsoft);
router.get('/jobs/Amazon_GenAI', getJobs.Amazon)
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;