import supertest from 'supertest'
// ! supertest takes your Express app as its argument
// ! then gives you some extra functions to call to talk to your app

import app from '../../index'
import { StatusCodes } from 'http-status-codes'

const api = supertest(app)

console.log(process.env.NODE_ENV)


describe('Testing GET foods', () => {
  it('should return an OK status code in response', async() => { 
    const res = await api.get('/api/foods')
    expect(res.status).toBe(200)
  })

  it('should return an array of ... foods', async () => { 
    const res = await api.get('/api/foods')
    expect(res.body.length).toEqual(12)
  })
})

// ? Our test data should be controlled by us, completely separate environment
// ? every test should work, no matter in what order the tests are run 

