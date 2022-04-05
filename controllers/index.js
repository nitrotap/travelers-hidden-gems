const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)

router.use((req, res)=> {
    res.render('error-page', {message:'Incorrect route encountered!'});
});

module.exports = router;