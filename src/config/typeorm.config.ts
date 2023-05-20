import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Utilisateurs } from "src/utilisateurs/utilisateurs.entity/utilisateurs.entity"

export const typeOrmConfig: TypeOrmModuleOptions= {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username : 'postgres',
    password : 'kisam9852',
    database : 'test',
    autoLoadEntities: true,
    synchronize : true,
  }