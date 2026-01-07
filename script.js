let jokesData=[];
const API_URL= "https://v2.jokeapi.dev/joke/Programming?amount=10";
 
const cardContainer = document.getElementById("card-container");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const statusMessage  = document.getElementById("statusMessage");
const modal = document.getElementById("detailModal");
const closeModalBtn= document.getElementById("closeModalBtn");
const closeIcon = document.querySelector(".close-btn");

async function fetchJokes(params) {
    statusMessage.textContent = "Sisteme bağlanılıyor... Veriler yükleniyor..."

try{
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.error){
        throw new Error("API Hatası oluştu.")
    }
jokesData = data.jokes;
statusMessage.textContent = "";
renderJokes(jokesData);
}
catch (error){
    console.error("Hata:", error),
    statusMessage.textContent = "Hata oluştu: Veri çekilemedi"
    statusMessage.style.color="red";
}
}

function renderJokes(jokes) {
    cardContainer.innerHTML = "";
    
    if (jokes.length === 0) {
        statusMessage.textContent = "Sonuç bulunamadı.";
        return;
    } else {
        statusMessage.textContent = "";
    }

    
    jokes.forEach(joke => {
        const jokeTitle = joke.type === 'twopart' ? joke.setup : "Tek Satırlık Şaka";
        const jokeContent = joke.type === 'twopart' ? "Cevabı görmek için detaya tıkla..." : joke.joke;

       
        const cardHTML = `
            <div class="card">
                <span class="tag">${joke.type}</span>
                <h3>${jokeTitle}</h3>
                <p>${jokeContent}</p>
                <button class="detail-btn" onclick="openDetail(${joke.id})">DETAY</button>
            </div>
        `; 

        cardContainer.innerHTML += cardHTML;
    });
}


function handleSearch(){
const searchText = searchInput.value.toLowerCase();
const selectedType = categoryFilter.value;
const filteredJokes = jokesData.filter(joke => {       
        const setupText = joke.setup ? joke.setup.toLowerCase() : "";
        const jokeText = joke.joke ? joke.joke.toLowerCase() : "";
        const matchesSearch = setupText.includes(searchText) || jokeText.includes(searchText);
        const matchesType = selectedType === "all" || joke.type === selectedType;

        return matchesSearch && matchesType;
    });
renderJokes(filteredJokes);
}

function openDetail(id){
    const joke = jokesData.find(item => item.id === id);

    if (joke) {
        const modalTitle = document.getElementById("modalTitle");
        const modalBody = document.getElementById("modalBody");
         modalTitle.innerText = joke.category + "Şakası";

         if (joke.type === 'twopart') {
            modalBody.innerHTML = `
                <p style="color:#aaa">SORU:</p>
                <h3 style="color:var(--neon-green)">${joke.setup}</h3>
                <hr style="border-color:#333">
                <p style="color:#aaa">CEVAP:</p>
                <h2 style="color:var(--neon-purple)">${joke.delivery}</h2>
            `;
            
         } else {
            modalBody.innerHTML = `
                <h3 style="color:var(--neon-green)">${joke.joke}</h3>
            `;
         }
         modal.classList.remove("hidden");
    }
}

function closeModal() {
    modal.classList.add("hidden");
}
searchBtn.addEventListener("click", handleSearch);
closeModalBtn.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);


fetchJokes();