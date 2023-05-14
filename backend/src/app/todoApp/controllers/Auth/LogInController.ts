import { Request, Response } from "express";
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config();
import { LogInUseCase } from "../../../../contexts/todoApp/Auth/application/LogInUseCase";
import { UserRepository } from "../../../../contexts/todoApp/User/domain/repository/UserRepository";
import { SequelizeUserImpl } from "../../../../contexts/todoApp/User/infrastructure/persistence/sequelize/SequelizeUserImpl";


class LogInController{

    private readonly _userrepository: UserRepository;
    private readonly _userloginusecase: LogInUseCase;

    constructor(){
        this._userrepository = new SequelizeUserImpl()
        this._userloginusecase = new LogInUseCase(this._userrepository)
    }

    async run(req: Request, res: Response): Promise<void>{
        const { email, password } = req.body;

        if (
            typeof email !== "string" ||
            typeof password !== "string"
          ) {
            res.send('LogInController Response: Error user data fields incorrect')
            throw new Error("LogInController Response: Error user data fields incorrect")
          }

        const user = await this._userloginusecase.run(email, password) ;

        //If data === null (User doesnt exist), return null 
        if(!user){
            res.send('LogInController Response: Error email does not exist or password incorrect')
            throw new Error("LogInController Response: Error email does not exist or password incorrect")
        }

        const secretKey: Secret | undefined = process.env.JWT_PASS;

        if (!secretKey) {
        throw new Error('JWT secret key is not defined.');
        }

        const token = jwt.sign(
             {id: user.id} , 
             secretKey,
            {
              expiresIn: "1h",
            },
        )

        res.status(200).json({
            user: user,
            token: token
        });
    }
}

export {LogInController} ; 