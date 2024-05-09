import fs from 'fs';
import { parseStringPromise } from 'xml2js';

const xmlData = fs.readFileSync('response.xml', 'utf8');

const parsedData = await parseStringPromise(xmlData);

const soap_body = parsedData['SOAP:Envelope']['SOAP:Body'];

console.log(soap_body[0]['air:LowFareSearchRsp'][0]);



// Output the parsed data (JavaScript object)
// 'air:FlightDetailsList'
console.log(soap_body[0]['air:LowFareSearchRsp'][0]['air:FlightDetailsList'][0]['air:FlightDetails']);