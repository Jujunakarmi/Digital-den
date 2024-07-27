//Fetching data from backend api/users
export const createUser =(userData) => {
return fetch('http://localhost:3001/api/users', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(userData)
});
};
export const login =(userData) => {
return fetch('http://localhost:3001/api/users/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(userData)
});
};

