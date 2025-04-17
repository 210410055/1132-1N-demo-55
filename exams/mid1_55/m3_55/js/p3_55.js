import { mid_products_55 } from './products_data_55.js';

const productsCenter = document.querySelector('.products-container');

console.log('mid_products_55', mid_products_55);

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems
    .map((item) => {
      const { id, title, category, price, img } = item;
      return `
  <div class="single-product">
        <img
          src="${img}"
          class="single-product-img img"
          alt="${title}"
        />
        <footer>
          <h5 class="name">${id}-${title}</h5>
          <span class="price">$${price}</span>
        </footer>
      </div>
      `;
    })
    .join('');
  productsCenter.innerHTML = displayMenu;
};

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(mid_products_55);
});
