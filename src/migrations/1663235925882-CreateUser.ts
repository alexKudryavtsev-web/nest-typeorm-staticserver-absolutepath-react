import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1663235925882 implements MigrationInterface {
  name = 'CreateUser1663235925882';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user_entity\``);
  }
}
