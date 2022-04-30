function kali(){
    var x = document.form1.x.value;
    var y = document.form1.y.value;
    document.form1.hasil.value = x*y;
}

function bagi(){
    var x = document.form1.x.value;
    var y = document.form1.y.value;
    document.form1.hasil.value = x/y;
}

function tambah(){
    var x = parseFloat(document.form1.x.value);
    var y = parseFloat(document.form1.y.value);
    document.form1.hasil.value = x+y;
}

function kurang(){
    var x = document.form1.x.value;
    var y = document.form1.y.value;
    document.form1.hasil.value = x-y;
}


function tofahrenheit(){
    var cel = document.form2.cel.value;
    document.form2.fah.value = 9/5*cel + 32;
}

function tocelcius(){
    var fah = document.form3.fah.value;
    document.form3.cel.value = (fah - 32)*5/9;
}


function bmi(){
    var berat = document.form4.berat.value;
    var tinggi = document.form4.tinggi.value;
    document.form4.nilaibmi.value = berat/(tinggi/100)**2;

    var bmi = document.form4.nilaibmi.value;

    if(bmi >= 0 && bmi < 18.5){
        alert("Kurus");
    }
    else if(bmi >= 18.5 && bmi <25){
        alert("Berat Normal");
    }
    else if(bmi >= 25 && bmi <30){
        alert("Gemuk");
    }
    else if(bmi >= 30){
        alert("Obesitas");
    }
    else {
        alert("Input Salah!")
    }
}


