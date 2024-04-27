import { SESv2Client, SendEmailCommand, ListContactListsCommand } from "@aws-sdk/client-sesv2";

const config = {
    region: "ap-south-1", // e.g., 'us-east-1'
    credentials: {
        accessKeyId: "----",
        secretAccessKey: "----",
    }
};


// a client can be shared by different commands.
const client = new SESv2Client(config);

(async () => {
    try {

        const input = { // SendEmailRequest
            FromEmailAddress: "reman.sharma@easyres.in",
            Destination: { // Destination
                ToAddresses: [ // EmailAddressList
                    "reman.sharma@easyres.in",
                ],
                CcAddresses: [
                    "reman.sharma@easyres.in",
                ],
                BccAddresses: [
                    "reman.sharma@easyres.in",
                ],
            },
            ReplyToAddresses: [
                "reman.sharma@easyres.in",
            ],
            Content: { // EmailContent
                Simple: { // Message
                    Subject: { // Content
                        Data: "subject-is-here", // required
                        Charset: "UTF-8"
                    },
                    Body: { // Body
                        Text: {
                            Data: "Hello everyone. I am the body", // required
                            Charset: "UTF-8"
                        },
                        // Html: {
                        //     Data: "STRING_VALUE", // required
                        //     Charset: "STRING_VALUE",
                        // },
                    },
                    // Headers: [ // MessageHeaderList
                    //     { // MessageHeader
                    //         Name: "STRING_VALUE", // required
                    //         Value: "STRING_VALUE", // required
                    //     },
                    // ],
                },
                // Raw: { // RawMessage
                //     Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
                // },
                // Template: { // Template
                //     TemplateName: "STRING_VALUE",
                //     TemplateArn: "STRING_VALUE",
                //     TemplateData: "STRING_VALUE",
                //     Headers: [
                //         {
                //             Name: "STRING_VALUE", // required
                //             Value: "STRING_VALUE", // required
                //         },
                //     ],
                // },
            },
            EmailTags: [ // MessageTagList
                { // MessageTag
                    Name: "STRING_VALUE", // required
                    Value: "STRING_VALUE", // required
                },
            ]
        };
        const command = new SendEmailCommand(input);
        const response = await client.send(command);
        console.log(response); // successful response


    } catch (err) {
        console.error(err);
    }
});



