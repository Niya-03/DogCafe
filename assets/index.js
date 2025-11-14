function loadHTML(id, url) {
  fetch(url, { cache: "force-cache" })
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

loadHTML("header", "header.html");
loadHTML("footer", "footer.html");