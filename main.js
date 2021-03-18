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
      console.log(list);
    }
  }
  xhr.send();
}
