# API de Gestión de Alumnos

API REST desarrollada con Node.js y Express para la gestión de alumnos de un instituto. Permite listar, consultar, registrar, actualizar y eliminar alumnos utilizando diferentes endpoints HTTP.

## Tecnologías utilizadas

* Node.js
* Express.js
* Dotenv

## Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Ingresar al directorio del proyecto:

```bash
cd modulo6-tarea1
```

3. Instalar dependencias:

```bash
npm install
```

4. Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
```

5. Iniciar el servidor:

```bash
npm start
```

o si utilizas nodemon:

```bash
npm run dev
```

## URL Base

```text
http://localhost:3000
```

---

# Endpoints

## GET /

Retorna un mensaje de bienvenida de la API.

### Respuesta

```json
{
  "mensaje": "API del Instituto Nacional de Armenia"
}
```

---

## GET /alumnos

Obtiene la lista completa de alumnos.

### Respuesta

```json
[
  {
    "nombre": "Alejandro García",
    "correoElectronico": "alejandro.garcia@email.com",
    "nota": 8.5
  }
]
```

---

## GET /alumnos/:nombre

Obtiene un alumno específico por nombre.

### Ejemplo

```http
GET /alumnos/Alejandro García
```

### Respuesta

```json
{
  "nombre": "Alejandro García",
  "correoElectronico": "alejandro.garcia@email.com",
  "nota": 8.5
}
```

---

## POST /alumnos

Registra un nuevo alumno.

### Body

```json
{
  "nombre": "Juan Pérez",
  "correoElectronico": "juan@email.com",
  "nota": 8.7
}
```

### Respuesta

```json
{
  "message": "Alumno registrado exitosamente.",
  "alumno": {
    "nombre": "Juan Pérez",
    "correoElectronico": "juan@email.com",
    "nota": 8.7
  }
}
```

---

## PATCH /alumnos/:correoElectronico

Actualiza parcialmente la información de un alumno.

### Ejemplo

```http
PATCH /alumnos/juan@email.com
```

### Body

```json
{
  "nota": 9.5
}
```

### Respuesta

```json
{
  "message": "Alumno actualizado exitosamente",
  "alumno": {
    "nombre": "Juan Pérez",
    "correoElectronico": "juan@email.com",
    "nota": 9.5
  }
}
```

---

## PUT /alumnos/:correoElectronico

Reemplaza completamente los datos de un alumno.

### Body

```json
{
  "nombre": "Juan Pérez",
  "correoElectronico": "juan@email.com",
  "nota": 10
}
```

### Respuesta

```json
{
  "message": "Alumno actualizado exitosamente",
  "alumno": {
    "nombre": "Juan Pérez",
    "correoElectronico": "juan@email.com",
    "nota": 10
  }
}
```

---

## DELETE /alumnos/:correoElectronico

Elimina un alumno por su correo electrónico.

### Ejemplo

```http
DELETE /alumnos/juan@email.com
```

### Respuesta

```http
204 No Content
```

---

# Estructura de un Alumno

```json
{
  "nombre": "Juan Pérez",
  "correoElectronico": "juan@email.com",
  "nota": 8.5
}
```

## Autor
MILTON ANTONIO CONTRERAS RIVERA
Proyecto desarrollado como práctica de API REST utilizando Express.js.
