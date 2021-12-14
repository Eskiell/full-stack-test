import {NextFunction, Request, Response} from "express";
import {validate} from 'indicative/validator'

export class CreateUserPostRequest {
    async IsValid(req: Request, res: Response, next: NextFunction) {
        try {
            let data = {...req.body, ...req.params, ...req.query};
            const rules = {
                "name": 'required',
                "email": 'required|email',
                "password": 'required'
            }
            req.validatedData = await validate(data, rules, {}, {removeAdditional: true});
        } catch (e) {
            res.status(422)
            return res.send(e.message || e);
        }
        next()
    }
}
