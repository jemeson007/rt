import { Router } from "express";



const router = Router();

//prdts

router.get('/', (req, res) => {
    res.send('tl 2');
});

router.get('/:id', (req, res) => {
    console.log(req.params);
    res.send('tls');
});

router.post('/', (req, res) => {
    res.send('np');
});


export default router;
