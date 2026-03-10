import Courier from '../model/courierModel.js'

export const getCourier = async(req,res)=>{
    try {
        const result = await Courier.findAll()
        res.status(200).json(result)
    } catch (err) {
        console.error(err)
        res.status(500).json({message:'Internal Server Error.', error:err.message})
    }
}

export const getCourierById = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await Courier.findByPk(id)
        if(!result){
            return res.status(404).json({message:'Courier not found'})
        }

        res.status(200).json(result)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}


export const postCourier = async(req,res)=>{
    try {
        const {courier} = req.body
        if(!courier){
            return res.status(400).json({message:'Courier is required.'})
        }
        const result = await Courier.create({
            courier
        })
        res.status(201).json({
            message:'Created Successfully',
            data:result
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({message:'Internal Server Error.', error:err.message})
    }
}


export const updateCourier = async(req,res)=>{
    try {
        const {courier} = req.body
        const {id} = req.params

        const result = await Courier.findByPk(id)
        if(!result){
            return res.status(404).json('Courier not found.')
        }

        result.courier = courier ?? result.courier
        await result.save()

        res.status(200).json({
            message:'Updated Successfully',
            data:result
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({message:'Internal Server Error.', error:err.message})
    }
}