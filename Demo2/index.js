
// index.js
import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";




function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return decodeURIComponent(value);
  }

﻿

  return null;
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
  let quize = document.getElementById("quize");
  let quize_question = document.getElementById("question");
  let nxtbtn = document.getElementById("next");
  let previousbtn = document.getElementById("previous");
  let timer = document.getElementById("timer");
  let submit_btn = document.getElementById("submit_btn");
  let result = document.getElementById("result");
  let welcome_quize = document.getElementById("welcome_quize");
  let quize_result = document.getElementById("quize_result");
  let chart = document.getElementsByClassName("chart");
  let camera_container = document.getElementsByClassName("camera-container");
  let download_result = document.getElementById("download-result");



  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userDocRef = doc(db, "registrations", user.uid);
      const userSnap = await getDoc(userDocRef);
  
      if (!userSnap.exists() || userSnap.data().name === "Guest") {
        const defaultName = user.email;
        await setDoc(
          userDocRef,
          {
            name: defaultName,
            email: user.email,
            createdAt: serverTimestamp(),
          },
          { merge: true } 
        );
      }
  
      const updatedSnap = await getDoc(userDocRef);
      const userData = updatedSnap.data();
      const userName = userData.name;
      console.log("Login user:",userName);

      welcome_quize.textContent = `Welcome to the Quiz: ${userName}`;
    } else {
      window.location.href = "/login.html";
    }
  });
  
  

  // submit_btn.disabled = true;
  previousbtn.disabled = true;
  download_result.disabled = true;

  let quizelist = document.getElementById("quizelist");

  let currentIndex = 0;
  let answer_list = [];
  let seconds = 5;
  // let minutes = 0;
  // let hours = 0;
  let intervalId = null;
  let timerChart;
  let total = 20; // total seconds
  let remaining = total;
  const prefixes = ["A", "B", "C", "D"]; // Or generate dynamically

  // quize_question.innerText = `Q:${currentIndex + 1}: ${
  //   quiz_questions[currentIndex].question
  // }`;
  // quizelist.innerHTML = "";

  // for (let i = 0; i < quiz_questions[currentIndex].options.length; i++) {
  //   let li = document.createElement("li");

  //   const checkbox = document.createElement("input");
  //   checkbox.type = "radio";
  //   checkbox.name = "option";
  //   checkbox.value = quiz_questions[currentIndex].options[i];
  //   checkbox.id = `option${i}`;

  //   const label = document.createElement("label");
  //   label.htmlFor = checkbox.id;
  //   label.innerText = quiz_questions[currentIndex].options[i];

  //   li.appendChild(checkbox);
  //   li.appendChild(label);

  //   quizelist.appendChild(li);
  // }
  let totalQuestions = 20;
  let questionStatus = document.getElementById("questionStatus");
  let answerlist = document.getElementsByClassName("answer-list");

  // Initial list
  // Build question status list with circles
  for (let i = 1; i <= totalQuestions; i++) {
    let li = document.createElement("li");
    li.id = `q${i}`;
    li.innerHTML = `<span class="circle">${i}</span>`;
    questionStatus.appendChild(li);
  }

  // Mark question as answered (turn circle green)
  function markAnswered(qNo) {
    let li = document.getElementById(`q${qNo}`);
    if (li) {
      li.querySelector(".circle").classList.add("answered");
    }
  }

  renderquestions();

  function nextQuestion() {
    const selectedOption = document.querySelector(
      'input[name="option"]:checked'
    );

    if (selectedOption) {
      answer_list[currentIndex] = {
        question_no: currentIndex + 1,
        question: quiz_questions[currentIndex].question,
        user_answer: selectedOption.value,
        actual_answer: quiz_questions[currentIndex].answer,
      };
      markAnswered(answer_list[currentIndex].question_no);
    }
    if (currentIndex < quiz_questions.length - 1) {
      currentIndex++;
      renderquestions();
    } else {
      submit_btn.disabled = true;
    }

    previousbtn.disabled = currentIndex === 0;
    nxtbtn.disabled = currentIndex === quiz_questions.length - 1;
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
  function renderquestions() {
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

        const savedAnswer = answer_list[currentIndex]?.user_answer;
        if (savedAnswer === quiz_questions[currentIndex].options[i]) {
          checkbox.checked = true;
        }
        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerText = quiz_questions[currentIndex].options[i];
        label.textContent = `${prefixes[i]}. ${quiz_questions[currentIndex].options[i]}`;

        li.appendChild(checkbox);
        li.appendChild(label);

        quizelist.appendChild(li);
      }

      const allOptions = quizelist.querySelectorAll("li");

      allOptions.forEach((li) => {
        const input = li.querySelector("input");

        input.addEventListener("change", () => {
          allOptions.forEach((el) => el.classList.remove("selected"));

          li.classList.add("selected");
          // ✅ Save selection immediately
          answer_list[currentIndex] = {
            question_no: currentIndex + 1,
            question: quiz_questions[currentIndex].question,
            user_answer: input.value,
            actual_answer: quiz_questions[currentIndex].answer,
          };
          markAnswered(answer_list[currentIndex].question_no);

          // console.log("answer_list:",answer_list)
        });

        if (input.checked) {
          li.classList.add("selected");
        }
      });

      startTimer();
    } else {
      nxtbtn.disabled = true;
      submit_btn.disabled = false;

      timer.innerHTML = "00:00:00";
    }
  }

  function startTimer() {
    remaining = total;

    let ctx = document.getElementById("timerChart").getContext("2d");

    if (timerChart) {
      timerChart.destroy();
    }

    timerChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Time Left", "Elapsed"],
        datasets: [
          {
            data: [remaining, total - remaining],
            backgroundColor: ["#4CAF50", "#ddd"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
      plugins: [
        {
          id: "timerText",
          afterDraw(chart) {
            const {
              ctx,
              chartArea: { width, height },
            } = chart;
            ctx.save();
            ctx.font = "bold 28px Arial";
            ctx.fillStyle = "#333";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(remaining + "s", width / 2, height / 2);
          },
        },
      ],
    });

    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      remaining--;

      if (remaining >= 0) {
        timerChart.data.datasets[0].data = [remaining, total - remaining];
        timerChart.update();
      }

      if (remaining <= 0) {
        clearInterval(intervalId);
        nextQuestion(); 
      }
    }, 1000);
  }

  
  submit_btn.onclick = checkanswer;


