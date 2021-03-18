//API end point: https://api.exchangeratesapi.io/latest

document.addEventListener("DOMContentLoaded", function() {
  getCurrencyList();
})


function getCurrencyList() {
  let url = "https://api.exchangeratesapi.io/latest"
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
     url,
     true
  );
  xhr.onload = function() {
    if(this.status == 200) {
      let result = JSON.parse(this.responseText);
      console.log(result.rates);
      let list = Object.keys(result.rates);
      list.push("EUR");
      outputCurrencySelection(list);
    }
  }
  xhr.send();
}

function outputCurrencySelection(list) {
  let selection1 = document.querySelector("#currency1");
  let selection2 = document.querySelector("#currency2");
  let output = "";
  list.forEach((item, i) => {
    output += `<option value="${item}">${item}</option>`;
  });
  console.log(output);
  selection1.innerHTML = output;
  selection2.innerHTML = output;
}
