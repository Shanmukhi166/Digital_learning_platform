/* =========================
   REGISTER USER
========================= */

async function registerUser() {

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  const role =
    document.getElementById("role").value;

  try {

    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name,
          email,
          password,
          role
        })
      }
    );

    const data = await response.json();

    document.getElementById(
      "message"
    ).innerText = data.message;

    setTimeout(() => {

      window.location.href =
        "login.html";

    }, 1000);

  }

  catch (error) {

    console.log(error);

  }

}


/* =========================
   LOGIN USER
========================= */

async function loginUser() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  try {

    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })
      }
    );

    const data = await response.json();

    if (data.token) {

      localStorage.setItem(
        "token",
        data.token
      );

      document.getElementById(
        "message"
      ).innerText =
        "Login Successful";

      setTimeout(() => {

        window.location.href =
          "student-dashboard.html";

      }, 1000);

    }

    else {

      document.getElementById(
        "message"
      ).innerText =
        data.message;

    }

  }

  catch (error) {

    console.log(error);

  }

}


/* =========================
   LOGOUT
========================= */

function logout() {

  localStorage.removeItem("token");

  window.location.href =
    "login.html";
}