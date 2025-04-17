import { tours_xx } from './data_xx.js';
console.log('tours_xx', tours_xx);

const section = document.querySelector('.section-center');

const displayTours_xx = () => {
  const toursInfo = tours_xx
    .map((tour) => {
      return `
          <article class="single-tour">
            <img src=${tour.img} alt=${tour.name} />
            <footer>
              <div class="tour-info">
                <h4>${tour.name}</h4>
                <h4 class="tour-price">$${tour.price}</h4>
              </div>
              <p>
                ${tour.info}<button>read more</button>
              </p>
              <button class="delete-btn">not interested</button>
            </footer>
          </article>      
      `;
    })
    .join('');
  console.log('toursInfo', toursInfo);

  section.innerHTML = toursInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayTours_xx();
});
