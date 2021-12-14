import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import UserService from "../service/UserService";

export class UserController {

    private userRepository = getRepository(User);
    private userService = new UserService();

    async profile(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.user.id);
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            let params = request.validatedData;
            let user = await this.userService.create(params)
            response.status(201)
            return {
                success: true,
                errors: [],
                status: 201,
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            }
        } catch (e) {
            response.status(422)
            return {
                success: true,
                errors: ['Error ao criar cadastro, Verifique os dados e tente novamente com um E-mail diferente'],
                status: 422,
                data: {}
            }
        }
    }

    async update(request: Request, response: Response, next: NextFunction) {
        try {
            let params = request.validatedData;
            let user = await this.userService.update(request.user.id, params)
            response.status(200)
            return {
                success: true,
                errors: [],
                status: 200,
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            }
        } catch (e) {
            response.status(422)
            return {
                success: true,
                errors: e.message || e,
                status: 422,
                data: {}
            }
        }
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.user.id);
        return await this.userRepository.remove(userToRemove);
    }

}
