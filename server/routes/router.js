 const express = require('express');
 const router = express.Router();
 const services = require('../services/render');

//  const controller = require('');

 /**
  * @description Root Route
  * @methodGET
  */
 router.get('/', services.homeRoutes)

 /**
  * @description Root Route
  * @methodGET /add users
  */
router.get('/add-user',services.addUsers)

 /**
  * @description Root Route
  * @methodGET /update users
  */
router.get('/update-user', services.updateUsers)

//API
// router.post('/api/users',controller.create);
// router.get('/api/users',controller.find);
// router.put('/api/users/:id',controller.update);
// router.delete('/api/users/:id',controller.delete);

module.exports = router;  