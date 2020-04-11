// variabel untuk memanggil class css dari attribut 
let c = document.querySelector(".clock");
let d = document.querySelector(".date");

// interval untuk menginisialiasi waktu yang dibuat
setInterval(() => {
    let today = new Date();

    let hh   = today.getHours();
    let mm   = today.getMinutes();
    let ss   = today.getSeconds();
    let date = today.toDateString();

    c.innerText = `${padding(hh)} : ${mm} : ${padding(ss)}`;
    d.innerText = date;
}, 100);

function padding(n) {
    return n.toString().padStart(2, "0");
}