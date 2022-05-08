// File access
const getEntry = require('./routes/getEntry');
const newEntry = require('./routes/newEntry');

// Routes
module.exports = function(app){

    app.get('/api/v1/getUsers', async function(req, res) {
        const users = await getEntry.getUser('users');
        res.setHeader('Content-Type', 'application/json');
        res.end(users);
    }); 

    app.post('/api/v1/newUser', async function(req, res) {
        const data = req.body;

        if(data)
        {
            const success = await newEntry.newUser('users', data)
      
            res.send({
                'newUser': success,
                'data': data
            });
        }
        else
        {
            res.statut(400)
        }
        
    });

}