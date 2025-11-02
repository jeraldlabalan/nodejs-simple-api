import userDao from '../model/persistence/user.dao';


const getUser = (uid) => {
    return userDao.get(uid);
};

const getAllUsers = () => {
    return userDao.getAllUsers();
};

const updateUser = (uid, details) => {
    return userDao.update(uid, details);
}

const addUser = (details) => {
    return userDao.insert(details);
};

const removeUser = (uid) => {
    return userDao.remove(uid);
};

export default {
    getUser,
    getAllUsers,
    updateUser,
    addUser,
    removeUser
}