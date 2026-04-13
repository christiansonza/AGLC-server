import {DataTypes} from 'sequelize'
import { sequelize } from '../config/conn.js'

import PettyCashRelease from './pettyCashReleaseModel.js'
import AccountTitle from './accountTitleModel.js'
import SubAccount from './subAccountTitleModel.js'
import Department from './departmentModel.js'


const JournalEntry = sequelize.define('JournalEntry',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        belongsToType:{
            type:DataTypes.STRING
        },
        belongsToId:{
            type:DataTypes.INTEGER,
            references:{
                model: PettyCashRelease,
                key: 'id'
            }
        },
        accountTitleId:{
            type:DataTypes.INTEGER,
            references:{
                model:AccountTitle,
                key:'id'
            }
        },
        subAccountTitleId:{
            type:DataTypes.INTEGER,
            references:{
                model:SubAccount,
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
        listItemType:{
            type:DataTypes.STRING
        },
        listItemId:{
            type:DataTypes.INTEGER 
        },
        debit:{
            type:DataTypes.DECIMAL
        },
        credit:{
            type:DataTypes.DECIMAL
        }

    },
    {tableName:'JournalEntry'}
)


export default JournalEntry