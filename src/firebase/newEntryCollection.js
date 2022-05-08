const firestore = require('./firestore');


async function setNewEntry(collection = 'default', data = {}) {

    if(collection !== 'default')
    {
        // Add a new document with a generated id.
        const res = await firestore.collection(collection).add(data).then((res) => {
            console.log("res add", res)
            return true
        })
    }
}

  
module.exports = {
    setNewEntry
}