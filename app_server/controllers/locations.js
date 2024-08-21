/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { title: 'Hired.ly' });
};
/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Hired.ly info' });
};
/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};