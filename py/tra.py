import random


baraja = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jota", "Reina", "Rey"]


palos = ("Corazones", "Diamantes", "Tréboles", "Picas")


def obtener_carta_aleatoria():
    valor = random.choice(baraja)
    palo = random.choice(palos)
    return {"valor": valor, "palo": palo}


carta = obtener_carta_aleatoria()


print("Detalles de la carta aleatoria:")
print(f"Valor: {carta['valor']}")
print(f"Palo: {carta['palo']}")

