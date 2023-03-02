import { loadAllPosts } from "/scripts/all_blogs_loader.js";

export function loadBody(data) {
  fetch('/templates/main_body.html')
    .then(response => response.text())
    .then(html => {
      const template = Handlebars.compile(html);

      fetch('body.html').then(response => response.text()).then(body => {
        data.content = body;
        const finalCompiledTemplate = template(data);

        const recentPostsLarge = document.getElementById('body-load');
        recentPostsLarge.innerHTML = finalCompiledTemplate;

        if (data.loadAllBlogs) {
          loadAllPosts(data.filter);
        }
      });
    });
}
