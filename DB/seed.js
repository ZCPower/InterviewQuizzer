const { client } = require('./client');
const { createNewFlashcard } = require('./models/flashcard');

const { createUser } = require('./models/users.js')


async function dropTables() {
    console.log('Starting to drop tables...')
    try {

        await client.query(`
        DROP TABLE IF EXISTS multiplechoice;
        DROP TABLE IF EXISTS flashcards;
        DROP TABLE IF EXISTS users;`)

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
            "isAdmin" varchar(255) NOT NULL DEFAULT false,
            "userPhoto" varchar(255) NOT NULL DEFAULT 'https://img.icons8.com/ios-glyphs/344/user--v1.png'
        );
        
        CREATE TABLE flashcards(
            id SERIAL PRIMARY KEY, 
            front varchar(255) UNIQUE NOT NULL,
            back varchar(255) NOT NULL,
            category varchar(255) NOT NULL
        );

        CREATE TABLE multiplechoice(
        id SERIAL PRIMARY KEY,
        question varchar(255) UNIQUE NOT NULL,
        answer varchar(255) NOT NULL,
        category varchar(255) NOT NULL
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

async function createInitialFlashCards() {
    console.log("Creating initial flashcards...");
    try {
        const cardsToCreate = [
            {
                front: 'Your mom',
                back: 'Is hot.',
                category: 'Test'
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
        await createInitialFlashCards();
        await createInitialUsers();
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