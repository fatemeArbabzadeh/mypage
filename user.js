
const activities = [
    { type: 'Total Steps', value: 'Steps 5000', status: 'Done', class: 'walking' },
    { type: 'Overall Calorise Burned', value: '300K calories', status: 'Done', class: 'calories' },
    { type: 'Average Sleep Duration', value: '7 Hours', status: 'Done', class: 'sleep' },
    { type: 'Average Daily water intake', value: '2 Hours', status: 'Done', class: 'app-usage' },
    { type: 'Active Minutes', value:'45 Minutes', status: 'In progress', class: 'activity-minutes' }
];


function displayActivities() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = ''; 

    activities.forEach(activity => {
        const activityDiv = document.createElement('div');
        activityDiv.classList.add('activity', activity.class);

        activityDiv.innerHTML = `
            <div class="activity-info">
                <p>${activity.type}</p>
                <span>${activity.value}</span>
            </div>
            <span class="status ${activity.status === 'Done' ? 'green' : 'red'}">${activity.status}</span>
        `;

        timeline.appendChild(activityDiv);
    });
}


displayActivities();

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