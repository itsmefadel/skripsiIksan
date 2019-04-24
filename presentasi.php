<html>
    <head>
        <link rel="stylesheet" type="text/css" href="index.css">
        <script src="formPresentasi.js" type="text/javascript"></script>
        <script src="matematikaDasar.js" type="text/javascript"></script>
    </head>
<body>
    <div id="divFormBobot" class="formBobot">
        <div class="inputForm">
        <form autocomplete="off" method="post" enctype="multipart/form-data">
        <h1>Tentukan Prioritas Kriteria</h1>
            
        <h2>Antara Trafik dengan Harga Sewa</h2>
        <h3 id="kataSlider1">Trafik <span style='color:blue'>sama penting</span> dengan Harga Sewa</h3>
        <input id="slider1" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider1(this.value)" onChange="prosesSlider1(this.value)">
        <span id="nilaiSlider1">1</span>
        
        <h2>Antara Trafik dengan Luas Parkir</h2>
            <h3 id="kataSlider2">Trafik <span style='color:blue'>sama penting</span> dengan Luas Parkir</h3>
        <input id="slider2" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider2(this.value,2)" onChange="prosesSlider2(this.value,2)">
        <span id="nilaiSlider2">1</span>
        
        <h2>Antara Trafik dengan Jumlah Pesaing</h2>
            <h3 id="kataSlider3">Trafik <span style='color:blue'>sama penting</span> dengan Jumlah Pesaing</h3>
        <input id="slider3" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider3(this.value,3)" onChange="prosesSlider3(this.value,3)">
        <span id="nilaiSlider3">1</span>
            
        <h2>Antara Trafik dengan Kondisi Fisik</h2>
            <h3 id="kataSlider4">Trafik <span style='color:blue'>sama penting</span> dengan Kondisi Fisik</h3>
        <input id="slider4" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider4(this.value,4)" onChange="prosesSlider4(this.value,4)">
        <span id="nilaiSlider4">1</span>
            
        <h2>Antara Harga Sewa dengan Luas Parkir</h2>
            <h3 id="kataSlider5">Harga Sewa <span style='color:blue'>sama penting</span> dengan Luas Parkir</h3>
        <input id="slider5" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider5(this.value,5)" onChange="prosesSlider5(this.value,5)">
        <span id="nilaiSlider5">1</span>
            
        <h2>Antara Harga Sewa dengan Jumlah Pesaing</h2>
            <h3 id="kataSlider6">Harga Sewa <span style='color:blue'>sama penting</span> dengan Jumlah Pesaing</h3>
        <input id="slider6" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider6(this.value,6)" onChange="prosesSlider6(this.value,6)">
        <span id="nilaiSlider6">1</span>

        <h2>Antara Harga Sewa dengan Kondisi Fisik</h2>
            <h3 id="kataSlider7">Harga Sewa <span style='color:blue'>sama penting</span> dengan Kondisi Fisik</h3>
        <input id="slider7" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider7(this.value,7)" onChange="prosesSlider7(this.value,7)">
        <span id="nilaiSlider7">1</span>
        
        <h2>Antara Luas Parkir dengan Jumlah Pesaing</h2>
            <h3 id="kataSlider8">Luas Parkir <span style='color:blue'>sama penting</span> dengan Jumlah Pesaing</h3>
        <input id="slider8" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider8(this.value,8)" onChange="prosesSlider8(this.value,8)">
        <span id="nilaiSlider8">1</span>

        <h2>Antara Luas Parkir dengan Kondisi Fisik</h2>
            <h3 id="kataSlider9">Luas Parkir <span style='color:blue'>sama penting</span> dengan Kondisi Fisik</h3>
        <input id="slider9" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider9(this.value,9)" onChange="prosesSlider9(this.value,9)">
        <span id="nilaiSlider9">1</span>

        <h2>Antara Jumlah Pesaing dengan Kondisi Fisik</h2>
            <h3 id="kataSlider10">Jumlah Pesaing <span style='color:blue'>sama penting</span> dengan Kondisi Fisik</h3>
        <input id="slider10" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider10(this.value,10)" onChange="prosesSlider10(this.value,10)">
        <span id="nilaiSlider10">1</span>

        <p></p>
            <hr>
        </div>
            <div id="statusKonsistensi">
                <h2><span id="sK"></span></h2>
            <hr>
            </div>
            <input type="button" name="button" value="Tampilkan Rekomendasi" onclick="tampilRekomendasi(false)" id="buttonTampilrekomendasi">
            <div id="matriksRekomendasi" >
            <hr>
            <h2>Hasil Rekomendasi</h2>
            <table id="tabelRekomendasi" style="width:100%"></table>
            </div>
            <div id="matriksInput" >
                <h2>Matriks Pairwise Comparison</h2>
                <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Trafik</th>
                    <th>Harga sewa</th>
                    <th>Luas Parkir</th>
                    <th>Jumlah Pesaing</th>
                    <th>Kondisi Fisik</th>
                    </tr>
                    <tr>
                    <th>Trafik</th>
                    <th bgcolor="yellow" id="barisTrafik1">1</th>
                    <th id="barisTrafik2">1</th>
                    <th id="barisTrafik3">1</th>
                    <th id="barisTrafik4">1</th>
                    <th id="barisTrafik5">1</th>
                    </tr>
                    <tr>
                    <th>Harga sewa</th>
                    <th id="barisHargaSewa1">1</th>
                    <th bgcolor="yellow" id="barisHargaSewa2">1</th>
                    <th id="barisHargaSewa3">1</th>
                    <th id="barisHargaSewa4">1</th>
                    <th id="barisHargaSewa5">1</th>
                    </tr>
                    <tr>
                    <th>Luas Parkir</th>
                    <th id="barisLuasParkir1">1</th>
                    <th id="barisLuasParkir2">1</th>
                    <th bgcolor="yellow" id="barisLuasParkir3">1</th>
                    <th id="barisLuasParkir4">1</th>
                    <th id="barisLuasParkir5">1</th>
                    </tr>
                    <tr>
                    <th>Jumlah Pesaing</th>
                    <th id="barisJumlahPesaing1">1</th>
                    <th id="barisJumlahPesaing2">1</th>
                    <th id="barisJumlahPesaing3">1</th>
                    <th bgcolor="yellow" id="barisJumlahPesaing4">1</th>
                    <th id="barisJumlahPesaing5">1</th>
                    </tr>
                    <th>Kondisi Fisik</th>
                    <th id="barisKondisiFisik1">1</th>
                    <th id="barisKondisiFisik2">1</th>
                    <th id="barisKondisiFisik3">1</th>
                    <th id="barisKondisiFisik4">1</th>
                    <th bgcolor="yellow" id="barisKondisiFisik5">1</th>
                    </tr>
                    <tr>
                    <th>Jumlah Kolom</th>
                    <th bgcolor="green" id="jumlahKolom1">1</th>
                    <th bgcolor="green" id="jumlahKolom2">1</th>
                    <th bgcolor="green" id="jumlahKolom3">1</th>
                    <th bgcolor="green" id="jumlahKolom4">1</th>
                    <th bgcolor="green" id="jumlahKolom5">1</th>
                    </tr>
                </table>
                <hr>
            </div>
            <div id="matriksInputNormalisasi" >
                <h2>Matriks Normalisasi Input</h2>
                <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Trafik</th>
                    <th>Harga Sewa</th>
                    <th>Luas Parkir</th>
                    <th>Jumlah Pesaing</th>
                    <th>Kondisi Fisik</th>
                    <th>Jumlah Baris</th>
                    <th>Prioritas Relatif Kriteria</th>
                    </tr>
                    <tr>
                    <th>Trafik</th>
                    <th id="barisNormTrafik1">1</th>
                    <th id="barisNormTrafik2">1</th>
                    <th id="barisNormTrafik3">1</th>
                    <th id="barisNormTrafik4">1</th>
                    <th id="barisNormTrafik5">1</th>
                    <th id="barisNormTrafik6">5</th>
                    <th id="barisNormTrafik7">1</th>
                    </tr>
                    <tr>
                    <th>Harga Sewa</th>
                    <th id="barisNormHargaSewa1">1</th>
                    <th id="barisNormHargaSewa2">1</th>
                    <th id="barisNormHargaSewa3">1</th>
                    <th id="barisNormHargaSewa4">1</th>
                    <th id="barisNormHargaSewa5">1</th>
                    <th id="barisNormHargaSewa6">5</th>
                    <th id="barisNormHargaSewa7">1</th>
                    </tr>
                    <tr>
                    <th>Luas Parkir</th>
                    <th id="barisNormLuasParkir1">1</th>
                    <th id="barisNormLuasParkir2">1</th>
                    <th id="barisNormLuasParkir3">1</th>
                    <th id="barisNormLuasParkir4">1</th>
                    <th id="barisNormLuasParkir5">1</th>
                    <th id="barisNormLuasParkir6">5</th>
                        <th id="barisNormLuasParkir7">1</th>
                    </tr>
                    <tr>
                    <th>Jumlah Pesaing</th>
                    <th id="barisNormJumlahPesaing1">1</th>
                    <th id="barisNormJumlahPesaing2">1</th>
                    <th id="barisNormJumlahPesaing3">1</th>
                    <th id="barisNormJumlahPesaing4">1</th>
                    <th id="barisNormJumlahPesaing5">1</th>
                    <th id="barisNormJumlahPesaing6">5</th>
                    <th id="barisNormJumlahPesaing7">1</th>
                    </tr>
                    <tr>
                    <th>Kondisi Fisik</th>
                    <th id="barisNormKondisiFisik1">1</th>
                    <th id="barisNormKondisiFisik2">1</th>
                    <th id="barisNormKondisiFisik3">1</th>
                    <th id="barisNormKondisiFisik4">1</th>
                    <th id="barisNormKondisiFisik5">1</th>
                    <th id="barisNormKondisiFisik6">5</th>
                    <th id="barisNormKondisiFisik7">1</th>
                    </tr>
                </table>
                <hr>
            </div>
            <div id="matriksKonsistensi" >
                <h2>Matriks Mengukur Konsistensi</h2>
                <table style="width:100%">
                    <tr>
                    <th></th>
                    <th>Trafik</th>
                    <th>Harga Sewa</th>
                    <th>Luas Parkir</th>
                    <th>Jumlah Pesaing</th>
                    <th>Kondisi Fisik</th>
                    <th>Jumlah Baris</th>    
                    <th>Sum / Relatif Kriteria</th>
                    </tr>
                    <tr>
                    <th>Trafik</th>
                    <th id="barisKonsTrafik1">1</th>
                    <th id="barisKonsTrafik2">1</th>
                    <th id="barisKonsTrafik3">1</th>
                    <th id="barisKonsTrafik4">1</th>
                    <th id="barisKonsTrafik5">1</th>
                    <th id="barisKonsTrafik6">4</th>
                        <th id="barisKonsTrafik7">1</th>
                    </tr>
                    <tr>
                    <th>Harga Sewa</th>
                    <th id="barisKonsHargaSewa1">1</th>
                    <th id="barisKonsHargaSewa2">1</th>
                    <th id="barisKonsHargaSewa3">1</th>
                    <th id="barisKonsHargaSewa4">1</th>
                    <th id="barisKonsHargaSewa5">1</th>
                    <th id="barisKonsHargaSewa6">4</th>
                        <th id="barisKonsHargaSewa7">1</th>
                    </tr>
                    <tr>
                    <th>Luas Parkir</th>
                    <th id="barisKonsLuasParkir1">1</th>
                    <th id="barisKonsLuasParkir2">1</th>
                    <th id="barisKonsLuasParkir3">1</th>
                    <th id="barisKonsLuasParkir4">1</th>
                    <th id="barisKonsLuasParkir5">1</th>
                    <th id="barisKonsLuasParkir6">4</th>
                        <th id="barisKonsLuasParkir7">1</th>
                    </tr>
                    <tr>
                    <th>Jumlah Pesaing</th>
                    <th id="barisKonsJumlahPesaing1">1</th>
                    <th id="barisKonsJumlahPesaing2">1</th>
                    <th id="barisKonsJumlahPesaing3">1</th>
                    <th id="barisKonsJumlahPesaing4">1</th>
                    <th id="barisKonsJumlahPesaing5">1</th>
                    <th id="barisKonsJumlahPesaing6">4</th>
                         <th id="barisKonsJumlahPesaing7">1</th>
                    </tr>
                    <tr>
                    <th>Kondisi Fisik</th>
                    <th id="barisKonsKondisiFisik1">1</th>
                    <th id="barisKonsKondisiFisik2">1</th>
                    <th id="barisKonsKondisiFisik3">1</th>
                    <th id="barisKonsKondisiFisik4">1</th>
                    <th id="barisKonsKondisiFisik5">1</th>
                    <th id="barisKonsKondisiFisik6">4</th>
                        <th id="barisKonsKondisiFisik7">1</th>
                    </tr>
                </table>
                <hr>
            </div>
            <div id="lambdaMaks" >
                <h2>Penjumlahan dari Perkalian Jumlah Kolom dengan Eigen Vektor</h2>
                <h2>(LamdaMaks)= <span id="lamdaMaks" style='color:blue'></span></h2>
            </div>
            <div id="konsistensiIndex" >
                <h2>Consistency Index (CI) = (LamdaMaks-n)/(n-1)</h2>
                <h2>(CI)= <span id="consistencyIndex" style='color:blue'></span></h2>
            </div>
            <div id="nilaiCR" >
                <h2>CR = CI/RI</h2>
                <h2>(CR)= <span id="cr" style='color:blue'></span> <span id="hasilPreferensiPembobotan"></span></h2>
            <hr>
            </div>
            <div id="matriksDataAsli" >
            <h2>Matriks Data Asli</h2>
            <table id="tabelDataAsli" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksNormData" >
            <h2>Normalisasi Matriks Dengan Normalisasi Linear</h2>
            <table id="tabelMatriksNormalisasi" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksNormXBobot" >
            <h2>Normalisasi X Bobot</h2>
            <table id="tabelMatriksXBobot" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksSR" >
            <h2>Menghitung Nilai S dan R</h2>
            <table id="tabelMatriksSR" style="width:100%"></table>
            <hr>
            <h2>Dengan nilai sensitifitas(V) =0.5</h2>
            </div>
            <div id="matriksIndexViqor" >
            <h2>Index Viqor (Q)</h2>
            <table id="tabelMatriksViqor" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksIndexQ" >
            <h2>Perankingan Berdasarkan Index Viqor (Q)</h2>
            <table id="tabelMatriksQ" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksIndex4" >
            <h2>Perankingan Berdasarkan Index V=0.4 </h2>
            <table id="tabelMatriks4" style="width:100%"></table>
            <hr>
            </div>
            <div id="matriksIndex6" >
            <h2>Perankingan Berdasarkan Index V=0.6 </h2>
            <table id="tabelMatriks6" style="width:100%"></table>
            <hr>
            </div>
            <div id="nilaiDq" >
                <h2>Nilai DQ = 1/(n-1)  = <span id="dq" style='color:blue'></span></h2>
            <hr>
            </div>
            <div id="nilaiAmA1" ></div>
            <p></p>
        </form>
        </div>
    
        
</body>
    <tail>
        <script language="javascript" src="dataAsliPresentasi.js" type="text/javascript"></script>
    <script src="dummyform.js" type="text/javascript"></script>
    </tail>
</html>