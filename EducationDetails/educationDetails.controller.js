const { educationModel } = require('../models/eduction');


async function createEducationDetails(req, res){
    let responseData;
    try {
        const { schoolName, startDate, endDate, schoolPhoto, cgpa, location,board, branch } = req.body;
        const educationDetails = await educationModel.create({schoolName, startDate, endDate, schoolPhoto, cgpa, location,board, branch});
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
                education_details : educationDetails
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


async function getEducationDetails(req, res){
    let responseData; 
    try {
        const educationDetails = await educationModel.find();
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
                education_details : educationDetails
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
    createEducationDetails,
    getEducationDetails,
}