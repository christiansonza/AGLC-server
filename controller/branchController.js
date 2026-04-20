import Branch from '../model/branchModel.js'

export const getBranch =  async(req,res)=>{
    try {
        const result = await Branch.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error: error.message})
    }
}

export const getBranchById =  async(req,res)=>{
    try {
        const {id} = req.params
        const result = await Branch.findByPk(id)

        if(!result){
            return res.status(404).json({message:'Branch not found.'})
        }

        res.status(200).json(result)

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error: error.message})
    }
}

export const createBranch =  async(req,res)=>{
    try {
        const {code, name, isActive} = req.body

        if(!code || !name){
            return res.status(400).json({message:'Code and Name are required.'})
        }

        const result = await Branch.create({
            code,
            name,
            isActive
        })        

        res.status(201).json({message:'Created Successfully', data:result})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error: error.message})
    }
}

export const updateBranch =  async(req,res)=>{
    try {
        const {id}= req.params
        const {code, name, isActive}= req.body

        const result = await Branch.findByPk(id)

        if(!result){
            return res.status(404).json({message:'Branch not found.'})
        }

        await result.update({
            code : code ?? result.code,
            name: name ?? result.name,
            isActive : isActive ?? result.isActive
        })

        res.status(200).json({message:'Updated Successfully.', data:result})

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error: error.message})
    }
}