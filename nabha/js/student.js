function loadStudentDashboard() {

  /* STUDENT DATA */

  const student = {

    name: "Rahul",

    coursesEnrolled: 5,

    lessonsCompleted: 18,

    averageScore: 82,

    performance: [

      {
        subject: "Mathematics",
        progress: 85
      },

      {
        subject: "Science",
        progress: 70
      },

      {
        subject: "English",
        progress: 90
      },

      {
        subject: "Computer Basics",
        progress: 65
      },

      {
        subject: "Social Studies",
        progress: 75
      }

    ]
  };

  /* HERO MESSAGE */

  document.getElementById(
    "studentMessage"
  ).innerHTML = `

    Welcome Back ${student.name} <br><br>

    Your average performance score is
    ${student.averageScore}%
  `;

  /* OVERVIEW */

  document.getElementById(
    "coursesCount"
  ).innerText =
    student.coursesEnrolled;

  document.getElementById(
    "lessonsCompleted"
  ).innerText =
    student.lessonsCompleted;

  document.getElementById(
    "quizScore"
  ).innerText =
    student.averageScore + "%";

  /* PERFORMANCE BARS */

  const progressContainer =
    document.getElementById(
      "progressContainer"
    );

  student.performance.forEach(course => {

    progressContainer.innerHTML += `

      <h3>
        ${course.subject}
      </h3>

      <div class="progress-bar">

        <div
          class="progress-fill"

          style="
            width:${course.progress}%;
          "
        >

          ${course.progress}%

        </div>

      </div>

      <br>
    `;
  });
}