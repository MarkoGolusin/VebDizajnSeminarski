



let slikaIndex = 1;
pokaziSlike(slikaIndex);

function sledecaSlika(n) {
  pokaziSlike(slikaIndex += n);
}

function sadaSlika(n) {
  pokaziSlike(slikaIndex = n);
}

function pokaziSlike(n) {
  let i;
  let slika = document.getElementsByClassName("mojeSlike");
  let tacka = document.getElementsByClassName("tacka");
  if (n > slika.length) {slikaIndex = 1}    
  if (n < 1) {slikaIndex = slika.length}
  for (i = 0; i < slika.length; i++) {
    slika[i].style.display = "none";  
  }
  for (i = 0; i < tacka.length; i++) {
    tacka[i].className = tacka[i].className.replace(" aktivno", "");
  }
  slika[slikaIndex-1].style.display = "block";  
  tacka[slikaIndex-1].className += " aktivno";

}