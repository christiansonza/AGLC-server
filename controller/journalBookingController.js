import Booking from '../model/bookingModel.js'
import Account from '../model/accountTitleModel.js'
import SubAccount from '../model/subAccountTitleModel.js'
import Department from '../model/departmentModel.js'
import JournalEntryBooking from '../model/journalEntryBookingModel.js'

export const fetchJournalBookingAll = async (req, res) => {
  try {
    const journals = await JournalEntryBooking.findAll(); 
    res.status(200).json(journals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const fetchJournalBooking = async (req, res) => {
    try {
        const { id } = req.params 

        const result = await JournalEntryBooking.findAll({
            where: { bookingId: id },
            include: [
                { model: Booking, as: 'booking' },
                { model: Account, as: 'account' },
                { model: SubAccount, as: 'subAccount' },
                { model: Department, as: 'department' },
            ]
        })

        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error.', error: error.message })
    }
}

export const fetchJournalBookingById = async (req, res) => {
    try {
        const { id, journalId } = req.params

        const result = await JournalEntryBooking.findOne({
            where: {
                id: journalId,
                bookingId: id
            },
            include: [
                { model: Booking, as: 'booking' },
                { model: Account, as: 'account' },
                { model: SubAccount, as: 'subAccount' },
                { model: Department, as: 'department' },
            ]
        })

        if (!result) {
            return res.status(404).json({ message: 'Journal not found.' })
        }

        res.status(200).json(result)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

export const createJournalBooking = async (req, res) => {
    try {
        const { id } = req.params 
        const {
            accountTitleId,
            subAccountTitleId,
            departmentId,
            listItemType,
            listItemId,
            credit,
            debit
        } = req.body

        if (!accountTitleId) {
            return res.status(400).json({ message: 'Account Title is required.' })
        }

        const result = await JournalEntryBooking.create({
            bookingId: id,
            accountTitleId,
            subAccountTitleId,
            departmentId,
            listItemType,
            listItemId,
            credit,
            debit
        })

        res.status(201).json({
            message: 'Created Successfully.',
            data: result
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error', error: error.message })
    }
}

export const putJournalBooking = async (req, res) => {
    try {
        const { id, journalId } = req.params
        const {
            accountTitleId,
            subAccountTitleId,
            departmentId,
            listItemType,
            listItemId,
            credit,
            debit
        } = req.body

        const result = await JournalEntryBooking.findOne({
            where: {
                id: journalId,
                bookingId: id
            }
        })

        if (!result) {
            return res.status(404).json({ message: 'Journal Entry not found.' })
        }

        await result.update({
            accountTitleId: accountTitleId ?? result.accountTitleId,
            subAccountTitleId: subAccountTitleId ?? result.subAccountTitleId,
            departmentId: departmentId ?? result.departmentId,
            listItemType: listItemType ?? result.listItemType,
            listItemId: listItemId ?? result.listItemId,
            credit: credit ?? result.credit,
            debit: debit ?? result.debit
        })

        res.status(200).json({
            message: 'Updated Successfully.',
            data: result
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error.', error: error.message })
    }
}