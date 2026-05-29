/* =========================
   REGISTER USER
========================= */

function registerUser() {

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  const role =
    document.getElementById("role").value;

  /* USER OBJECT */

  const user = {

    name,
    email,
    password,
    role
  };

  /* SAVE USER */

  localStorage.setItem(
    email,
    JSON.stringify(user)
  );

  document.getElementById(
    "message"
  ).innerText =
    "Registration Successful!";

  setTimeout(() => {

    window.location.href =
      "login.html";

  }, 1000);
}

/* =========================
   LOGIN USER
========================= */

function loginUser() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  /* ADMIN LOGIN */

  if (
    email === "admin@nabha.com" &&
    password === "admin123"
  ) {

    localStorage.setItem(
      "loggedInUser",
      "admin"
    );

    window.location.href =
      "admin-dashboard.html";

    return;
  }

  /* GET USER */

  const storedUser =
    localStorage.getItem(email);

  if (!storedUser) {

    document.getElementById(
      "message"
    ).innerText =
      "User not found";

    return;
  }

  const user =
    JSON.parse(storedUser);

  /* CHECK PASSWORD */

  if (user.password !== password) {

    document.getElementById(
      "message"
    ).innerText =
      "Wrong Password";

    return;
  }

  /* SAVE LOGIN */

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify(user)
  );

  /* REDIRECT */

  if (user.role === "teacher") {

    window.location.href =
      "teacher-dashboard.html";
  }

  else {

    window.location.href =
      "student-dashboard.html";
  }
}

/* =========================
   LOGOUT
========================= */

function logout() {

  localStorage.removeItem(
    "loggedInUser"
  );

  window.location.href =
    "login.html";
}