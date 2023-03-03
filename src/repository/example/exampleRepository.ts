import exampleService from "../../services/example/exampleService"

class ExampleRepository {
    findAll(){
        return exampleService.findAllExample();
    }
}

export default new ExampleRepository()