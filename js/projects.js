const projectsGrid = document.getElementById('projects-grid');
const modalRoot = document.getElementById('modal-root');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

const createProjectImage = (label, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480">
      <defs>
        <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#262626"/>
          <stop offset="100%" stop-color="#363636"/>
        </linearGradient>
      </defs>
      <rect width="800" height="480" fill="url(#g)"/>
      <circle cx="620" cy="150" r="90" fill="${accent}" opacity="0.2"/>
      <rect x="90" y="90" width="360" height="220" rx="24" fill="rgba(255,255,255,0.04)" stroke="${accent}" stroke-opacity="0.4"/>
      <rect x="126" y="126" width="288" height="26" rx="13" fill="${accent}" opacity="0.85"/>
      <rect x="126" y="180" width="190" height="16" rx="8" fill="rgba(255,255,255,0.3)"/>
      <rect x="126" y="216" width="232" height="16" rx="8" fill="rgba(255,255,255,0.2)"/>
      <text x="126" y="352" fill="#ffffff" font-family="Orbitron, sans-serif" font-size="34" letter-spacing="4">${label}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const projectCatalog = [
  {
    name: 'IC-369NANO',
    tag: 'Aerodynamics • Avionics • Propulsion',
    status: 'Completed',
    progress: 100,
    description: 'An experimental model rocket with ESP32-powered flight instrumentation, altitude logging, and a servo-operated parachute recovery system.',
    longDescription: 'IC-369NANO is an experimental model rocket project focused on exploring aerospace engineering, rocket development, and onboard flight instrumentation. It featured a custom-built rocket airframe, fiberglass fins, a 3D-printed nose cone, and an avionics system powered by an ESP32 microcontroller. Its onboard electronics incorporated a BMP180 barometric pressure sensor for altitude measurement, an SD card module for recording flight data, and a servo-operated parachute deployment mechanism designed to support rocket recovery. The project involved practical experimentation with rocket construction, solid-propellant propulsion, embedded programming, sensor integration, and recovery systems. Although the initial launch attempt was unsuccessful due to a motor nozzle failure, it provided valuable hands-on experience in aerospace development, testing, and iterative engineering.',
    image: './images/fb2.jpeg',
    video: './images/rocketlaunch.mp4',
    photos: ['./images/rocket_befpaint.jpeg', './images/motor_test.gif', './images/motor_thrust.gif', './images/fb4.jpeg', './images/fb1.jpeg', './images/f15.jpeg', './images/fb2.jpeg', './images/fb13.jpeg', './images/fb21.jpeg', './images/fb7.jpeg'],
    github: 'https://github.com/manishpathak369'
  },
  {
    name: 'SY-369NANO',
    tag: 'ESP32 • IMU • Dashboard',
    status: 'Completed',
    progress: 100,
    description: 'A CubeSat-inspired ESP32 prototype for environmental monitoring, motion sensing, GPS tracking, and onboard data logging.',
    longDescription: 'This project presents a compact CubeSat-inspired satellite prototype, SY-369NANO, designed to demonstrate environmental monitoring and real-time telemetry using the ESP32 microcontroller. Built around an ESP32-WROOM development board, the system integrates a BMP280 barometric pressure sensor for altitude, pressure, and temperature measurements, an MPU6050 accelerometer and gyroscope for motion and orientation monitoring, and a NEO-6M GPS module for location tracking. An SD card module is incorporated for onboard data logging, allowing collected sensor readings to be stored for later analysis. The prototype is powered by a lithium-ion battery paired with an XL6009 boost converter to provide a regulated 5V supply to the system. Through its Wi-Fi access point, the satellite provides a browser-based dashboard for monitoring live telemetry and sensor data. The project explores embedded systems, satellite-inspired instrumentation, wireless communication, and environmental data acquisition, serving as a practical foundation for future CubeSat and remote-sensing development.',
    image: './images/Sat1.jpeg',
    photos: ['./images/Sat1.jpeg', './images/Sat2.jpeg', './images/Sat3.jpeg', './images/Sat4.jpeg', './images/Sat5.jpeg'],
    github: 'https://github.com/manishpathak369'
  },
  {
    name: 'SU-27 RC Aircraft',
    tag: 'Aerodynamics • Embedded Systems • Telemetry',
    status: 'In Development',
    progress: 25,
    hazardTape: true,
    description: 'A custom-built Sukhoi Su-27 inspired RC aircraft integrating embedded avionics, wireless telemetry, and software-defined control.',
    longDescription: 'Inspired by the Sukhoi Su-27, this project aims to build a high-performance RC aircraft from the ground up. The system is designed around a Raspberry Pi Pico flight controller paired with a brushless motor, ESC, and onboard sensors for real-time flight monitoring. A BMP180 barometric sensor will provide altitude data, while an NRF24L01 transceiver will enable telemetry and communication between the aircraft and a custom software-based ground station. Unlike conventional RC transmitters, the aircraft will be controlled through a WebSocket-powered interface, allowing commands and live flight data to be exchanged over a custom application. The design also includes two servo-actuated payload bays intended to deploy lightweight demonstration rockets powered by a small sugar-propellant (KNO₃ + sugar) flare mechanism. The project is currently in the airframe construction phase, with electronics integration, flight testing, and telemetry development planned for future milestones.',
    image: './images/plane.jpeg',
    github: 'https://github.com/manishpathak369'
  },
  {
    name: 'Wi-Fi Robotic Car',
    tag: 'ESP8266 • Blynk • Robotics',
    status: 'Completed',
    progress: 100,
    description: 'A Wi-Fi controlled robotic car powered by ESP8266 and the Blynk app for real-time wireless navigation.',
    longDescription: 'Built around the ESP8266 and the Blynk IoT platform, this robotic car enables real-time wireless control through a smartphone over Wi-Fi. The system delivers responsive movement by transmitting commands instantly to the onboard motor driver. This project strengthened my understanding of embedded programming, IoT communication, motor control, and robotics integration. It also serves as a scalable platform for future upgrades such as obstacle avoidance, autonomous navigation, camera streaming, and AI-assisted control.',
    image: './images/car.png',
    video: './images/car.mp4',
    github: 'https://github.com/manishpathak369'
  },
  {
    name: 'Smart Assistive Glasses',
    tag: 'ESP8266 • Ultrasonic Sensor • Buzzer',
    status: 'Completed',
    progress: 100,
    description: 'Smart glasses designed to help visually impaired users detect nearby obstacles using ultrasonic sensing and audio feedback.',
    longDescription: 'This project focuses on improving mobility and independence for visually impaired individuals through an affordable wearable device. Built around the ESP8266 microcontroller, the system continuously measures the distance to nearby obstacles using an ultrasonic sensor. When an object enters a predefined safety range, a buzzer provides immediate audio alerts, allowing the user to react before a collision occurs. The project demonstrates practical applications of embedded systems, real-time sensor processing, and assistive technology while emphasizing low-cost hardware and simple, reliable operation.',
    image: './images/glass.png',
    video: './images/glasses.mp4',
    github: 'https://github.com/manishpathak369'
  },
  {
    name: 'Smart Home Automation I',
    tag: 'IoT • ESP8266 • Blynk',
    status: 'Completed',
    progress: 100,
    description: 'A Wi-Fi based home automation system that controls electrical appliances remotely using the Blynk mobile application.',
    longDescription: 'This project demonstrates a simple and reliable IoT-based home automation system built around the ESP8266 Wi-Fi microcontroller. A 2-channel relay module interfaces with household electrical loads, allowing appliances such as light bulbs to be switched on and off remotely through the Blynk mobile application. The system enables real-time wireless control over a Wi-Fi network, showcasing embedded programming, IoT communication, and relay-based electrical switching. Designed with scalability in mind, the platform can be extended to support multiple appliances, scheduling, automation routines, sensor integration, and voice assistant compatibility.',
    image: './images/bulb.png',
    video: './images/bulb.mp4',
    github: 'https://github.com/manishpathak369'
  },
  {
    name: 'Smart Home Automation II',
    tag: 'IoT • ESP8266 • Access Point',
    status: 'Completed',
    progress: 100,
    description: 'An ESP8266 access-point smart home system that controls lighting through a web portal, PIR motion sensor, and sound sensor.',
    longDescription: 'This project demonstrates an IoT-based smart home automation system developed using the ESP8266 NodeMCU Wi-Fi microcontroller. The system integrates a PIR motion sensor, a sound sensor, and a relay module to provide intelligent control of household lighting. An ESP8266-hosted web portal enables users to remotely switch the light ON or OFF and independently enable or disable the connected sensors through a browser over its Wi-Fi access point. The PIR sensor detects human movement, while the sound sensor responds to clap or sound detection, allowing the light to be controlled automatically without manual intervention. By combining wireless connectivity, sensor-based automation, and relay-controlled electrical switching, the project demonstrates practical applications of embedded systems and IoT technology in smart home environments.',
    image: './images/home_automation_box.png',
    photos: ['./images/home_automation_box.png', './images/web_portal.png'],
    github: 'https://github.com/manishpathak369/Homeautomation_ESP8266'
  },
  {
    name: 'Automatic Water Irrigation System',
    tag: 'IoT • ESP32 • Smart Agriculture',
    status: 'Completed',
    progress: 100,
    description: 'An ESP32-based irrigation system that monitors soil moisture and automatically controls a water pump.',
    longDescription: 'This project demonstrates an IoT-based automatic irrigation system developed using the ESP32 Wi-Fi microcontroller. The system integrates a soil moisture sensor and a relay-controlled water pump to provide intelligent and automated plant watering. An ESP32-hosted web portal allows users to monitor real-time soil moisture levels and manually switch the water pump ON or OFF through a browser connected to the ESP32\'s Wi-Fi access point. The soil moisture sensor continuously monitors the moisture content of the soil, automatically activating the water pump when the moisture level falls below a predefined threshold and stopping it once the soil reaches the required moisture level. By combining wireless connectivity, real-time monitoring, sensor-based automation, and relay-controlled water management, the project demonstrates practical applications of embedded systems and IoT technology in smart agriculture and water conservation.',
    image: './images/circuit_diagram.png',
    photos: ['./images/circuit_diagram.png', './images/pcb_front.jpeg', './images/pcb_back.jpeg'],
    github: 'https://github.com/manishpathak369/WaterIrrigation_ESP32'
  },
  {
    name: 'Biometric Fingerprint Door Lock',
    tag: 'Arduino • Biometrics • Access Control',
    status: 'Completed',
    progress: 100,
    description: 'An Arduino Uno door access system that authenticates users with a fingerprint sensor and controls an electromagnetic lock.',
    longDescription: 'This project demonstrates a biometric-based door access control system built around the Arduino Uno microcontroller. A fingerprint sensor is used to authenticate registered users by scanning and matching their fingerprints against previously stored templates. Upon successful verification, the Arduino activates a relay module, which controls an electromagnetic solenoid door lock to unlock the door for authorized access. If an unregistered or mismatched fingerprint is detected, access is denied, keeping the door locked. The system provides a simple, reliable, and secure approach to electronic door locking, reducing the need for conventional keys while demonstrating the practical application of biometric authentication and embedded electronics.',
    image: './images/doorfingerprint.jpeg',
    photos: ['./images/doorfingerprint.jpeg', './images/circuit.png'],
    github: 'https://github.com/manishpathak369'
  },
  {
    name: 'Mini Tesla Coil',
    tag: 'Electronics • High Voltage • Electromagnetics',
    status: 'Completed',
    progress: 100,
    description: 'A compact solid-state Tesla coil that wirelessly lights a CFL bulb through a high-frequency electric field.',
    longDescription: 'This project demonstrates the principles of resonant inductive coupling and high-frequency, high-voltage generation using a compact solid-state Tesla coil. The circuit is built around a 2N2222A transistor powered by a 9V battery, driving a primary coil that transfers energy to a carefully wound secondary coil. The resulting high-frequency electric field is strong enough to ionize the gas inside a nearby CFL bulb, allowing it to illuminate wirelessly without any direct electrical connection. Through this project, I gained practical experience with transistor switching, electromagnetic induction, resonance, coil design, and wireless energy transfer while exploring the fundamentals of high-voltage electronics.',
    image: './images/tesla.png',
    video: './images/tesla.mp4',
    github: 'https://github.com/manishpathak369'
  },
];

let projects = [];
let archiveView = window.location.pathname.includes('project-archive') || new URLSearchParams(window.location.search).get('view') === 'archive';
let projectsInitialized = false;

function bindProjectInteractions() {
  document.querySelectorAll('.view-detail').forEach((button) => {
    button.addEventListener('click', () => openModal(button.dataset.project));
  });
}

function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.className = archiveView ? 'archive-container' : 'projects-grid';

  if (archiveView) {
    projectsGrid.innerHTML = `
      <div class="archive-page">
        <div class="archive-page__header">
          <a class="secondary-button" href="./index.html?view=activity">← Back to Activity</a>
        </div>
        <div class="archive-grid">
          ${projects.map((project) => createProjectCard(project)).join('')}
        </div>
      </div>
    `;
    bindProjectInteractions();
    return;
  }

  projectsGrid.innerHTML = projects.map((project) => createProjectCard(project)).join('');
  bindProjectInteractions();
}

