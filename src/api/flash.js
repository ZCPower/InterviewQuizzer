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

//move this bad boy to the decks file and fix any files that depend on it.
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

export async function fetchCardsByDeck(deckId) {
    const url = `${baseURL}/flash/${deckId}`;

    try {
        const response = await fetch(url);
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}
