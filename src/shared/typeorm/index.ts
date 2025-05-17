import { DataSource } from "typeorm"
import { CreateRolesTable1722717797984 } from "./migrations/1722717797984-CreateRolesTable"
import { Role } from "@roles/http/routes/entities/Role"
import { CreateUsersTable1747509157491 } from "./migrations/1747509157491-CreateUsersTable"

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1722717797984, CreateUsersTable1747509157491],
})
