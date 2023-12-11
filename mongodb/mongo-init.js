// mongodb/mongo-init.js
db.createUser({
    user: 'usuario',
    pwd: 'contraseña',
    roles: [
      {
        role: 'readWrite',
        db: 'nombresDB',
      },
    ],
  });