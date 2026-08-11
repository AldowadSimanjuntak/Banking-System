

# Sistema Bancario Moderno

Una aplicación de sistema bancario full-stack con una interfaz de usuario moderna, desarrollada con Next.js y Express.js. Esta aplicación proporciona autenticación de usuario segura, gestión de cuentas y capacidades de transacciones.

## Características

- 🔐 Sistema de Autenticación Seguro
- 💳 Gestión de Cuentas Bancarias
- 💰 Procesamiento de Transacciones
- 📱 Interfaz de Usuario Moderna y Responsiva
- 🔒 Rutas Protegidas
- 📊 Panel de Usuario
- 🎨 Diseño con Tema Gris Elegante

## Stack Tecnológico

### Frontend
- [Next.js 14](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Seguridad de Tipos
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [Axios](https://axios-http.com/) - Cliente HTTP
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Gestión de Estado

### Backend
- [Express.js](https://expressjs.com/) - Framework Web
- [Node.js](https://nodejs.org/) - Entorno de Ejecución
- [Prisma](https://www.prisma.io/) - ORM de Base de Datos
- [PostgreSQL](https://www.postgresql.org/) - Base de Datos
- [JWT](https://jwt.io/) - Autenticación
- [Swagger](https://swagger.io/) - Documentación de API
- [Morgan](https://github.com/expressjs/morgan) - Registro de Solicitud HTTP
- [CORS](https://github.com/expressjs/cors) - Compartir Recursos de Origen Cruzado
- [Sentry](https://sentry.io/) - Seguimiento de Errores
- [Nodemailer](https://nodemailer.com/) - Servicio de Correo Electrónico

## Requisitos Previos

Antes de comenzar, asegúrese de tener lo siguiente instalado:
- [Node.js](https://nodejs.org/) (v18 o superior)
- [pnpm](https://pnpm.io/) (v8 o superior)
- [PostgreSQL](https://www.postgresql.org/) (v14 o superior)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/yourusername/banking-system.git
cd banking-system
```

2. Instala las dependencias del backend:
```bash
npm install
# or
pnpm install
```

3. Instala las dependencias del frontend:
```bash
cd banking-system-frontend
pnpm install
```

4. Configura las variables de entorno:
   - Crea el archivo `.env` en el directorio raíz para el backend
   - Crea el archivo `.env.local` en el directorio del frontend

## Ejecución de la Aplicación

Necesitarás ejecutar tanto el servidor del backend como el del frontend:

### Terminal 1 - Servidor Backend
```bash
# In the root directory
npm run dev
# or
pnpm dev
```
El servidor backend se ejecutará en http://localhost:3000

### Terminal 2 - Servidor Frontend
```bash
# In the banking-system-frontend directory
pnpm dev
```
La aplicación frontend se ejecutará en http://localhost:3001

## Documentación de la API

Una vez que el servidor backend esté en ejecución, puedes acceder a la documentación de la API en:
```
http://localhost:3000/docs
```

## Estructura del Proyecto

```
banking-system/
├── api/                 # Rutas de la API del backend
├── controllers/         # Controladores del backend
├── prisma/             # Esquema y migraciones de la base de datos
├── utils/              # Funciones de utilidad
├── banking-system-frontend/  # Aplicación frontend
│   ├── src/
│   │   ├── app/        # Directorio de la aplicación Next.js
│   │   ├── services/   # Servicios de la API
│   │   └── components/ # Componentes de React
│   └── public/         # Archivos estáticos
└── tests/              # Archivos de pruebas
```

## Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Realiza el commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Envía los cambios a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## Agradecimientos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Express.js](https://expressjs.com/)
- [Documentación de Prisma](https://www.prisma.io/docs)

# Ejemplo de Capturas de Pantalla :

## Endpoint de Usuario :
![image](https://github.com/AldowadSimanjuntak/Banking-System/assets/102914659/b1bc7007-f8de-476a-b57f-897eeeabf335)

## Endpoint de Transacción :
![image](https://github.com/user-attachments/assets/30d5ff0f-fc4b-4b35-a5f0-27ecc665317e)

## Endpoint de Cuenta Bancaria :
![image](https://github.com/user-attachments/assets/fe6744e6-7628-4591-b758-b6ed9ddef43f)
