import { NextFunction, Request,  Response } from "express"
import { JwtPayload, Secret, verify } from "jsonwebtoken"


const tokenValidator = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (token) {
    try {


        const secretKey: Secret | undefined = process.env.JWT_PASS;

        if (!secretKey) {
            throw new Error('JWT secret key is not defined.');
        }

        const payload = verify(token, secretKey) as JwtPayload


        //AQUI TOMA EL ID QUE VIENE POR EL TOKEN
        //@ts-ignore
        req.customInfo = payload.id

        // console.log('req.customInfo');
        // //@ts-ignore
        // console.log(req.customInfo);
        
    } catch {
      throw new Error('error de verificacion de token')
    }
  }else{
    res.status(401).send('Acceso Negado en token validator archivo')
    
  }

  next()
}

export { tokenValidator }