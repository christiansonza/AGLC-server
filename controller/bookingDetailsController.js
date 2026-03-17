import BookingDetails from '../model/bookingDetailsModel.js'

export const getBookingDetails = async (req, res) => {
  try {
    const { id: bookingId } = req.params;
    const result = await BookingDetails.findAll({
      where: { bookingId } 
    });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export const getBookingDetailsById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await BookingDetails.findByPk(id)

    if (!result) {
      return res.status(404).json({ message: 'Booking Details not found.' })
    }

    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error', error: error.message })
  }
}
export const createBookingDetails = async (req, res) => {
  try {
    const { id: bookingId } = req.params; 
    const { voy, courier, broker, vesselName, voyNo, no, shipper, destinationName } = req.body;

    if (!voy || !courier || !broker || !vesselName || !voyNo || !no || !shipper || !destinationName) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const result = await BookingDetails.create({
      bookingId, 
      voy,
      courier,
      broker,
      vesselName,
      voyNo,
      no,
      shipper,
      destinationName
    });

    res.status(201).json({
      message: 'Created Successfully.',
      ...result.toJSON() 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
export const updateBookingDetails = async (req, res) => {
  try {
    const { id } = req.params
    const { voy, courier, broker, vesselName, voyNo, no, shipper, destinationName } = req.body

    const result = await BookingDetails.findByPk(id)
    if (!result) {
      return res.status(404).json({ message: 'Booking Detail not found.' })
    }

    await result.update({
      voy: voy ?? result.voy,
      courier: courier ?? result.courier,
      broker: broker ?? result.broker,
      vesselName: vesselName ?? result.vesselName,
      voyNo: voyNo ?? result.voyNo, 
      no: no ?? result.no,
      shipper: shipper ?? result.shipper,
      destinationName: destinationName ?? result.destinationName
    })

    res.status(200).json({ message: 'Updated successfully.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error', error: error.message })
  }
}