function createProjectCard(project) {
  const statusClass = project.status.toLowerCase();
  const isHazard = project.hazardTape || (project.name && project.name.includes('SU-27'));
  const hazardClass = isHazard ? ' crime-tape-card' : '';
  const tapeHTML = isHazard ? `
    <div class="crime-tape-overlay">
      <div class="crime-tape tape-1">
        <span class="crime-tape-label">CAUTION // RESTRICTED // DO NOT CROSS</span>
      </div>
      <div class="crime-tape tape-2">
        <span class="crime-tape-label">UNDER CONSTRUCTION // 25% COMPLETE</span>
      </div>
    </div>
  ` : '';

  return `
    <article class="project-card${hazardClass}">
      ${tapeHTML}
      <div class="project-card__image">
        <img class="project-image" src="${project.image}" alt="${project.name}" />
      </div>
      <div class="project-card__body">
        <div class="project-card__header">
          <div>
            <p class="project-eyebrow">${project.tag}</p>
            <h3>${project.name}</h3>
          </div>
          <span class="status-chip status-chip--${statusClass}">${project.status}</span>
        </div>
        <p>${project.description}</p>
        <div class="project-metrics">
          <div class="metric">
            <span class="metric-label">Progress</span>
            <span class="metric-value">${project.progress}%</span>
          </div>
          <button class="secondary-button view-detail" type="button" data-project="${project.name}">View detail</button>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${project.progress}%"></div>
        </div>
      </div>
    </article>
  `;
}

