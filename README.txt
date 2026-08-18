
function showSection(sectionName) {
    const contentArea = document.getElementById("content-area");

    if (sectionName === "dashboard") {
        contentArea.innerHTML = `
            <div class="welcome-banner">
                <h1>Welcome back, Student 👋</h1>
                <p>Your complete IELTS preparation portal is ready. Choose a module or mock test below to begin.</p>
            </div>
            <div class="stats-grid">
                <div class="stat-card"><strong>02</strong><span>Reading Tests</span></div>
                <div class="stat-card"><strong>02</strong><span>Writing Tasks</span></div>
                <div class="stat-card"><strong>02</strong><span>Speaking Modules</span></div>
                <div class="stat-card"><strong>01</strong><span>Listening Test</span></div>
                <div class="stat-card"><strong>01</strong><span>Full Mock Test</span></div>
            </div>
        `;
    } else if (sectionName === "reading") {
        let testsHTML = ieltsDatabase.readingTests.map(test => `
            <div class="module-card">
                <h3>${test.title}</h3>
                <p>${test.passage.substring(0, 120)}...</p>
                <button onclick="loadReadingTest('${test.id}')">Start Test</button>
            </div>
        `).join('');

        contentArea.innerHTML = `
            <h2>Reading Module</h2>
            <p>Select a test passage to begin your practice:</p>
            <div class="grid-container">${testsHTML}</div>
        `;
    } else if (sectionName === "writing") {
        let writingHTML = ieltsDatabase.writingPrompts.map(prompt => `
            <div class="module-card">
                <h3>${prompt.task}</h3>
                <textarea rows="6" placeholder="Type your response here..." style="width:100%; margin-top:10px;"></textarea>
                <button style="margin-top:10px;" onclick="alert('Essay submitted for evaluation!')">Submit Response</button>
            </div>
        `).join('');

        contentArea.innerHTML = `
            <h2>Writing Module</h2>
            <p>Practice Task 1 and Task 2 prompts below:</p>
            ${writingHTML}
        `;
    } else if (sectionName === "speaking") {
        let speakingHTML = ieltsDatabase.speakingCueCards.map(cue => {
            let bullets = cue.bulletPoints.map(b => `<li>${b}</li>`).join('');
            return `
                <div class="module-card">
                    <h3>${cue.topic}</h3>
                    <ul>${bullets}</ul>
                    <p><em>Practice speaking on this topic for 1-2 minutes.</em></p>
                </div>
            `;
        }).join('');

        contentArea.innerHTML = `
            <h2>Speaking Module (Cue Cards)</h2>
            <div class="grid-container">${speakingHTML}</div>
        `;
    } else if (sectionName === "listening") {
        let listeningHTML = ieltsDatabase.listeningModules.map(list => `
            <div class="module-card">
                <h3>${list.title}</h3>
                <p><em>${list.audioDescription}</em></p>
                <input type="text" placeholder="Type answer for Q1..." style="width:100%; margin:10px 0; padding:8px;">
                <button onclick="alert('Listening answers submitted!')">Submit Listening</button>
            </div>
        `).join('');

        contentArea.innerHTML = `
            <h2>Listening Module</h2>
            <div class="grid-container">${listeningHTML}</div>
        `;
    } else if (sectionName === "mock") {
        let mockHTML = ieltsDatabase.mockTests.map(mock => `
            <div class="module-card" style="border-left-color: #10b981;">
                <h3>${mock.title}</h3>
                <p>${mock.description}</p>
                <button style="background-color: #10b981;" onclick="alert('Starting full mock test session...')">Launch Mock Test</button>
            </div>
        `).join('');

        contentArea.innerHTML = `
            <h2>Full Mock Tests</h2>
            <p>Simulate the real exam experience with complete module testing:</p>
            <div class="grid-container">${mockHTML}</div>
        `;
    }
}

function loadReadingTest(testId) {
    const test = ieltsDatabase.readingTests.find(t => t.id === testId);
    const contentArea = document.getElementById("content-area");

    let questionsHTML = test.questions.map(q => `
        <div class="question-box">
            <p><b>Q${q.id}.</b> ${q.q}</p>
            <input type="text" placeholder="Type your answer..." id="ans-${q.id}">
        </div>
    `).join('');

    contentArea.innerHTML = `
        <button onclick="showSection('reading')" style="margin-bottom: 15px; background: #64748b;">← Back to Reading List</button>
        <h2>${test.title}</h2>
        <div class="reading-passage"><p>${test.passage}</p></div>
        <div class="questions-container">
            <h3>Questions</h3>
            ${questionsHTML}
            <button onclick="alert('Answers evaluated successfully!')" style="margin-top: 15px;">Submit Answers</button>
        </div>
    `;
}
