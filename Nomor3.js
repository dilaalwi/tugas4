var terkecil = 5
var terbesar = 20
var semuanilai = [2, 25, 4, 14, 17, 30, 8]
var hasil = semuanilai.filter(function(nilai) {
    return (nilai > terkecil && nilai < terbesar);
});

hasil2 = hasil.sort(function(a, b){return a-b}) //mengurutkan dari angka terkecil ke terbesar
console.log(hasil2)
 
if (hasil2 < terkecil) {
    console.log('Nilai akhir sudah lebih besar dari nilai awal')
}else{
    console.log('Nilai akhir harus lebih besar dari nilai awal')
}

hasil3 = hasil.includes(6)
if (hasil3 == hasil2){
    console.log('nilai ditemukan')
}else{
    console.log('nilai tidak ditemukan')
}
console.log(hasil3)


