const firestore = require('./firestore');


async function getEntry(collection = 'default') {

    if(collection !== 'default')
    {
        let ret = new Array();

        const snapshot = await firestore.collection(collection).get();
        snapshot.forEach((doc) => {
            ret.push({"id" : doc.id, "data" : doc.data()})
        });
        return ret;
    }
}

  
module.exports = {
    getEntry
}