const dataRaw=[ 
[1,'Gunung Jati',8,7,9,8,10,42], 
[2,'Talun',7,8,10,8,9,42], 
[3,'Weru',8,8,9,7,9,41], 
[4,'Arjawinangun',8,8,10,8,9,43]
];

//jumlah data
var jumlahData=4;
var jumlahKriteria=5;
//printDataAsli();

function printDataAsli(){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Apotek"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Trafik"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Harga Sewa"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("LuasParkir"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Jumlah Pesaing"));
    tr1.appendChild(th6);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Kondisi Fisik"));
    tr1.appendChild(th6);
    var th8=document.createElement("th");
    th8.appendChild(document.createTextNode("Nilai Akhir"));
    tr1.appendChild(th8);
    //document.getElementById("tabelDataAsli").appendChild(tr1);
    
    //deklarasi max min untuk tiap kolom
    var maxTrafik=dataRaw[0][2],maxHargaSewa=dataRaw[0][3],maxLuasParkir=dataRaw[0][4],maxJumlahPesaing=dataRaw[0][5],maxKondisiFisik=dataRaw[0][6];
    var minTrafik=dataRaw[0][2],minHargaSewa=dataRaw[0][3],minLuasParkir=dataRaw[0][4],minJumlahPesaing=dataRaw[0][5],minKondisiFisik=dataRaw[0][6];
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahData;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(dataRaw[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(dataRaw[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(dataRaw[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(dataRaw[i][3]));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(dataRaw[i][4]));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(dataRaw[i][5]));
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode(dataRaw[i][6]));
    tr1.appendChild(th7);
    var th8=document.createElement("th");
    th8.appendChild(document.createTextNode(dataRaw[i][7]));
    tr1.appendChild(th8);
    //document.getElementById("tabelDataAsli").appendChild(tr1);
        //membandingkan nilai max dan min
        //mencari nilai max
        if(dataRaw[i][2]>maxTrafik){maxTrafik=dataRaw[i][2];}
        if(dataRaw[i][3]>maxHargaSewa){maxHargaSewa=dataRaw[i][3];}
        if(dataRaw[i][4]>maxLuasParkir){maxLuasParkir=dataRaw[i][4];}
        if(dataRaw[i][5]>maxJumlahPesaing){maxJumlahPesaing=dataRaw[i][5];}
        if(dataRaw[i][6]>maxKondisiFisik){maxKondisiFisik=dataRaw[i][6];}
        //mencari nilai min
        if(dataRaw[i][2]<minTrafik){minTrafik=dataRaw[i][2];}
        if(dataRaw[i][3]<minHargaSewa){minHargaSewa=dataRaw[i][3];}
        if(dataRaw[i][4]<minLuasParkir){minLuasParkir=dataRaw[i][4];}
        if(dataRaw[i][5]<minJumlahPesaing){minJumlahPesaing=dataRaw[i][5];}
        if(dataRaw[i][6]<minKondisiFisik){minKondisiFisik=dataRaw[i][6];}
    }
    //print nilai max dan min tiap kolom
    //nilai max
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Max (Nilai Terbaik)"));
    th2.setAttribute("style","background-color:green");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(maxTrafik));
    th3.setAttribute("style","background-color:green");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(maxHargaSewa));
    th4.setAttribute("style","background-color:green");
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(maxLuasParkir));
    th5.setAttribute("style","background-color:green");
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(maxJumlahPesaing));
    th6.setAttribute("style","background-color:green");
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode(maxKondisiFisik));
    th7.setAttribute("style","background-color:green");
    tr1.appendChild(th7);
    //document.getElementById("tabelDataAsli").appendChild(tr1);
    //nilai min
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Min (Nilai Terendah)"));
    th2.setAttribute("style","background-color:yellow");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(minTrafik));
    th3.setAttribute("style","background-color:yellow");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(minHargaSewa));
    th4.setAttribute("style","background-color:yellow");
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(minLuasParkir));
    th5.setAttribute("style","background-color:yellow");
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(minJumlahPesaing));
    th6.setAttribute("style","background-color:yellow");
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode(minKondisiFisik));
    th7.setAttribute("style","background-color:yellow");
    tr1.appendChild(th7);
    //document.getElementById("tabelDataAsli").appendChild(tr1);
    
    //membentuk matriks normalisasi
 membentukMatriksNormalisasi(maxTrafik,maxHargaSewa,maxLuasParkir,maxJumlahPesaing,maxKondisiFisik,minTrafik,minHargaSewa,minLuasParkir,minJumlahPesaing,minKondisiFisik);
}

