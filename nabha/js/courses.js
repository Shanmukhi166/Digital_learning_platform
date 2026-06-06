let selectedCourseButton = null;
async function loadCourses() {

  const coursesList =
    document.getElementById("coursesList");

  const response = await fetch(
  "http://localhost:5000/api/courses"
   );

const courses = await response.json();

  coursesList.innerHTML = "";

  courses.forEach(course => {

    const card =
    document.createElement("div");

    card.className = "card";

    card.innerHTML = `

      <img
       src="${course.image}"

        style="
          width:100%;
          height:220px;
          object-fit:cover;
          border-radius:12px;
          margin-bottom:15px;
        "
      >

      <h3>${course.title}</h3>

      <p>
        ${course.description}
      </p>

      <br>

      <p>
        <strong>Language:</strong>
        ${course.language}
      </p>

      <p>
        <strong>Teacher:</strong>
        ${course.teacher_name}
      </p>

      <br>

     <button onclick="openModal(this, '${course.title}', '${course.description}')">
  Enroll Now
</button>
    `;

    coursesList.appendChild(card);
  });
}
function openModal(button, title, description) {
  selectedCourseButton = button;

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;

  document.getElementById("courseModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("courseModal").style.display = "none";

  document.getElementById("progressContainer").style.display = "none";
  document.getElementById("progressBar").style.width = "0%";
}

function enrollCourse(button) {
  button.disabled = true;
  button.innerText = "Enrolling...";

  document.getElementById("progressContainer").style.display = "block";

  setTimeout(() => {
    document.getElementById("progressBar").style.width = "100%";
  }, 100);

  setTimeout(() => {
  alert("Enrolled successfully!");

  selectedCourseButton.innerText = "Enrolled";
  selectedCourseButton.disabled = true;

  button.innerText = "Enroll";
  button.disabled = false;

  closeModal();
}, 2200);
}