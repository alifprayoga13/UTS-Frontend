function hasil() {
  var harga = parseInt(document.getElementById("harga").value);
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var bayar = parseInt(document.getElementById("bayar").value);
  var total = harga * jumlah;

  if (bayar >= total && total >= 645000) {
    var diskon = 0.35;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "35%";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  } else if (bayar >= total && total >= 430000) {
    var diskon = 0.25;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "25%";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  } else if (bayar >= total && total >= 257000) {
    var diskon = 0.15;
    var totalPembayaran = total - total * diskon;
    var kembalian = bayar - totalPembayaran;
    document.getElementById("kembalian").innerHTML = kembalian;
    document.getElementById("diskon").innerHTML = "15%";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
  }else if(bayar === total){
    var totalPembayaran = total;
    document.getElementById("kembalian").innerHTML = "0";
    document.getElementById("diskon").innerHTML = "0%";
    document.getElementById("totalPembayaran").innerHTML = totalPembayaran;
    document.getElementById("total").innerHTML = total;
    alert("Uang anda Pass Terima kasih !!!")
  }else{
    alert("Uang kamu Tidak Cukup !!!")
  }
}

