import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

// for __dirname
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));






(async () => {
    try {

        /**
         * 
         * html template will be read by handlebars
         * then the html template will be passed to the email body
         * 
         */

        // read the html template
        let file_path = path.join(__dirname, './template.html')
        let source = await fs.readFileSync(file_path, 'utf8');

        // variables to be used in the email
        const config = {
            region: "----", // e.g., 'us-east-1'
            credentials: {
                accessKeyId: "----",
                secretAccessKey: "----"
            }
        };

        // compile the source
        let template = Handlebars.compile(source);

        var data = {
            "name": "Alan", "hometown": "Somewhere, TX",
            "kids": [{ "name": "Jimmy", "age": "12" }, { "name": "Sally", "age": "4" }]
        };

        var result = template(data);


        let FromEmailAddress = '';

        let ToAddresses = [''];
        let CcAddresses = [];
        let BccAddresses = [];

        let subject = "Test Email";
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
                        // Text: {
                        //     Data: body, // required
                        //     Charset: "UTF-8"
                        // },
                        Html: {
                            Data: result, // required
                            Charset: "UTF-8",
                        },
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

        console.log(`Message has been sent successfully: `, response); // successful response


    } catch (err) {
        console.error(err);
    }
})();



