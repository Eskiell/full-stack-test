import {Column, Entity} from "typeorm";
import {IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator";

import {Base} from "./Base";

@Entity({name: "user"})
export class User extends Base {

    @IsNotEmpty()
    @IsString()
    @Column({type: 'varchar', nullable: false})
    name: string;

    @IsNotEmpty()
    @Column({type: 'varchar', unique: true})
    email: string;

    @IsOptional()
    @Column({type: 'varchar', select: false, nullable: false})
    password: string;

    @IsOptional()
    @IsInt()
    @Column({type: 'bigint', nullable: true})
    created_by: number;

    @IsOptional()
    @IsInt()
    @Column({type: 'bigint', nullable: true})
    updated_by: number;

}
