
carros = [
    {"marca": "Toyota", "modelo": "Corolla", "año": 2020, "precio": 25000},
    {"marca": "Honda", "modelo": "Civic", "año": 2019, "precio": 22000},
    {"marca": "Ford", "modelo": "Fiesta", "año": 2021, "precio": 18000},
    {"marca": "Chevrolet", "modelo": "Cruze", "año": 2020, "precio": 23000}
]


marcas_populares = ("Toyota", "Honda", "Ford", "Chevrolet")


filtro = lambda x: x["marca"] in marcas_populares and x["año"] >= 2020


carros_filtrados = list(filter(filtro, carros))


print("Carros populares fabricados a partir de 2020:")
for carro in carros_filtrados:
    print(f"Marca: {carro['marca']}, Modelo: {carro['modelo']}, Año: {carro['año']}, Precio: ${carro['precio']}")
