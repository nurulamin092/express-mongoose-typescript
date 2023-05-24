const express = require('express');
import cors from 'cors';
import { Application } from 'express';

import userRouters from './app/modules/user/user.route';

const app:Application = express();

app.use(cors());

// pase data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/user',userRouters);

export default app;