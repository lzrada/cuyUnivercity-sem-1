let i = 0;

// function biasa

const mahasiswa = [
  {
    nama: "ardi",
    alamat: "kota bandung",
    pekerjaan: "FE developer",
    usia: 20,
  },
  {
    nama: "budi",
    alamat: "kota bandung",
    pekerjaan: "FE developer",
    usia: 20,
  },
];
function getDetailData() {
  mahasiswa.map(function (result, i) {
    console.log(result);
  });
  console.log(`data yang anda cari adalah : ", ${mahasiswa}`);
}

function getDetailHuman() {
  i += 1;
  if (i > 5) {
    console.log("lebih dari 5x di klik");
  } else {
    console.log("jatah klik masih ada");
  }
}
// arrow function syntax
const getDetailHuman2 = () => {
  i += 1;
  i > 5 ? console.log("lebih dari 5x di klik broh") : console.log("jatah klik masih ada");
};

class Hewan {
  warna;
  keahlian;
  constructor(nama) {
    this.nama = nama;
  }
  set newColor(color) {
    this.warna = color;
  }
  set newSkill(skill) {
    this.keahlian = skill;
  }
  get detail() {
    return `hi saya ${this.nama} dengan warna ${this.warna} dan keahlian ${this.keahlian}`;
  }
}

const kucing = new Hewan("anjai");
kucing.newColor = "hitam";
kucing.newSkill = "bersuara";
console.log(kucing.detail);
