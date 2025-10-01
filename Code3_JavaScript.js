// Pokemon Cards JavaScript Code
let main = document.getElementById("main");
let arr = [
    "https://i.pinimg.com/736x/b0/f3/a9/b0f3a97edcdc02469edd5537c74627de.jpg",
    "https://i.pinimg.com/736x/e6/e1/45/e6e1457b6a612d2ce9f890991c3923f2.jpg",
    "https://i.pinimg.com/736x/a1/93/e5/a193e55491875194821e27a5d2411b5c.jpg",
    "https://i.pinimg.com/736x/1f/34/df/1f34dfcf0a58bdd202ea7d21e8e7bb3d.jpg",
    "https://i.pinimg.com/1200x/c9/89/cd/c989cd905e5059fcc49950ec0737c507.jpg",
    "https://i.pinimg.com/736x/1f/f3/5b/1ff35b5ed70b0a8f87b219abaf7ffe0a.jpg",
    "https://i.pinimg.com/736x/e7/81/ba/e781ba0e611a0db28743746411b7c81a.jpg",
    "https://i.pinimg.com/736x/c0/05/f0/c005f06de3871ca5a6e44b43ff4f97bb.jpg",
    "https://i.pinimg.com/736x/5a/fe/ba/5afeba032074e36c3c9cb8df613b9cd1.jpg",
    "https://i.pinimg.com/1200x/9a/34/66/9a34666d2bf44076ffb310a18b056da5.jpg",
    "https://i.pinimg.com/736x/ae/06/db/ae06db7f4aa2579ec486ee55f10d4189.jpg"
];
let s = "";
for(let i=1;i<=110;i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"> <img src="${arr[r]}"> </div>`;
}
main.innerHTML = s;