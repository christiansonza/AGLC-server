import {DataTypes} from 'sequelize'
import {sequelize} from '../config/conn.js'

const broker = sequelize.define('Broker', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        broker:{
            type:DataTypes.STRING,
        }
    },
    {tableName:'Broker'}
)

export default broker