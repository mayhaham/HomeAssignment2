function calculatePrice() {
  let type = document.getElementById("site-type").value;
  let pages = parseInt(document.getElementById("num-pages").value);
  let custom = document.getElementById("custom-design").checked;

  if (type === "" || isNaN(pages) || pages < 1 || pages > 10) {
    alert("Please fill out all fields correctly.");
    return false;
  }

  let basePrice = 0;
  let displayType = "";

  if (type === "business") {
    basePrice = 1000;
    displayType = "Business";
  }
  if (type === "store") {
    basePrice = 2000;
    displayType = "Online Store";
  }
  if (type === "blog") {
    basePrice = 1500;
    displayType = "Blog";
  }

  let extraPages = 0;
  if (pages > 1) {
    extraPages = (pages - 1) * 200;
  }

  let customPrice = 0;
  let customText = "No";

  if (custom) {
    customPrice = 1000;
    customText = "Yes";
  }

  let total = basePrice + extraPages + customPrice;

  let resultBox = document.getElementById("result");
  resultBox.className = "result-box";

  resultBox.innerHTML =
    "<ul class='summary-list'>" +
    "<li>Site Type: " + displayType + "</li>" +
    "<li>Number of Pages: " + pages + "</li>" +
    "<li>Custom Design: " + customText + "</li>" +
    "<li>Total Price: ₪" + total + "</li>" +
    "</ul>" +
    "<p class='thank-you'>Thank you for using our quote calculator!</p>";

  return false;
}

function resetForm() {
  let resultBox = document.getElementById("result");
  resultBox.className = "result-box hidden";
  resultBox.innerHTML = "<p>Fill out the form to get a detailed quote.</p>";
}

document.getElementById("quote-form").onsubmit = calculatePrice;
document.getElementById("quote-form").onreset = resetForm;
