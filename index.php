<html>
    <head>
        <link rel="stylesheet" type="text/css" href="index.css">
        <script src="form.js" type="text/javascript"></script>
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
            <input type="button" name="button" value="Tampilkan Rekomendasi" onclick="tampilRekomendasi(true)" id="buttonTampilrekomendasi">
            <div id="divPrintHasil">
            <div id="matriksRekomendasi" >
            <hr>
            <h2>Hasil Rekomendasi</h2>
            <table id="tabelRekomendasi" style="width:100%"></table>
            </div>
            </div>
            <p></p>
        </form>
        </div>
    
        
</body>
    <tail>
        <script language="javascript" src="dataAsli.js" type="text/javascript"></script>
    <script src="dummyform.js" type="text/javascript"></script>
    </tail>
</html>