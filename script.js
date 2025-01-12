let credentials = [];
let loggedUser = null;
let loginbutton;
let haslogin = false;
let loggedIn = false;
loginbutton = document.querySelector(".loginbutton");
function generate(mini, maxi) {
  return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}
window.onload = function () {
  let random = generate(1, 10);
  const titlu = document.getElementById("titlu");
  if (random == 5) titlu.style.backgroundColor = "red";
  if (window.getComputedStyle(titlu).backgroundColor == "rgb(255, 0, 0)") {
    alert(
      "Nu imi place de tine deci am uratit fundalul la titlu ca sa te deranjeze :)"
    );
  }
  fetch("credentials.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      credentials = data;
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });
  loggedUser = localStorage.getItem("username");
  if (loggedUser != null) {
    document.querySelector(".loginbutton").src = "images/logout.png";
    loggedIn = true;
    console.log(`${loggedUser} is logged in`);
    const leafman = document.querySelector(".leafman");
    leafman.src = "images/leafman.png";
    const loginbutton = document.querySelector(".loginbutton");
    loginbutton.style.visibility = "visible";
    loginbutton.addEventListener("click", () => {
      loginbutton.style.visibility = "hidden";
      const dimm = document.querySelector(".overlay");
      const loginmenu = document.querySelector(".highlight-container");
      if (loggedIn) {
        loggedIn = false;
        loggedUser = null;
        localStorage.removeItem("username");
        location.reload();
      }
      dimm.style.opacity = 1;
      dimm.style.visibility = "visible";
      loginmenu.style.visibility = "visible";
      dimm.addEventListener("click", () => {
        dimm.style.opacity = 0;
        setTimeout(function () {
          dimm.style.visibility = "hidden";
        }, 300);
        loginmenu.style.visibility = "hidden";
        loginbutton.style.visibility = "visible";
      });
    });
  } else {
    console.log(`no user is logged in`);
  }
};

const loginForm = document.getElementById("loginForm");
const loginwindow = document.querySelector(".login-container");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(usernameInput)) {
    alert("email invalid!");
    return;
  }

  const user = credentials.find(
    (credential) =>
      credential.user === usernameInput && credential.password === passwordInput
  );

  if (user) {
    const dimm = document.querySelector(".overlay");
    loginwindow.style.visibility = "hidden";
    dimm.style.visibility = "hidden";
    alert("Autentificare reușită!");
    document.querySelector(".loginbutton").src = "images/logout.png";
    localStorage.setItem("username", user.user);
    loggedIn = true;
    const loginbutton = document.querySelector(".loginbutton");
    loginbutton.style.visibility = "visible";
    loginbutton.addEventListener("click", () => {
      loginbutton.style.visibility = "hidden";
      const dimm = document.querySelector(".overlay");
      const loginmenu = document.querySelector(".highlight-container");
      if (loggedIn) {
        loggedIn = false;
        loggedUser = null;
        localStorage.removeItem("username");
        location.reload();
      }
      dimm.style.opacity = 1;
      dimm.style.visibility = "visible";
      loginmenu.style.visibility = "visible";
      dimm.addEventListener("click", () => {
        dimm.style.opacity = 0;
        setTimeout(function () {
          dimm.style.visibility = "hidden";
        }, 300);
        loginmenu.style.visibility = "hidden";
        loginbutton.style.visibility = "visible";
      });
    });
  } else {
    alert("Utilizator sau parolă incorectă!");
  }
});
function clicked_leafman() {
  const leafman = document.querySelector(".leafman");
  const leafmanParent = leafman.parentElement;
  leafman.remove();

  const caughtLeafman = document.createElement("img");
  caughtLeafman.classList.add("caught");
  caughtLeafman.id = "caught";
  caughtLeafman.src = "images/caughtleafman.png";
  if (!haslogin && !loggedUser) {
    caughtLeafman.src = "images/caughtleafmanlogin.png";
  }
  leafmanParent.appendChild(caughtLeafman);
  caughtLeafman.addEventListener("click", () => {
    caughtLeafman.remove();
    leafmanParent.appendChild(leafman);
    if (!haslogin) {
      leafman.src = "images/leafman.png";
      haslogin = true;
      loginbutton = document.querySelector(".loginbutton");
      loginbutton.style.visibility = "visible";
      loginbutton.addEventListener("click", () => {
        loginbutton.style.visibility = "hidden";
        const dimm = document.querySelector(".overlay");
        const loginmenu = document.querySelector(".highlight-container");
        dimm.style.opacity = 1;
        dimm.style.visibility = "visible";
        loginmenu.style.visibility = "visible";
        dimm.addEventListener("click", () => {
          dimm.style.opacity = 0;
          setTimeout(function () {
            dimm.style.visibility = "hidden";
          }, 300);
          loginmenu.style.visibility = "hidden";
          loginbutton.style.visibility = "visible";
        });
      });
    }
  });
}

function animateBox() {
  const box = document.querySelector(".box");
  const buttoncontainer = document.querySelector(".navbar-list");
  const headerh = document.querySelector(".navbar").children[0];
  box.classList.toggle("animate");

  for (let i = 0; i < 3; i++) {
    if (buttoncontainer.children[i].className === "1") {
      buttoncontainer.children[i].className += " responsive";
      buttoncontainer.style.width = "100%";
      buttoncontainer.children[i].classList.toggle("animate_list");
      setTimeout(() => {
        buttoncontainer.children[i].classList.toggle("animate_list");
      }, 0.2);
    } else {
      buttoncontainer.children[i].className = "1";
      buttoncontainer.style.width = "60px";
    }
  }
}
