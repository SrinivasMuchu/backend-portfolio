const { memberModel } = require('../models/user');

async function memberDetails(req, res){
    let responseData;
    try {
        const { photo, fullName, email, phoneNumber, designations, aboutMe, linkedin, github} = req.body;
        const personDetails = await memberModel.create({photo, fullName, email, phoneNumber, designations, aboutMe, linkedin, github, is_admin: true});
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
                person_details : personDetails
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


async function getUserDetails(req, res){
    let responseData;
    try {
        const UserDetails = await memberModel.findOne({_id : "658403a41f42c91227182271"});
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
                user_details : UserDetails
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
    memberDetails,
    getUserDetails,
}