const { skillsModel } = require('../models/skills');

async function skillsDetails(req, res){
    let responseData;
    try {
        const {skillPhoto,skillName, skillDescription, projectDescription,skillType } = req.body;
        const skillsDetails = await skillsModel.create({skillPhoto,skillName, skillDescription, projectDescription,skillType});
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
                skills_details : skillsDetails
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

async function getSkillDetails(req, res){
    let responseData;
    try {
        const Skills = await skillsModel.find();
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
                skills_details : Skills
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
    skillsDetails,
    getSkillDetails,
}