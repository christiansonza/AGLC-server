import express from 'express';
import {
  getBooking,
  getBookingById,
  createBooking,
  updateBooking
} from '../controller/bookingController.js';
import {
  getBookingDetails,
  getBookingDetailsById,
  createBookingDetails,
  updateBookingDetails
} from '../controller/bookingDetailsController.js';
import middleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Booking routes
router.get('/', middleware, getBooking);
router.get('/:id', middleware, getBookingById);
router.post('/', middleware, createBooking);
router.put('/:id', middleware, updateBooking);

// Booking Details routes
router.get('/:id/details', getBookingDetails); 
router.get('/:id/details/:detailId', getBookingDetailsById); 
router.post('/:id/details', createBookingDetails); 
router.put('/:id/details/:detailId', updateBookingDetails); 

export default router;