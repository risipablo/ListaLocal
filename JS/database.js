// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://pablorisi22:pbwRHaKLohJFzQsR@borrador.fgz4d3c.mongodb.net/';
// const dbName = 'pablorisi22';
// const collectionName = 'Listalocal';

// async function conectarDB() {
//     const cliente = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await cliente.connect();
//         console.log('Conexión establecida con la base de datos');
//         const db = cliente.db(dbName);
//         const collection = db.collection(collectionName);
//         return collection; // Devolver la colección para usarla en otros métodos
//     } catch (error) {
//         console.error('Error al conectar con la base de datos:', error);
//     }
// }

// module.exports = conectarDB;
