import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {JwtHelper} from "../helpers/JwtHelper";

export default class UserService {
    private userRepository = getRepository(User);
    private jwt = new JwtHelper()

    async update(id: number, payload: any) {
        const user = await this.userRepository.findOneOrFail(id, {
            select: [
                'id',
                'name',
                'email',
                'password',
            ]
        });
        Object.assign(user, payload)
        if (payload.password) {
            user.password = this.jwt.hash(payload.password)
        }
        return await this.userRepository.save(user);
    }

    async create(payload: any) {
        const user = new User();
        Object.assign(user, payload)
        if (payload.password) {
            user.password = this.jwt.hash(payload.password)
        }
        return await this.userRepository.save(user);
    }

    async remove(id: number) {
        return await this.userRepository
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", {id: id})
            .execute();
    }

    async profile(id) {
        return await this.userRepository.findOne(id);
    }
}
