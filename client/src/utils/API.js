//Fetching data from backend api/users
export const signUp =(userData) => {
return fetch('http://localhost:3001/api/signup', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(userData)
});
};
export const signIn =(userData) => {
return fetch('http://localhost:3001/api/signin', {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(userData)
});
};
export const userDetails =(userData) => {
return fetch('http://localhost:3001/api/user-details', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify(userData)
});
};
export const userLogoutController =() => {
return fetch('http://localhost:3001/api//logout', {
    method: 'GET',
    credentials: 'include',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify()
});
};
