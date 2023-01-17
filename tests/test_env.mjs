import * as dotenv from 'dotenv';

const {parsed} = dotenv.config({
    path: '../.env'
});

console.log(parsed.NODE_ENV_PROD);// [PASSED]