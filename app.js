let angka = 0;

const nilai = document.querySelector("#nilai");
const tombols = document.querySelectorAll(".tombol");

tombols.forEach(function (tombol) {
  tombol.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("turun")) {
      angka--;
    } else if (styles.contains("naik")) {
      angka++;
    } else if (styles.contains("ulang")) {
      angka = 0;
    }
    if (angka > 0) {
      nilai.style.color = "lightgreen";
    }
    if (angka < 0) {
      nilai.style.color = "red";
    }
    if (angka === 0) {
      nilai.style.color = "black";
    }
    nilai.textContent = angka;
  });
});
