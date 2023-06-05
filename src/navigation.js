searchFormBtn.addEventListener('click',() => {
    location.hash='#search';
});

trendingBtn.addEventListener('click',() => {
    location.hash='#trends';
});


arrowBtn.addEventListener('click',() => {
    location.hash='#home';
});

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  console.log({ location });
  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search")) {
    searchPage();
  } else if (location.hash.startsWith("#movie")) {
    movieDetailsPage();
  } else if (location.hash.startsWith("#category")) {
    categoriesPage();
  } else {
    homePage();
  }
  location.hash;
}

function homePage() {
    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background ='';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    
    console.log("Home!!");
    getTrendingMovies();
    getCategoriesPreview();
}

function categoriesPage() {

    headerSection.classList.remove('header-container--long');
    headerSection.style.background ='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

  console.log("Categories¡¡");
}
function movieDetailsPage() {

    headerSection.classList.add('header-container--long');
    // headerSection.style.background ='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

  console.log("Movie!!");
}
function searchPage() {
    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background ='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

  console.log("Search!!");
}
function trendsPage() {

    headerSection.classList.remove('header-container--long');
    headerSection.style.background ='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

  console.log("Trends!!");
}
