import users from '../data/user.data';

const get = (uid) => { 
    const findUser = users.find((user) => {
        return user.id === uid;
    });

    return findUser;
};

const getAllUsers = () => {
    return users;
}

const update = (newDetails) => { 
    let updated = false;
    users.forEach((user, index) => {
        if (user.id === newDetails.id) {
            users[index] = { ...user, ...newDetails };
            updated = true;
        }
    });
    return updated;
};


const insert = (details) => { 
    const newUser = { ...details, id: users.length+1 }
    users.push(newUser);

    return true;
};

const remove = (uid) => { 
    const deleteUser = (user, index) => {
        if (user.id === uid) {
            users.splice(index, 1); // remove the element of the found user in the array
            return true;
        }
        return false;
    }

    const doesUserExist = users.find(deleteUser);
};



export default {
    get,
    getAllUsers,
    update,
    insert,
    remove
}