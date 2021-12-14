import {createQueryBuilder} from "typeorm";
import {JwtHelper} from "../helpers/JwtHelper";
import {User} from "../entity/User";

export default class AuthService {
    private jwt = new JwtHelper()

    async login(email: string, password: string) {
        const user: any = await createQueryBuilder("User")
            .where(" User.email = :email and User.password = :password", {
                email: email,
                password: this.jwt.hash(password),
            })
            .getOne();
        if (user) {
            return {user: user, access_token: await this.jwt.encrypt({id: user.id, email: user.email})}
        }
        throw 'Não autorizado';
    }
}
