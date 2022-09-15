require('dotenv').config();
import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'redux123',
  database: 'test',
  entities: [__dirname + '/api/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  synchronize: false,
};
export const dataSource: DataSource = new DataSource(config);

export default config;
