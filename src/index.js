// 202106141329

// import { init } from './js/usuarios-page';

// Para la consulta de Chistes
// import { init } from './js/chistes-page';
// init();

//Para la consulta de usuarios
// init();

// ********     MANEJO DEL CRUD  202106151254
//Esta manera de importar es para tener acceso a todos los
//métodos de crud-provider con el alias CRUD
import * as CRUD from './js/crud-provider';
// CRUD.getUsuario(2).then(console.log);

// CRUD.crearUsuario({
//     name: 'Gustavo',
//     job: 'Profr. Inglés',
// }).then(console.log);

// CRUD.actualizarUsuario(1, {
//     name: 'Irmita',
//     job: 'Preescolar',
// }).then(console.log);

CRUD.borrarUsuario(1).then(console.log);
