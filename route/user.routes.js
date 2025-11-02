// non-local modules/libraries
import express from 'express';
import { expressYupMiddleware } from 'express-yup-middleware';

// local modules/libraries
import userController from '../controller/user.controller';
import { getUser, addUser, updateUser, removeUser } from '../user.schemas';


export const router = express.Router(); 

router.get('/all', userController.getAllUsers);


router.get('/get/:id', 
    expressYupMiddleware({ schemaValidator: getUser }),
    userController.getUser);

router.post('/add', 
    expressYupMiddleware({ schemaValidator: addUser }),
    userController.addUser
);

router.delete('/delete/:id', 
    expressYupMiddleware({ schemaValidator: removeUser }), 
    userController.removeUser
);

router.put('/update/:id', 
  expressYupMiddleware({ schemaValidator: updateUser }), 
  userController.updateUserDetails
);

export default router;