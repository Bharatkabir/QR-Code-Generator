let imgBox =document.getElementById("imgBox");
let qrImage =document.getElementById("qrImage");
let qrText =document.getElementById("input");

function generateQrCode(){
    if(qrText.value===''){
        alert("You must write Text and URL")
    }
    else{
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
    imgBox.classList.add("show-img")
    qrText.value = '';
    }
}