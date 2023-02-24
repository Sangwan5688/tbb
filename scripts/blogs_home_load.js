fetch('/templates/main_body.html')
  .then(response => response.text())
  .then(html => {
    const template = Handlebars.compile(html);

    fetch('body.html').then(response => response.text()).then(body => {
      const data = {
        title: 'Blogs',
        subtitle: 'This is all blogs page',
        image: '/assets/home_header_laptop.jpg',
        content: body,
      };
      const finalCompiledTemplate = template(data);

      const recentPostsLarge = document.getElementById('body-load');
      recentPostsLarge.innerHTML = finalCompiledTemplate;
    });
  });
