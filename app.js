const data = [
  {type:"notes", title:"Indian Polity – Basic Notes", desc:"Original short notes for revision.", url:"#"},
  {type:"notes", title:"Indian Geography – Physical Features", desc:"Quick revision material.", url:"#"},
  {type:"pyq", title:"BPSC Practice Set 01", desc:"Original practice questions.", url:"#"},
  {type:"quiz", title:"Polity MCQ – 10 Questions", desc:"Practice quiz.", url:"#"},
  {type:"videos", title:"Free Video Resources", desc:"Add your own or properly licensed YouTube videos.", url:"#"}
];

const items = document.getElementById("items");
const search = document.getElementById("search");

function render(filter="") {
  const q = filter.toLowerCase();
  const list = data.filter(x => !q || `${x.type} ${x.title} ${x.desc}`.toLowerCase().includes(q));
  items.innerHTML = list.length ? list.map(x =>
    `<article class="item"><span class="tag">${x.type.toUpperCase()}</span><h3>${x.title}</h3><p>${x.desc}</p><a href="${x.url}">Open →</a></article>`
  ).join("") : "<p>No material found.</p>";
}
render();

document.querySelectorAll(".card").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.section;
    render(type);
    document.querySelector(".content").scrollIntoView({behavior:"smooth"});
  });
});
search.addEventListener("input", e => render(e.target.value));

document.getElementById("telegramBtn").addEventListener("click", () => {
  if (window.Telegram?.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
  } else {
    alert("Is page ko Telegram Web App ke through open karein.");
  }
});
