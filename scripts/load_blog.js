import { blogs } from "/data/blogs_data.js";

const nav_header = `<header class="header">
<nav class="navbar navbar-expand-lg navbar-dark bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand mx-2 invert-effect" href="/">
      <img src="/assets/tbb.webp" alt="TBB">
    </a>
    <!-- <a class="navbar-brand" href="/">TBB</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" data-bs-theme="dark" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/blogs">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/contact">Contact Us</a>
        </li>
      </ul>
      <!-- <form class="d-flex me-5" role="search" id="searchForm">
        <input class="form-control me-2" type="search" placeholder="Search Blog" aria-label="Search" name="q" id="searchInput">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</header>`;

const image_header = `<div class="header-section text-center text-white">
<div class="container">
  <div class="row">

    <div class="col-md-6 col-sm-12 align-self-center px-4 py-3">
      <h1 class="title">
        {{title}}
      </h1>
      <p class="lead subtitle">
        {{subtitle}}
      </p>
    </div>

    <div class="col align-self-center">
      {{#if skipBlend}}
      <img class="img-fluid avatar {{imageClass}}" src="{{image}}" alt="{{altText}}"> {{else}}
      <img class="img-fluid blend-bottom img-head {{imageClass}}" src="{{image}}" alt="{{altText}}"> {{/if}}
    </div>

  </div>
</div>
</div>`;

const related_section = `<div class="py-3">
<div class="container">
  <div class="card text-white p-2">
    <div class="card-header">
      <strong>RELATED BLOGS</strong>
    </div>

    <div class="card-body">
      <div class="card-text">
        <ul>
          {{#related}}
          <li class="mb-2">
            <a class="no-decor" href="{{link}}" class="text-white">
              {{title}}
            </a>
          </li>
          {{/related}}
        </ul>
      </div>
    </div>

  </div>
</div>
</div>`;

const footer = `<footer class="footer-section p-4">
<div class="row px-5">
  <div class="col-6">
    <a class="invert-effect" href="/">
      <img src="/assets/tbb.webp" alt="TBB">
    </a>
  </div>
  <div class="col-6">
    <div class="container text-white text-end">
      <small><a class="secondary no-decor" href="/privacy_policy">Privacy Policy</a></small>
    </div>
  </div>
</div>
</footer>`;


export function load_blog(key) {
  document.getElementById('nav-header').innerHTML = nav_header;
  document.getElementById('footer').innerHTML = footer;

  const image_header_template = Handlebars.compile(image_header);

  const templateData = {
    title: blogs[key].title,
    subtitle: blogs[key].subtitle,
    image: blogs[key].image,
    skipBlend: blogs[key].skipBlend || false,
    imageClass: blogs[key].imageClass || '',
    altText: blogs[key].altText || ''
  };

  const compiledTemplate = image_header_template(templateData);

  document.getElementById('image-header').innerHTML = compiledTemplate;
  if (blogs[key].related && blogs[key].related.length != 0) {
    const related_section_template = Handlebars.compile(related_section);
    const relatedData = {
      related: blogs[key].related.map((item) => { return blogs[item.key] })
    }
    const compiledTemplate = related_section_template(relatedData);
    document.getElementById('related-blogs-section').innerHTML = compiledTemplate;
  }
}
