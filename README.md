# Proyecto Final Backend Node JS - 1C 2026 

## API REST con Firestore y JWT

API REST desarrollada con **Node.js** y **Express** para la gestión de productos, utilizando **Firebase Firestore** como base de datos en la nube y autenticación mediante **JSON Web Token (JWT)**.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- Firebase Firestore
- JSON Web Token (JWT)
- Vercel (Deploy)
- Thunder Client (Pruebas de API)

---

## Arquitectura del proyecto

La aplicación implementa una arquitectura por capas:

```
src
│
├── controllers → Gestión de solicitudes y respuestas HTTP
├── services → Lógica de negocio y validaciones
├── models → Comunicación con Firestore
├── routes → Definición de endpoints
├── middlewares → Autenticación JWT y manejo de errores
└── data → Configuración de Firebase
```

---


## Funcionalidades

## Autenticación

Login de usuarios mediante JWT.

Endpoint:

```http
POST /auth/login
```


Devuelve un Bearer Token necesario para acceder a las operaciones protegidas.

---

## Productos

### Obtener todos los productos
```http
GET /api/products
```

### Obtener producto por ID
```http
GET /api/products/:id
```

### Crear producto
```http
POST /api/products/create
```

Requiere autenticación JWT.

Ejemplo Body:

```json
{
  "name": "Notebook Lenovo IdeaPad",
  "price": 750000,
  "stock": 12
}
```

### Actualizar producto
```http
PUT /api/products/:id
```
Requiere autenticación JWT.

### Eliminar producto
```http
DELETE /api/products/:id
```
Requiere autenticación JWT.

## Base de datos
Los productos son almacenados en Firebase Firestore.

Colección utilizada:
```http
products
```

## Deploy
Aplicación desplegada en Vercel:  

https://pfback-node2026.vercel.app

## Pruebas realizadas

Endpoints verificados en producción utilizando Thunder Client:

✔️ Login JWT  
✔️ GET productos  
✔️ GET producto por ID  
✔️ POST creación de producto  
✔️ PUT actualización de producto   
✔️ DELETE eliminación de producto

## Autor

Marysol Haedo @2026