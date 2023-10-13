import request from 'supertest';
import { startUp } from '../../src/startUp';

const baseUrl = '/api/v1';

describe('GET /galeria/:id', () => {
  it('should return all galerias', async () => {
    const res = await request(startUp.app).get(`${baseUrl}/galeria/1/2`);
    expect(res.statusCode).toBe(200);
  });
});
