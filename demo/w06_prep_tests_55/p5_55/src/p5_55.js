import {tours_55} from './data_55.js'
console.log('tours_55', tours_55)

const section = document.querySelector('.section-center');

const displayTours = () => {
    const toursInfo= tours_55.map((tour)=> {
        return `<article class="single-tour">
        <img src=${tour.img} alt=${tour.name} />
        <footer>
        <div class="tour-info">
        <h4>${tour.name}</h4>
        <h4 class="tour-price">$${tour.price}</h4>
        </div>
        <p>
        ${tour.info}
        </button>
        </p>
        <button class="delete-btn">not interested</button>
        </footer>
        </article>
        `

        ;
    }).join('');
    // console.log('toursInfo', toursInfo);

    section.innerHTML = toursInfo;
};

window.addEventListener('DOMContentLoaded', () => {
    displayTours()
});
