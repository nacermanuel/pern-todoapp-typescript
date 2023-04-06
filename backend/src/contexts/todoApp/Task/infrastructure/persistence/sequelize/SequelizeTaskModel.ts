import { Model, Column, Table, PrimaryKey, AllowNull, DataType } from "sequelize-typescript";
import { TaskEntity } from "../../../domain/entities/TaskEntity";
import { db_sequelize } from "../../../../../../config/connectDataBase";

@Table({modelName: 'Task'})
class TaskModel extends Model<TaskEntity> implements TaskEntity{

    @PrimaryKey
    @AllowNull(false)
    @Column({type: DataType.STRING})
    id!: string ;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    nombre!: string;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    description!: string;

}

//TaskModel.init( {},{tableName: 'PRUEBATAREA',db_sequelize})

export { TaskModel };