function membentukMatriksNormalisasi(maxTrafik,maxHargaSewa,maxLuasParkir,maxJumlahPesaing,maxKondisiFisik,minTrafik,minHargaSewa,minLuasParkir,minJumlahPesaing,minKondisiFisik){
    var matriksNorm=cloningArray(dataRaw);
    
    for(var i=0;i<jumlahData;i++){
    matriksNorm[i][2]=(maxTrafik-matriksNorm[i][2])/(maxTrafik-minTrafik);
    matriksNorm[i][3]=(maxHargaSewa-matriksNorm[i][3])/(maxHargaSewa-minHargaSewa);
    matriksNorm[i][4]=(maxLuasParkir-matriksNorm[i][4])/(maxLuasParkir-minLuasParkir);
    matriksNorm[i][5]=(maxJumlahPesaing-matriksNorm[i][5])/(maxJumlahPesaing-minJumlahPesaing);
    matriksNorm[i][6]=(maxKondisiFisik-matriksNorm[i][6])/(maxKondisiFisik-minKondisiFisik);
    }
    
    printMatriksNormalisasi(matriksNorm);
}

function printMatriksNormalisasi(matriksNorm){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Trafik"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Harga Sewa"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("LuasParkir Penulis"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Jumlah Pesaing"));
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode("Kondisi Fisik"));
    tr1.appendChild(th7);
    //document.getElementById("tabelMatriksNormalisasi").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahData;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksNorm[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksNorm[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksNorm[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksNorm[i][3]));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(matriksNorm[i][4]));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(matriksNorm[i][5]));
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode(matriksNorm[i][6]));
    tr1.appendChild(th7);
    //document.getElementById("tabelMatriksNormalisasi").appendChild(tr1);
    }
    
    normalisasiXbobot(matriksNorm);
}

function normalisasiXbobot(matriksNorm){
    //mengkalikan tiap matriks normalisasi dengan matriks prioritas relatif kriteria
    for(var i=0;i<jumlahData;i++){
    matriksNorm[i][2]=matriksNorm[i][2]*prioritasRelatifKriteria[0];
    matriksNorm[i][3]=matriksNorm[i][3]*prioritasRelatifKriteria[1];
    matriksNorm[i][4]=matriksNorm[i][4]*prioritasRelatifKriteria[2];
    matriksNorm[i][5]=matriksNorm[i][5]*prioritasRelatifKriteria[3];
    matriksNorm[i][6]=matriksNorm[i][6]*prioritasRelatifKriteria[4];
    }
    printMatriksNormalisasiXBobot(matriksNorm);
}

function printMatriksNormalisasiXBobot(matriksNorm){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Trafik"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("Harga Sewa"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("LuasParkir"));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode("Jumlah Pesaing"));
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode("Kondisi Fisik"));
    tr1.appendChild(th7);
    //document.getElementById("tabelMatriksXBobot").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahData;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksNorm[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksNorm[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksNorm[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksNorm[i][3]));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(matriksNorm[i][4]));
    tr1.appendChild(th5);
    var th6=document.createElement("th");
    th6.appendChild(document.createTextNode(matriksNorm[i][5]));
    tr1.appendChild(th6);
    var th7=document.createElement("th");
    th7.appendChild(document.createTextNode(matriksNorm[i][6]));
    tr1.appendChild(th7);
    //document.getElementById("tabelMatriksXBobot").appendChild(tr1);
    }
    menghitungSdanR(matriksNorm);
}

function menghitungSdanR(matriksNorm){
    var matriksSR=cloningArray(matriksNorm);
    var s,r,maxS,minS,maxR,minR;
       
    //mendapatkan sum dan max
    for(var i=0;i<jumlahData;i++){
        //mendapatkan sum
        s=matriksNorm[i][2]+matriksNorm[i][3]+matriksNorm[i][4]+matriksNorm[i][5]+matriksNorm[i][6];
     //mendapatkan max
         r=matriksNorm[i][2];
    for(var j=2;j<=6;j++){
    if(r<matriksNorm[i][j]){r=matriksNorm[i][j];} 
    }
        matriksSR[i][2]=s;
        matriksSR[i][3]=r;
    }
    maxS=s;minS=s;
    maxR=r;minR=r;
    //mendapatkan kolom maxS, kolom minS, kolom maxR, dan kolom minR
    for(var i=0;i<jumlahData;i++){
        if(maxS<matriksSR[i][2]){maxS=matriksSR[i][2];}
        if(minS>matriksSR[i][2]){minS=matriksSR[i][2];}
        if(maxR<matriksSR[i][3]){maxR=matriksSR[i][3];}
        if(minR>matriksSR[i][3]){minR=matriksSR[i][3];}
    }
    printMatriksSR(matriksSR,maxS,minS,maxR,minR);
}

