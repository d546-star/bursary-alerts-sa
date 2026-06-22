let allData = [];

async function loadBursaries() {
  const res = await fetch('bursaries.json');
  allData = await res.json();
  render(allData);
}

function render(data) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank" rel="noopener">Apply</a>
    `;

    fragment.appendChild(div);
  });

  container.appendChild(fragment);
}

function filterBursaries() {
  const q = document.getElementById("search").value.toLowerCase();

  const filtered = allData.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.description.toLowerCase().includes(q)
  );

  render(filtered);
}

loadBursaries();
