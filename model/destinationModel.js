import { sequelize } from "../config/conn.js";
import { DataTypes } from "sequelize";

const destination = sequelize.define('Destination',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        shipper:{
            type:DataTypes.STRING
        }
    },
    {tableName:'Destination'}
)


export default destination