import { Model, Column, Table, PrimaryKey, AllowNull, DataType, ForeignKey,BelongsTo } from "sequelize-typescript";
import { TaskEntity } from "../../../domain/entities/TaskEntity";
import { db_sequelize } from "../../../../../../config/connectDataBase";
import { UserModel } from "../../../../User/infrastructure/persistence/sequelize/SequelizeUserModel";

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

    @AllowNull(false)
    @ForeignKey(()=> UserModel)
    @Column({type: DataType.STRING})
    userId!: string;

    @BelongsTo(()=> UserModel)
    user!: UserModel ;

}

//TaskModel.init( {},{tableName: 'PRUEBATAREA',db_sequelize})

export { TaskModel };