import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const config = {
    region: "ap-south-1", // e.g., 'us-east-1'
    credentials: {
        accessKeyId: "----",
        secretAccessKey: "----",
    }
};

// a client can be shared by different commands.
const client = new SESv2Client(config);

let emailSubject = `Test Email`;

let emailBody = 
`Dear Team,
This is a test email.

Thanks,
Reman Sharma
`;

(async () => {
    try {

        const input = { // SendEmailRequest
            FromEmailAddress: "reman.sharma@easyres.in",
            Destination: { // Destination
                ToAddresses: [ // EmailAddressList
                    "reman.sharma@easyres.in",
                ],
                CcAddresses: [],
                BccAddresses: [],
            },
            ReplyToAddresses: [
                "reman.sharma@easyres.in",
            ],
            Content: { // EmailContent
                Simple: { // Message
                    Subject: { // Content
                        Data: emailSubject, // required
                        Charset: "UTF-8"
                    },
                    Body: { // Body
                        Text: {
                            Data: emailBody, // required
                            Charset: "UTF-8"
                        },
                    }
                    
                }
            },
            EmailTags: []
        };

        const command = new SendEmailCommand(input);
        const response = await client.send(command);
        console.log(`Message has been sent successfully: `, response); // successful response


    } catch (err) {
        console.error(err);
    }
})();



