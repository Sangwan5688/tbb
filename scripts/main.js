import { blogs, recentPosts } from "/data/blogs_data.js";

function loadRecentPosts() {
  fetch('/templates/card.html')
    .then(response => response.text())
    .then(html => {
      const template = Handlebars.compile(html);
      let spinner = document.getElementById("spinner");
      spinner.parentNode.removeChild(spinner);
      for (let i = 0; i < Math.min(recentPosts.length, 8); i++) {
        if (i === 0) {
          blogs[recentPosts[i]].header = true;
        }
        const compiledTemplate = template(blogs[recentPosts[i]]);
        if (i === 0) {
          const recentPostsLarge = document.getElementById('recent-posts-large');
          recentPostsLarge.innerHTML = compiledTemplate;
        } else if (i < 5) {
          const recentPostsSmall = document.getElementById('recent-posts-small');
          recentPostsSmall.innerHTML += `<div class="col-lg-6 col-md-6 col-sm-6 col-6 mb-4">${compiledTemplate}</div>`;
        } else {
          const id = (i === 5) ? 'recent-blog-7' : 'recent-blog-9';
          const recentPosts = document.getElementById(id);
          recentPosts.innerHTML += `${compiledTemplate}`;
        }
      };
    });
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}


window.onload = function() {
  loadRecentPosts();
  let scrollToSectionBtn = document.getElementById("scroll-to-section-btn");
  scrollToSectionBtn.addEventListener("click", function() {
    scrollToSection("recent-posts");
  });
}
