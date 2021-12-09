import FavoriteRestIdb from '../../data/favorite-rest-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <h1 class="title">Favorite</h1>
    <div id="list-restaurant" class="list">
 
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list-restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default Favorite;
