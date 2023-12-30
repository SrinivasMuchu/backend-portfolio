const nodemailer = require('nodemailer');
const { contactFormModel } = require('../models/contactForm');


const transporter = nodemailer.createTransport({
   
    service: 'gmail',
    auth: {
        user: 'srinivasmuchu14@gmail.com',
        pass: 'gxtfqumjokyqljwy',
    },
    timeout: 100000,
});

async function createGetInTouch(req, res) {
    let responseData;
    try {
        // Create a new message using the model
        const { clientName,
            clientEmail,
            clientPhoneNumber,
            clientMessage } = req.body;

        // Save the message to MongoDB
        const savedMessage = await contactFormModel.create({clientName,
            clientEmail,
            clientPhoneNumber,
            clientMessage});

        // Send an email
        const userMailOptions = {
            from: 'srinivasmuchu14@gmail.com',
            to: clientEmail,
            subject: 'Your Message Received',
            html: `<html>

            <body>
                <div style="
                              width: 100%;
                              height:60vh;
                              
                              background-image: url('https://portfolio-ks.s3.ap-south-1.amazonaws.com/email-bg.jpg');
                              background-size: cover;
                            ">
            
                    <table style="width: 100%;height:60vh; background-color: rgba(0, 19, 37, 0.5);">
                        <!-- <tr style="text-align: center;;">
                                    
                                      <span style="font-size: 75px; color: white; font-weight: 800;">
                                        THANK
                                      </span>
                                      <span style="font-size: 75px; color: blue;">YOU!</span>
                                    
                                  </tr> -->
                        <tr>
                            <td style="text-align: center;">
                                <span style="font-size: 60px; color: white; font-weight: 500;">
                                    THANK
                                </span>
                                <span style="font-size: 60px;font-weight: 500; color:  blue;">YOU!</span>
                               
                            </td>
                        </tr>
                        <tr>
                            <td style="
                                width: 60%;
                                font-size: 25px;
                                text-align: left;
                                word-break: break-all;
                                color: white;
                                padding-left: 150px;
                              ">
                                <span>Hope you liked my portfolio.</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="
                                width: 60%;
                                font-size: 25px;
                                text-align: left;
                                word-break: break-all;
                                color: white;
                                padding-left: 150px;
                                padding-right: 150px;
                              ">
                                <span>
                                    Your getting this email to inform you that we received your
                                    details that you have filled in get in touch form on my
                                    port-folio.
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td style="
                                width: 60%;
                                font-size: 25px;
                                text-align: left;
                                word-break: break-all;
                                color: white;
                                padding-left: 150px;
                              ">
                                <span>I'll reach you out.</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="
                                width: 60%;
                                font-size: 25px;
                                text-align: left;
                                word-break: break-all;
                                color: white;
                                padding-left: 150px;
                              ">
                                <span>Thank you so much.</span>
                            </td>
                        </tr>
            
                        <tr>
                            <td style="text-align: center;">
                                <span style="font-size: 50px; color: white;">${clientName}</span>
                            </td>
                        </tr>
                    </table>
            
            
                </div>
            </body>
            
            </html>
          
          `,
          };
      
          transporter.sendMail(userMailOptions, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Email sent to user: ' + info.response);
            }
          });
      
          // Send an email to abc@mail.com
          const adminMailOptions = {
            from: 'srinivasmuchu14@gmail.com',
            to: 'srinivasmuchu14@gmail.com',
            subject: `New Message Received from ${clientEmail}`,
            html: `<html>

            <body>
                <div style="
                              width: 100%;
                             
                              
                              background-image: url('https://portfolio-ks.s3.ap-south-1.amazonaws.com/email-bg.jpg');
                              background-size: cover;
                            ">
            
                    <table style="width: 100%;height:50vh; background-color: rgba(0, 19, 37, 0.5);">
                       
                        <tr>
                            <td style="text-align: center;">
                                <span style="font-size: 60px; color: white; font-weight: 500;">
                                    RECIEVED
                                </span>
                                <span style="font-size: 60px;font-weight: 500; color:  blue;">DETAILS</span>
                                
                            </td>
                        </tr>
                        <tr>
                            <td style="
                                width: 60%;
                                font-size: 25px;
                                text-align: left;
                                word-break: break-all;
                                color: white;
                                padding-left: 150px;
                              ">
                                <span>Name:${clientName}</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="
                                width: 60%;
                                font-size: 25px;
                                text-align: left;
                                word-break: break-all;
                                color: white;
                                padding-left: 150px;
                                padding-right: 150px;
                              ">
                                <span>
                                Message:${clientMessage}
                                    
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td style="
                                width: 60%;
                                font-size: 25px;
                                text-align: left;
                                word-break: break-all;
                                color: white;
                                padding-left: 150px;
                              ">
                                <span>Phone Number: ${clientPhoneNumber}</span>
                            </td>
                        </tr>
  
                    </table>
            
            
                </div>
            </body>
            
            </html>`,
          };
      
          transporter.sendMail(adminMailOptions, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Email sent to admin: ' + info.response);
            }
          });
          responseData = {
            meta: {
                code: 200,
                success: true,
                message: 'Succesfull.',
            },
           
        }
        return res.status(responseData.meta.code).json(responseData);  
    } catch (error) {
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
    createGetInTouch,
}
