import userDao from '../model/persistence/user.dao';


const getUser = (uid) => {
    userDao.get(uid);
};

const updateUser = (uid, details) => {
    return userDao.update(uid, details);
}

const addUser = (details) => {
    return userDao.insert(details);
};

const removeUser = (uid) => {
    userDao.remove(uid);
};

export default {
    getUser,
    updateUser,
    addUser,
    removeUser
}