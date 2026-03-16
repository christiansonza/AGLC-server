import Destination from '../model/destinationModel.js'

export const getDestination = async(req,res) =>{
    try {
        const result = await Destination.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}



export const getDestinationById = async(req,res) =>{
    try {
        const {id} = req.params
        const result = await Destination.findByPk(id)

        if(!result){
            return res.status(404).json({message:'Destination not found.'})
        }

        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}



export const createDestination = async(req,res) =>{
    try {
        const {destination} = req.body
        if(!destination){
            return res.status(400).json({message:'Destination is required.'})
        }
        const result = await Destination.create({destination})
        res.status(201).json({
            message:'Created Successfully.',
            data:result
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}



export const updateDestination = async(req,res) =>{
    try {
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}