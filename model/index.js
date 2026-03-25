import AccountTitle from '../model/accountTitleModel.js'
import SubAccountTitle from '../model/subAccountTitleModel.js'

import Department from '../model/departmentModel.js'
import Vendor from '../model/vendorModel.js'
import PaymentRequest from '../model/paymentRequestModel.js'

import Booking from '../model/bookingModel.js'
import Charge from '../model/chargeModel.js'
import PaymentRequestDetail from '../model/paymentRequestDetailModel.js'

import Employee from './employeeModel.js'
import PettyCashRelease from './pettyCashReleaseModel.js'

import JournalEntry from './journalEntryModel.js'
import PettyCashLiquidation from './pettyCashLiquidationModel.js'
import PettyCashLiquidationDetail from './pettyCashLiquidationDetail.js'

import BookingDetails from '../model/bookingDetailsModel.js'; 

import JournalEntryBooking from './journalEntryBookingModel.js'


//account, subaccount
SubAccountTitle.belongsTo(AccountTitle, { foreignKey: 'accountId', as: 'account' });
AccountTitle.hasMany(SubAccountTitle, { foreignKey: 'accountId', as: 'subAccounts' });


//payment request, paymentrequest detail
PaymentRequest.belongsTo(Vendor, { foreignKey: 'vendorId', as: 'vendor' });
Vendor.hasMany(PaymentRequest, { foreignKey: 'vendorId', as: 'paymentRequests' });

PaymentRequest.belongsTo(Department, { foreignKey: 'costCenterId', as: 'department' });
Department.hasMany(PaymentRequest, { foreignKey: 'costCenterId', as: 'paymentRequests' });

PaymentRequestDetail.belongsTo(PaymentRequest, {foreignKey: 'paymentRequestId', as: 'paymentRequest'})
PaymentRequest.hasMany(PaymentRequestDetail, {foreignKey: 'paymentRequestId', as: 'paymentRequestDetails'})

PaymentRequestDetail.belongsTo(Booking, {foreignKey: 'bookingId', as: 'booking'})
Booking.hasMany(PaymentRequestDetail, {foreignKey: 'bookingId', as:'paymentRequestDetails'})

PaymentRequestDetail.belongsTo(Charge, {foreignKey: 'chargeId', as: 'charge'})
Charge.hasMany(PaymentRequestDetail, {foreignKey: 'chargeId', as: 'paymentRequestDetails'})

PettyCashRelease.belongsTo(PaymentRequest, {foreignKey:'paymentRequestId', as: 'paymentRequest'})
PaymentRequest.hasMany(PettyCashRelease, {foreignKey:'paymentRequestId', as:'pettyCash'})

PettyCashRelease.belongsTo(Employee, {foreignKey:'receivedById', as:'employee'})
Employee.hasMany(PettyCashRelease, {foreignKey:'receivedById', as:'pettyCash'})


// journal
JournalEntry.belongsTo(PettyCashRelease, {foreignKey:'belongsToId', as:'pettyCash'})
PettyCashRelease.hasMany(JournalEntry, {foreignKey:'belongsToId', as:'journalEntries'})

JournalEntry.belongsTo(AccountTitle, {foreignKey:'accountTitleId', as:'account'})
AccountTitle.hasMany(JournalEntry, {foreignKey:'accountTitleId', as:'journalEntries'})

JournalEntry.belongsTo(SubAccountTitle, {foreignKey:'subAccountTitleId', as:'subAccount'})
SubAccountTitle.hasMany(JournalEntry, {foreignKey:'subAccountTitleId', as:'journalEntries'})

JournalEntry.belongsTo(Department, {foreignKey:'departmentId', as:'department'})
Department.hasMany(JournalEntry, {foreignKey:'departmentId', as:'journalEntries'})


// liquidation
PettyCashLiquidation.belongsTo(PaymentRequest, {foreignKey: "paymentRequestId",as: "paymentRequest"});
PaymentRequest.hasMany(PettyCashLiquidation, {foreignKey: "paymentRequestId", as: "pettyCashLiquidation"});

//liquidation detail
PettyCashLiquidationDetail.belongsTo(PettyCashLiquidation, {foreignKey: 'pettyCashLiquidationId', as:'pettyCashLiquidation'})
PettyCashLiquidation.hasMany(PettyCashLiquidationDetail, {foreignKey:'pettyCashLiquidationId', as:'pettyCashLiquidationDetail'})

PettyCashLiquidationDetail.belongsTo(PaymentRequestDetail, {foreignKey:'paymentRequestDetailId',as:'paymentRequestDetail'})
PaymentRequestDetail.hasMany(PettyCashLiquidationDetail, {foreignKey:'paymentRequestDetailId', as:'pettyCashLiquidationDetail'})

BookingDetails.belongsTo(Booking, { foreignKey: 'bookingId', as: 'booking' });
Booking.hasMany(BookingDetails, { foreignKey: 'bookingId', as: 'bookingDetails' });


// Booking JournalEntryBooking
JournalEntryBooking.belongsTo(Booking, {
  foreignKey: 'bookingId',
  as: 'booking'
});

Booking.hasMany(JournalEntryBooking, {
  foreignKey: 'bookingId',
  as: 'journalEntryBookings'
});

// Account
JournalEntryBooking.belongsTo(AccountTitle, {
  foreignKey: 'accountTitleId',
  as: 'account'
});

AccountTitle.hasMany(JournalEntryBooking, {
  foreignKey: 'accountTitleId',
  as: 'journalEntryBookings'
});

// SubAccount
JournalEntryBooking.belongsTo(SubAccountTitle, {
  foreignKey: 'subAccountTitleId',
  as: 'subAccount'
});

SubAccountTitle.hasMany(JournalEntryBooking, {
  foreignKey: 'subAccountTitleId',
  as: 'journalEntryBookings'
});

// Department
JournalEntryBooking.belongsTo(Department, {
  foreignKey: 'departmentId',
  as: 'department'
});

Department.hasMany(JournalEntryBooking, {
  foreignKey: 'departmentId',
  as: 'journalEntryBookings'
});