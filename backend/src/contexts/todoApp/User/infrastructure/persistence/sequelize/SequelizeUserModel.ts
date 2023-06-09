import { Model, Column, Table, PrimaryKey, DataType, AllowNull, HasMany } from 'sequelize-typescript'
import { UserEntity } from '../../../domain/entities/UserEntity'
import { SequelizeListTaskModel } from '../../../../ListTask/infrastructure/persistence/sequelize/SequelizeListTaskModel';
import { SequelizeTaskModel } from '../../../../Task/infrastructure/persistence/sequelize/SequelizeTaskModel';

@Table({modelName: 'User'})
class SequelizeUserModel extends Model<UserEntity> implements UserEntity{
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

    @AllowNull(false)
    @Column({type: DataType.STRING})
    email!: string;

    @AllowNull(false)
    @Column({type: DataType.STRING})
    password!: string;
    
    @HasMany(() => SequelizeTaskModel, 'userId')
    tasks!: SequelizeTaskModel[] ;

    @HasMany(()=> SequelizeListTaskModel, 'userId')
    listtask!: SequelizeListTaskModel[] ;

}

export { SequelizeUserModel };