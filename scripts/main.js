import { blogs, recentPosts } from "/data/blogs_data.js";
import { showAd } from "/constants/constants.js";

function loadPosts() {
  fetch('/templates/card.html')
    .then(response => response.text())
    .then(html => {
      const template = Handlebars.compile(html);
      for (let i = 0; i < Math.min(recentPosts.length, 11); i++) {
        if (i === 0) {
          blogs[recentPosts[i]].header = true;
        }
        if ((i === 5 || i === 7) && showAd) {
          // Will be used to load ad
          const recentPosts = document.getElementById('recent-posts-section');
          recentPosts.innerHTML += `<div class="col-lg-3 col-6 mb-4">
        <div class="card round-element text-center h-100">
        <div class="card-body">
        </div>
        </div>
      </div>`;
        }
        const compiledTemplate = template(blogs[recentPosts[i]]);
        if (i === 0) {
          const recentPostsLarge = document.getElementById('recent-posts-large');
          recentPostsLarge.innerHTML = compiledTemplate;
        } else if (i < 5) {
          const recentPostsSmall = document.getElementById('recent-posts-small');
          recentPostsSmall.innerHTML += `<div class="col-lg-6 col-md-6 col-sm-6 col-6 mb-4">${compiledTemplate}</div>`;
        } else {
          const recentPosts = document.getElementById('recent-posts-section');
          recentPosts.innerHTML += `<div class="col-lg-3 col-6 mb-4">${compiledTemplate}</div>`;
        }
      };
    });
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function makeSearch() {
  const form = document.getElementById('searchForm');
  form.addEventListener('submit', function(e) {
    const searchText = document.getElementById('searchInput').value;
    console.log(searchText);
    // let searchResults = Object.entries(blogs).filter(([k, v]) => k.toLowerCase().includes(searchText.toLowerCase()));
    // console.log(searchResults);
  });
}


window.onload = function() {
  loadPosts();
  makeSearch();
  let scrollToSectionBtn = document.getElementById("scroll-to-section-btn");
  scrollToSectionBtn.addEventListener("click", function() {
    scrollToSection("recent-posts");
  });
}
