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
                <!-- adblock -->
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9441129050034617"
                    crossorigin="anonymous"></script>
                <!-- Posts List Ad - TBB -->
                <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-9441129050034617"
                    data-ad-slot="8733852590"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
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
