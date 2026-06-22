fetch('bursaries.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("list");

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
  });
