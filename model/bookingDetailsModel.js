import { DataTypes } from "sequelize";
import { sequelize } from "../config/conn.js";
import Booking from "./bookingModel.js"; 

const BookingDetails = sequelize.define(
  "BookingDetails",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    voy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courier: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    broker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vesselName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voyNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipper: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destinationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Booking,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "BookingDetails",
  }
);

export default BookingDetails;