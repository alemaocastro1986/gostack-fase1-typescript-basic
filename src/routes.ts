import {Request, Response} from 'express'

import CreateUser from './services/CreateUser'

export function hello(req: Request, res: Response){

  const user = CreateUser({
    name: 'Bruce Waine', 
    email: 'batman@dc.com', 
    password:'12345',
    techs:['NodeJS', 'Javascript','typescript']
  })

  return res.json(user)
}