import CONFIG from '../../globals/config';

const createCategorieTemplate = (categories) => {
  let categorieItem = '';
  categories.forEach((item) => {
    categorieItem += `<p class="categorie">${item.name}</p>`;
  });
  return categorieItem;
};

const createMenuTemplate = (menus) => {
  let menuItem = '';
  menus.forEach((item) => {
    menuItem += `<li>${item.name}</li>`;
  });
  return menuItem;
};

const createReviewTemplate = (reviews) => {
  let reviewItem = '';
  if (reviews === null) {
    reviewItem += '<h2>0 Review</h2>';
  } else {
    reviews.forEach((item) => {
      reviewItem += `
      <div class="restaurant-item__review_card">
        <div class="card_header">
          <h3>${item.name}</h3>
          <p>${item.date}</p>
        </div>
        <div class="card_content">
          <p>${item.review}</p>
        </div>
      </div>
      `;
    });
  }
  return reviewItem;
};

const createFormReview = () => `
  <div class="form-review">
    <h2 class="title">Add Review</h2>
    <label for="name-reviewer">Name</label>
    <input type="text" class="form-review__name" name="name-reviewer" id="name-reviewer" value="">
    <label for="text-reviewer">Review</label>
    <textarea class="form-review__text" name="text-reviewer" id="text-reviewer" value=""></textarea>
    <button type="button" class="btn-submit-review" id="btn-submit-review">Submit</button>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card" onclick="window.location.href='/#/detail/${restaurant.id}'">
    <img src="${CONFIG.BASE_SMALL_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.title}" tabindex= "0">
    <div class="card-desc">
        <div class="dflex">
            <p class="rating" tabindex= "0"><i class="fas fa-star"></i> ${restaurant.rating}</p>
            <p class="location" tabindex= "0"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
        </div>
        <h1 tabindex= "0">${restaurant.name}</h1>
        <p class="rest-desc" tabindex= "0">${restaurant.description}</p>
    </div>
  </div>`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="container dflex flex-direction-row">
      <div class="restaurant-item__header">
          <img class="restaurant-item__header__poster" alt="${restaurant.name}"
              src="${CONFIG.BASE_MEDIUM_IMAGE_URL}${restaurant.pictureId}">
          <div class="restaurant-item__header__rating">
              <p class="restaurant-item__header__rating__score">⭐️${restaurant.rating}</p>
          </div>
      </div>
      <div class="restaurant-item__content">
        <h3 class="resto-name">${restaurant.name}</h3>
        <div class="restaurant-item__content_categories">
          ${createCategorieTemplate(restaurant.categories)}
        </div>
        <p class="address"><i class="fas fa-city"></i> ${restaurant.city}</p>
        <p class="address"><i class="fas fa-map-marked-alt"></i> ${restaurant.address}</p>
      </div>
    </div>
    <div class="restaurant-item__description">
      <h2 class="title">Description</h2>
      <p class="description">${restaurant.description}</p>
    </div>
    <div class="restaurant-item__menu">
          <div class="restaurant-item__menu__content">
            <h2 class="title">Food</h2>
            <ul>
            ${createMenuTemplate(restaurant.menus.foods)}
            </ul>
          </div>
          <div class="restaurant-item__menu__content">
            <h2 class="title">Drinks</h2>
            <ul>
            ${createMenuTemplate(restaurant.menus.drinks)}
            </ul>
          </div>
    </div>
    <div class="restaurant-item__review">
      <h2 class="title">Review</h2>
      <div id="review-container">${createReviewTemplate(restaurant.customerReviews)}</div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="far fa-heart"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
  createFormReview,
};
