const { experianceModel } = require('../models/experiance');


async function createExperianceDetails(req, res){
    let responseData;
    try {
        const {companyName,companyLogo, companyDescription, startDate, endDate, present, role, location, roleDescription } = req.body;
        const experianceDetails = await experianceModel.create({ companyName,companyLogo, companyDescription, startDate, endDate, present, role, location, roleDescription });
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
               experiance_details :experianceDetails
            }
        }
        return res.status(responseData.meta.code).json(responseData);  
    } catch (error) {
        console.log(error);
        responseData = {
            meta: {
                code: 200,
                success: false,
                message: 'Something went wrong',
            },
        };
        return res.status(responseData.meta.code).json(responseData);
    }
}


async function getExperianceDetails(req, res) {
    let responseData;
    try {
        const experiance = await experianceModel.find()
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
               all_experiance :experiance
            }
        }
        return res.status(responseData.meta.code).json(responseData);
        
    } catch (error) {
        console.log(error);
        responseData = {
            meta: {
                code: 200,
                success: false,
                message: 'Something went wrong',
            },
        };
        return res.status(responseData.meta.code).json(responseData);
    }
}


module.exports = {
    createExperianceDetails,
    getExperianceDetails,
}