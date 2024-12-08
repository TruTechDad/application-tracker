// To enable Selection
const form = document.getElementById("application-form");
const applicationBody = document.getElementById("application-body");

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

// Function to add a new application
function addApplication(e) {
  e.preventDefault();
  const newApplication = {
    company: form.company.value,
    position: form.position.value,
    date: form.date.value,
    status: form.status.value,
  };
  applications.push(newApplication);
  localStorage.setItem("applications", JSON.stringify(applications));
  renderApplications();
  form.reset();
}

// Function to delete an application
function deleteApplication(index) {
  applications.splice(index, 1);
  localStorage.setItem("applications", JSON.stringify(applications));
  renderApplications();
}

// Event listeners
form.addEventListener("submit", addApplication);

// Initial render
renderApplications();
