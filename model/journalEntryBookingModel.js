import { sequelize } from "../config/conn.js";
import { DataTypes } from "sequelize";

import Booking from "./bookingModel.js";
import AccountTitle from "./accountTitleModel.js";
import SubAccount from "./subAccountTitleModel.js";
import Department from "./departmentModel.js";

const JournalEntryBooking = sequelize.define('JournalEntryBooking',
{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    bookingId: {
        type: DataTypes.INTEGER,
        references: {
            model: Booking,
            key: 'id'
        }
    },

    accountTitleId: {
        type: DataTypes.INTEGER,
        references: {
            model: AccountTitle,
            key: 'id'
        }
    },

    subAccountTitleId: {
        type: DataTypes.INTEGER,
        references: {
            model: SubAccount,
            key: 'id'
        }
    },

    departmentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Department,
            key: 'id'
        }
    },

    listItemType: {
        type: DataTypes.STRING
    },

    listItemId: {
        type: DataTypes.INTEGER
    },
    credit:{
        type:DataTypes.DECIMAL
    },
    debit:{
        type:DataTypes.DECIMAL
    }

},
{
    tableName: 'JournalEntryBooking',
    timestamps: true
})

export default JournalEntryBooking;