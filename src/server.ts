import * as express from 'express';

import {WelcomeController} from './controllers';
import bodyParser = require('body-parser');

const app: express.Application = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use('/', WelcomeController); 

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
