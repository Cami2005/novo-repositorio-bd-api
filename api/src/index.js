import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import heroicontroller from './controller/heroiController.js';

const server= express();
server.use(cors());
server.use(express.json());

server.use(heroicontroller);

server.listen(process.env.PORT, () => console.log (`API conectada ${process.env.PORT}`));