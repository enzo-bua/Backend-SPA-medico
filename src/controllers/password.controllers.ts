import { Request, Response } from 'express'
import { Password } from '../entities/Password'


export const createPassword = async (req: Request, res: Response) => {
  try {
     const { 
      password
     } = req.body
     const pass = new Password()
     pass.password = password
     
     await pass.save()
 
    return res.json(pass)
   } catch(error: any) {
     return res.status(500).json({message: error.message})
  }
 }

export const getPassword = async (req: Request, res: Response) => {
  try {
    const password = await Password.find()
    return res.json(password)
   } catch (error: any) {
    return res.status(500).json({message: error.message})
  }
}