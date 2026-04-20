import { sequelize } from "../config/conn.js";
import { DataTypes } from "sequelize";


const pettyCashFund = sequelize.define('pettycashFund',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        code:{
            type:DataTypes.STRING
        },
        name:{
            type:DataTypes.STRING
        },
        branch:{
            type:DataTypes.STRING
        },
        department:{
            type:DataTypes.STRING
        },
        fund:{
            type:DataTypes.DECIMAL(10, 2)
        }
    },
    {
        tableName:'PettyCashFund'
    }
)

export default pettyCashFund