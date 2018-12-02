import * as express from 'express';

import {WelcomeController} from './controllers';

const app: express.Application = express();
const port = 3000 || process.env.PORT;

app.use('/', WelcomeController); 

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
