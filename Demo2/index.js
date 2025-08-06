function registrationData() {
  let register_name = document.getElementById("name").value;
  let register_age = document.getElementById("age").value;
  let register_email = document.getElementById("email").value;
  let register_password = document.getElementById("password").value;
  let register_confirmPassword =
    document.getElementById("confirm-password").value;
  console.log(
    register_name,
    register_age,
    register_email,
    register_password,
    register_confirmPassword
  );

  if (register_password !== register_confirmPassword) {
    alert("Passwords does not match");
  } else if (register_age <= 0) {
    alert("please enter a valid age");
  } else {
    alert("Registration Successful");
    document.cookie =
      "email=" + encodeURIComponent(register_email) + "; path=/";
    document.cookie =
      "password=" + encodeURIComponent(register_password) + "; path=/";
    window.location.href = "/login.html";
  }
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

function loginData() {
  let login_email = document.getElementById("email").value;
  let login_password = document.getElementById("password").value;

  const savedEmail = getCookie("email");
  const savedPassword = getCookie("password");

  if (login_email == savedEmail && login_password == savedPassword) {
    alert("Login Successful");
    window.location.href = "/home.html";
  } else {
    alert("Invalid email or password");
  }
}

function home() {
  const quiz_questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Multi Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "JavaScript", "CSS", "Python"],
      answer: "CSS",
    },
    {
      question: "What is the brain of the computer?",
      options: ["RAM", "CPU", "Hard Disk", "Monitor"],
      answer: "CPU",
    },
    {
      question: "Which protocol is used to access web pages?",
      options: ["FTP", "HTTP", "SMTP", "SNMP"],
      answer: "HTTP",
    },
    {
      question: "Which company developed the Windows operating system?",
      options: ["Apple", "Microsoft", "Google", "IBM"],
      answer: "Microsoft",
    },
    {
      question: "Which of these is a programming language?",
      options: ["FTP", "CSS", "Python", "HTML"],
      answer: "Python",
    },
    {
      question: "What does 'open source' mean in software?",
      options: [
        "Free trial software",
        "Code is publicly accessible",
        "Only for personal use",
        "Software that is illegal to sell",
      ],
      answer: "Code is publicly accessible",
    },
    {
      question: "Which one is a database management system?",
      options: ["Git", "MySQL", "HTML", "Linux"],
      answer: "MySQL",
    },
    {
      question:
        "Which language is mostly used for data analysis and machine learning?",
      options: ["C", "C++", "Java", "Python"],
      answer: "Python",
    },
    {
      question: "What is Git used for?",
      options: [
        "Web hosting",
        "Version control",
        "Image editing",
        "Database connection",
      ],
      answer: "Version control",
    },
    {
      question:
        "Which part of the computer temporarily stores data and programs?",
      options: ["ROM", "RAM", "CPU", "Hard Disk"],
      answer: "RAM",
    },
    {
      question: "Which of the following is NOT a search engine?",
      options: ["Google", "Bing", "Facebook", "DuckDuckGo"],
      answer: "Facebook",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Creative Style Sheet",
        "Cascading Style Sheets",
        "Computer Style System",
        "Colorful Styling Syntax",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "What does IP in 'IP address' stand for?",
      options: [
        "Internet Provider",
        "Internet Protocol",
        "Internal Port",
        "Input Protocol",
      ],
      answer: "Internet Protocol",
    },
    {
      question: "Which of these is a valid file extension for a Python file?",
      options: [".java", ".py", ".html", ".exe"],
      answer: ".py",
    },
    {
      question: "What is the full form of URL?",
      options: [
        "Uniform Resource Locator",
        "Unique Resource Location",
        "User Request Language",
        "Unified Routing Link",
      ],
      answer: "Uniform Resource Locator",
    },
    {
      question: "Which of the following is a type of malware?",
      options: ["Firewall", "Antivirus", "Trojan", "Backup"],
      answer: "Trojan",
    },
    {
      question: "Which company owns Android OS?",
      options: ["Microsoft", "Google", "Apple", "Samsung"],
      answer: "Google",
    },
    {
      question: "What is the shortcut for 'Copy' on a Windows PC?",
      options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
      answer: "Ctrl + C",
    },
    {
      question: "Which device connects a computer to a network?",
      options: ["Monitor", "Router", "Keyboard", "Printer"],
      answer: "Router",
    },
  ];

  let quize_question = document.getElementById("question");
  let nxtbtn = document.getElementById("next");
  let previousbtn = document.getElementById("previous");
  let timer = document.getElementById("timer");
  let submit_btn = document.getElementById("submit_btn");
  let result = document.getElementById("result");
  let welcome_quize = document.getElementById("welcome_quize");
  let quize_result = document.getElementById("quize_result");

  submit_btn.disabled = true;
  previousbtn.disabled = true;

  let quizelist = document.getElementById("quizelist");

  let currentIndex = 0;
  let answer_list = []; // user_answer + correct answer
  // let correct_answer=[]; // correct answer

  quize_question.innerText = `Q:${currentIndex + 1}: ${
    quiz_questions[currentIndex].question
  }`;
  quizelist.innerHTML = "";

  for (let i = 0; i < quiz_questions[currentIndex].options.length; i++) {
    let li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "radio";
    checkbox.name = "option";
    checkbox.value = quiz_questions[currentIndex].options[i];
    checkbox.id = `option${i}`;

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.innerText = quiz_questions[currentIndex].options[i];

    li.appendChild(checkbox);
    li.appendChild(label);

    quizelist.appendChild(li);
  }

  function nextQuestion() {
    const selectedOption = document.querySelector(
      'input[name="option"]:checked'
    );

    if (selectedOption) {
      answer_list.push({
        question_no: currentIndex + 1,
        question: quiz_questions[currentIndex].question,
        user_answer: selectedOption.value,
        actual_answer: quiz_questions[currentIndex].answer,
      });
    }

    previousbtn.disabled = false;
    currentIndex++;
    renderquestions();
  }
  nxtbtn.onclick = nextQuestion;

  previousbtn.onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderquestions();
    }
    if (currentIndex < quiz_questions.length) {
      nxtbtn.disabled = false;
    }
    if (currentIndex === 0) {
      previousbtn.disabled = true;
    }
  };

  renderquestions = () => {
    if (currentIndex < quiz_questions.length) {
      quize_question.innerText = `Q:${currentIndex + 1}: ${
        quiz_questions[currentIndex].question
      }`;
      quizelist.innerHTML = "";

      for (let i = 0; i < quiz_questions[currentIndex].options.length; i++) {
        let li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "radio";
        checkbox.name = "option";
        checkbox.value = quiz_questions[currentIndex].options[i];
        checkbox.id = `option${i}`;

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerText = quiz_questions[currentIndex].options[i];

        li.appendChild(checkbox);
        li.appendChild(label);

        quizelist.appendChild(li);
      }
      startTime();
    } else {
      nxtbtn.disabled = true;
      submit_btn.disabled = false;

      timer.innerHTML = "00:00:00";
    }
  };

  let seconds = 5;
  let minutes = 0;
  let hours = 0;
  let intervalId = null;

  function startTime() {
    clearInterval(intervalId);
    seconds = 5;
    timer.innerHTML =
      checkTime(hours) + ":" + checkTime(minutes) + ":" + checkTime(seconds);

    intervalId = setInterval(() => {
      seconds--;
      let h = checkTime(hours);
      let m = checkTime(minutes);
      let s = checkTime(seconds);
      ``;
      timer.innerHTML = h + ":" + m + ":" + s;

      if (seconds === 0) {
        clearInterval(intervalId);
        currentIndex++;
        if (currentIndex < quiz_questions.length) {
          renderquestions();
        }
      }
    }, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  submit_btn.onclick = checkanswer;

  function checkanswer() {
    quize.style.display = "none";
    welcome_quize.style.display = "none";
    quize_result.style.display = "block";
    result.style.display = "block";

    correct_answer = 0;
    answer_list;
    for (let i = 0; i < answer_list.length; i++) {
      if (answer_list[i].actual_answer === answer_list[i].user_answer) {
        correct_answer++;
      }

      result.innerHTML += `
    <div style="margin-bottom:10px; border-bottom:1px solid #ccc; padding-bottom:5px;">
      <strong>Q${i + 1}: ${answer_list[i].question}</strong><br>
      Your Answer: <span style="color:${
        answer_list[i].user_answer === answer_list[i].actual_answer
          ? "green"
          : "red"
      }">${answer_list[i].user_answer}</span><br>
      Correct Answer: <strong>${answer_list[i].actual_answer}</strong>
    </div>
  `;
    }
    result.innerHTML += `<h3>You got ${correct_answer} out of ${quiz_questions.length} correct!</h3>`;
  }
}




