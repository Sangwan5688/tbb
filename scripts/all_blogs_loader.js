import { blogs } from "/data/blogs_data.js";
import { showAd } from "/constants/constants.js";

export function loadAllPosts(filter) {
  fetch('/templates/card.html')
    .then(response => response.text())
    .then(html => {
      const template = Handlebars.compile(html);
      let i = 0;
      let spinner = document.getElementById("spinner");
      spinner.parentNode.removeChild(spinner);
      for (const [key, value] of Object.entries(blogs)) {
        if (i === 0) {
          value.header = true;
        }
        if ((i === 5 || i === 7) && showAd) {
          // Will be used to load ad
          const recentPosts = document.getElementById('all-posts-section');
          recentPosts.innerHTML += `<div class="col-lg-3 col-6 mb-4">
            <div class="card round-element text-center h-100">
              <div class="card-body">
                <!-- Ezoic - related_blogs_section - mid_content -->
                <div id="ezoic-pub-ad-placeholder-104"> </div>
                <!-- End Ezoic - related_blogs_section - mid_content -->
              </div>
            </div>
          </div>`;
        }
        const compiledTemplate = template(value);
        if (i === 0) {
          let recentPostsLarge = document.getElementById('recent-posts-large');
          if (recentPostsLarge != null) {
            recentPostsLarge.innerHTML = compiledTemplate;
          }
        } else if (i < 5) {
          const recentPostsSmall = document.getElementById('recent-posts-small');
          recentPostsSmall.innerHTML += `<div class="col-lg-6 col-md-6 col-sm-6 col-6 mb-4">${compiledTemplate}</div>`;
        } else {
          const recentPosts = document.getElementById('all-posts-section');
          recentPosts.innerHTML += `<div class="col-lg-3 col-6 mb-4">${compiledTemplate}</div>`;
        }
        i += 1;
      };
    });
}
