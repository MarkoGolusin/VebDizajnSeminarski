

document.getElementById('idForme').addEventListener('submit', function(event) {

    var ime = document.getElementById('ime').value;
    var email = document.getElementById('email').value;
    var telefon = document.getElementById('telefon').value;
    var poruka = document.getElementById('porukaTekst').value;
    const poruka1 = document.querySelector("#poruka1");
      const poruka2 = document.querySelector("#poruka2");

    if (ime === '' || email === '' || telefon === '' || poruka === '') {
        poruka2.showModal(); 
        event.preventDefault();
    } else {
        poruka1.showModal();
         event.preventDefault();
   
    }

});

const zatvoriPoruka1 = document.querySelector(".zatvori1");
const zatvoriPoruka2 = document.querySelector(".zatvori2");

zatvoriPoruka1.addEventListener("click", () => {


    poruka1.close();
    document.getElementById("idForme").reset();


});

zatvoriPoruka2.addEventListener("click", () => {

    poruka2.close();

});

