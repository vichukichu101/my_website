// SHOW SECTIONS
function showSection(id) {
    document.querySelectorAll(".section")
        .forEach(sec => sec.style.display = "none");

    document.getElementById(id).style.display = "block";

    if (id === "gallery") loadMemories();
}

// SAVE MEMORY
function saveMemory() {
    const file = document.getElementById("photo").files[0];
    const caption = document.getElementById("caption").value;

    const reader = new FileReader();

    reader.onload = function () {
        let memories =
            JSON.parse(localStorage.getItem("memories")) || [];

        memories.push({
            img: reader.result,
            text: caption,
            date: new Date().toLocaleDateString()
        });

        localStorage.setItem("memories",
            JSON.stringify(memories));

        alert("Memory Saved ❤️");
    };

    if (file) reader.readAsDataURL(file);
}

// LOAD GALLERY
function loadMemories() {
    const list = document.getElementById("memoryList");
    list.innerHTML = "";

    let memories =
        JSON.parse(localStorage.getItem("memories")) || [];

    memories.reverse().forEach(m => {
        list.innerHTML += `
            <div class="memory">
                <img src="${m.img}">
                <h3>${m.text}</h3>
                <small>${m.date}</small>
            </div>
        `;
    });
}


// DATE IDEAS
function dateIdea() {
    const ideas = [
        "Ice cream date 🍦",
        "Photo walk 📸",
        "Dance night 💃",
        "Cook together 🍝",
        "Movie + Snacks 🎬"
    ];

    document.getElementById("idea").innerText =
        ideas[Math.floor(Math.random()*ideas.length)];
}

// SAVINGS
let goal = 100;

function addSavings() {
    let total =
        Number(localStorage.getItem("savings")) || 0;

    const add = Number(document.getElementById("amount").value);

    total += add;

    localStorage.setItem("savings", total);

    updateSavings();
}

function updateSavings() {
    let total =
        Number(localStorage.getItem("savings")) || 0;

    document.getElementById("totalSaved")
        .innerText = "Saved: ₹" + total;

    let percent = Math.min((total/goal)*100,100);
    document.getElementById("bar").style.width =
        percent + "%";
}

updateSavings();


// SECRET LOVE MESSAGE
document.getElementById("title").onclick = () => {
    alert("You are my favorite memory ❤️");
};

setInterval(()=>{
    const heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),4000);
},800);


const messages=[
 "You make ordinary days special ❤️",
 "Every memory here is my happiness",
 "I built this only for you 💕",
 "Our story is my favorite story"
];

document.getElementById("title").onclick=()=>{
 alert(messages[Math.floor(Math.random()*messages.length)]);
};

// IMAGE PREVIEW BEFORE SAVE
document.getElementById("photo").addEventListener("change", function () {

    const file = this.files[0];
    const preview = document.getElementById("preview");

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            preview.src = e.target.result;
            preview.style.display = "block";
        }

        reader.readAsDataURL(file);
    }
});

