import IConfig from './IConfig';
import { config } from 'dotenv';

config();

const configuration : IConfig = {

    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGO_URL,
    PRIVATE_KEY: process.env.PRIVATE_KEY
};

export default configuration;