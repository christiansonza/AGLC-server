import JournalEntry from '../model/journalEntryModel.js'
import PettyCashRelease from '../model/pettyCashReleaseModel.js'
import AccountTitle from '../model/accountTitleModel.js'
import SubAccountTitle from '../model/subAccountTitleModel.js'
import Department from '../model/departmentModel.js'

export const getJournalEntry = async(req,res)=>{
    try {
        const result = await JournalEntry.findAll({
            include:[
                {model: PettyCashRelease, as:'pettyCash'},
                {model: AccountTitle, as:'account'},
                {model: SubAccountTitle, as:'subAccount'},
                {model: Department, as:'department'}
            ]
        })
        res.status(200).json(result)
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:error.message})
    }
}

export const getJournalEntryById = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await JournalEntry.findByPk(id,{
            include:[
                {model: PettyCashRelease, as:'pettyCash'},
                {model: AccountTitle, as:'account'},
                {model: SubAccountTitle, as:'subAccount'},
                {model: Department, as:'department'},
            ]
        })

        if(!result){
            return res.status(404).json({message: 'Journal Entry not found.'})
        }

        res.status(200).json(result)
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:error.message})
    }
}

export const createJournalEntry = async(req,res)=>{
    try {
        const {belongsToType, belongsToId, accountTitleId, subAccountTitleId, departmentId, listItemType, listItemId, credit, debit} = req.body

        if(!belongsToType || !belongsToId || !accountTitleId || !subAccountTitleId || !departmentId || !listItemType || !listItemId || !credit || !debit ){
            return res.status(400).json({message:'All fields are required.'})
        }

        const result = await JournalEntry.create({
            belongsToType,
            belongsToId,
            accountTitleId,
            subAccountTitleId,
            departmentId,
            listItemType,
            listItemId,
            credit,
            debit
        })
        res.status(201).json({
            message:'Created successfully.',
            data:result
        })
    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:error.message})
    }
}

export const updateJournalEntry = async(req,res)=>{
    try {
        const {id} = req.params
        const {belongsToType, belongsToId, accountTitleId, subAccountTitleId, departmentId, listItemType, listItemId, credit, debit} = req.body

        const result = await JournalEntry.findByPk(id)
        if(!result){
            return res.status(404).json({message:'Journal Entry not found.'})
        }

        result.belongsToType = belongsToType ?? result.belongsToType
        result.belongsToId = belongsToId ?? result.belongsToId
        result.accountTitleId = accountTitleId ?? result.accountTitleId
        result.subAccountTitleId = subAccountTitleId ?? result.subAccountTitleId
        result.departmentId = departmentId ?? result.departmentId
        result.listItemType = listItemType ?? result.listItemType
        result.listItemId = listItemId ??result.listItemId
        result.credit = credit ??result.credit
        result.debit = debit ??result.debit

        await result.save()

        res.status(200).json({
            message:'Updated Successfully',
            data:result
        })

    } catch (error) {
        console.error('Error: ', error)
        res.status(500).json({message:error.message})
    }
}
