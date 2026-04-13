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

import {
  fetchJournalBooking,
  fetchJournalBookingById,
  createJournalBooking,
  putJournalBooking,
  fetchJournalBookingAll
} from '../controller/journalBookingController.js';

import middleware from '../middleware/authMiddleware.js';

const router = express.Router();

// =========================
router.get('/journals', middleware, fetchJournalBookingAll);

// Booking 
router.get('/', middleware, getBooking);
router.get('/:id', middleware, getBookingById);
router.post('/', middleware, createBooking);
router.put('/:id', middleware, updateBooking);

// =========================
// Booking Details 
router.get('/:id/details', middleware, getBookingDetails);
router.get('/:id/details/:detailId', middleware, getBookingDetailsById);
router.post('/:id/details', middleware, createBookingDetails);
router.put('/:id/details/:detailId', middleware, updateBookingDetails);

// =========================
// Journal Booking 
// Fetch all journal entries for all bookings

router.get('/:id/journals', middleware, fetchJournalBooking);
router.get('/:id/journals/:journalId', middleware, fetchJournalBookingById);
router.post('/:id/journals', middleware, createJournalBooking);
router.put('/:id/journals/:journalId', middleware, putJournalBooking);

export default router;