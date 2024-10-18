
document.addEventListener('DOMContentLoaded', function () {
    // Overall Progress Chart
    var overallCtx = document.getElementById('overallProgressChart').getContext('2d');
    var overallProgressChart = new Chart(overallCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Overall Progress',
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['rgba(0,0,255,0.1)', 'rgba(0 ,128 ,0,0.1 )', 'rgba(128, 0, 128,0.1)', 'rgba(255, 0, 255,0.1)', 'rgba(255, 0, 0,0.1)'],
                borderColor: ['rgba(0,0,255)', 'rgba( 0, 128,0)', 'rgba(128, 0, 128)', 'rgba(255, 0, 255)', 'rgba(255, 0, 0)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Growth Rate of Users Chart
    var growthCtx = document.getElementById('growthRateChart').getContext('2d');
    var growthRateChart = new Chart(growthCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Growth Rate',
                data: [3, 2, 1, 4, 5],
                backgroundColor: 'rgba(0, 128, 0, 0.1)',
                borderColor: 'rgba(0, 128, 0)',
                borderWidth: 1,
                fill: true,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Active Users Chart
    var activeCtx = document.getElementById('activeUsersChart').getContext('2d');
    var activeUsersChart = new Chart(activeCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Active Users',
                data: [30, 50, 40, 60, 70],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Steps Taken Chart
    var stepsCtx = document.getElementById('stepsChart').getContext('2d');
    var stepsChart = new Chart(stepsCtx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Steps Taken',
                data: [8000, 10000, 7000, 9000],
                backgroundColor: 'rgba(102, 0, 204, 0.1)',
                borderColor: 'rgba(102, 0, 204, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ffffff"
                    }
                },
                x: {
                    ticks: {
                        color: "#ffffff"
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Sleep Rest Chart
    var sleepCtx = document.getElementById('sleepChart').getContext('2d');
    var sleepChart = new Chart(sleepCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sleep Rest',
                data: [6, 7, 5, 8],
                backgroundColor: 'rgba(0, 204, 153, 0.1)',
                borderColor: 'rgba(0, 204, 153, 1)',
                borderWidth: 1
               
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#ffffff"}
                    },
                    x: {
                        ticks: {
                            color: "#ffffff"
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        // دریافت همه کارت‌ها
        const cards = document.querySelectorAll('.profile-box');
    
        // افزودن قابلیت کلیک بر روی هر کارت
        cards.forEach((card) => {
            card.addEventListener('click', () => {
                alert('روی کارت ' + card.querySelector('h2').innerText + ' کلیک شده است.');
            });
        });
    
        // افزودن قابلیت تغییر تعداد ستاره‌ها به صورت پویا
        const ratings = document.querySelectorAll('.rating-area');
        
        ratings.forEach((rating) => {
            const stars = rating.innerText.trim().length;
            rating.addEventListener('mouseover', function() {
                this.innerHTML = "⭐".repeat(stars + 1 > 5 ? 5 : stars + 1) + "☆".repeat(5 - (stars + 1 > 5 ? 5 : stars + 1));
            });
    
            rating.addEventListener('mouseout', function() {
                this.innerHTML = "⭐".repeat(stars) + "☆".repeat(5 - stars);
            });
        });
    });

