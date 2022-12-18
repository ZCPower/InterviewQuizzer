const { client } = require('./client');
const { createNewFlashcard } = require('./models/flashcard');
const { createNewDeck } = require('./models/decks')
const { createUser } = require('./models/users.js');


async function dropTables() {
    console.log('Starting to drop tables...')
    try {

        await client.query(`
        DROP TABLE IF EXISTS multiplechoice CASCADE;
        DROP TABLE IF EXISTS decks CASCADE;
        DROP TABLE IF EXISTS flashcards CASCADE;
        DROP TABLE IF EXISTS users CASCADE;`)

        console.log('Finished dropping tables...')

    } catch (error) {
        console.error(error)
    }
}

async function createTables() {
    console.log('Starting to build tables...');
    try {

        await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL,
            email varchar(255) UNIQUE NOT NULL,
            "isAdmin" BOOLEAN NOT NULL DEFAULT false,
            "userPhoto" varchar(255) DEFAULT 'https://img.icons8.com/ios-glyphs/344/user--v1.png'
        );

        CREATE TABLE decks(
            id SERIAL PRIMARY KEY,
            topic varchar(255) NOT NULL,
            "creatorId" INT REFERENCES users(id),
            "dateCreated" varchar(255) NOT NULL,
            "isPublic" BOOLEAN NOT NULL DEFAULT FALSE
        );
        
        CREATE TABLE flashcards(
            id SERIAL PRIMARY KEY, 
            front varchar(255) UNIQUE NOT NULL,
            back varchar(255) NOT NULL,
            topic varchar(255) NOT NULL,
            "deckId" INT REFERENCES decks(id)
        );


        CREATE TABLE multiplechoice(
        id SERIAL PRIMARY KEY,
        question varchar(255) UNIQUE NOT NULL,
        "creatorId" INT REFERENCES users(id),
        answer varchar(255) NOT NULL,
        topic varchar(255) NOT NULL
        );
        
        `);


        console.log('Finished building tables...')
    } catch (error) {
        console.error(error)
    }
}

async function createInitialUsers() {
    console.log("Creating initial users...");
    try {
        const usersToCreate = [
            {
                username: 'ZCPower',
                password: 'pass1234',
                email: 'zpower.dev@gmail.com',
                isAdmin: true,
                userPhoto: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds'
            }
        ];

        const users = await Promise.all(usersToCreate.map(createUser));

        console.log("Finished creating initial users!!!");
    } catch (error) {
        console.error("Error creating users!!!");
        throw error;
    }
}

//CREATE DECKS 
async function createInitialDecks() {
    console.log('CREATING INITIAL DECKS...')
    try {
        const decksToCreate = [{
            topic: 'React',
            creatorId: 1,
            isPublic: true
            // dateCreated: Date.now()
        }, {
            topic: 'JavaScript',
            creatorId: 1,
            isPublic: false
        }]

        const decks = await Promise.all(decksToCreate.map(createNewDeck))
        console.log(decks);
        return decks;
    } catch (error) {
        console.error(error)
    }
}



//CREATE CARDS
async function createInitialFlashCards() {
    console.log("Creating initial flashcards...");
    try {
        const cardsToCreate = [
            {
                front: 'Your mom',
                back: 'Is hot.',
                topic: 'Test',
                deckId: 1
            }
        ];

        const cards = await Promise.all(cardsToCreate.map(createNewFlashcard));
        console.log("Finished creating initial cards!!!");

        return cards
    } catch (error) {
        console.error("Error creating cards!!!");
        throw error;
    }
}

async function rebuildDB() {
    try {
        client.connect()
        await dropTables();
        await createTables();
        await createInitialUsers();
        await createInitialDecks();
        await createInitialFlashCards();

        // console.log(client)
    }
    catch (error) {
        throw error
    }
}


rebuildDB()
    // .then(testDB())
    .catch(console.error)
    // .finally(() => client.end())



    //Perhaps I should have decks have the option of being private or not?
        // that way users can browse flashcards even without an account.
            //only can create cards/decks if they have an account.