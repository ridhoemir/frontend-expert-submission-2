import DataSource from '../data/data-source';

const meal = () => {
  const listMeal = document.getElementById('list-menu');

  const renderResultMeal = (results) => {
    listMeal.innerHTML = '';
    let count = 0;
    const BreakException = {};
    try {
      results.forEach((club) => {
        if (count === 5) {
          throw BreakException;
        }
        const { strMeal, strMealThumb, strCategory } = club;

        listMeal.innerHTML += `
        <div class="card">
                <img src="${strMealThumb}" alt="" tabindex= "0">
                <div class="card-desc">
                    <p tabindex= "0"><i class="fas fa-utensils"></i> ${strCategory}</p>
                    <h1 tabindex= "0">${strMeal}</h1>
                    <p tabindex= "0">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
          `;
        count += 1;
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  };

  const fallbackResult = (message) => {
    listMeal.innerHTML = '';
    listMeal.innerHTML += `
    <p>${message}</p>
    `;
  };

  const getDataMeal = async () => {
    try {
      const result = await DataSource.getDataMeal();
      renderResultMeal(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  getDataMeal();
};

export default meal;
