import { Model, Column, Table, PrimaryKey, DataType, AllowNull } from 'sequelize-typescript'
import { UserEntity } from '../../../domain/entities/UserEntity'

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
    
    @AllowNull(true)
    @Column({type: DataType.ARRAY(DataType.STRING),})
    tasks!: string[];
}

export { UserModel };