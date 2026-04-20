import PettyCashFund from '../model/pettyCashFundModel.js'

export const getPettyCashFund = async (req, res) => {
    try {
        const result = await PettyCashFund.findAll()
        return res.status(200).json(result)
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

export const getPettyCashFundById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await PettyCashFund.findByPk(id)

        if (!result) {
            return res.status(404).json({ message: 'Petty cash not found' })
        }

        return res.status(200).json(result)
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

export const createPettyCashFund = async (req, res) => {
    try {
        const { code, name, branch, department, fund } = req.body

        if (
            code == null ||
            name == null ||
            branch == null ||
            department == null ||
            fund == null
        ) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        const result = await PettyCashFund.create({
            code,
            name,
            branch,
            department,
            fund
        })

        return res.status(201).json({
            message: 'Created Successfully',
            data: result
        })
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

export const putPettyCashFund = async (req, res) => {
    try {
        const { id } = req.params
        const { code, name, branch, department, fund } = req.body

        const result = await PettyCashFund.findByPk(id)

        if (!result) {
            return res.status(404).json({ message: 'Petty cash not found' })
        }

        await result.update({
            code: code ?? result.code,
            name: name ?? result.name,
            branch: branch ?? result.branch,
            department: department ?? result.department,
            fund: fund ?? result.fund
        })

        return res.status(200).json({
            message: 'Updated Successfully',
            data: result
        })
    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}