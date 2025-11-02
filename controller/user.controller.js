import { StatusCodes } from "http-status-codes";

import userService from "../service/user.service";

const STATUS = {
  success: 'OK',
  failure: 'Failed'
};

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();

    if (users.length) return res.status(StatusCodes.OK).send(users);

    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: 'No users found.'
      }
    );
};


const getUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);

    if (user) return res.status(StatusCodes.OK).send({
      status: STATUS.success,
      message: user
    });

    return res.status(StatusCodes.NOT_FOUND).send(
      {
        status: STATUS.failure,
        message: 'User not found.'
      }
    );
}

const addUser = (req, res) => {
    const { body: user } = req;
    const addedUser = userService.addUser(user);

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        message: addedUser,
    })
};

const updateUserDetails = (req, res) => {
    const { body: user } = req;
    const id = parseInt(req.params.id, 10);
    const updatedUser = userService.updateUser(id, user);

    if (updatedUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: updatedUser
        });
    } else {
          return res.status(StatusCodes.NOT_FOUND).send({
              status: STATUS.failure,
              message: `User ${user.id} not found.`
          });
      }
};

const removeUser =  (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);
    const removeUser = userService.removeUser(id);

    let response;
    let correctStatusCode;

    if (!removeUser) {
        response = {
          status: STATUS.success,
          message: `User ${user} has been deleted.`
        };
    } else {
        response = {
        status: STATUS.failure,
        message: 'There was an error deleting this user. Please try again.'
        };
    }

    correctStatusCode = !removeUser ? StatusCodes.OK : StatusCodes.NOT_IMPLEMENTED;

    return res.status(correctStatusCode).send(response);
};

export default {
    getAllUsers,
    getUser,
    addUser,
    updateUserDetails,
    removeUser,
}