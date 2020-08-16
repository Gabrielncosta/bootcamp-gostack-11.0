import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => res.json({ m: 'hello' }));
