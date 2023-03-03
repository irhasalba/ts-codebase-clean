import {Request,Response} from 'express'
import ExampleUseCase from '../../usecase/ExampleUseCase'
import { ExampleInterface } from './ExampleInterface'

class ExampleController {
    constructor(){}

    getExample(req:Request,res:Response){
        const payloadBody :ExampleInterface = {
            name : 'halo'
        }
        return ExampleUseCase.getAllExample(req,res)
    }
}

export default new ExampleController()