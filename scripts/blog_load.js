import { blogs } from "/data/blogs_data.js";

fetch('/templates/blog_body.html')
  .then(response => response.text())
  .then(html => {
    fetch('body.html').then(response => response.text()).then(blog => {
      const template = Handlebars.compile(html);

      const templateData = {
        title: blogs[key].title,
        subtitle: blogs[key].subtitle,
        image: blogs[key].image,
        blog_content: blog,
        related: blogs[key].related.map((item) => { return blogs[item.key] }),
      };
      const compiledTemplate = template(templateData);

      const recentPostsLarge = document.getElementById('body-load');
      recentPostsLarge.innerHTML = compiledTemplate;
    });
  });
