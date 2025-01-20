// Membuat fungsi kalkulasi yang akan dipanggil saat elemen button diklik
function calculate() {
    // Inisialisasi elemen HTML
    const beratBadanInput = document.getElementById("beratBadan");
    const tinggiBadanInput = document.getElementById("tinggiBadan");
    const beratBadan = parseFloat(beratBadanInput.value);
    const tinggiBadan = parseFloat(tinggiBadanInput.value) / 100;

    // Validasi input dari user. Apabila input kosong, maka akan menghasilkan NaN, kemudian saat kondisi isNaN terpenuhi, maka peringatan input tidak valid akan ditampilkan.
    if (isNaN(beratBadan) || isNaN(tinggiBadan)) {
        if (isNaN(beratBadan)) {
            beratBadanInput.value = '';
            beratBadanInput.placeholder = 'Masukkan angka yang valid';
            beratBadanInput.style.borderBottom = '2px solid red';
        }
        if (isNaN(tinggiBadan)) {
            tinggiBadanInput.value = '';
            tinggiBadanInput.placeholder = 'Masukkan angka yang valid';
            tinggiBadanInput.style.borderBottom = '2px solid red';
        }
        return;
    }

    // Kalkulasi BMI berdasarkan rumus BMI
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);

    // Logika perbandingan berdasarkan kategori berat badan
    let comment;
    if (bmi < 18.5) {
        comment = "Berat Badan Kurang";
    } else if (bmi >= 18.5 && bmi < 25) {
        comment = "Berat Badan Normal & Ideal";
    } else if (bmi >= 25 && bmi < 30) {
        comment = "Berat Badan Berlebih";
    } else if (bmi >= 30 && bmi < 35) {
        comment = "Obesitas Tingkat I";
    } else if (bmi >=35 && bmi < 40){
        comment = "Obesitas Tingkat II"
    } else {
        comment = "Obesitas Tingkat III"
    }

    // Jika hasil BMI lebih dari 100 "OR" BMI kurang dari 10 "OR" value berat badan dari user sama dengan nol atau NaN, tampilkan peringatan untuk memasukkan angka yang valid
    if(bmi > 100 || bmi < 10 || beratBadan == 0){
        alert("Masukkan angka yang valid");
        return;
    }

    const resultBmi = document.getElementById("resultBmi");
    const resultCategory = document.getElementById("resultCategory");

    // Menampilkan nilai BMI berdasarkan nilai yang sudah dikalkulasikan dengan rumus BMI
    resultBmi.textContent = bmi.toFixed(2); // toFixed() untuk Membatasi jumlah digit di bagian belakang sebanyak 2 digit saja

    // Menampilkan jenis kategori berat badan berdasarkan klasifikasinya 
    resultCategory.textContent = comment;
}

// Memanggil fungsi "calculate()" saat form telah diklik
document.getElementById("submitBmi").addEventListener("click", function(e) {
    e.preventDefault();
    calculate();
});