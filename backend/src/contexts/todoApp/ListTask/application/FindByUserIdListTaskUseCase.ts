import { ListTaskModel } from "../domian/model/ListTaskModel";
import { ListTaskRepository } from "../domian/repository/ListTaskRepository";
import { SequelizeListTaskImplementation } from "../infrastructure/persistence/sequelize/SequelizeListTaskImplementation";

class FindByUserIdListTaskUseCase {
    private readonly _listtaskRepository: ListTaskRepository;

    constructor(){
        this._listtaskRepository = new SequelizeListTaskImplementation();
    }

    async run(id:string):Promise<ListTaskModel|null>{
        const data = await this._listtaskRepository.findByUserId(id);
        
        return data
    }
}

export {FindByUserIdListTaskUseCase}