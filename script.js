async function fetchData() {
  try {
    let res = await fetch("./data.json");
    let data = await res.json();
    showData(data);
  } catch (err) {
    console.log("Error: ", err);
  }
}

function showData(data) {
  const ul = document.getElementById("card-container");

  const title = document.getElementById("title");
  title.innerHTML = `${data.title} >`;

  data.articles.map((el) => {
    let li = document.createElement("li");
    li.classList.add("card");

    let seperator = document.createElement("div");
    seperator.classList.add("seperator");

    let category = document.createElement("h5");
    category.classList.add("card-category");
    category.innerHTML = `${el.primarySectionRouteName}`;

    let headline_a = document.createElement("a");
    headline_a.classList.add("card-headline__link");
    headline_a.href = `${el.link}`;
    headline_a.innerHTML = `${el.headline}`;

    let headline = document.createElement("h4");
    headline.classList.add("card-headline");
    headline.appendChild(headline_a);

    let image = document.createElement("img");
    image.classList.add("card-image");
    image.src = `${el.thumbnail.src}`;

    let para = document.createElement("p");
    para.classList.add("card-standfirst");
    para.innerHTML = `${el.standfirst}`;

    let card_detail = document.createElement("div");
    card_detail.classList.add("card-detail");

    card_detail.appendChild(headline);
    card_detail.appendChild(image);
    card_detail.appendChild(para);

    li.appendChild(category);
    li.appendChild(card_detail);
    li.appendChild(seperator);
    ul.appendChild(li);
  });
}

fetchData();
