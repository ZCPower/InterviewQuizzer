const baseURL = 'http://localhost:3000/api';

export async function fetchAllFlashcards() {
    const url = `${baseURL}/flash`;

    try {
        const response = await fetch(url, {
            // method: 'get',
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = response.json();
        console.log(data)
        return data

    } catch (error) {
        console.error(error)
    }
}

export async function fetchAllPublicDecks() {
    const url = `${baseURL}/decks`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = response.json();
        console.log(data)
        return data

    } catch (error) {
        console.error(error)
    }

}

