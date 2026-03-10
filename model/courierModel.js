import { DataTypes } from "sequelize";
import { sequelize } from "../config/conn.js";


const courier = sequelize.define('Courier',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        courier:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        tableName:'Courier'
    }
)


export default courier