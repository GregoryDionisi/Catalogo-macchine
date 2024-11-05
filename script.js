const urlJ = "auto.json";

function mostraAuto() {

    // fetch JSON
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;
            console.log(lista);

            for (let i = 0; i < lista.length; i++) { 
                let li = document.createElement("li");
                let anno = lista[i].anno;
                let colore = lista[i].colore;
                let prezzo = lista[i].prezzo;
                let proprietario = lista[i].proprietario.nome;
                li.textContent = anno + " - " + colore + " - " + prezzo + " - " + proprietario;
                list.appendChild(li);
            }
        })
        .catch(() => {
            console.log("Errore");
        });
}

function prezzoMedio(){
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;
            console.log(lista); 
            let medio = lista.reduce((acc, auto) => acc + Number(auto.prezzo), 0) / lista.length; //Number si assicura che tratti il valore come numero
            list.textContent = `Il prezzo medio è di ${medio.toFixed(2)} €`;    
        })
        .catch(() => {
            console.log("Errore");
        });
}

function marcheAuto() {

    // fetch JSON
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;
            console.log(lista);

            for (let i = 0; i < lista.length; i++) { 
                let li = document.createElement("li");
                let marca = lista[i].marca;
                li.textContent = marca;
                list.appendChild(li);
            }
        })
        .catch(() => {
            console.log("Errore");
        });
}


function auto2020() {

    // fetch JSON
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;
            console.log(lista);

            for (let i = 0; i < lista.length; i++) { 
                let li = document.createElement("li");
                let anno = lista[i].anno;
                let colore = lista[i].colore;
                let prezzo = lista[i].prezzo;
                let proprietario = lista[i].proprietario.nome;
                if (anno === '2020') {
                    li.textContent = anno + " - " + colore + " - " + prezzo + " - " + proprietario;
                    list.appendChild(li);
                }
            }
        })
        .catch(() => {
            console.log("Errore");
        });
}



function dettagliFiat() {

    // fetch JSON
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;
            console.log(lista);

            for (let i = 0; i < lista.length; i++) { 
                let li = document.createElement("li");
                let marca = lista[i].marca;
                let anno = lista[i].anno;
                let colore = lista[i].colore;
                let prezzo = lista[i].prezzo;
                let proprietario = lista[i].proprietario.nome;
                if (marca === 'Fiat') {
                    li.textContent = marca + " - " + anno + " - " + colore + " - " + prezzo + " - " + proprietario;
                    list.appendChild(li);
                }
            }
        })
        .catch(() => {
            console.log("Errore");
        });
}





function trasmissioneAutomatica() {

    // fetch JSON
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;
            console.log(lista);

            for (let i = 0; i < lista.length; i++) { 
                let li = document.createElement("li");
                let trasmissione = lista[i].specifiche.trasmissione;
                let anno = lista[i].anno;
                let colore = lista[i].colore;
                let prezzo = lista[i].prezzo;
                let proprietario = lista[i].proprietario.nome;
                if (trasmissione === 'Automatico') {
                    li.textContent = trasmissione + " - " + anno + " - " + colore + " - " + prezzo + " - " + proprietario;
                    list.appendChild(li);
                }
            }
        })
        .catch(() => {
            console.log("Errore");
        });
}