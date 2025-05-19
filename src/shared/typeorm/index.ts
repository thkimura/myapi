import { DataSource } from "typeorm"
import { CreateRolesTable1722717797984 } from "./migrations/1722717797984-CreateRolesTable"
import { Role } from "@roles/http/routes/entities/Role"
import { CreateUsersTable1747509157491 } from "./migrations/1747509157491-CreateUsersTable"
import { AddRoleIdToUsersTable1747509658497 } from "./migrations/1747509658497-AddRoleIdToUsersTable"
import { User } from "@users/entities/Users"


export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role, User],
    migrations: [CreateRolesTable1722717797984, CreateUsersTable1747509157491, AddRoleIdToUsersTable1747509658497],
})
