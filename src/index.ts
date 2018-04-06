import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Customer } from "./entity/Customer";
import { Person } from "./entity/Person";

createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "user",
    password: null,
    database: "typeorm",
    entities: [
        __dirname + "/entity/*.ts"
    ],
    synchronize: true,
}).then(async connection => {

    console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;

    const user = new Customer();
    user.firstName = "Eric";
    user.lastName = "Escobar";
    user.age = 50;
    user.faculty = 'bodyplan';

    await connection.manager.save(user);

    const person = new Person();
    person.firstName = "Gonzalo";
    person.lastName = "Puto";
    person.age = 35;
    person.person = 'hola soy una persona';

    await connection.manager.save(person);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
