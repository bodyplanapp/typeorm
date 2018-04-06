import {Entity, PrimaryGeneratedColumn, Column, TableInheritance, DiscriminatorColumn} from "typeorm";

@Entity()
@TableInheritance("class-table")
@DiscriminatorColumn({ name: "type", type: "varchar" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;


}
