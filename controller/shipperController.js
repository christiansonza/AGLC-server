import Shipper from '../model/shipperModel.js'

export const getShipper = async(req,res)=>{
    try {
        const result = await Shipper.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}


export const getShipperById = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await Shipper.findByPk(id)

        if(!result) {
            return res.status(404).json({message:'Shipper not found.'})
        }
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}


export const createShipper = async(req,res)=>{
    try {
        const {shipper} = req.body

        if(!shipper){
            return res.status(400).json({message:'Shipper is required.'})
        }

        const result = await Shipper.create({shipper})
        res.status(201).json({
            message:'Created Successfully.',
            data:result
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}


export const updateShipper = async(req,res)=>{
    try {
        const {id} = req.params
        const {shipper} = req.body

        const result = await Shipper.findByPk(id)
        if(!result){
            return res.status(404).json({message:'Shipper not found.'})
        }

        await result.update({
            shipper: shipper ?? result.shipper
        })

        res.status(200).json({message:'Updated Successfully'})

    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}