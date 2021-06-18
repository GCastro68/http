// 202106141720

const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPreset = 'ml_default';
const cloudUrl = 'https://api.cloudinary.com/v1_1/gcastro/upload';

// ============   Consutla de Usuarios    ================
const obtenerUsuarios = async () => {
    const resp = await fetch(urlUsuarios);

    //data se pone entre llaves para la reestructuración
    //y solo obtener la información del arreglo data
    //data se renombra como usuarios
    const { data: usuarios } = await resp.json();

    return usuarios;
};

//Al usar async regresa una promesa
const obtenerChiste = async () => {
    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw 'No se pudo realizar la petición';

        //return await resp.json();
        //Si solo me interesan ciertos valores usar la reestructuración
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
    } catch (err) {
        throw err;
    }
};

const subirImagen = async (archivoSubir) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData,
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (err) {
        throw err;
    }
};

export { obtenerChiste, obtenerUsuarios, subirImagen };

// =============  Chistes de Chuck Norris   ============
//fetch() regresa una promesa por eso se aplica la función flecha
// fetch(jokeUrl).then((resp) => {
//     //Al poner el cursor en json indica que es una promesa por eso
//     //se crea una función flecha

//     // resp.json().then((data) => {
//     //     console.log(data.id);
//     //     console.log(data.value);
//     // });

//     //Aplicando la desestructuración
//     resp.json().then(({ id, value }) => {
//         console.log(id);
//         console.log(value);
//     });
// });

//En la parte de arriba se tienen 2 promesas, en la siguiente
//funión hacemos lo mismo pero aplicando promesas en cadena
// fetch(jokeUrl)
//     .then((resp) => resp.json())
//     .then(console.log);

//Para obtener id y value
fetch(jokeUrl)
    .then((resp) => resp.json())
    .then(({ id, value }) => {});
