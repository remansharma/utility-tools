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

        // variables to be used in the email
        let FromEmailAddress = "";

        let ToAddresses = [];
        let CcAddresses = [];
        let BccAddresses = [];

        let subject = "";
        let body = "Hello everyone. I am the body";
        // variables to be used in the email


        const input = { // SendEmailRequest
            FromEmailAddress: FromEmailAddress,
            Destination: { // Destination
                ToAddresses: [ // EmailAddressList
                    ...ToAddresses,
                ],
                CcAddresses: [
                    ...CcAddresses,
                ],
                BccAddresses: [
                    ...BccAddresses,
                ],
            },
            ReplyToAddresses: [],
            Content: { // EmailContent
                Simple: { // Message
                    Subject: { // Content
                        Data: subject, // required
                        Charset: "UTF-8"
                    },
                    Body: { // Body
                        Text: {
                            Data: body, // required
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



