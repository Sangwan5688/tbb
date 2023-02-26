import { blogs } from "/data/blogs_data.js";
import { showAd } from "/constants/constants.js";

function loadPosts(filter) {
  fetch('/templates/card.html')
    .then(response => response.text())
    .then(html => {
      const template = Handlebars.compile(html);
      let i = 0;
      for (const [key, value] of Object.entries(blogs)) {
        if (i === 0) {
          value.header = true;
        }
        if ((i === 5 || i === 7) && showAd) {
          // Will be used to load ad
          const recentPosts = document.getElementById('posts-section');
          recentPosts.innerHTML += `<div class="col-lg-3 col-6 mb-4">
            <div class="card round-element text-center h-100">
              <div class="card-body">
              </div>
            </div>
          </div>`;
        }
        const compiledTemplate = template(value);
        if (i === 0) {
          let recentPostsLarge = document.getElementById('recent-posts-large');
          while (recentPostsLarge === null) {
            setTimeout(() => {}, 1);
            recentPostsLarge = document.getElementById('recent-posts-large');
          }
          recentPostsLarge.innerHTML = compiledTemplate;
        } else if (i < 5) {
          const recentPostsSmall = document.getElementById('recent-posts-small');
          recentPostsSmall.innerHTML += `<div class="col-lg-6 col-md-6 col-sm-6 col-6 mb-4">${compiledTemplate}</div>`;
        } else {
          const recentPosts = document.getElementById('recent-posts-section');
          recentPosts.innerHTML += `<div class="col-lg-3 col-6 mb-4">${compiledTemplate}</div>`;
        }
        i += 1;
      };
    });
}

window.onload = function() {
  loadPosts();
}
