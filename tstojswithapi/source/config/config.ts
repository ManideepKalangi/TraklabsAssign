import dotenv from 'dotenv';

dotenv.config();

const Server_Port=process.env.PORT || 1337;
const Server_HostName=process.env.HOST || 'localhost';

const Server={
    hostname: Server_HostName,
    port: Server_Port
}

const config={
    server: Server
}

export default config;