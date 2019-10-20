const request = require('supertest')
const app = require('../../server')


describe('Search Store', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/storeSearch')
      .send({
        selectValue: 'NAME',
        storeId: 'Anga',
      })
      console.log('Anga', res.body);
    expect(res.statusCode).toEqual(401)
    expect(res.body).toEqual({})
  })
});

//search all store

describe('Search Store', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/api/stores')
      .send()
    expect(res.statusCode).toEqual(401)
    expect(res.body).toEqual({})
  })
});

//get customer count under store

describe('Search Store', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/api/store/customerCount')
      .send()
    expect(res.statusCode).toEqual(401)
    expect(res.body).toEqual({})
  })
});



//get customer details under store

describe('Search Store', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/api/store/customerDetails')
      .send()
    expect(res.statusCode).toEqual(401)
    expect(res.body).toEqual({})
  })
});