//   // ---- Helper to save score ----
// async function saveUserScore(userId, score, totalQuestions) {
//   if (!userId) return;

//   const scoreDocRef = doc(db, "registrations", userId, "scores", "latest"); 
//   console.log("scoreDocRef:",scoreDocRef);

//   await setDoc(scoreDocRef, {
//     your_score: score,
//     total_questions: totalQuestions,
//     percentage: ((score / totalQuestions) * 100).toFixed(2),
//     timestamp: serverTimestamp(),
//   }, { merge: true });
//   console.log("score added");
// }

async function checkanswer() {
    quize.style.display = "none";
    welcome_quize.style.display = "none";
    quize_result.style.display = "block";
    result.style.display = "block";
    timer.style.display = "none";
    questionStatus.style.display = "none";
    video.style.display = "none";
    download_result.disabled = false;

    download_result.onclick = printresult;

    if (camera_container.length > 0) {
      camera_container[0].style.display = "none";
    }

    if (answerlist.length > 0) {
      answerlist[0].style.display = "none";
    }

    result.innerHTML = ""; 
    let correct_answer = 0;

    let scrollableDiv = document.createElement("div");
    scrollableDiv.className = "scrollable-result";
    scrollableDiv.style.maxHeight = "500px"; 
    scrollableDiv.style.overflowY = "auto";
    result.appendChild(scrollableDiv);

    for (let i = 0; i < quiz_questions.length; i++) {
      const question = quiz_questions[i];
      const userAnswer = answer_list[i]?.user_answer || null;
      const isCorrect = userAnswer === question.answer;

      if (isCorrect) {
        correct_answer++;
      }

      let optionsHTML = question.options
        .map((opt) => {
          let optionClass = "review-option";
          let checked = userAnswer === opt ? "checked" : "";

          if (userAnswer) {
            if (opt === question.answer) {
              optionClass += " correct"; 
            }
            if (opt === userAnswer && userAnswer !== question.answer) {
              optionClass += " incorrect";
            }
          }
          else {
            if (opt === question.answer) {
              optionClass += ""; 
            }
          }

          return `
          <label class="${optionClass}">
            <input type="radio" name="q${i}" disabled ${
            checked ? "checked" : ""
          }>
            ${prefixes[question.options.indexOf(opt)]}. ${opt}

            ${
              userAnswer
                ? opt === question.answer
                  ? '<span class="icon">✔</span>'
                  : opt === userAnswer && userAnswer !== question.answer
                  ? '<span class="icon">✖</span>'
                  : ""
                : ""
            }
          </label>
        `;
        })
        .join("");

      if (!userAnswer) {
        optionsHTML += `
          <div class="no-answer">
            ❌ You did not select any answer.
          </div>
        `;
      }

      if (!document.querySelector(".scrollable-result")) {
        result.innerHTML = `<div class="scrollable-result"></div>`;
      }

      document.querySelector(".scrollable-result").innerHTML += `
    <div class="review-card">
      <div class="review-question">Q${i + 1}. ${question.question}</div>
      ${optionsHTML}
    </div>  
  `;
    }

    // Show score
    let scoreHTML = `
    <div style="margin:20px; font-weight:bold; font-size:1.5rem; text-align:center;">
      🎯 You got ${correct_answer} out of ${quiz_questions.length} correct!
    </div>
  `;
    document
      .querySelector(".chart")
      .insertAdjacentHTML("afterbegin", scoreHTML);


//       // ---- SAVE SCORE TO FIRESTORE ----
//       console.log("login user for answr store:",auth.currentUser);
// if (auth.currentUser) {
//   await saveUserScore(auth.currentUser.uid, correct_answer, quiz_questions.length);
// }



    // ---- PIE CHART ----
    if (window.quizChart) {
      window.quizChart.destroy();
    }
    const ctx = document.getElementById("quizPieChart").getContext("2d");

    const not_answered = quiz_questions.length - answer_list.length;
    const incorrect_answer =
      quiz_questions.length - correct_answer - not_answered;

    window.quizChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Correct", "Incorrect", "Not Answered"],
        datasets: [
          {
            data: [correct_answer, incorrect_answer, not_answered],
            backgroundColor: ["#4CAF50", "#F44336", "#8758a6"],
            hoverOffset: 10,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Quiz Results",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }

  const cameraContainer = document.querySelector(".camera-container");
  const warningDiv = document.createElement("div");
  const video = document.getElementById("quizCamera");
  const canvas = document.getElementById("snapshot");
  const ctx = canvas.getContext("2d"); 

  warningDiv.style.position = "static";
  // warningDiv.style.top = "10px";
  warningDiv.style.left = "10px";
  warningDiv.style.marginTop = "10px"; 

  warningDiv.style.background = "rgba(255,255,255,0.95)";
  warningDiv.style.padding = "6px 12px";
  warningDiv.style.borderRadius = "4px";
  warningDiv.style.zIndex = 9999;
  warningDiv.style.color = "red";
  warningDiv.style.fontWeight = "bold";
  warningDiv.style.fontSize = "16px";
  warningDiv.innerText = "Face not properly visible!";
  warningDiv.style.display = "none";

  canvas.after(warningDiv);

  // Load face-api models
  async function loadModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
  }

  // Start video
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => (video.srcObject = stream))
    .catch((err) => console.error("Camera access denied: ", err));

  video.addEventListener("play", () => {
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    let warningVisible = false;
    let consecutiveNoFace = 0;
    let consecutiveFace = 0;
    const threshold = 3;

    setInterval(async () => {
      const options = new faceapi.TinyFaceDetectorOptions({
        scoreThreshold: 0.7,
      });
      const detections = await faceapi.detectAllFaces(video, options);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);
      const resizedDetections = faceapi.resizeResults(detections, displaySize);


      if (detections.length === 0) {
        warningDiv.innerText = "Face not detected!";
        warningDiv.style.display = "block";
      } else if (detections.length > 1) {
        warningDiv.innerText = "Too many faces detected!";
        warningDiv.style.display = "block";
      } else {
        const box = resizedDetections[0].box;
        const minWidth = video.width * 0.3;
        const minHeight = video.height * 0.3;
        if (box.width < minWidth || box.height < minHeight) {
          warningDiv.innerText = "Face is partially visible or too small!";
          warningDiv.style.display = "block";
        } else if (
          box.x < 0 ||
          box.y < 0 ||
          box.x + box.width > video.width ||
          box.y + box.height > video.height
        ) {
          warningDiv.innerText = "Face is not fully inside the camera view!";
          warningDiv.style.display = "block";
        } else {
          warningDiv.style.display = "none";
        }
      }
    }, 100);
  });

  loadModels();

  async function printresult() {
    const element = document.querySelector("#quize_result");
    if (!element) return;
  
    // Save original styles for scrollable section
    const scrollable = element.querySelector(".scrollable-result");
    const originalStyle = scrollable
      ? {
          height: scrollable.style.height,
          maxHeight: scrollable.style.maxHeight,
          overflow: scrollable.style.overflow,
        }
      : null;
  
    // Expand scrollable section to show all questions
    if (scrollable) {
      scrollable.style.height = "auto";
      scrollable.style.maxHeight = "none";
      scrollable.style.overflow = "visible";
    }
  
    // Wait for browser to render
    await new Promise((resolve) => requestAnimationFrame(resolve));
  
    // Capture entire quiz result
    html2pdf()
      .set({
        margin: 10,
        filename: "quiz_result.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, scrollY: 0, useCORS: true },
        jsPDF: { orientation: "portrait", unit: "pt", format: "a4" },
      })
      .from(element)
      .save()
      .finally(() => {
        // Restore original scrollable styles
        if (scrollable) {
          scrollable.style.height = originalStyle.height;
          scrollable.style.maxHeight = originalStyle.maxHeight;
          scrollable.style.overflow = originalStyle.overflow;
        }
      });
  }
  
  
  


}
window.home = home;
home();