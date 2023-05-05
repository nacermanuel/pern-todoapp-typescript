import { Model, Column, Table, PrimaryKey, AllowNull, DataType, ForeignKey,BelongsTo } from "sequelize-typescript";
import { ListTaskModel } from "../../../domian/model/ListTaskModel";
import { SequelizeUserModel } from "../../../../User/infrastructure/persistence/sequelize/SequelizeUserModel";
import { TaskEntity } from "../../../../Task/domain/entities/TaskEntity";
import { SequelizeTaskModel } from "../../../../Task/infrastructure/persistence/sequelize/SequelizeTaskModel";

@Table({modelName: 'listtask'})
class SequelizeListTaskModel extends Model<ListTaskModel> implements ListTaskModel{
    @PrimaryKey
    @AllowNull(false)
    @Column({type: DataType.STRING})
    id!: string ;


    @ForeignKey(()=> SequelizeUserModel)
    @AllowNull(false)
    @Column({type: DataType.STRING})
    userId!: string;

    @AllowNull(false)
    @Column({type: DataType.ARRAY(DataType.JSON)})
    tasks!: object[]

    @BelongsTo(()=> SequelizeUserModel, 'userId')
    user!: SequelizeUserModel ;
}

export { SequelizeListTaskModel }