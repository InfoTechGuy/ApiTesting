const router = require('express').Router(),
UserRoutes=require('./user'),
CourseRoutes=require('./course')

router.use('/users',UserRoutes)
router.use('/courses',CourseRoutes)

module.exports = router