// Desafio 5: Geração de Biomas em um Mundo de Blocos (DIO)

function minerarBlocos(quantidadeGolpes) {
    const minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

    for (let i = 1; i <= quantidadeGolpes; i++) {
        let minaIndex = (i - 1) % minerais.length;
        console.log(`${i}: ${minerais[minaIndex]}`);
    }
}

// Testes locais no Node.js
console.log("--- 4 Golpes ---");
minerarBlocos(4);

console.log("\n--- 2 Golpes ---");
minerarBlocos(2);