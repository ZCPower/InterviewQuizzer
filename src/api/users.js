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