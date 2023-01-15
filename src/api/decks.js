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

// topic: topic,
//     isPublic: isPublic,
//         creatorId: creatorId,
//             creatorName: creatorName