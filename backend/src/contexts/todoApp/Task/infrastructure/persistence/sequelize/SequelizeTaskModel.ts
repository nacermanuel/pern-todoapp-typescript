import { Model, Column, Table, PrimaryKey, AllowNull, DataType, ForeignKey,BelongsTo } from "sequelize-typescript";
import { TaskEntity } from "../../../domain/entities/TaskEntity";
import { SequelizeUserModel } from "../../../../User/infrastructure/persistence/sequelize/SequelizeUserModel";

@Table({modelName: 'Task'})
class SequelizeTaskModel extends Model<TaskEntity> implements TaskEntity{

    @PrimaryKey
    @AllowNull(false)
    @Column({type: DataType.STRING})
    id!: string ;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    name!: string;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    description!: string;

    @AllowNull(false)
    @ForeignKey(()=> SequelizeUserModel)
    @Column({type: DataType.STRING})
    userId!: string;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    date!: string;

    @AllowNull(false)
    @Column({type: DataType.BOOLEAN})
    complete!: boolean;

    @BelongsTo(()=> SequelizeUserModel)
    user!: SequelizeUserModel ;

}

//TaskModel.init( {},{tableName: 'PRUEBATAREA',db_sequelize})

export { SequelizeTaskModel };