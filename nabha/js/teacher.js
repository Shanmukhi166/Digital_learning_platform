function loadTeacherDashboard() {

  /* TEACHER DATA */

  const teacher = {

    name: "Anita Madam",

    totalStudents: 120,

    coursesManaged: 5,

    averagePerformance: 78,

    students: [

      {
        name: "Rahul",
        subject: "Mathematics",
        score: 85,
        status: "Excellent"
      },

      {
        name: "Priya",
        subject: "Science",
        score: 72,
        status: "Good"
      },

      {
        name: "Aman",
        subject: "English",
        score: 90,
        status: "Excellent"
      },

      {
        name: "Simran",
        subject: "Computer Basics",
        score: 65,
        status: "Average"
      }

    ],

    analytics: [

      {
        course: "Mathematics",
        progress: 85
      },

      {
        course: "Science",
        progress: 70
      },

      {
        course: "English",
        progress: 90
      },

      {
        course: "Computer Basics",
        progress: 65
      },

      {
        course: "Social Studies",
        progress: 75
      }

    ]
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