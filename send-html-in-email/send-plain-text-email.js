import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";


(async () => {
    try {

        // variables to be used in the email
        const config = {
            region: "----", // e.g., 'us-east-1'
            credentials: {
                accessKeyId: "----",
                secretAccessKey: "----",
            }
        };

        let FromEmailAddress = "";

        let ToAddresses = [];
        let CcAddresses = [];
        let BccAddresses = [];

        let subject = "Test Email";
        let body = "Hello everyone. I am the body";
        // variables to be used in the email


        
        // a client can be shared by different commands.
        const client = new SESv2Client(config);

        // functioning part starts from here
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
        console.log(`Message has been sent successfully: `, response); // successful response


    } catch (err) {
        console.error(err);
    }
})();



