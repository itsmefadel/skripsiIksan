// deklarasi matriks input pengguna
var barisTrafik=new Array(1,1,1,1,1);
var barisHargaSewa=new Array(1,1,1,1,1);
var barisLuasParkir=new Array(1,1,1,1,1);
var barisJumlahPesaing=new Array(1,1,1,1,1);
var barisKondisiFisik=new Array(1,1,1,1,1);

// deklarasi matriks prioritas relatif kriteria
var prioritasRelatifKriteria=new Array(1,1,1,1,1);
var el1,el2;
//string perbandingan
var iK1="<span style='color:blue'>sama penting </span>";
var iK3="<span style='color:blue'>sedikit lebih penting </span>";
var iK5="<span style='color:blue'>lebih penting </span>";
var iK7="<span style='color:blue'>kuat penting </span>";
var iK9="<span style='color:blue'>sangat penting </span>";
var iK2="antara "+iK1+"dan "+iK3;
var iK4="antara "+iK3+"dan "+iK5;
var iK6="antara "+iK5+"dan "+iK7;
var iK8="antara "+iK7+"dan "+iK9;

function prosesSlider1(value){
    var nilai;
    var stringPerbandingan;
    el1="Trafik ";
    el2="Harga Sewa ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisTrafik[1]=1;
        barisHargaSewa[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan Trafik
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisTrafik[1]=2;            
        }
            if(nilai==3){
                barisTrafik[1]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisTrafik[1]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisTrafik[1]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisTrafik[1]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisTrafik[1]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisTrafik[1]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisTrafik[1]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisHargaSewa[0]=barisTrafik[0]/barisTrafik[1];
        }else{
            //lebih mementingkan Harga Sewa
        nilai=value-7;
            if(nilai==2){
            barisHargaSewa[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisHargaSewa[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisHargaSewa[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisHargaSewa[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisHargaSewa[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisHargaSewa[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisHargaSewa[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisHargaSewa[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisTrafik[1]=barisTrafik[0]/barisHargaSewa[0];
        }
    }
    document.getElementById("nilaiSlider1").innerHTML=nilai.toString();
    document.getElementById("kataSlider1").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider2(value){
    var nilai;
    var stringPerbandingan;
    el1="Trafik ";
    el2="Luas Parkir ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisTrafik[2]=1;
        barisLuasParkir[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan rating novel
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisTrafik[2]=2;            
        }
            if(nilai==3){
                barisTrafik[2]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisTrafik[2]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisTrafik[2]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisTrafik[2]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisTrafik[2]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisTrafik[2]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisTrafik[2]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisLuasParkir[0]=barisTrafik[0]/barisTrafik[2];
        }else{
            //lebih mementingkan LuasParkir penulis
        nilai=value-7;
            if(nilai==2){
            barisLuasParkir[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisLuasParkir[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisLuasParkir[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisLuasParkir[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisLuasParkir[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisLuasParkir[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisLuasParkir[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisLuasParkir[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisTrafik[2]=barisTrafik[0]/barisLuasParkir[0];
        }
    }
    document.getElementById("nilaiSlider2").innerHTML=nilai.toString();
    document.getElementById("kataSlider2").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider3(value){
    var nilai;
    var stringPerbandingan;
    el1="Trafik ";
    el2="Jumlah Pesaing ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisTrafik[3]=1;
        barisJumlahPesaing[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan rating novel
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisTrafik[3]=2;            
        }
            if(nilai==3){
                barisTrafik[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisTrafik[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisTrafik[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisTrafik[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisTrafik[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisTrafik[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisTrafik[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisJumlahPesaing[0]=barisTrafik[0]/barisTrafik[3];
        }else{
            //lebih mementingkan LuasParkir penulis
        nilai=value-7;
            if(nilai==2){
            barisJumlahPesaing[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisJumlahPesaing[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisJumlahPesaing[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisJumlahPesaing[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisJumlahPesaing[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisJumlahPesaing[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisJumlahPesaing[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisJumlahPesaing[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisTrafik[3]=barisTrafik[0]/barisJumlahPesaing[0];
        }
    }
    document.getElementById("nilaiSlider3").innerHTML=nilai.toString();
    document.getElementById("kataSlider3").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider4(value){
    var nilai;
    var stringPerbandingan;
    el1="Trafik ";
    el2="Kondisi Fisik ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisTrafik[4]=1;
        barisKondisiFisik[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan Trafik
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisTrafik[4]=2;            
        }
            if(nilai==3){
                barisTrafik[4]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisTrafik[4]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisTrafik[4]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisTrafik[4]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisTrafik[4]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisTrafik[4]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisTrafik[4]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisKondisiFisik[0]=barisTrafik[0]/barisTrafik[4];
        }else{
            //lebih mementingkan Kondisi Fisik
        nilai=value-7;
            if(nilai==2){
            barisKondisiFisik[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisKondisiFisik[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisKondisiFisik[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisKondisiFisik[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisKondisiFisik[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisKondisiFisik[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisKondisiFisik[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisKondisiFisik[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisTrafik[4]=barisKondisiFisik[2]/barisKondisiFisik[1];
        }
    }
    document.getElementById("nilaiSlider4").innerHTML=nilai.toString();
    document.getElementById("kataSlider4").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider5(value){
    var nilai;
    var stringPerbandingan;
    el1="Harga Sewa ";
    el2="Luas Parkir ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisHargaSewa[2]=1;
        barisLuasParkir[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan HargaSewa
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisHargaSewa[2]=2;            
        }
            if(nilai==3){
                barisHargaSewa[2]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisHargaSewa[2]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisHargaSewa[2]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisHargaSewa[2]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisHargaSewa[2]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisHargaSewa[2]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisHargaSewa[2]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisLuasParkir[1]=barisHargaSewa[1]/barisHargaSewa[2];
        }else{
            //lebih mementingkan Luas Parkir
        nilai=value-7;
            if(nilai==2){
            barisLuasParkir[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisLuasParkir[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisLuasParkir[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisLuasParkir[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisLuasParkir[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisLuasParkir[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisLuasParkir[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisLuasParkir[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisHargaSewa[2]=barisLuasParkir[2]/barisLuasParkir[1];
        }
    }
    document.getElementById("nilaiSlider5").innerHTML=nilai.toString();
    document.getElementById("kataSlider5").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider6(value){
    var nilai;
    var stringPerbandingan;
    el1="Harga Sewa ";
    el2="Jumlah Pesaing ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisHargaSewa[3]=1;
        barisJumlahPesaing[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan Harga Sewa
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisHargaSewa[3]=2;            
        }
            if(nilai==3){
                barisHargaSewa[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisHargaSewa[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisHargaSewa[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisHargaSewa[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisHargaSewa[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisHargaSewa[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisHargaSewa[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisJumlahPesaing[1]=barisHargaSewa[1]/barisHargaSewa[3];
        }else{
            //lebih mementingkan Jumlah Pesaing
        nilai=value-7;
            if(nilai==2){
            barisJumlahPesaing[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisJumlahPesaing[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisJumlahPesaing[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisJumlahPesaing[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisJumlahPesaing[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisJumlahPesaing[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisJumlahPesaing[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisJumlahPesaing[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisHargaSewa[3]=barisJumlahPesaing[3]/barisJumlahPesaing[1];
        }
    }
    document.getElementById("nilaiSlider6").innerHTML=nilai.toString();
    document.getElementById("kataSlider6").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider7(value){
    var nilai;
    var stringPerbandingan;
    el1="Harga Sewa ";
    el2="Kondisi Fisik ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisHargaSewa[4]=1;
        barisKondisiFisik[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan LuasParkir penulis
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisHargaSewa[4]=2;            
        }
            if(nilai==3){
                barisHargaSewa[4]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisHargaSewa[4]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
               barisHargaSewa[4]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisHargaSewa[4]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
               barisHargaSewa[4]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisHargaSewa[4]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisHargaSewa[4]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisKondisiFisik[1]=barisHargaSewa[1]/barisHargaSewa[4];
        }else{
            //lebih mementingkan rating penulis
        nilai=value-7;
            if(nilai==2){
            barisKondisiFisik[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisKondisiFisik[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisKondisiFisik[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisKondisiFisik[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisKondisiFisik[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
               barisKondisiFisik[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisKondisiFisik[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisKondisiFisik[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
       barisHargaSewa[4]=barisKondisiFisik[4]/barisKondisiFisik[1];
        }
    }
    document.getElementById("nilaiSlider7").innerHTML=nilai.toString();
    document.getElementById("kataSlider7").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider8(value){
    var nilai;
    var stringPerbandingan;
    el1="Luas Parkir ";
    el2="Jumlah Pesaing ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisLuasParkir[3]=1;
        barisJumlahPesaing[2]=1;
    }else{
        if(value<8){
            //lebih mementingkan LuasParkir penulis
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisLuasParkir[3]=2;            
        }
            if(nilai==3){
                barisLuasParkir[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
               barisLuasParkir[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
               barisLuasParkir[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisLuasParkir[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
               barisLuasParkir[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisLuasParkir[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisLuasParkir[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisJumlahPesaing[2]=barisLuasParkir[2]/barisLuasParkir[3];
        }else{
            //lebih mementingkan rating penulis
        nilai=value-7;
            if(nilai==2){
            barisJumlahPesaing[2]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisJumlahPesaing[2]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
               barisJumlahPesaing[2]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
               barisJumlahPesaing[2]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisJumlahPesaing[2]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
               barisJumlahPesaing[2]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisJumlahPesaing[2]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
               barisJumlahPesaing[2]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
       barisLuasParkir[3]=barisJumlahPesaing[3]/barisJumlahPesaing[2];
        }
    }
    document.getElementById("nilaiSlider8").innerHTML=nilai.toString();
    document.getElementById("kataSlider8").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider9(value){
    var nilai;
    var stringPerbandingan;
    el1="Luas Parkir ";
    el2="Kondisi Fisik ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisLuasParkir[4]=1;
        barisKondisiFisik[2]=1;
    }else{
        if(value<8){
            //lebih mementingkan LuasParkir penulis
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisLuasParkir[4]=2;            
        }
            if(nilai==3){
               barisLuasParkir[4]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
               barisLuasParkir[4]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
               barisLuasParkir[4]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisLuasParkir[4]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
               barisLuasParkir[4]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisLuasParkir[4]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisLuasParkir[4]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisKondisiFisik[2]=barisLuasParkir[2]/barisLuasParkir[4];
        }else{
            //lebih mementingkan rating penulis
        nilai=value-7;
            if(nilai==2){
            barisKondisiFisik[2]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisKondisiFisik[2]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
               barisKondisiFisik[2]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
               barisKondisiFisik[2]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisKondisiFisik[2]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
               barisKondisiFisik[2]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisKondisiFisik[2]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
               barisKondisiFisik[2]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
       barisLuasParkir[4]=barisKondisiFisik[4]/barisKondisiFisik[2];
        }
    }
    document.getElementById("nilaiSlider9").innerHTML=nilai.toString();
    document.getElementById("kataSlider9").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider10(value){
    var nilai;
    var stringPerbandingan;
    el1="Jumlah Pesaing ";
    el2="Kondisi Fisik ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisJumlahPesaing[4]=1;
        barisKondisiFisik[3]=1;
    }else{
        if(value<8){
            //lebih mementingkan LuasParkir penulis
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisJumlahPesaing[4]=2;            
        }
            if(nilai==3){
               barisJumlahPesaing[4]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
               barisJumlahPesaing[4]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
               barisJumlahPesaing[4]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisJumlahPesaing[4]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
              barisJumlahPesaing[4]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisJumlahPesaing[4]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
               barisJumlahPesaing[4]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisKondisiFisik[3]=barisJumlahPesaing[3]/barisJumlahPesaing[4];
        }else{
            //lebih mementingkan rating penulis
        nilai=value-7;
            if(nilai==2){
            barisKondisiFisik[3]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisKondisiFisik[3]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
               barisKondisiFisik[3]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
               barisKondisiFisik[3]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
               barisKondisiFisik[3]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
               barisKondisiFisik[3]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisKondisiFisik[3]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
               barisKondisiFisik[3]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
       barisJumlahPesaing[4]=barisKondisiFisik[4]/barisKondisiFisik[3];
        }
    }
    document.getElementById("nilaiSlider10").innerHTML=nilai.toString();
    document.getElementById("kataSlider10").innerHTML=stringPerbandingan;
    printMatriks();
}

function printMatriks(){
    for(var i=0;i<5;i++){
       var index=i+1;

       //document.getElementById("barisTrafik"+(i+1)).innerHTML=barisTrafik[i];
        //document.getElementById("barisHargaSewa"+(i+1)).innerHTML=barisHargaSewa[i];
       //document.getElementById("barisLuasParkir"+(i+1)).innerHTML=barisLuasParkir[i];
       //document.getElementById("barisJumlahPesaing"+(i+1)).innerHTML=barisJumlahPesaing[i];
       //document.getElementById("barisKondisiFisik"+(i+1)).innerHTML=barisKondisiFisik[i];
   }
    menjumlahKolom();
}

function menjumlahKolom(){
    //menghitung jumlah tiap kolom
var jumlahTiapKolom=new Array(1,1,1,1,1);
       for(var i=0;i<5;i++){
jumlahTiapKolom[i]=barisTrafik[i]+barisHargaSewa[i]+barisLuasParkir[i]+barisJumlahPesaing[i]+barisKondisiFisik[i];
       }
    //document.getElementById("jumlahKolom1").innerHTML=jumlahTiapKolom[0];
    //document.getElementById("jumlahKolom2").innerHTML=jumlahTiapKolom[1];
    //document.getElementById("jumlahKolom3").innerHTML=jumlahTiapKolom[2];
    //document.getElementById("jumlahKolom4").innerHTML=jumlahTiapKolom[3];
    //document.getElementById("jumlahKolom5").innerHTML=jumlahTiapKolom[4];
    menormalisasiMatriksInput(jumlahTiapKolom);
}

function menormalisasiMatriksInput(jumlahTiapKolom){
var normbarisTrafik=new Array(1,1,1,1,1);
var normBarisHargaSewa=new Array(1,1,1,1,1);
var normbarisLuasParkir=new Array(1,1,1,1,1);
var normbarisJumlahPesaing=new Array(1,1,1,1,1);
var normbarisKondisiFisik=new Array(1,1,1,1,1);
    
    for(var i=0;i<5;i++){
normbarisTrafik[i]=barisTrafik[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormTrafik"+(i+1)).innerHTML=normbarisTrafik[i];
normBarisHargaSewa[i]=barisHargaSewa[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormHargaSewa"+(i+1)).innerHTML=normBarisHargaSewa[i];   
normbarisLuasParkir[i]=barisLuasParkir[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormLuasParkir"+(i+1)).innerHTML=normbarisLuasParkir[i];
normbarisJumlahPesaing[i]=barisJumlahPesaing[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormJumlahPesaing"+(i+1)).innerHTML=normbarisJumlahPesaing[i];
normbarisKondisiFisik[i]=barisKondisiFisik[i]/jumlahTiapKolom[i];
//document.getElementById("barisNormKondisiFisik"+(i+1)).innerHTML=normbarisKondisiFisik[i];
    }
    
menjumlahBarisNorm(normbarisTrafik,normBarisHargaSewa,normbarisLuasParkir,normbarisJumlahPesaing,normbarisKondisiFisik);
}

function menjumlahBarisNorm(normbarisTrafik,normBarisHargaSewa,normbarisLuasParkir,normbarisJumlahPesaing,normbarisKondisiFisik){
    var jumlahTiapBaris=new Array(1,1,1,1,1);
    jumlahTiapBaris[0]=normbarisTrafik.reduce(totalSum);
    jumlahTiapBaris[1]=normBarisHargaSewa.reduce(totalSum);
    jumlahTiapBaris[2]=normbarisLuasParkir.reduce(totalSum);
    jumlahTiapBaris[3]=normbarisJumlahPesaing.reduce(totalSum);
    jumlahTiapBaris[4]=normbarisKondisiFisik.reduce(totalSum);
 //document.getElementById("barisNormTrafik6").innerHTML=jumlahTiapBaris[0];
//document.getElementById("barisNormHargaSewa6").innerHTML=jumlahTiapBaris[1];
    //document.getElementById("barisNormLuasParkir6").innerHTML=jumlahTiapBaris[2];
    //document.getElementById("barisNormJumlahPesaing6").innerHTML=jumlahTiapBaris[3];
    //document.getElementById("barisNormKondisiFisik6").innerHTML=jumlahTiapBaris[4];
    menghitungPrioritasRelatifKriteria(jumlahTiapBaris);
}

function menghitungPrioritasRelatifKriteria(jumlahTiapBaris){
    for(var i=0;i<5;i++){
    prioritasRelatifKriteria[i]=jumlahTiapBaris[i]/5;}
//document.getElementById("barisNormTrafik7").innerHTML=prioritasRelatifKriteria[0];    //document.getElementById("barisNormHargaSewa7").innerHTML=prioritasRelatifKriteria[1];    //document.getElementById("barisNormLuasParkir7").innerHTML=prioritasRelatifKriteria[2];    //document.getElementById("barisNormJumlahPesaing7").innerHTML=prioritasRelatifKriteria[3];
    //document.getElementById("barisNormKondisiFisik7").innerHTML=prioritasRelatifKriteria[4];
    mengukurKonsistensi();
}

function mengukurKonsistensi(){
var konsbarisTrafik=new Array(1,1,1,1,1);
var konsbarisHargaSewa=new Array(1,1,1,1,1);
var konsbarisLuasParkir=new Array(1,1,1,1,1);
var konsbarisJumlahPesaing=new Array(1,1,1,1,1);
var konsbarisKondisiFisik=new Array(1,1,1,1,1);
    for(var i=0;i<5;i++){
        konsbarisTrafik[i]=barisTrafik[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsTrafik"+(i+1)).innerHTML=konsbarisTrafik[i];
        konsbarisHargaSewa[i]=barisHargaSewa[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsHargaSewa"+(i+1)).innerHTML=konsbarisHargaSewa[i];
        konsbarisLuasParkir[i]=barisLuasParkir[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsLuasParkir"+(i+1)).innerHTML=konsbarisLuasParkir[i];
        konsbarisJumlahPesaing[i]=barisJumlahPesaing[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsJumlahPesaing"+(i+1)).innerHTML=konsbarisJumlahPesaing[i];
        konsbarisKondisiFisik[i]=barisKondisiFisik[i]*prioritasRelatifKriteria[i];
        //document.getElementById("barisKonsKondisiFisik"+(i+1)).innerHTML=konsbarisKondisiFisik[i];
    }
 menjumlahBarisKons(konsbarisTrafik,konsbarisHargaSewa,konsbarisLuasParkir,konsbarisJumlahPesaing,konsbarisKondisiFisik);
}

function menjumlahBarisKons(konsbarisTrafik,konsBarisHargaSewa,konsbarisLuasParkir,konsbarisJumlahPesaing,konsbarisKondisiFisik){
    var jumlahTiapBaris=new Array(1,1,1,1,1);
    jumlahTiapBaris[0]=konsbarisTrafik.reduce(totalSum);
    jumlahTiapBaris[1]=konsBarisHargaSewa.reduce(totalSum);
    jumlahTiapBaris[2]=konsbarisLuasParkir.reduce(totalSum);
    jumlahTiapBaris[3]=konsbarisJumlahPesaing.reduce(totalSum);
    jumlahTiapBaris[4]=konsbarisKondisiFisik.reduce(totalSum);
 //document.getElementById("barisKonsTrafik6").innerHTML=jumlahTiapBaris[0];
//document.getElementById("barisKonsHargaSewa6").innerHTML=jumlahTiapBaris[1];
    //document.getElementById("barisKonsLuasParkir6").innerHTML=jumlahTiapBaris[2];
    //document.getElementById("barisKonsJumlahPesaing6").innerHTML=jumlahTiapBaris[3];
    //document.getElementById("barisKonsKondisiFisik6").innerHTML=jumlahTiapBaris[4];
    sumRelatifKriteria(jumlahTiapBaris);
}
function sumRelatifKriteria(jumlahTiapBaris){
    var totalRelatifKriteria=new Array(1,1,1,1,1);
    for(var i=0;i<5;i++){
        totalRelatifKriteria[i]=jumlahTiapBaris[i]/prioritasRelatifKriteria[i];
    }
    //document.getElementById("barisKonsTrafik7").innerHTML=totalRelatifKriteria[0];
    //document.getElementById("barisKonsHargaSewa7").innerHTML=totalRelatifKriteria[1];
    //document.getElementById("barisKonsLuasParkir7").innerHTML=totalRelatifKriteria[2];
    //document.getElementById("barisKonsJumlahPesaing7").innerHTML=totalRelatifKriteria[3];
    //document.getElementById("barisKonsKondisiFisik7").innerHTML=totalRelatifKriteria[4];
    menghitungLamdaMaks(totalRelatifKriteria);
}

function menghitungLamdaMaks(totalRelatifKriteria){
    var lamdaMaks=totalRelatifKriteria.reduce(totalSum)/5;
    //document.getElementById("lamdaMaks").innerHTML=lamdaMaks;
    menghitungConsistencyIndex(lamdaMaks);
}
function menghitungConsistencyIndex(lamdaMaks){
    var n=5;
    var ci=(lamdaMaks-n)/(n-1);
    //document.getElementById("consistencyIndex").innerHTML=ci;
    menghitungCr(ci,n);
}
function menghitungCr(ci,n){
    var ri;
    if(n==1){ri=0.00;}
    if(n==2){ri=0.00;}
    if(n==3){ri=0.58;}
    if(n==4){ri=0.90;}
    if(n==5){ri=1.12;}
    if(n==6){ri=1.24;}
    if(n==7){ri=1.32;}
    if(n==8){ri=1.41;}
    if(n==9){ri=1.45;}
    if(n==10){ri=1.51;}
    
    var cr=ci/ri;
    //document.getElementById("cr").innerHTML=cr;
    if(cr<=0.1){
        //document.getElementById("hasilPreferensiPembobotan").innerHTML="<span style='color:green'>|CR<=0.1</span>";
        document.getElementById("sK").innerHTML="<span style='color:green'>Pembobotan Konsisten</span>";
        document.getElementById("buttonTampilrekomendasi").disabled=false;
    }else{
        //document.getElementById("hasilPreferensiPembobotan").innerHTML="<span style='color:red'>|CR>0.1</span>";
        document.getElementById("sK").innerHTML="<span style='color:red'>Pembobotan Tidak Konsisten</span>";
        document.getElementById("buttonTampilrekomendasi").disabled=true;
    }
}