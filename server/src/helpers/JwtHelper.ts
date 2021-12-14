import * as jwt from "jsonwebtoken";
import * as  crypto from "crypto";

interface encryptInterface {
    id: number,
    email: string
}

export class JwtHelper {
    async encrypt(payload: encryptInterface) {
        return await <any>jwt.sign(payload, process.env.JWT_ENCRYPTION_KEY, {expiresIn: "1 years"});
    }

    async decrypt(payload: string) {
        return await <any>jwt.verify(payload, process.env.JWT_ENCRYPTION_KEY);
    }

    hash(password: any) {
        return crypto.createHash('sha256').update((String(password)).toString()).digest('hex').toLowerCase();
    }
}
