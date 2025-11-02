import * as yup from 'yup';

const MIN_LEN = {
    name: 2,
    city: 3,
    country: 4
};

const MAX_LEN = {
    name: 50,
    city: 125,
    country: 100
}

export const getUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({ 
                id: yup.number().required(),
            })
        },
    },
};

export const addUser = {
    schema: {
        body: {
            yupSchema: yup.object().shape({ 
                name: yup.string().min(MIN_LEN.name).max(MAX_LEN.name).required(),
                // age: yup.number().required().positive().integer(),
                email: yup.string().email().required(),
                city: yup.string().required(),
                country: yup.string().required() 
            })
        },
    },
};

export const updateUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({ 
                id: yup.number().required(),
            })
        },
        body: {
            yupSchema: yup.object().shape({ 
                name: yup.string().required(),
                // age: yup.number().required().positive().integer(),
                email: yup.string().email().required(),
                city: yup.string().required(),
                country: yup.string().required() 
            })
        },
    },
};

export const removeUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({ 
                id: yup.number().required(),
            })
        },
    },
};