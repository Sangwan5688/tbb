import { showAd } from "/constants/constants.js";



fetch('/templates/main.html')
  .then(response => response.text())
  .then(html => {
    const template = Handlebars.compile(html);
    fetch('./index.html')
      .then(response => response.text())
      .then(body => {
        const data = {
          content: body,
        };
        const compiledTemplate = template(data);

        const recentPostsLarge = document.getElementById('body-load');
        recentPostsLarge.innerHTML = compiledTemplate;
      });

  });
