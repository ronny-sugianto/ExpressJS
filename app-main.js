import dotenv from 'dotenv';
import server from './app-server';
import conn from './app-db';


dotenv.config();
if (process.env.APP_NAME) {
    conn.authenticate().then(() => {
        server.listen(process.env.APP_PORT ?? 3898, '0.0.0.0', function () {
            if (server.listening) {
                console.log('APP-INFO [SERVER] : Server is listening ');
            }
        });
    }).catch((err) => {
        console.log('APP-ERROR [DB-FAILED] : ' + err);
    });
} else {
    process.exit(1);
}
