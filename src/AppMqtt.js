import  mqtt from 'mqtt';
import fs from 'fs';
import path from 'path';
//var KEY = fs.readFileSync(path.join(__dirname, '/tls-key.pem'))
//var CERT = fs.readFileSync(path.join(__dirname, '/tls-cert.pem'))
const TRUSTED_CA_LIST = fs.readFileSync(path.join(__dirname, '/ca.crt'))

const PORT = 8883
const HOST = "34.121.135.157"

const options = {
  host: HOST,
  port: PORT,
  //key: KEY,
  //cert: CERT,
  rejectUnauthorized: false,
  // The CA list will be used to determine if server is authorized
  ca: TRUSTED_CA_LIST,
  protocol: 'tls'
}
const client = mqtt.connect(options);
export default client