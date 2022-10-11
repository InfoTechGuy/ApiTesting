const router=require('express').Router()
//dummy code to demenstrate route all method
router.all('*',requireAuthentication,loadUser)