function printMatriksSR(matriksSR,maxS,minS,maxR,minR){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("S (SUM)"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("R (MAX)"));
    tr1.appendChild(th4);
    //document.getElementById("tabelMatriksSR").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahData;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksSR[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksSR[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksSR[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksSR[i][3]));
    tr1.appendChild(th4);
    //document.getElementById("tabelMatriksSR").appendChild(tr1);
    }
    //mengisi nilai max dan min tiap kolom
    //mengisi nilai max
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(" "));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("MAX "));
    th2.setAttribute("style","background-color:green");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(maxS));
    th3.setAttribute("style","background-color:green");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(maxR));
    th4.setAttribute("style","background-color:green");
    tr1.appendChild(th4);
    //document.getElementById("tabelMatriksSR").appendChild(tr1);
    //mengisi nilai min
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(""));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("MIN "));
    th2.setAttribute("style","background-color:yellow");
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(minS));
    th3.setAttribute("style","background-color:yellow");
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(minR));
    th4.setAttribute("style","background-color:yellow");
    tr1.appendChild(th4);
    //document.getElementById("tabelMatriksSR").appendChild(tr1);
    
    menghitungIndexViqor(matriksSR,maxS,minS,maxR,minR);
}

function menghitungIndexViqor(matriksSR,maxS,minS,maxR,minR){
    var matriksViqor=cloningArray(matriksSR);
    for(var i=0;i<jumlahData;i++){
        //Jika nilai V=0.5
    matriksViqor[i][2]=(((matriksSR[i][2]-minS)/(maxS-minS))*0.5)+(((matriksSR[i][3]-minR)/(maxR-minR))*(1-0.5));
        //Jika nilai V=0.4
        matriksViqor[i][3]=(((matriksSR[i][2]-minS)/(maxS-minS))*0.4)+(((matriksSR[i][3]-minR)/(maxR-minR))*(1-0.4));
        //Jika nilai V=0.6
        matriksViqor[i][4]=(((matriksSR[i][2]-minS)/(maxS-minS))*0.6)+(((matriksSR[i][3]-minR)/(maxR-minR))*(1-0.6));
    }
    printMatriksIndexViqor(matriksViqor,matriksSR);
}

function printMatriksIndexViqor(matriksViqor,matriksSR){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Q"));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode("V=0.4"));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode("V=0.6"));
    tr1.appendChild(th5);
    //document.getElementById("tabelMatriksViqor").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahData;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksViqor[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksViqor[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksViqor[i][2]));
    tr1.appendChild(th3);
    var th4=document.createElement("th");
    th4.appendChild(document.createTextNode(matriksViqor[i][3]));
    tr1.appendChild(th4);
    var th5=document.createElement("th");
    th5.appendChild(document.createTextNode(matriksViqor[i][4]));
    tr1.appendChild(th5);
    //document.getElementById("tabelMatriksViqor").appendChild(tr1);
    }
    merangkingkan(matriksViqor,matriksSR);
}

function merangkingkan(matriksViqor,matriksSR){
    var matriksQ=cloningArray(matriksViqor);
    var matriks4=cloningArray(matriksViqor);
    var matriks6=cloningArray(matriksViqor);
    //merangkingkan
    matriksQ.sort(sortFunctionQ);
    matriks4.sort(sortFunction4);
    matriks6.sort(sortFunction6);


    printMatriksQ(matriksQ);
    printMatriks4(matriks4);
    printMatriks6(matriks6);
    //menentukan apakah C1 di terima
    var dq=mencariNilaiDq();
    var jumlahSolusi=mencariNilaiAmA1(matriksQ,dq);
    var c1=false,c2=false;
    
    //print Solusi
    //Jika c1 terpenuhi
    if((matriksQ[1][2]-matriksQ[0][2])>=dq){
        c1=true;
    var h3=document.createElement("h3");
    var z=document.createTextNode("C1 Terpenuhi");
    h3.appendChild(z);
    //document.getElementById("nilaiAmA1").appendChild(h3);
    }else{
    var h3=document.createElement("h3");
    var z=document.createTextNode("C1 Tidak Terpenuhi karena nilai pengurangan = "+(matriksQ[1][2]-matriksQ[0][2]));
    h3.appendChild(z);
    //document.getElementById("nilaiAmA1").appendChild(h3);
        
        //Jika c2 terpenuhi
    //sorting matriks S R
    matriksSR.sort(sortFunctionQ);
    //membandingkan apakah baris pertama merupakan baris pertama juga di matriks SR &/ matriks V=0.4 &/ matriks V=0.6
    if(matriksQ[0][1]===matriksSR[0][1]){
        if(matriksQ[0][1]===matriks4[0][1]){
            if(matriksQ[0][1]===matriks6[0][1]){
                var h3=document.createElement("h3");
    var z=document.createTextNode("C2 Terpenuhi dengan jumlah solusi sebanyak "+jumlahSolusi);
    h3.appendChild(z);
    //document.getElementById("nilaiAmA1").appendChild(h3);
                c2=true;
        }}}
    }
    
    printRekomendasi(matriksQ,jumlahSolusi,c1,c2);
}

