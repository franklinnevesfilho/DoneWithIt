import {create} from 'apisauce';

const client = create({
    baseURL: 'http://10.255.255.68:9000/api',
});

export default client;
