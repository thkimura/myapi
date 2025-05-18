import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddRoleIdToUsersTable1747509658497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('users', new TableColumn({
        name: 'roleId',
        type: 'uuid',
        isNullable: true,
      }),
      )
      await queryRunner.createForeignKey('users', new TableForeignKey({
        name: 'roleId',
        columnNames: ['roleId'],
        referencedTableName: 'roles',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users', 'UserRoles')
      await queryRunner.dropColumn('users', 'roleId')
    }

}
