
function horas(){
    let horas = document.getElementById("msg")
    let imagem = document.getElementById("im")
    let horaDoSistema = new Date()
    let PhoraDoSis = horaDoSistema.getHours()
    
    if(PhoraDoSis >= 0 && PhoraDoSis < 12){
        //Bom dia
        horas.innerHTML = `Agora são ${PhoraDoSis}hs Bom dia`
        imagem.src = "dia.png";
        document.body.style.background = "#96ccd4"
    }else if(PhoraDoSis >= 12 && PhoraDoSis < 18){
        //Boa tarde
        horas.innerHTML = `Agora são ${PhoraDoSis}hs Boa tarde`
        imagem.src = "tarde.png";
        document.body.style.background = "#c96948"
    }else{
        //Boa Noite
        horas.innerHTML = `Agora são ${PhoraDoSis}hs Boa Noite`
        imagem.src = "noite.png"
        document.body.style.background = "#0a1944"
    }
}
