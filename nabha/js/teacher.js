async function loadTeacherDashboard() {

  /* TEACHER DATA */

  const response = await fetch(
  "http://localhost:5000/api/progress"
);

const progressData =
  await response.json();

const teacher = {

  name: "Teacher",

  totalStudents: progressData.length,

  coursesManaged:
  [...new Set(
    progressData.map(
      item => item.course_title
    )
  )].length,

averagePerformance:
  Math.round(
    progressData.reduce(
      (sum, item) =>
        sum + item.quiz_score,
      0
    ) / progressData.length
  ),

  students: progressData.map(item => ({

    name: item.student_name,

    subject: item.course_title,

    score: item.quiz_score,

    status:
      item.quiz_score >= 80
        ? "Excellent"
        : item.quiz_score >= 60
        ? "Good"
        : "Average"

  })),

  analytics: progressData.map(item => ({

  course: item.course_title,

  progress: item.completion_percentage

}))
};

  /* HERO */

  document.getElementById(
    "teacherMessage"
  ).innerHTML = `

    Welcome ${teacher.name} <br><br>

    Monitor student learning and course performance.
  `;

  /* OVERVIEW */

  document.getElementById(
    "totalStudents"
  ).innerText =
    teacher.totalStudents;

  document.getElementById(
    "coursesManaged"
  ).innerText =
    teacher.coursesManaged;

  document.getElementById(
    "averagePerformance"
  ).innerText =
    teacher.averagePerformance + "%";

  /* STUDENT TABLE */

  const studentTable =
    document.getElementById(
      "studentTable"
    );

  teacher.students.forEach(student => {

    studentTable.innerHTML += `

      <tr>

        <td>${student.name}</td>

        <td>${student.subject}</td>

        <td>${student.score}%</td>

        <td>${student.status}</td>

      </tr>
    `;
  });

  /* ANALYTICS */

  const analyticsContainer =
    document.getElementById(
      "analyticsContainer"
    );

  teacher.analytics.forEach(course => {

    analyticsContainer.innerHTML += `

      <h3>
        ${course.course}
      </h3>

      <div class="progress-bar">

        <div
          class="progress-fill"

          style="
          width:${course.progress}%;
          ">

          ${course.progress}%

        </div>

      </div>

      <br>
    `;
  });
}