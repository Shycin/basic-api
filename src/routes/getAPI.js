const newEntry = require('../firebase/newEntryCollection')

module.exports = async (req, res) => {
    const nbitems = await newEntry;
    console.log(nbitems);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ nbitems }));
};