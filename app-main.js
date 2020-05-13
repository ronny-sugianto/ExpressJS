import dotenv from 'dotenv';
import server from './app-server';
import conn from './app-db';


dotenv.config();

conn.authenticate().then(() => {
    server.listen(9000, '0.0.0.0', function () {
        if (server.listening) {
            console.log('APP-INFO [SERVER] : Server is listening ');
        }
    });
}).catch((err) => {
    console.log('APP-ERROR [DB-FAILED] : ' + err);
});