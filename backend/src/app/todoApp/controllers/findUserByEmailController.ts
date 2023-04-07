import { Request, Response } from "express";
import { SequelizeUserImpl } from "../../../contexts/todoApp/User/infrastructure/persistence/sequelize/SequelizeUserImpl";
import { findUserByEmailUseCase } from "../../../contexts/todoApp/User/application/findUserByEmailUseCase";


class findUserByEmailController {
    private readonly _userRepository: SequelizeUserImpl ;
    private readonly _findUserbyemailUseCase: findUserByEmailUseCase ;
    
    constructor(){
        this._userRepository = new SequelizeUserImpl() ;
        this._findUserbyemailUseCase = new findUserByEmailUseCase(this._userRepository);
    }

    async run(req:Request, res:Response): Promise<void>{
        const { email } = req.body;

        const data = await this._findUserbyemailUseCase.run(email) ;

        //If data === null (User doesnt exist), return null 
        if(!data){
            res.send('findUserbyEmailController Response: Error User with this does not exist')
            throw new Error("findUserbyEmailController Response: Error User with this does not exist")
        }

        res.status(200).json(data);
    }   
}

export { findUserByEmailController } ;