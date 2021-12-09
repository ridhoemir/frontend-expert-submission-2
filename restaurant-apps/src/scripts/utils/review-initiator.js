import RestaurantSource from '../data/restaurant-source';
import { createReviewTemplate } from '../view/templates/template-creator';

const addReview = {
  addNewReview(url) {
    const btnSubmit = document.querySelector('#btn-submit-review');

    btnSubmit.addEventListener('click', async (event) => {
      const nameReviewer = document.querySelector('#name-reviewer').value;
      const reviewText = document.querySelector('#text-reviewer').value;

      event.preventDefault();
      const reviewValue = {
        id: url.id,
        name: nameReviewer,
        review: reviewText,
      };

      const response = await RestaurantSource.addReview(reviewValue);
      const container = document.querySelector('#review-container');
      container.innerHTML = ' ';
      container.innerHTML = createReviewTemplate(response.customerReviews);
    });
  },
};

export default addReview;
