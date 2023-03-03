import exampleRepository from "../repository/example/exampleRepository"
import { Request,Response } from "express";

class ExampleUseCase{
    getAllExample(req:Request,res:Response){
        return exampleRepository.findAll();
    }
}
export default new ExampleUseCase()