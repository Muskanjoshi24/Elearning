const questions = [
    {
        question: "What is the primary purpose of HTML in web development?",
        options: ["Styling", "Database Management", "Markup Structure", "Server-side Logic"],
        correctAnswer: "Markup Structure"
    },
    {
        question: "Which CSS property is used for responsive design?",
        options: ["color", "flex", "position", "media queries"],
        correctAnswer: "media queries"
    },
    {
        question: "What does the acronym API stand for in the context of web development?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Processing Interface", "Application Processing Interface"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "In JavaScript, what is the purpose of the 'fetch' function?",
        options: ["Styling", "Database Query", "Asynchronous HTTP Request", "Event Handling"],
        correctAnswer: "Asynchronous HTTP Request"
    },
    {
        question: "Which database type is commonly associated with MongoDB?",
        options: ["Relational Database", "NoSQL Database", "Object-Oriented Database", "Graph Database"],
        correctAnswer: "NoSQL Database"
    },
    {
        question: "What does the term 'middleware' refer to in the context of Express.js?",
        options: ["Front-end Styling", "Database Management", "Server-side Logic", "Request Handling"],
        correctAnswer: "Request Handling"
    },
    {
        question: "In the MVC (Model-View-Controller) architecture, what does the 'View' represent?",
        options: ["User Interface", "Database", "Server", "Middleware"],
        correctAnswer: "User Interface"
    },
    {
        question: "What is the purpose of the 'npm' command in Node.js?",
        options: ["Node Package Manager", "Node Programming Module", "New Project Maker", "Node Project Manager"],
        correctAnswer: "Node Package Manager"
    },
    {
        question: "Which HTTP method is typically used for retrieving data from a server in a RESTful API?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "GET"
    },
    {
        question: "What is the role of a 'router' in the context of Express.js?",
        options: ["Database Query", "Front-end Styling", "Request Handling", "Middleware"],
        correctAnswer: "Request Handling"
    }
];


    let currentQuestion = 0;
    let score = 0;
    
    function startQuiz() {
        showQuestion();
    }
    
    function showQuestion() {
        const questionContainer = document.getElementById("question-container");
        const optionsContainer = document.getElementById("options-container");
        const resultContainer = document.getElementById("result-container");
    
        resultContainer.innerHTML = "";
    
        if (currentQuestion < questions.length) {
            const currentQuiz = questions[currentQuestion];
    
            questionContainer.innerHTML = `<p>${currentQuiz.question}</p>`;
    
            optionsContainer.innerHTML = "";
            for (let option of currentQuiz.options) {
                optionsContainer.innerHTML += `
                    <button onclick="checkAnswer('${option}')">${option}</button>
                `;
            }
        } else {
            showResult();
        }
    }
    
    function checkAnswer(answer) {
        const currentQuiz = questions[currentQuestion];
    
        if (answer === currentQuiz.correctAnswer) {
            score++;
        }
    
        currentQuestion++;
        showQuestion();
    }
    
    function showResult() {
        const resultContainer = document.getElementById("result-container");
        const nextButton = document.getElementById("next-button");
    
        resultContainer.innerHTML = `
            <h2>Your Score: ${score}/${questions.length}</h2>
            ${score >= 7 ? '<img src="images/giphy.gif" alt="Winning Gif">' : '<img src="images/200w.webp" alt="Losing Gif">'}
            <p>${score >= 7 ? "Congratulations! You are a winner!" : "Better luck next time!"}</p>
        `;
    
        nextButton.style.display = "none"; // Hide the next button at the end
    }
    
    function nextQuestion() {
        const nextButton = document.getElementById("next-button");
        nextButton.style.display = "block"; // Show the next button again
    
        showQuestion();
    }
    
    // Start the quiz when the page loads
    startQuiz();
    
    function submitAssignment() {
        const submissionMessage = document.getElementById("submission-message");
        submissionMessage.innerHTML = "Assignment Submitted!";
        return false; // Prevent actual form submission (this is just a simulation)
    }