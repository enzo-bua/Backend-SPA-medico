import { DataSource } from "typeorm";
import { Paciente } from './entities/Paciente'
import { Consulta } from "./entities/Consulta";
import { Password } from "./entities/Password";

//conexion de base de datos
export  const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-chlvid64dad6k5lcpjq0-a',
  username: 'proyect_medico_user',
  password: 'adnnZBEEtTJR1SXqq79p5OyjKfHdI0LF',
  port: 5432,
  database: 'proyect_medico',
  entities: [Paciente, Consulta, Password],
  logging: true,
  synchronize: true
})
// export  const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: 'dpg-chlvid64dad6k5lcpjq0-a',
//   username: 'proyect_medico_user',
//   password: 'adnnZBEEtTJR1SXqq79p5OyjKfHdI0LF',
//   port: 5432,
//   database: 'proyect-medico',
//   entities: [Paciente, Consulta, Password],
//   logging: true,
//   synchronize: true
// })