import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import {sequelize, dbConnect} from './config/conn.js'
import cookieParser from 'cookie-parser'

//routers
import userRouter from './router/userRouter.js'
import companyRouter from './router/companyRouter.js'
import employeeRouter from './router/employeeRouter.js'
import customerRouter from './router/customerRouter.js'
import vendorRouter from './router/vendorRouter.js'
import bookingRouter from './router/bookingRouter.js'
import accountTitleRouter from './router/accountTitleRouter.js'
import subAccountTitleRouter from './router/subAccountTitleRouter.js'
import departmentRouter from './router/departmentRouter.js'
import paymentRequestRouter from './router/paymentRequestRouter.js'
import paymentRequestDetailRouter from './router/paymentRequestDetailRouter.js'
import chargeRouter from './router/chargeRouter.js'
import pettyCashRelease from './router/pettyCashReleaseRouter.js'
import affiliatesRouter from './router/affiliatesRouter.js'
import localGovernmentAgency from './router/localGovernmentAgencyRouter.js'
import banks from './router/banksRouter.js'
import agents from './router/agentsRouter.js'
import journalEntry from './router/journalEntryRouter.js'
import pettyCashLiquidation from './router/pettyCashLiquidationRouter.js'
import courier from './router/courierRouter.js'
import broker from './router/brokerRouter.js'
import vessel from './router/vesselRouter.js'

//models
import './model/userModel.js'
import './model/companyModel.js'
import './model/employeeModel.js'
import './model/customerModel.js'
import './model/vendorModel.js'
import './model/bookingModel.js'
import './model/departmentModel.js'
import './model/paymentRequestModel.js'
import './model/paymentRequestDetailModel.js'
import './model/chargeModel.js'
import './model/index.js'
import './model/pettyCashReleaseModel.js'
import './model/affiliateModel.js'
import './model/localGovernmentAgencyModel.js'
import './model/banksModel.js'
import './model/agentsModel.js'
import './model/journalEntryModel.js'
import './model/pettyCashLiquidationModel.js'
import './model/courierModel.js'
import './model/brokerModel.js'
import './model/vesselModel.js'


const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
}));

//Routes
app.use('/users',userRouter)
app.use('/company',companyRouter)
app.use('/employee',employeeRouter)
app.use('/customer',customerRouter)
app.use('/vendor',vendorRouter)
app.use('/booking',bookingRouter)
app.use('/account',accountTitleRouter)
app.use('/subAccount',subAccountTitleRouter)
app.use('/department',departmentRouter)
app.use('/paymentRequest',paymentRequestRouter)
app.use('/paymentRequestDetail',paymentRequestDetailRouter)
app.use('/charge',chargeRouter)
app.use('/pettyCashRelease',pettyCashRelease)
app.use('/affiliates',affiliatesRouter)
app.use('/localGovernmentAgency',localGovernmentAgency)
app.use('/banks',banks)
app.use('/agents',agents)
app.use('/journalEntry', journalEntry)
app.use('/pettyCashLiquidation', pettyCashLiquidation)
app.use('/courier', courier)
app.use('/broker', broker)
app.use('/vessel', vessel)


//Connection
const startServer = async()=>{
    try {
        await dbConnect()
        await sequelize.sync()
        app.listen(PORT)
    } catch (error) {
        console.log(error)
    }
}

startServer()