export const domainGradients = {
  "Computer Vision": "from-purple-600 via-blue-500 to-cyan-400",
  "Artificial Intelligence": "from-blue-600 via-indigo-500 to-violet-400",
  "Embedded Systems": "from-orange-500 via-red-500 to-pink-400",
  "IoT": "from-green-500 via-teal-500 to-emerald-400",
  "Web Development": "from-slate-600 via-gray-500 to-zinc-400",
  "Desktop Apps": "from-rose-500 via-fuchsia-500 to-purple-500",
};

export const domainIcons = {
  "Computer Vision": "👁️",
  "Artificial Intelligence": "🤖",
  "Embedded Systems": "⚙️",
  "IoT": "📡",
  "Web Development": "💻",
  "Desktop Apps": "🖥️",
};

export const domainColors = {
  "Computer Vision": "bg-purple-100 text-purple-700",
  "Artificial Intelligence": "bg-blue-100 text-blue-700",
  "Embedded Systems": "bg-orange-100 text-orange-700",
  "IoT": "bg-green-100 text-green-700",
  "Web Development": "bg-slate-100 text-slate-700",
  "Desktop Apps": "bg-fuchsia-100 text-fuchsia-700",
};

export const projects = [
  {
    id: 1,
    domain: "Computer Vision",
    name: "3D Agricultural Perception System",
    description: "Multi-camera + IMU synchronized system for 3D tomato plant perception, point cloud fusion pipeline, and YOLOv8 cutting-point detection. Deployed prototype at Aisprid.",
    tech: ["Python", "OpenCV", "Open3D", "YOLOv8", "IMU", "Linux"],
    images: [
      '/projects/1/1.webp',
      '/projects/1/2.webp',
      '/projects/1/3.webp',
    ],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 2,
    domain: "Computer Vision",
    name: "3D Localization via Multi-Source Data Fusion",
    description: "Custom 3D localization algorithm built from scratch using fusion of heterogeneous 3D data sources — stereo cameras, point clouds, and IMU measurements. The approach estimates accurate 6-DoF pose by registering and fusing multi-modal 3D observations without relying on traditional SLAM frameworks.",
    tech: ["Python", "C++", "Open3D", "Point Cloud Fusion", "IMU Fusion", "OpenCV", "Stereo Vision"],
    images: [
      '/projects/2/1.webp',
      '/projects/2/2.webp',
      '/projects/2/3.webp',
    ],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 3,
    domain: "Computer Vision",
    name: "3D Sensor Benchmark Suite",
    description: "Experimental benchmark comparing stereo cameras, Time-of-Flight sensors, and OAK-D for embedded 3D perception — accuracy, latency, and power efficiency.",
    tech: ["Python", "Open3D", "OAK-D", "ToF", "Stereo Vision"],
    images: [
      '/projects/3/1.webp',
      '/projects/3/2.webp'
    ],
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 4,
    domain: "Artificial Intelligence",
    name: "YOLOv8 Cutting-Point Detector",
    description: "Custom-trained YOLOv8 model for 2D/3D detection of cutting points on tomato plants, enabling robotic harvesting automation.",
    tech: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Deep Learning"],
    images: [
      '/projects/4/1.webp'

    ],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 5,
    domain: "Artificial Intelligence",
    name: "Signal Processing & FFT Analysis Tool",
    description: "Industrial signal analysis with FFT, Kalman filtering, and sensor data fusion for embedded instrumentation systems.",
    tech: ["Python", "MATLAB", "Kalman Filter", "FFT", "Signal Processing"],
    images: null,
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 7,
    domain: "Embedded Systems",
    name: "6502 Breadboard Microcontroller",
    description: "Complete hardware design of a 6502-based microcontroller on breadboard: address/data bus, RAM, ROM, LCD display. Programmed in 6502 assembly.",
    tech: ["6502 Assembly", "Hardware Design", "LCD", "Bus Architecture"],
    images: [
      '/projects/7/1.webp',
    ],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 8,
    domain: "Embedded Systems",
    name: "Embedded Instrumentation Software",
    description: "C++/Qt real-time control and visualization software for embedded instrumentation with graphical data display and acquisition.",
    tech: ["C++", "Qt/QML", "Linux", "Signal Processing"],
    images: null,
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 9,
    domain: "IoT",
    name: "LoRa IoT Agricultural Monitor",
    description: "Full IoT precision-agriculture system: ESP32 sensor nodes, LoRa long-range communication, bidirectional WiFi control, multi-sensor PCB, and real-time cloud dashboard. Published IEEE EDiS 2024.",
    tech: ["ESP32", "C++", "LoRa", "I2C", "SPI", "PCB Design", "Laravel"],
    images: [
      '/projects/9/1.webp',
    ],
    github: null,
    demo: "https://ieeexplore.ieee.org/document/10783387",
    featured: true
  },
  {
    id: 10,
    domain: "Web Development",
    name: "Medical Campaign Platform — TAGEMI Foundation",
    description: "Full-stack platform for managing medical campaigns: multi-role users, real-time data, CI/CD deployment pipeline, and secure sensitive data management.",
    tech: ["ReactJS", "Laravel", "TailwindCSS", "MySQL", "CI/CD", "PHP"],
    images: [
      '/projects/10/1.webp',
    ],
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 11,
    domain: "Web Development",
    name: "IoT Real-Time Data Dashboard",
    description: "Laravel/PHP web dashboard for visualizing and managing live sensor data from the LoRa agricultural monitoring network.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST API"],
    images: [
      '/projects/11/1.webp',
      '/projects/11/2.webp',
      '/projects/11/3.webp'
    ],
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 12,
    domain: "Desktop Apps",
    name: "Image Library Management System",
    description: "C++ and Qt-based desktop application for organizing, filtering, and managing collections of images within customizable libraries. Features code-based authentication, library/image CRUD, metadata display, search & sorting, and an integrated image processing window with Grayscale, Gaussian Blur, and SIFT filters. Awarded 2nd place among all university software projects in our cohort.",
    tech: ["C++", "Qt Widgets", "OpenCV", "Qt Signals/Slots", "CMake", "Git"],
    images: [
      '/projects/12/1.webp',
      '/projects/12/2.webp',
      '/projects/12/3.webp',
    ],
    github: null,
    demo: null,
    featured: true,
    award: "🏆 2nd Place — University Software Projects",
    contributors: ["Abdennour Bouhounali", "Youcef Brahimi", "Mohammed Bouziane Belbekri", "Roua Cherni", "Hadj Habib Rouabah"]
  }
];
