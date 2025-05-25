// Automatically generate cards for each design's preview image
const designs = [
  {
    name: 'Galleria',
    preview: 'designs/galleria/preview.png',
    link: 'designs/galleria/index.html',
    created: '2022-04-21'
  },
  {
    name: 'Helio Pet Shopift',
    preview: 'designs/helio-pet-shopift-product-page/preview.png',
    link: 'designs/helio-pet-shopift-product-page/index.html',
    created: '2025-05-09'
  },
  {
    name: 'Musica',
    preview: 'designs/musica/preview.png',
    link: 'designs/musica/index.html',
    created: '2021-02-27'
  }
];

const container = document.querySelector('.web_cards');
designs.forEach(design => {
  const card = document.createElement('div');
  card.className = 'web_card';
  card.innerHTML = `
    <img src="${design.preview}" alt="${design.name} preview" />
    <div class="card-footer">
      <div class="card-title">${design.name}</div>
      <div class="card-date">Created on: ${design.created}</div>
      <a href="${design.link}" target="_blank">Open</a>
    </div>
  `;
  container.appendChild(card);
});
