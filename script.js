document.addEventListener("DOMContentLoaded", () => {
  // Initialize chart
  const ctx = document.getElementById("fitnessChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Online",
          data: [10, 30, 25, 40, 20, 35, 30],
          borderColor: "purple",
          fill: true,
          backgroundColor: "rgba(128, 0, 128, 0.25)",
        },
        {
          label: "Offline",
          data: [30, 20, 50, 40, 50, 55, 50],
          borderColor: "red",
          fill: false,
          backgroundColor: "rgba(255, 0, 0, 0.4)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Animation
  const elements = document.querySelectorAll(".stat-box, .content-area > div");
  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize chart
  const ctx = document.getElementById("fitnessCharta").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Online",
          data: [10, 30, 25, 40, 20, 35, 30],
          borderColor: "purple",
          fill: true,
        },
        {
          label: "Offline",
          data: [30, 20, 50, 40, 50, 55, 50],
          borderColor: "blue",
          fill: false,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Animation
  const elements = document.querySelectorAll(".stat-box, .content-area > div");
  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize chart
  const ctx = document.getElementById("fitnessChartb").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Online",
          data: [10, 30, 25, 40, 20, 35, 30],
          borderColor: "purple",
          fill: true,
          backgroundColor: "rgba(128, 0, 128, 0.2)",
        },
        {
          label: "Offline",
          data: [30, 20, 50, 40, 50, 55, 50],
          borderColor: "green",
          fill: false,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Animation
  const elements = document.querySelectorAll(".stat-box, .content-area > div");
  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize chart
  const ctx = document.getElementById("fitnessChartc").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Offline",
          data: [30, 20, 50, 40, 50, 55, 50],
          borderColor: "red",
          fill: false,
          backgroundColor: "rgba(255, 0, 0, 0.3)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Animation
  const elements = document.querySelectorAll(".stat-box, .content-area > div");
  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize chart
  const ctx = document.getElementById("fitnessChartd").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Online",
          data: [10, 30, 25, 40, 20, 35, 30],
          borderColor: "purple",
          fill: true,
          backgroundColor: "rgba(0, 255, 0, 0.3)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Animation
  const elements = document.querySelectorAll(".stat-box, .content-area > div");
  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
});

//sidebar
// Select the elements
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

// Function to open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block"; // Show the sidebar
});

// Function to close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none"; // Hide the sidebar
});


