import swaggerJsdoc from 'swagger-jsdoc'

// Swagger
const options = {
   definition: {
      openapi: '3.0.0',
      info: {
         title: 'Api Documentation',
         version: '1.0.0',
      },
      servers: [{ url: 'http://localhost:8000' }]
   },
   apis: ['./routes/api/*.js'], // files containing annotations as above
}

const swaggerSpecs = swaggerJsdoc(options)

export { swaggerSpecs }
