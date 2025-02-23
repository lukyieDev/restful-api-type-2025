import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductTable1740163509886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: "255"
                },
                {
                    name: 'price',
                    type: 'decimal',
                    precision: 10,
                    scale: 2
                },
                {
                    name:'quantity',
                    type:'int',
                },
                {
                    name:'created_at',
                    type:'timestamp',
                    default:'CURRENT_TIMESTAMP'
                },
                {
                    name:'updated_at',
                    type:'timestamp',
                    default:'CURRENT_TIMESTAMP'
                }
            ]
        }));
        await queryRunner.query('ALTER TABLE products ADD CONSTRAINT chk_quantity CHECK (quantity >= 0 AND quantity <= 999)')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE products DROP CONSTRAINT chk_quantity');
        await queryRunner.dropTable('products');
    }

}
