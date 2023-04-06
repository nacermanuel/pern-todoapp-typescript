import { Model, Column, Table, PrimaryKey, DataType, AllowNull, HasMany } from 'sequelize-typescript'
import { UserEntity } from '../../../domain/entities/UserEntity'
import { TaskModel } from '../../../../Task/infrastructure/persistence/sequelize/SequelizeTaskModel';

@Table({modelName: 'User'})
class UserModel extends Model<UserEntity> implements UserEntity{
    @PrimaryKey
    @AllowNull(false)
    @Column({type: DataType.STRING})
    id!: string ;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    name!: string;
    
    @AllowNull(false)
    @Column({type: DataType.STRING})
    lastName!: string;
    
    @HasMany(() => TaskModel)
    tasks!: TaskModel[]
}

export { UserModel };