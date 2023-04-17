var games = [
    {
        img:"g1.png",
        name: "Kine",
        desc: "Install"
    },
    {
        img:"g2.png",
        name: "Journey",
        desc: "Install"
    },
    {
        img:"g3.jpg",
        name: "Fifa 23",
        desc: "Install"
    },
    {
        img:"g4.jpg",
        name: "Z World War",
        desc: "Install"
    },
    {
        img:"g5.jpg",
        name: "Jedi Fallen Order",
        desc: "Install"
    },
    {
        img:"g6.jpg",
        name: "Abzu",
        desc: "Install"
    },
    {
        img:"g7.jpg",
        name: "GTA 5",
        desc: "Install"
    },
    {
        img:"g8.jpg",
        name: "Mordhau",
        desc: "Install",
    },
    {
        img:"g9.jpg",
        name: "Hitman",
        desc: "",
    }
]
var result="";
for (var i = 0; i < games.length; i++) {
    area.innerHTML +=
    `<div class="col-2">
        <div class="lal">
                    </div>
                    <img scr="./assets/photo/${games[i].img}" alt="">
                    </div>
                    <div>
                        <h3>${games[i].name}</h3>
                        <span>${games[i].desc}</span>
                    </div>
</div>`
}
items.innerHTML = result;