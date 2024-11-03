// To enable Selection
const form = document.addEventListener("application-form");
const applicationBody = document.addEventListener("application-body");

// Load applications form localStorage
let applications = JSON.parse(localStorage.getItem("applications")) || [];

// Fuction to render applications in the table
function renderApplications() {
  applicationBody.innerHTML = ""; // Clear the table
  applications.forEach((app, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${app.company}</td>
            <td>${app.position}</td>
            <td>${app.date}</td>
            <td>${app.status}</td>
            <td><button onclick='deleteApplication(${index})'>Delete</button></td>`;
    applicationBody.appendChild(row);
  });
}
