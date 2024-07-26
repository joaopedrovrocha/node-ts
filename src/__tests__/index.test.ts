import app from "../server";

import request from 'supertest'

describe('GET /', () => {
  it('returns 200 by default', async () => {
    const res = await request(app)
      .get('/')

    expect(res.statusCode).toEqual(200)
  })
})