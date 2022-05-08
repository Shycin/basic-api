const newEntry = require('../firebase/newEntryCollection')

async function newUser(collection, data) {
    // Add a new document with a generated id.
    const add = await newEntry.setNewEntry(collection, data);
}


module.exports = {
    newUser
}