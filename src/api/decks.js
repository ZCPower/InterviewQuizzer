const baseURL = 'http://localhost:3000/api/decks';

export async function createDeck(topic, isPublic, creatorId, creatorName) {
    const url = `${baseURL}/`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                topic: topic,
                isPublic: isPublic,
                creatorId: creatorId,
                creatorName: creatorName
            })
        });

        const data = response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function fetchDeckByUser(userId) {
    const url = `${baseURL}/user/${userId}`;
    // console.log('hi')
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = response.json();
        // console.log('we in here')
        console.log(data, 'hello')
        return data;
    } catch (error) {
        console.error(error)
    }
}
