// Membuat elemen gambar
var npImage = document.createElement("img");
npImage.setAttribute("src", "https://cdn.jsdelivr.net/gh/samuelpasaribu/defacer/img/haxorai-icon.svg");
npImage.setAttribute("alt", "haxorai-icon");
npImage.setAttribute("style", "position: fixed;top: 8px;left: 8px;z-index: 99999;opacity: 0.80;width: 35px;height: 35px;border-radius: 10%;box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.65), 0 0 13px 5px rgba(0, 0, 0, 0.28);");

// Menambahkan elemen gambar ke dalam body dokumen
document.body.appendChild(npImage);

// Membuat elemen teks
var nathanText = document.createElement("div");
nathanText.setAttribute("style", "position: fixed;bottom: 4px; left: 50%;transform: translateX(-50%);z-index:9999;background:rgba(0, 0, 0, 0.6);color:#ffffff;font-size:16px;padding:1px 5px;border-radius:6px;opacity:0.80;text-align:center;font-weight:bold;font-family:sans-serif;text-shadow:0px 0px 5px rgba(0, 0, 0, 1);");
nathanText.innerHTML = "games.haxorai.com";

// Menambahkan elemen teks ke dalam body dokumen
document.body.appendChild(nathanText);

// Mengatur opasitas elemen teks menjadi 0
nathanText.style.opacity = "0";

// Mendapatkan domain saat ini
var NPcurrentDomain = window.location.hostname;
var NPallowedDomain = "games.haxorai.com";

// Mengecek apakah domain saat ini adalah domain yang diizinkan
if (NPcurrentDomain !== NPallowedDomain) {
  // Mengubah warna teks menjadi biru dan menambahkan cursor pointer
  nathanText.style.color = "#6ec0ff";
  nathanText.style.cursor = "pointer";
  npImage.style.cursor = "pointer";
  
  // Menambahkan event listener untuk membuka link pada domain yang diizinkan saat teks atau ikon diklik
  nathanText.addEventListener("click", function () {
    window.open("https://" + NPallowedDomain, "_blank");
  });
  npImage.addEventListener("click", function () {
    window.open("https://games.haxorai.com/", "_blank");
  });
}

// Fungsi animasi fadeIn untuk menampilkan elemen teks dan elemen gambar
var fadeInAnimationNathan = function (timestampPrinsley) {
  var opacityNathan = parseFloat(nathanText.style.opacity);
  if (opacityNathan < 0.80) {
    opacityNathan += 0.01 * ((timestampPrinsley - fadeInAnimationNathan.startTime) / 900);
    if (opacityNathan > 0.80) opacityNathan = 0.80;
    nathanText.style.opacity = opacityNathan;
    npImage.style.opacity = opacityNathan;
    if (opacityNathan < 0.80) {
      requestAnimationFrame(fadeInAnimationNathan);
    }
  }
};

// Menentukan waktu awal animasi fadeIn
fadeInAnimationNathan.startTime = performance.now();
requestAnimationFrame(fadeInAnimationNathan);

// Setelah 2800ms, menjalankan animasi fadeOut untuk menyembunyikan elemen teks dan elemen gambar
setTimeout(function () {
  var starttimeztampNathan = performance.now();
  var fadeOutAnimationNathan = function (timestampPrinsley) {
    var opacityNathan = parseFloat(nathanText.style.opacity);
    if (opacityNathan > 0) {
      opacityNathan -= 0.01 * ((timestampPrinsley - fadeOutAnimationNathan.startTime) / 700);
      if (opacityNathan < 0) opacityNathan = 0;
      nathanText.style.opacity = opacityNathan;
      npImage.style.opacity = opacityNathan;
      if (opacityNathan > 0) {
        requestAnimationFrame(fadeOutAnimationNathan);
      } else {
        // Menghapus elemen teks dan elemen gambar setelah animasi fadeOut selesai
        nathanText.remove();
        npImage.remove();
      }
    }
  };

  // Menentukan waktu awal animasi fadeOut
  fadeOutAnimationNathan.startTime = starttimeztampNathan;
  requestAnimationFrame(fadeOutAnimationNathan);
}, 2800);