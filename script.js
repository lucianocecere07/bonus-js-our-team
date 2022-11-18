/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/

//-----------------------------ESERCIZIO--------------------------//
//Milestone 0: creazione array di oggetti
let arrayTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "./img (3)/img/wayne-barnett-founder-ceo.jpg" //path dell'immagine
    },
    
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "./img (3)/img/angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "./img (3)/img/walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "./img (3)/img/angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "./img (3)/img/scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "./img (3)/img/barbara-ramos-graphic-designer.jpg"
    }
];

//Milestone 1: stampare su console le informazioni dell'array
for(let i = 0; i < arrayTeam.length; i++){
    let membro = arrayTeam[i];
    stampaArray(membro);
};


//Milestone 2: Stampare le informazioni su HTML

//creo contenitore con id
let contenitore = document.getElementById("contenitore-membri");


/* 
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (BOOTSTRAP!) 
*/

for (let i = 0; i < arrayTeam.length; i++) {
    let membro = arrayTeam[i];
    contenitore.innerHTML += /*getHTMLMember(membro);*/
    `
          <div class="col-12 col-md-6 col-xl-4">
            <div class="card border border-1">
              <img src="${membro.foto}" class="card-img-top" alt="wayne">
              <div class="card-body">
                <h5 id="card-title1" class="card-title">${membro.nome}</h5>
                <p id="card-text1" class="card-text">${membro.ruolo}</p>
              </div>
            </div>
          </div>
          `
    //template literal della card
};


/*
document.getElementById("card-title1").innerHTML = arrayTeam[0].nome;
document.getElementById("card-title2").innerHTML = arrayTeam[1].nome;
document.getElementById("card-title3").innerHTML = arrayTeam[2].nome;
document.getElementById("card-title4").innerHTML = arrayTeam[3].nome;
document.getElementById("card-title5").innerHTML = arrayTeam[4].nome;
document.getElementById("card-title6").innerHTML = arrayTeam[5].nome;

document.getElementById("card-text1").innerHTML = arrayTeam[0].ruolo;
document.getElementById("card-text2").innerHTML = arrayTeam[1].ruolo;
document.getElementById("card-text3").innerHTML = arrayTeam[2].ruolo;
document.getElementById("card-text4").innerHTML = arrayTeam[3].ruolo;
document.getElementById("card-text5").innerHTML = arrayTeam[4].ruolo;
document.getElementById("card-text6").innerHTML = arrayTeam[5].ruolo;
*/

//------------------------------------------------------------//



//-------------------------FUNZIONI--------------------------//

//stampa in console
function stampaArray(arrayTeam) {
    console.log(
        `
        MEMBRO DEL TEAM
        nome: ${arrayTeam.nome}
        ruolo: ${arrayTeam.ruolo}
        foto: ${arrayTeam.foto}
        `
    )
};

/*
//funzione valore proprietà membro
function getHTMLMember(member) {
    //variabile con proprietà oggetto
    let result = ` 
    <li> 
    MEMBRO DEL TEAM: 
    <br> nome: ${member.nome} 
    <br> ruolo: ${member.ruolo} 
    <br> foto: ${member.foto}
    </li>
    `;

    return result;
};
*/

//----------------------------------------------------------//
