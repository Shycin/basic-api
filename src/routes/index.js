// File access
const getAPI = require('./getAPI');


// Routes
module.exports = function(app){

    app.get('/api/v1/getAPI', getAPI);

}