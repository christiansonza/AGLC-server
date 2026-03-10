import {sequelize} from '../config/conn.js'
import { DataTypes } from 'sequelize'

const vessel = sequelize.define('Vessel',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        vesselName:{
            type:DataTypes.STRING
        }
    },
    {tableName:'Vessel'}
)

export default vessel