import { sequelize } from "../config/conn.js";
import { DataTypes } from "sequelize";

const branch = sequelize.define('Branch',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        code:{
            type:DataTypes.STRING
        },
        name:{
            type:DataTypes.STRING
        },
        isActive:{
            type:DataTypes.BOOLEAN
        }
    },
    {
        tableName:'Branch'
    }
)

export default branch