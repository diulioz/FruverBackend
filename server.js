import express from 'express';
import router from './Routes/routes.js';
import { sequelize } from './Database/database.js';

//Crear Instancia
const app = express();

//Montando el enrutador en la app principal
app.use(express.json());
app.use(router);
app.set('port',3000);

//Test a la Base de datos
const testDb = async() => {
    try {
        await sequelize.authenticate();
        console.log('Conexion realizada con éxito');
        //Correr servicio por el puerto 3000
        app.listen(app.get('port'),()=>{
            console.log(`Servidor Escuchando por el puerto ${app.get('port')}`);
        });
    } catch (error) {
        console.error(`Error al realizar conexión ${error}`);
    }
}

testDb();