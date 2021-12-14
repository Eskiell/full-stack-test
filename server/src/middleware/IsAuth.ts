import {NextFunction, Request, Response} from "express";
import {getConnection} from "typeorm";
import {User} from "../entity/User";
import {JwtHelper} from "../helpers/JwtHelper";

export async function isAuth(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization || req.query.api_token || null;
    if (token) {
        token = token.replace(/^Bearer\s/, '').trim()
    }
    try {
        const JWT = new JwtHelper();
        const jwtPayload = await JWT.decrypt(token);
        res.locals.jwtPayload = jwtPayload;
        const user_id = jwtPayload.id || null;
        if (!user_id) {
            throw new Error('Não autorizado: accessToken not active');
        }
        req.user = await getConnection().getRepository(User).findOneOrFail(user_id);
        next();
    } catch (e) {
        const info = {
            success: true,
            errors: e.message || e,
            status: 422,
            data: ["Não autorizado Token inválido"]
        }
        return res.status(401).send(info).end();
    }
}
