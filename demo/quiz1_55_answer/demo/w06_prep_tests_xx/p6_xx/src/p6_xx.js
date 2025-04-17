import menu_xx from './data_xx.js';
console.log('menu_xx', menu_xx);

const section = document.querySelector('.section-center');

const displayMenu_xx = () => {
  const menuInfo = menu_xx
    .map((item) => {
      const { id, title, category, price, img, desc } = item;
      return `
              <article class="menu-item">
              <img src=${img} alt=${title} class="photo" />
              <div class="item-info">
                <header>
                  <h4>${title}</h4>
                  <h4 class="price">${price}</h4>
                </header>
                <p class="item-text">
                  ${desc}
                </p>
              </div>
            </article>  
    `;
    })
    .join('');

  console.log('menuInfo', menuInfo);
  section.innerHTML = menuInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayMenu_xx();
});
