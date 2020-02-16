var siswa = JSON.parse(localStorage.getItem("localSiswa"));

var localSiswa = JSON.parse(localStorage.getItem("localSiswa"));

if(localSiswa == null) {
    siswa = [];
}

console.log(siswa);