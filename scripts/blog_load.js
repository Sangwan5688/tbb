import { showAd } from "/constants/constants.js";



fetch('/templates/main.html')
  .then(response => response.text())
  .then(html => {
    const template = Handlebars.compile(html);
    fetch('/templates/blog.html')
      .then(response => response.text())
      .then(body => {
        const data = {
          content: body,
        };
        const compiledTemplate = template(data);

        const finalTemplate = Handlebars.compile(compiledTemplate);
        fetch('body.html').then(response => response.text()).then(blog => {
          const data = {
            blog_content: blog,
          };
          const finalCompiledTemplate = finalTemplate(data);

          const recentPostsLarge = document.getElementById('body-load');
          recentPostsLarge.innerHTML = finalCompiledTemplate;
        });
      });

  });
