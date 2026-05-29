async function loadCourses() {

  const coursesList =
    document.getElementById("coursesList");

  const courses = [

    {
      title: "Mathematics Basics",

      description:
      "Learn simple mathematics concepts for school students.",

      language: "English",

      teacher_name: "Ravi Sir",

      image: "images/maths.jpeg"
    },

    {
      title: "Science Learning",

      description:
      "Easy science lessons with practical examples.",

      language: "Hindi",

      teacher_name: "Anita Madam",

      image: "images/science.jpeg"
    },

    {
      title: "English Speaking",

      description:
      "Improve communication and speaking skills.",

      language: "English",

      teacher_name: "Karan Sir",

      image: "images/english.jpeg"
    },

    {
      title: "Computer Basics",

      description:
      "Introduction to computers and digital learning.",

      language: "English",

      teacher_name: "Meena Madam",

      image: "images/computer.jpeg"
    },

    {
      title: "Social Studies",

      description:
      "Learn history, geography and civics in a simple way.",

      language: "English",

      teacher_name: "Gurpreet Sir",

      image: "images/social.jpeg"
    }

  ];

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

      <button>
        Enroll Now
      </button>
    `;

    coursesList.appendChild(card);
  });
}