import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send('Hello, World!');
});

router.post('/', (req: Request, res: Response)=> {
    console.log(req.body);
    res.send('hi');
})

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;

    res.send(`Hello, ${name}!`);
});

export const WelcomeController: Router = router;