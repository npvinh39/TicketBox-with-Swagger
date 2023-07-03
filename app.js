const swaggerUi = require('swagger-ui-express');
const swaggerV1 = require('./json/ticketbox.json');
const express = require('express');
const app = express();

app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerV1));

app.listen(3000, () => {
    console.log('Server is running at port 3000');
    // open http://localhost:3000/api/v1 in browser
}
);