import 'dotenv/config';
import express from 'express';

const  app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.info(`El Servidor esta corriendo en http://localhost:${PORT}`);
});


const estudiantes = [
{
    nombre: "Alejandro García",
    correoElectronico: "alejandro.garcia@email.com",
    nota: 8.5
},
{
    nombre: "Beatriz López",
    correoElectronico: "b.lopez99@email.com",
    nota: 9.2
},
{
    nombre: "Carlos Mendoza",
    correoElectronico: "mendoza.carlos@email.com",
    nota: 7.8
},
{
    nombre: "Diana Martínez",
    correoElectronico: "diana.mtz@email.com",
    nota: 9.5
},
{
    nombre: "Eduardo Torres",
    correoElectronico: "e.torres.edu@email.com",
    nota: 6.4
},
{
    nombre: "Fernanda Ruiz",
    correoElectronico: "fer.ruiz.v@email.com",
    nota: 8.8
},
{
    nombre: "Gabriel Soto",
    correoElectronico: "g.soto_prof@email.com",
    nota: 7.3
},
{
    nombre: "Helena Castro",
    correoElectronico: "helena.castro@email.com",
    nota: 4.1
},
{
    nombre: "Iván Delgado",
    correoElectronico: "delgado.ivan@email.com",
    nota: 8.2
},
{
    nombre: "Julia Ortega",
    correoElectronico: "j.ortega.msn@email.com",
    nota: 9.7
},
{
    nombre: "Kevin Blanca",
    correoElectronico: "k.blanca88@email.com",
    nota: 5.0
},
{
    nombre: "Laura Méndez",
    correoElectronico: "laura.mendez@email.com",
    nota: 8.9
},
{
    nombre: "Mario Silva",
    correoElectronico: "silva.mario@email.com",
    nota: 7.5
},
{
    nombre: "Natalia Ríos",
    correoElectronico: "n.rios.academia@email.com",
    nota: 9.3
},
{
    nombre: "Oscar Peña",
    correoElectronico: "oscar.pena@email.com",
    nota: 3.5
},
{
    nombre: "Patricia Luna",
    correoElectronico: "p.luna.vance@email.com",
    nota: 8.6
},
{
    nombre: "Quique Jara",
    correoElectronico: "quique.jara@email.com",
    nota: 7.0
},
{
    nombre: "Rosa Valdés",
    correoElectronico: "r.valdes.g@email.com",
    nota: 9.4
},
{
    nombre: "Sergio Pardo",
    correoElectronico: "sergio.pardo@email.com",
    nota: 6.8
},
{
    nombre: "Teresa Vega",
    correoElectronico: "t.vega.solis@email.com",
    nota: 9.0
}
];

//GET RAIZ
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API del Instituto Nacional de Armenia',
  });
});

//GET ALL
// Lista todos los alumnos 

app.get('/alumnos', (req, res) => {
    res.json(estudiantes);
});


//GET BY ID
// Devuelve un alumno específico por su ID
app.get('/alumnos/:nombre', (req, res) => {
const alumno = estudiantes.find(a => a.nombre === String(req.params.nombre));

    if (!alumno) {
        return res.status(404).json({
        error: 'Alumno no encontrado',
        });
    }

    res.json(alumno);
        });

//POST  
// Registrar un nuevo alumno
app.post('/alumnos', (req, res) => {
    const { nombre, correoElectronico, nota } = req.body;

    const nuevoAlumno = {
        nombre,
        correoElectronico,
        nota
    };

    estudiantes.push(nuevoAlumno);

    res.status(201).json({
        message: 'Alumno registrado exitosamente.',
        alumno: nuevoAlumno,
    });
});


// PATCH /alumnos/:correoElectronico
// Actualiza solo los campos enviados en el body. Los demas se mantienen igual.
app.patch('/alumnos/:correoElectronico', (req, res) => {
    const alumno = estudiantes.find((a) => a.correoElectronico === String(req.params.correoElectronico));

    const { nombre, correoElectronico, nota } = req.body;

    if (nombre) alumno.nombre = nombre;
    if (correoElectronico) alumno.correoElectronico = correoElectronico;
    if (nota) alumno.nota = nota;

    res.json({
        message: 'Alumno actualizado exitosamente',
        alumno,
    });
});

//PUT
// PUT /alumnos/:correoElectronico
// Reemplazar todos los datos de un alumno, requiere todos los campos
app.put('/alumnos/:co', (req, res) => {
    if (req.body === undefined) {
        return res.status(400).json({
            error: 'El body no puede estar vacío',
        });
    }

    const alumno = estudiantes.find((a) => a.correoElectronico === String(req.params.correoElectronico));

    if (!alumno) {
        return res.status(404).json({
            error: 'Alumno no encontrado',
        });
    }

    const { nombre, correoElectronico, nota } = req.body;

    if (nombre) alumno.nombre = nombre;
    if (correoElectronico) alumno.correoElectronico = correoElectronico;
    if (nota) alumno.nota = nota;

    res.json({
        message: 'Alumno actualizado exitosamente',
        alumno,
    });
});


//DELETE  
// DELETE /alumnos/:correoElectronico
// Elimina un alumno por su correoElectronico
app.delete('/alumnos/:correoElectronico', (req, res) => {
    const alumnoIndex = estudiantes.findIndex((a) => a.correoElectronico === String(req.params.correoElectronico));

    if (alumnoIndex === -1) {
        return res.status(404).json({
            message: 'Alumno no encontrado',
        });
    }

    alumnos.splice(alumnoIndex, 1);

    res.status(204).send();
});  
