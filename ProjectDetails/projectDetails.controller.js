const { projectModel } = require("../models/projects");

async function createProjectDetails(req, res){
    let responseData;
    try {
        const { projectName,projectShortDescription, projectDescription, projectPhoto,projectVideo, startDate, endDate, techStack, demoLink, repoLink, present} = req.body;
        const projectDetails = await projectModel.create({projectName, projectDescription,projectVideo,projectShortDescription, projectPhoto, startDate, endDate, techStack, demoLink, repoLink, present});
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
               project_details :projectDetails
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

async function getProjectDetails(req, res){
    let responseData;
    try {
        const project = await projectModel.find()
        responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
            data : {
               all_project_details :project
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
    createProjectDetails,
    getProjectDetails,
}