function openModal(projectName) {
  const project = projects.find((item) => item.name === projectName);
  if (!project) return;
  modalRoot.classList.add('open');
  modalRoot.setAttribute('aria-hidden', 'false');

  let videoSection = '';
  if (project.video) {
    videoSection = `
      <div class="project-video-wrapper" style="margin-top: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; letter-spacing: 0.1em; color: var(--green); text-transform: uppercase;">Project Video</h4>
        <video src="${project.video}" controls playsinline style="width: 100%; height: auto; border-radius: 12px; border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 0 15px rgba(255,255,255,0.1); background: #262626; display: block;"></video>
      </div>
    `;
  }

  let photosSection = '';
  if (project.photos && project.photos.length > 0) {
    photosSection = `
      <div class="project-photos-wrapper" style="margin-top: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; letter-spacing: 0.1em; color: var(--green); text-transform: uppercase;">Project Photos</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
          ${project.photos.map(src => `
            <a href="${src}" target="_blank" rel="noopener noreferrer" style="display: block; overflow: hidden; border-radius: 8px;">
              <img src="${src}" alt="Gallery image" style="width: 100%; height: 120px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1); transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  let githubSection = '';
  if (project.github) {
    githubSection = `
      <div style="margin-top: 1.5rem; display: flex; gap: 10px; align-items: center;">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="secondary-button" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="display: block;"><path d="M12 .8C5.7.8.8 5.7.8 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.3-.8 2.8-1.7.2-.4.5-.7.9-.9-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.2 5.7 18.3.8 12 .8z"/></svg>
          Repository
        </a>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <h3>${project.name}</h3>
    <p class="project-detail-description">${project.longDescription}</p>
    <div class="project-metrics" style="margin-top: 1rem;">
      <div class="metric">
        <span class="metric-label">Status</span>
        <span class="metric-value">${project.status}</span>
      </div>
      <div class="metric">
        <span class="metric-label">Progress</span>
        <span class="metric-value">${project.progress}%</span>
      </div>
    </div>
    <div class="progress-track" style="margin-top: 1rem;">
      <div class="progress-fill" style="width:${project.progress}%"></div>
    </div>
    ${videoSection}
    ${photosSection}
    ${githubSection}
  `;
}

function closeModal() {
  modalRoot.classList.remove('open');
  modalRoot.setAttribute('aria-hidden', 'true');
}

export async function initProjects() {
  if (projectsInitialized) return;
  projectsInitialized = true;
  projects = projectCatalog;
  renderProjects();

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalRoot) {
    modalRoot.addEventListener('click', (event) => {
      if (event.target === modalRoot) closeModal();
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('projects-grid')) {
    initProjects();
  }
});
