function search(){
    var letra = document.getElementById("caja").value;
    switch(letra){
        case 'a':
        alert("es vocal");
        break;
        case 'e':
        alert("es vocal");
        break;
         case 'i':
         alert("es vocal");
         break;
        case 'o':
         alert("es vocal");
         break;
         case 'u':
         alert("es vocal");
         break;
         default:
            alert("la letra: "+letra+" es consonante");
    }
}