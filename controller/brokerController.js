import Broker from '../model/brokerModel.js'

export const getBroker = async(req,res)=>{
    try {
        const result = await Broker.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}

export const getBrokerById = async(req,res)=>{
    try {
        const {id} = req.params

        const result = await Broker.findByPk(id)
        if(!result){
            return res.status(404).json({message:'Broker not found.'})
        }

        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}

export const postBroker = async(req,res)=>{
    try {
        const {broker} = req.body
        
        if(!broker){
            return res.status(400).json({message:'Broker is required.'})
        }
        const result = await Broker.create({
            broker
        })

        res.status(201).json({message:'Created Successfully.', data: result})

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}

export const updateBroker = async(req,res)=>{
    try {
        const {id} = req.params
        const {broker} = req.body

        const result = await Broker.findByPk(id)
        if(!result){
            return res.status(404).json({message:'Broker not found.'})
        }
        result.broker = broker ?? result.broker
        await result.save()

        res.status(200).json({message:'Updated Successfully', data:result})

    } catch (error) {
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}