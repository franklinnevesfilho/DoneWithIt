import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://162.193.0.163:3000/api',
    timeout: 6000000,
});

export default apiClient;
