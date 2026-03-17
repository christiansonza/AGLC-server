import { sequelize } from "../config/conn.js";
import { DataTypes } from "sequelize";

const Destination = sequelize.define('Destination', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    destinationName: { 
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Destination',
});

export default Destination;