const { client } = require('./index');

async function dropTables() {
    console.log('Starting to drop tables...')
    try {

        await client.query(`
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
            password varchar(255) NOT NULL
        );`);


        console.log('Finished building tables...')
    } catch (error) {
        console.error(error)
    }
}

async function rebuildDB() {
    try {
        client.connect()
        await dropTables();
        await createTables();
        // console.log(client)
    }
    catch (error) {
        throw error
    }
}


rebuildDB()
    // .then(testDB())
    .catch(console.error)
    .finally(() => client.end())