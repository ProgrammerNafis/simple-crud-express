const express = require('express')
const router = express.Router()
const controller = require('../controller/userController')



router.get('/', controller.allUsers)

router.get('/:id',controller.signleUser)


router.post('', controller.newUser)

router.patch('/:id',controller.updateUser )

router.delete('/:id',controller.deleteUser)
  



module.exports = router;