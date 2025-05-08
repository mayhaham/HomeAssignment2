document.getElementById('quote-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const type = document.getElementById('site-type').value;
  const pages = parseInt(document.getElementById('num-pages').value);
  const custom = document.getElementById('custom-design').checked;

  if (!type || isNaN(pages) || pages < 1 || pages > 10) {
    alert('Please fill out all fields correctly.');
    return;
  }

  let basePrice = 0;
  switch (type) {
    case 'business': basePrice = 1000; break;
    case 'store': basePrice = 2000; break;
    case 'blog': basePrice = 1500; break;
  }

  const extraPages = pages > 1 ? (pages - 1) * 200 : 0;
  const customPrice = custom ? 1000 : 0;
  const total = basePrice + extraPages + customPrice;

  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `
    <ul class="summary-list">
      <li>Site Type: ${type.charAt(0).toUpperCase() + type.slice(1)}</li>
      <li>Number of Pages: ${pages}</li>
      <li>Custom Design: ${custom ? 'Yes' : 'No'}</li>
      <li>Total Price: <span class="price">₪${total.toLocaleString()}</span></li>
    </ul>
    <p class="thank-you">Thank you for using our quote calculator!</p>
  `;
});

document.getElementById('quote-form').addEventListener('reset', function () {
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = `<p>Fill out the form to get a detailed quote.</p>`;
});
