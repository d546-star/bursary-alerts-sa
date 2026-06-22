let allData = [];

async function load() {
  const res = await fetch('bursaries.json');
  allData = await res.json();
  render(allData);
}

function render(data) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const html = data.map(item => `
    <div class="card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">Apply</a>
    </div>
  `).join("");

  list.innerHTML = html;
}

function filterBursaries() {
  const q = document.getElementById("search").value.toLowerCase();
  render(allData.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.description.toLowerCase().includes(q)
  ));
}

load();
