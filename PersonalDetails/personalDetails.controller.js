const { memberModel } = require('../models/user');

async function memberDetails(req, res){
    let responseData;
    try {
        const { photo, fullName, email, phoneNumber, designations, aboutMe, linkedin, github,githubName,linkedinName} = req.body;
        const personDetails = await memberModel.create({photo, fullName, email, phoneNumber, designations, aboutMe, linkedin, github, is_admin: true,githubName,linkedinName});
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
        const UserDetails = await memberModel.findOne({_id : "65841e50efa22b662ac436ab"});
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