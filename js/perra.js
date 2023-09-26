const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeroVentas = 0;
let totalVentas = 0;

function calcularFactura() {
    console.log("---- Factura de Venta ----");

    rl.question("Código del Producto: ", (codigoProducto) => {
        rl.question("Nombre del Producto: ", (nombreProducto) => {
            rl.question("Precio: ", (precio) => {
                rl.question("Cantidad: ", (cantidad) => {
                    rl.question("Descuento (%): ", (descuento) => {
                        // Convierte las entradas en números
                        precio = parseFloat(precio);
                        cantidad = parseInt(cantidad);
                        descuento = parseFloat(descuento);

                        // Validar que el precio y la cantidad sean mayores de cero
                        if (precio <= 0 || cantidad <= 0) {
                            console.log("El precio y la cantidad deben ser mayores que cero.");
                            rl.close();
                            return;
                        }

                        // Realiza los cálculos de la factura
                        const subtotal = precio * cantidad;
                        const valorDescuento = (subtotal * descuento) / 100;
                        const iva = (subtotal - valorDescuento) * 0.19;
                        const totalAPagar = subtotal - valorDescuento + iva;

                        // Muestra los resultados
                        console.log("Código del Producto:", codigoProducto);
                        console.log("Nombre del Producto:", nombreProducto);
                        console.log("Subtotal:", subtotal.toFixed(2));
                        console.log("Descuento:", valorDescuento.toFixed(2));
                        console.log("IVA:", iva.toFixed(2));
                        console.log("Total a Pagar:", totalAPagar.toFixed(2));

                        // Incrementa el contador y acumula el total de ventas
                        numeroVentas++;
                        totalVentas += totalAPagar;

                        // Pregunta si desea ingresar otra venta
                        rl.question("¿Desea ingresar otra venta? (1.Si / 2. No): ", (respuesta) => {
                            if (respuesta === "1") {
                                calcularFactura(); // Volver a calcular otra factura
                            } else if (respuesta === "2") {
                                // Imprime el número de ventas y el total de ventas registradas
                                console.log("Número de Ventas Registradas:", numeroVentas);
                                console.log("Total de Todas las Ventas Registradas:", totalVentas.toFixed(2));
                                rl.close();
                            } else {
                                console.log("Opción no válida. Saliendo del programa.");
                                rl.close();
                            }
                        });
                    });
                });
            });
        });
    });
}

// Iniciar el programa
console.log("Bienvenido al sistema de facturación.");
calcularFactura();


