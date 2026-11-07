const flashbackSources = [
  './images/aoc.png', './images/book1.jpg', './images/book2.jpg',
  './images/book3.jpeg', './images/book4.jpeg', './images/book5.jpeg',
  './images/book6.jpeg', './images/bulb.png', './images/car.png',
  './images/circuit_diagram.png', './images/circuit.png',
  './images/doorfingerprint.jpeg', './images/f15.jpeg', './images/fb1.jpeg',
  './images/fb2.jpeg', './images/fb3.jpeg', './images/fb4.jpeg',
  './images/fb5.jpeg', './images/fb6.jpeg', './images/fb7.jpeg',
  './images/fb9.jpeg', './images/fb11.jpeg', './images/fb13.jpeg',
  './images/fb16.jpeg', './images/fb18.jpeg', './images/fb19.jpeg',
  './images/fb20.jpeg', './images/fb21.jpeg', './images/fb22.jpeg',
  './images/glass.png', './images/home_automation_box.png', './images/homeautomation.png',
  './images/init.jpeg', './images/motor_test.gif', './images/motor_thrust.gif',
  './images/pcb_back.jpeg', './images/pcb_front.jpeg', './images/plane.jpeg',
  './images/rocket_befpaint.jpeg', './images/Sat1.jpeg', './images/Sat2.jpeg',
  './images/Sat3.jpeg', './images/Sat4.jpeg', './images/Sat5.jpeg',
  './images/tesla.png', './images/web_portal.png',
];

export function initGallery() {
  const container = document.getElementById('flashback-shell');
  if (!container) return;

  const createImagePanels = () => flashbackSources.map((src, index) => {
    const tileRows = [3, 4, 5][Math.floor(Math.random() * 3)];
    const tilt = (Math.random() * 3 - 1.5).toFixed(2);
    return `
    <button class="flashback-card" type="button" aria-label="View Flashback ${index + 1}" data-src="${src}" data-alt="Flashback ${index + 1}" style="--tile-rows: ${tileRows}; --tile-tilt: ${tilt}deg">
      <img src="${src}" alt="Flashback ${index + 1}" loading="lazy" />
    </button>
  `;
  }).join('');

  container.innerHTML = `
    <div class="flashback-gallery" role="region" aria-label="Flashback photo collage">
      ${createImagePanels()}
    </div>
    <div class="flashback-viewer" role="dialog" aria-modal="true" aria-label="Flashback image viewer" hidden>
      <button class="modal-close" type="button" aria-label="Close image viewer">&times;</button>
      <img class="flashback-viewer__image" alt="" />
    </div>
  `;

  const viewer = container.querySelector('.flashback-viewer');
  const viewerImage = viewer.querySelector('.flashback-viewer__image');
  const closeButton = viewer.querySelector('.modal-close');
  document.body.append(viewer);
  let previouslyFocused;

  const closeViewer = () => {
    viewer.hidden = true;
    viewerImage.removeAttribute('src');
    previouslyFocused?.focus();
  };

  container.querySelector('.flashback-gallery').addEventListener('click', (event) => {
    const tile = event.target.closest('.flashback-card');
    if (!tile) return;
    previouslyFocused = tile;
    viewerImage.src = tile.dataset.src;
    viewerImage.alt = tile.dataset.alt;
    viewer.hidden = false;
    closeButton.focus();
  });

  closeButton.addEventListener('click', closeViewer);
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) closeViewer();
  });
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeViewer();
  });
}
