const mongoose = require('mongoose');

const dbconnect = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect("mongodb+srv://impactoambientaltrabajodegrado:Ambiental2025@cluster0.y3zin.mongodb.net/Ambiental", {});
        console.log('Base de datos online');
    } catch (err) {
        console.error('Error al conectar a la base de datos', err);
        throw err;
    }
}

module.exports = dbconnect;


