import {NextFunction, Request, Response} from "express";
import AuthService from "../service/AuthService";

export class AuthController {
    private authService = new AuthService();

    async login(request: Request, response: Response, next: NextFunction) {
        try {
            let params = request.body;
            if (params.email == undefined || params.password == undefined) {
                throw 'Dados inválidos'
            }
            return await this.authService.login(params.email, params.password)
        } catch (e) {
            response.status(401)
            return {
                success: true,
                errors: [e.message || e],
                status: 401,
                data: {}
            }

        }
    }
}
