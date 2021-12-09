import RestaurantSource from '../../data/restaurant-source';
import meal from '../../component/menu-item';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero-banner">
        <div class="hero-text">
            <h1>Cari <span class="highlight">Restaurant</span>  Favoritmu Disini</h1>
        </div>
    </div>
    <h2 class="title" id="main" tabindex="0">Menu Favorite</h2>
    <div class="list" id="list-menu"></div>
    <h2 class="title" tabindex="0">Daftar Restaurant</h2>
    <div class="list" id="list-restaurant">
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#list-restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    meal();
  },

};

export default Home;
