import Vessel from '../model/vesselModel.js'


export const getVessel = async(req,res)=>{
    try {
        const result = await Vessel.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}

export const getVesselById = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await Vessel.findByPk(id)
        if(!result){
            return res.status(404).json({message:'Vessel not found.'})
        }

        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}


export const createVessel = async (req, res) => {
  try {
    const { vesselName } = req.body

    if (!vesselName) {
      return res.status(400).json({ message: 'Vessel name is required.' })
    }

    const newVessel = await Vessel.create({ vesselName })
    res.status(201).json({ message: 'Created Successfully', data: newVessel })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error', error: error.message })
  }
}

export const updateVessel = async(req,res)=>{
    try {
        const {id} = req.params
        const {vesselName} = req.body

        const result = await Vessel.findByPk(id)
        if(!result){
            return res.status(404).json({message:'Vessel name not found.'})
        }

        await result.update({
            vesselName: vesselName ?? result.vesselName
        })

        res.status(200).json({message:'Updated Successfully'})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Internal Server Error', error:error.message})
    }
}