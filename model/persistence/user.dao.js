import users from '../data/user.data';

const get = (uid) => users.find((user) => (user.id === uid));

const getAllUsers = () => users;

const update = (userId, newDetails) => { 
    let existingUser = null;
    let userIndex;

    users.map((user, index) => {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index
        }
    });

    if (!existingUser) return false;

    const updatedDetails = {
        ...existingUser, 
        ...newDetails
    };

    users.splice(userIndex, 1, updatedDetails);

    return updatedDetails;
};

const insert = (details) => { 
    const newUser = {id: users.length + 1, ...details}
    users.push(newUser);

    return newUser;
};

const remove = (uid) => { 
    const deleteUser = (user, index) => {
        if (user?.id === uid) {
            users.splice(index, 1);
        }
    };
    return users.find(deleteUser);
};



export default {
    get,
    getAllUsers,
    update,
    insert,
    remove
}