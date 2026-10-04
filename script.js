// MODUL 4: PORTOFOLIO DINAMIS (DOM)
const dataPortofolio = [
  { judul: "Desain Banner Informasi", deskripsi: "Merancang visual banner untuk kegiatan acara." },
  { judul: "Program Struktur Data Java", deskripsi: "Implementasi Circular Queue dan manipulasi array." }
];
const containerPortofolio = document.querySelector("#container-portofolio");
const formPortofolio = document.querySelector("#form-portofolio");

function renderPortofolio() {
  containerPortofolio.innerHTML = "";
  dataPortofolio.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card-item";
    card.innerHTML = `<h3>${item.judul}</h3><p>${item.deskripsi}</p><button class="btn-hapus-porto" data-index="${index}">Hapus</button><hr>`;
    containerPortofolio.appendChild(card);
  });
}
renderPortofolio();

formPortofolio.addEventListener("submit", (e) => {
  e.preventDefault();
  const judul = document.querySelector("#input-judul").value.trim();
  const deskripsi = document.querySelector("#input-deskripsi").value.trim();
  if (judul && deskripsi) {
    dataPortofolio.push({ judul, deskripsi });
    renderPortofolio();
    formPortofolio.reset();
  }
});

containerPortofolio.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-hapus-porto")) {
    const index = e.target.dataset.index;
    dataPortofolio.splice(index, 1);
    renderPortofolio();
  }
});

// MODUL 5: EVENT HANDLING & FORM KOMENTAR
const formKomentar = document.querySelector("#form-komentar");
const inputNama = document.querySelector("#input-nama");
const inputPesan = document.querySelector("#input-pesan");
const daftarKomentar = document.querySelector("#daftar-komentar");
const pesanError = document.querySelector("#pesan-error");
const btnHapusSemua = document.querySelector("#btn-hapus-semua");

formKomentar.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = inputNama.value.trim();
  const pesan = inputPesan.value.trim();
  if (nama === "" || pesan.length < 5) {
    pesanError.textContent = "Nama wajib diisi dan komentar minimal 5 karakter!";
    pesanError.style.display = "block";
    return;
  }
  pesanError.style.display = "none";
  const li = document.createElement("li");
  li.innerHTML = `<strong>${nama}:</strong> ${pesan} <button class="btn-hapus-komentar">Hapus</button>`;
  daftarKomentar.appendChild(li);
  formKomentar.reset();
});

daftarKomentar.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-hapus-komentar")) {
    e.target.parentElement.remove();
  }
});

btnHapusSemua.addEventListener("click", () => {
  daftarKomentar.innerHTML = "";
});

// FITUR TOGGLE DARK MODE (MODUL 4 & 5
const tombolTema = document.querySelector("#btn-tema");

function toggleTema() {
  document.body.classList.toggle("dark-mode");
  
  // Ubah teks tombol sesuai kondisi tema
  if (document.body.classList.contains("dark-mode")) {
    tombolTema.textContent = "Mode Terang";
  } else {
    tombolTema.textContent = "Mode Gelap";
  }
}

// 1. Toggle via Klik Tombol (Modul 4)
if (tombolTema) {
  tombolTema.addEventListener("click", toggleTema);
}

// 2. Toggle via Shortcut Keyboard Huruf 'D' (Modul 5)
document.addEventListener("keydown", (e) => {
  // Dipastikan shortcut tidak aktif saat user mengetik di form/input
  if (e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
    if (e.key.toLowerCase() === "d") {
      toggleTema();
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-kontak-btn');
    const content = document.getElementById('kontak-content');
    const toggleText = document.getElementById('toggle-text');
    const toggleIcon = document.getElementById('toggle-icon');

    toggleBtn.addEventListener('click', function () {
        const isHidden = content.classList.toggle('hidden');

        if (isHidden) {
            toggleText.textContent = 'Tampilkan Kontak';
            toggleIcon.className = 'fa-solid fa-eye';
            toggleBtn.setAttribute('aria-expanded', 'false');
        } else {
            toggleText.textContent = 'Sembunyikan Kontak';
            toggleIcon.className = 'fa-solid fa-eye-slash';
            toggleBtn.setAttribute('aria-expanded', 'true');
        }
    });
});