function printMatriksQ(matriksQ){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("Q"));
    tr1.appendChild(th3);
    //document.getElementById("tabelMatriksQ").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahData;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriksQ[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksQ[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriksQ[i][2]));
    tr1.appendChild(th3);
    //document.getElementById("tabelMatriksQ").appendChild(tr1);
    }
}
function printMatriks4(matriks4){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("v=0.4"));
    tr1.appendChild(th3);
    //document.getElementById("tabelMatriks4").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahData;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriks4[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriks4[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriks4[i][3]));
    tr1.appendChild(th3);
    //document.getElementById("tabelMatriks4").appendChild(tr1);
    }
}
function printMatriks6(matriks6){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode("v=0.6"));
    tr1.appendChild(th3);
    //document.getElementById("tabelMatriks6").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahData;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(matriks6[i][0]));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriks6[i][1]));
    tr1.appendChild(th2);
    var th3=document.createElement("th");
    th3.appendChild(document.createTextNode(matriks6[i][4]));
    tr1.appendChild(th3);
    //document.getElementById("tabelMatriks6").appendChild(tr1);
    }
}
function mencariNilaiDq(){
    n=jumlahData;
    var dq=(1/(n-1));
    //document.getElementById("dq").innerHTML=dq;
    return dq;
}
function mencariNilaiAmA1(matriksQ,dq){
    var jumlahSolusi=1;
    var nilaiPengurangan;
    for(var i=1;i<jumlahData;i++){
    nilaiPengurangan=matriksQ[i][2]-matriksQ[0][2];
    if(nilaiPengurangan<dq){
        jumlahSolusi++;
    /*var h3=document.createElement("h3");
    var z=document.createTextNode("nilai A"+(i+1)+"-A1 = "+nilaiPengurangan);
    h3.appendChild(z);
    //document.getElementById("nilaiAmA1").appendChild(h3);*/
    }}
    
    return jumlahSolusi;
}

function printRekomendasi(matriksQ,jumlahSolusi,c1,c2){
    //c1 terpenuhi dan c2 tidak terpenuhi
    if(c1&&!c2){
    //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<2;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(i+1));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksQ[i][1]));
    tr1.appendChild(th2);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    }}
    //c1 tidak terpenuhi
    if(!c1){
       //membuat header tabel
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode("No"));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode("Judul"));
    tr1.appendChild(th2);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    
    //memprint isi tabel tiap baris
    for(var i=0;i<jumlahSolusi;i++){
    var tr1=document.createElement("tr");
    var th1=document.createElement("th");
    th1.appendChild(document.createTextNode(i+1));
    tr1.appendChild(th1);
    var th2=document.createElement("th");
    th2.appendChild(document.createTextNode(matriksQ[i][1]));
    tr1.appendChild(th2);
    document.getElementById("tabelRekomendasi").appendChild(tr1);
    } 
    }
}




//cloning Array
function cloningArray(arrayAsli){
    var arrayCloning=new Array(jumlahData);
    for(var i=0;i<jumlahData;i++){
        arrayCloning[i]=new Array(jumlahKriteria+3);
        for(var j=0;j<jumlahKriteria+2;j++){
        arrayCloning[i][j]=arrayAsli[i][j];
        }
    }
    return arrayCloning;
}
//algoritma sorting
function sortFunctionQ(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] < b[2]) ? -1 : 1;
    }
}
function sortFunction4(a, b) {
    if (a[3] === b[3]) {
        return 0;
    }
    else {
        return (a[3] < b[3]) ? -1 : 1;
    }
}
function sortFunction6(a, b) {
    if (a[4] === b[4]) {
        return 0;
    }
    else {
        return (a[4] < b[4]) ? -1 : 1;
    }
}
