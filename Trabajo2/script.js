// TRABAJO 2

//EJERCICIO 1

db.productos.aggregate([
    {
        $match: {
            nombre: { $regex: "^[AP]", $options: "i" }
        }
    },
    { $project: { nombre: 1, descripcion: 1 } }
]);