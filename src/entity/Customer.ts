import { Entity, Column, SingleEntityChild, DiscriminatorValue, ClassEntityChild } from "typeorm";
import { User } from "./User";

@ClassEntityChild()
@DiscriminatorValue('customer')
export class Customer extends User {

    @Column()
    faculty: string;

}
