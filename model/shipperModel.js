import { DataTypes } from "sequelize";
import { sequelize } from "../config/conn.js";


const shipper = sequelize.define('Shipper',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        shipper:{
            type:DataTypes.STRING
        }
    },
    {tableName:'Shipper'}
)


export default shipper