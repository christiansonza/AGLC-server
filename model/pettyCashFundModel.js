import { sequelize } from "../config/conn.js";
import { DataTypes } from "sequelize";
import Branch from '../model/branchModel.js'
import Department from '../model/departmentModel.js'

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
        branchId:{
            type:DataTypes.INTEGER,
            references:{
                model:Branch,
                key:'id'
            }
        },
        departmentId:{
            type:DataTypes.INTEGER,
            references:{
                model:Department,
                key:'id'
            }
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