import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '3s', target: 10 },
    { duration: '10s', target: 5 },
    { duration: '2s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://www.armazempb.com.br/');
  check(res, {
    'is status 200': (r) => r.status === 200,
   
  });
}