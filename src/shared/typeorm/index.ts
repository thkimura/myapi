import { DataSource } from "typeorm"
import { CreateRolesTable1722717797984 } from "./migrations/1722717797984-CreateRolesTable"
import { Role } from "@roles/http/routes/entities/Role"

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1722717797984],
})
