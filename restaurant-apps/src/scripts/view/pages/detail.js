import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestaurantDetailTemplate, createFormReview } from '../templates/template-creator';
import addReview from '../../utils/review-initiator';

const Detail = {
  async render() {
    return `
      <h1 class="title">Detail Restaurant</h1>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restContainer = document.querySelector('#restaurant');
    restContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restContainer.innerHTML += createFormReview();
    addReview.addNewReview(url);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },

};

export default Detail;
