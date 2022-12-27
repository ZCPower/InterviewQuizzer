const baseURL = 'http://localhost:3000/api';

export async function registerUser(username, email, password) {
    const url = `${baseURL}/users/register`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                isAdmin: false
            })
        });

        const data = response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function loginUser(username, password) {
    const url = `${baseURL}/users/login`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });

        const data = response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}


//get user from Req.body 
export async function getUserByBody(creatorId) {
    const url = `${baseURL}/users/id`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                creatorId: creatorId
            })
        });

        const data = response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}


//get user from req.params