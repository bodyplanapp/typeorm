import {Entity, PrimaryGeneratedColumn, ClassEntityChild, DiscriminatorValue, Column} from "typeorm";
import { User } from "./User";

@ClassEntityChild()
@DiscriminatorValue('person')
export class Person extends User {

    @Column()
    person: string;
}
