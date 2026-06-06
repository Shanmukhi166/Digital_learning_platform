async function loadStudentDashboard() {

  /* STUDENT DATA */

  const response = await fetch(
  "http://localhost:5000/api/progress"
);

const progressData =
  await response.json();

const averageScore =
  progressData.reduce(
    (sum, item) => sum + item.quiz_score,
    0
  ) / progressData.length;

const student = {

  name: "Abhi",

  coursesEnrolled:
    progressData.length,

  lessonsCompleted: 18,

  averageScore:
    Math.round(averageScore),

  performance:
    progressData.map(item => ({

      subject:
        item.course_title,

      progress:
        item.completion_percentage

    }))
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