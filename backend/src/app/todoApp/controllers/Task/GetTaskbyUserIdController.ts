import { Request, Response } from "express";
import { GetTaskbyUserIdUseCase } from "../../../../contexts/todoApp/Task/application/GetTaskbyUserIdUseCase";

class GetTaskbyUserIdController {
    private readonly _taskrepository: GetTaskbyUserIdUseCase;

    constructor(){
        this._taskrepository = new GetTaskbyUserIdUseCase();
    }

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.query ; 
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY
        //IMPLEMENTAR QUE EL ID LO TOME DE LA SESION INICIADA. COMO EN NO COUNTRY

        if(!id){
            res.send('GetTaskbyUserIdController Response: Error query null')
            throw new Error("GetTaskbyUserIdController Response: Error query null")
        }
        const userid: string = id.toString()
        const data = await this._taskrepository.run(userid)

        res.status(200).json(data);
    }
}

export { GetTaskbyUserIdController }