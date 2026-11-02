import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app =express();
const PORT = process.env.PORT || 3000;

//Middleware para interpretar JSON en req.doby
app.use(express.json());

//Ruta de prueba inicial
app.get('/',(req,res) => {
    res.json({message: '¡servidor base Express funcionando!' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
