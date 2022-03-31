const router = require('express').Router();

const apiRoutes = require('./api/');
//TODO add other controller routes ex. homeRoutes or dashboardRoutes

router.use('/api', apiRoutes);
//TODO add other controller routes ex. '/' for homeRoutes or '/dashboard' for dashboardRoutes

module.exports = router;