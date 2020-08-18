import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1597713287080
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({}));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
