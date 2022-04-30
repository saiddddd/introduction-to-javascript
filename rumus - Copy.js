function nilai(){
    var quiz = parseFloat(document.form1.quiz.value);
    var uts = parseFloat(document.form1.uts.value);
    var uas = parseFloat(document.form1.uas.value);


    if (quiz < 0 || uts < 0 || uas < 0){
        alert("Nilai Inputan Tidak Boleh Negatif!")
    }
    else {
        document.form1.nilaiakhir.value = (0.25*quiz) + (0.35*uts) + (0.40*uas);    
        var nilai = document.form1.nilaiakhir.value;

        if(nilai >= 90 && nilai <= 100){
            alert("Indeks A");
        }
        else if(nilai >= 75 && nilai < 90){
            alert("Indeks B");
        }
        else if(nilai >= 60 && nilai < 75){
            alert("Indeks C");
        }
        else if(nilai >= 0 && nilai < 60){
            alert("Indeks D");
        }
        else {
            alert("Nilai Inputan Tidak Boleh Negatif!")
        }
}

    


}