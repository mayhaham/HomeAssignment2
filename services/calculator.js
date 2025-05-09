document.getElementById('quote-form').onsubmit = calculatePrice;
document.getElementById('quote-form').onreset = resetForm;

function calculatePrice() {
  var type = document.getElementById('site-type').value;
  var pages = parseInt(document.getElementById('num-pages').value);
  var custom = document.getElementById('custom-design').checked;

  if (type === "" || isNaN(pages) || pages < 1 || pages > 10) {
    alert("Please fill out all fields correctly.");
    return false;
  }

  var basePrice = 0;
  var displayType = "";

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

  var extraPages = 0;
  if (pages > 1) {
    extraPages = (pages - 1) * 200;
  }

  var customPrice = 0;
  var customText = "No";
  if (custom) {
    customPrice = 1000;
    customText = "Yes";
  }

  var total = basePrice + extraPages + customPrice;

  var resultBox = document.getElementById("result");
  resultBox.style.display = "block";

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
  var resultBox = document.getElementById("result");
  resultBox.style.display = "none";
  resultBox.innerHTML = "<p>Fill out the form to get a detailed quote.</p>";
}
