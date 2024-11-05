const urlJ = "auto.json";

function mostraAuto() {
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;

            lista.forEach(auto => {
                let div = document.createElement("div");
                let marca = auto.marca;
                let modello = auto.modello;
                let anno = auto.anno;
                let colore = auto.colore;
                let prezzo = auto.prezzo;
                let proprietario = auto.proprietario.nome;

                div.innerHTML = `
                    <h3 class="text-lg font-semibold text-blue-600">${marca} ${modello}</h3>
                    <div>Anno: ${anno}</div>
                    <div>Colore: ${colore}</div>
                    <div>Prezzo: ${prezzo} €</div>
                    <div>Proprietario: ${proprietario}</div>
                `;
                
                div.style.border = "1px solid black";
                div.style.borderRadius = "8px";
                div.style.padding = "10px";
                div.style.marginBottom = "10px";

                list.appendChild(div);
            });
        })
        .catch(() => {
            console.log("Errore");
        });
}

function prezzoMedio() {
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;
            let medio = lista.reduce((acc, auto) => acc + Number(auto.prezzo), 0) / lista.length;
            list.textContent = `Il prezzo medio è di ${medio.toFixed(2)} €`;
        })
        .catch(() => {
            console.log("Errore");
        });
}

function marcheAuto() {
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;

            lista.forEach(auto => {
                let div = document.createElement("div");
                let marca = auto.marca;

                div.innerHTML = `
                    <h3 class="text-lg font-semibold text-blue-600">${marca}</h3>
                `;
                
                div.style.border = "1px solid black";
                div.style.borderRadius = "8px";
                div.style.padding = "10px";
                div.style.marginBottom = "10px";

                list.appendChild(div);
            });
        })
        .catch(() => {
            console.log("Errore");
        });
}

function auto2020() {
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;

            lista.forEach(auto => {
                if (auto.anno === '2020') {
                    let div = document.createElement("div");
                    let marca = auto.marca;
                    let modello = auto.modello;
                    let anno = auto.anno;
                    let colore = auto.colore;
                    let prezzo = auto.prezzo;
                    let proprietario = auto.proprietario.nome;

                    div.innerHTML = `
                        <h3 class="text-lg font-semibold text-blue-600">${marca} ${modello}</h3>
                        <div>Anno: ${anno}</div>
                        <div>Colore: ${colore}</div>
                        <div>Prezzo: ${prezzo} €</div>
                        <div>Proprietario: ${proprietario}</div>
                    `;
                    
                    div.style.border = "1px solid black";
                    div.style.borderRadius = "8px";
                    div.style.padding = "10px";
                    div.style.marginBottom = "10px";

                    list.appendChild(div);
                }
            });
        })
        .catch(() => {
            console.log("Errore");
        });
}

function dettagliFiat() {
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;

            lista.forEach(auto => {
                if (auto.marca === 'Fiat') {
                    let div = document.createElement("div");
                    let marca = auto.marca;
                    let modello = auto.modello;
                    let anno = auto.anno;
                    let colore = auto.colore;
                    let prezzo = auto.prezzo;
                    let proprietario = auto.proprietario.nome;

                    div.innerHTML = `
                        <h3 class="text-lg font-semibold text-blue-600">${marca} ${modello}</h3>
                        <div>Anno: ${anno}</div>
                        <div>Colore: ${colore}</div>
                        <div>Prezzo: ${prezzo} €</div>
                        <div>Proprietario: ${proprietario}</div>
                    `;
                    
                    div.style.border = "1px solid black";
                    div.style.borderRadius = "8px";
                    div.style.padding = "10px";
                    div.style.marginBottom = "10px";

                    list.appendChild(div);
                }
            });
        })
        .catch(() => {
            console.log("Errore");
        });
}

function trasmissioneAutomatica() {
    fetch(urlJ)
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("mostraDati");
            list.textContent = '';
            const lista = data.auto_catalogo.auto;

            lista.forEach(auto => {
                if (auto.specifiche.trasmissione === 'Automatico') {
                    let div = document.createElement("div");
                    let marca = auto.marca;
                    let modello = auto.modello;
                    let trasmissione = auto.specifiche.trasmissione;
                    let anno = auto.anno;
                    let colore = auto.colore;
                    let prezzo = auto.prezzo;
                    let proprietario = auto.proprietario.nome;

                    div.innerHTML = `
                        <h3 class="text-lg font-semibold text-blue-600">${marca} ${modello}</h3>
                        <div>Trasmissione: ${trasmissione}</div>
                        <div>Anno: ${anno}</div>
                        <div>Colore: ${colore}</div>
                        <div>Prezzo: ${prezzo} €</div>
                        <div>Proprietario: ${proprietario}</div>
                    `;
                    
                    div.style.border = "1px solid black";
                    div.style.borderRadius = "8px";
                    div.style.padding = "10px";
                    div.style.marginBottom = "10px";

                    list.appendChild(div);
                }
            });
        })
        .catch(() => {
            console.log("Errore");
        });
}
