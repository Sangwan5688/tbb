function loadBody(data) {
  fetch('/templates/main_body.html')
    .then(response => response.text())
    .then(html => {
      const template = Handlebars.compile(html);

      fetch('body.html').then(response => response.text()).then(body => {
        data.content = body;
        const finalCompiledTemplate = template(data);

        const recentPostsLarge = document.getElementById('body-load');
        recentPostsLarge.innerHTML = finalCompiledTemplate;
      });
    });
}
