const getEntry = require('../firebase/getEntryCollection')

async function getUser(collection = 'default') {
    const entry = await getEntry.getEntry(collection);
    return JSON.stringify(entry);
}


module.exports = {
    getUser
}