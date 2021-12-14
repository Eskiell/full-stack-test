import {NextFunction, Request, Response} from "express";
import {validate} from 'indicative/validator'

export class UpdateUserPutRequest {
    async IsValid(req: Request, res: Response, next: NextFunction) {
        try {
            let data = {...req.body, ...req.params, ...req.query};
            const rules = {
                "name": 'string:allowNull',
                "email": 'string:allowNull',
                "password": 'string:allowNull'
            }
            req.validatedData = await validate(data, rules, {}, {removeAdditional: true});
        } catch (e) {
            res.status(422)
            return res.send(e.message || e);
        }
        next()
    }
}
