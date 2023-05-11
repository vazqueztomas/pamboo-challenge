# Pamboo - Code Challenge

Este proyecto es un code-challenge para la empresa Pamboo. 
Consiste en una aplicación de lista de tareas en la que los usuarios pueden agregar, eliminar, leer y modificar las tareas que cargan. El proyecto utiliza tecnologías como Vite (React) para el frontend, Node.js con Express para el servidor, y MongoDB con Mongoose para la base de datos.

## Características

El proyecto cuenta con las siguientes características principales:

- Registro de tareas: Los usuarios pueden agregar nuevas tareas a la lista.
- Eliminación de tareas: Los usuarios pueden eliminar tareas existentes de la lista.
- Lectura de tareas: Los usuarios pueden ver todas las tareas existentes en la lista.
- Modificación de tareas: Los usuarios pueden actualizar el estado de las tareas (completadas o pendientes).

Además, utilicé las siguientes tecnologías y bibliotecas:

- Vite: Es un entorno de desarrollo rápido que se utiliza para crear el frontend de la aplicación utilizando React.
- MaterialUI: Es una biblioteca de componentes de interfaz de usuario que se utiliza para diseñar las interfaces de usuario de manera estilizada y coherente.
- Framer Motion: Es una biblioteca que permite agregar animaciones a los componentes de la interfaz de usuario, brindando una experiencia visual atractiva y fluida.
- Node.js y Express: Se utilizan para desarrollar el servidor de la aplicación, proporcionando las API necesarias para gestionar las operaciones CRUD (crear, leer, actualizar y eliminar) en las tareas.
- MongoDB y Mongoose: Se utiliza MongoDB como base de datos no relacional para almacenar las tareas, y Mongoose es una biblioteca de modelado de objetos de MongoDB que facilita la interacción con la base de datos.

## Configuración del entorno de desarrollo

Sigue los pasos a continuación para configurar el entorno de desarrollo y ejecutar la aplicación de forma local:

1. Clona el repositorio del proyecto desde GitHub. 
2. Instala las dependencias del frontend y del backend:
```shell
cd client
npm install
cd api
npm install
```
3. Configura la conexión a la base de datos. En el .env del servidor podras poner tu conexion a la BBDD.
4. Inicia el servidor de desarrollo:
```shell
cd api
npm run dev
```
5.Inicia el frontend
```shell
npm run dev
```
6.Abre tu navegador web y accede a http://localhost:PUERTO para interactuar con la aplicación.


