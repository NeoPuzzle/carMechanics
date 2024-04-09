import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: 'credentials'
})

export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    username: string;

    @Column()
    password: string;
}