import { showAd } from "/constants/constants.js";
import { blogs } from "/data/blogs_data.js";

fetch('/templates/main_body.html')
  .then(response => response.text())
  .then(html => {
    const template = Handlebars.compile(html);
    fetch('/templates/blog_body.html')
      .then(response => response.text())
      .then(body => {
        const templateData = {
          title: blogs[key].title,
          subtitle: blogs[key].subtitle,
          image: blogs[key].image,
          content: body,
        };
        const compiledTemplate = template(templateData);

        const finalTemplate = Handlebars.compile(compiledTemplate);
        fetch('body.html').then(response => response.text()).then(blog => {
          const data = {
            blog_content: blog,
            related: blogs[key].related.map((item) => { return blogs[item.key] }),
          };
          const finalCompiledTemplate = finalTemplate(data);

          const recentPostsLarge = document.getElementById('body-load');
          recentPostsLarge.innerHTML = finalCompiledTemplate;
        });
      });

  });
