import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface FraseInstance extends Model{
    id:number,
    autor: string,
    texto: string
}
export const Frase = sequelize.define<FraseInstance>('Frase,',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    autor:{
        type:DataTypes.STRING
    },
    texto:{
        type:DataTypes.STRING
    }
},{
    tableName:'frases',
    timestamps:false
})