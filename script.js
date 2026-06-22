let allData = [];

fetch('bursaries.json')
  .then(res => res.json())
  .then(data => {
    allData = data;
    render(data);
  });

function render(data) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">Apply Here</a>
    `;

    container.appendChild(div);
  });
}

function filterBursaries() {
  const q = document.getElementById("search").value.toLowerCase();

  const filtered = allData.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.description.toLowerCase().includes(q)
  );

  render(filtered);
}
