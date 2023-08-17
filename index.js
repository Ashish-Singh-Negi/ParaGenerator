const input = document.getElementById("numberOfWords");
const container = document.getElementById("container");
const btn = document.getElementById("myBtn");

const wordGenerator = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * 25);
    text += letters[random];
  }
  return text;
};

const paraGenerator = () => {
  var data = "";

  const numberOfWords = Number(input.value);
  const para = document.createElement("p");

  for (let i = 1; i <= numberOfWords; ++i) {
    var random = Math.floor(Math.random() * 15);

    data += wordGenerator(random);
    data += " ";
  }

  para.innerText = data;
  para.setAttribute("class", "paras");

  container.append(para);
};

btn.addEventListener("click", paraGenerator);
