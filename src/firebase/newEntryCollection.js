//const { collection, getDocs } = require("firebase/firestore"); 
const firestore = require('./index');


async function getCount() {
    let count = 0;

    /*const querySnapshot = await firestore.collection('users').get();
    querySnapshot.forEach((doc) => {
        count += 1;
    });*/
    const snapshot = await firestore.collection('users').get();
        snapshot.forEach((doc) => {
        count += 1;
    });
  
    return count;
}


  
module.exports = getCount();