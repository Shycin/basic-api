const express = require('express')
const router = express.Router()
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')


// File access
const swaggerDocs = yaml.load('./swagger.yaml')


// API Documentation
if (process.env.NODE_ENV !== 'production') {
    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}


module.exports = router