function showSection(sectionName) {
    const contentArea = document.getElementById("content-area");

    if (sectionName === "dashboard") {
        contentArea.innerHTML = `
            <h1>Student Dashboard</h1>
            <p>Choose a module on the left to begin your test practice.</p>
            <div class="stats-card">
                <h3>Total Modules Available: 4</h3>
            </div>
        `;
    } else if (sectionName === "reading") {
        let test = ieltsDatabase.readingTests[0];
        let questionsHTML = test.questions.map(q => `
            <div class="question-box">
                <p><b>Q${q.id}.</b> ${q.q}</p>
                <input type="text" placeholder="Type your answer here..." id="ans-${q.id}">
            </div>
        `).join('');

        contentArea.innerHTML = `
            <h2>${test.title}</h2>
            <div class="reading-passage"><p>${test.passage}</p></div>
            <div class="questions-container">
                <h3>Questions</h3>
                ${questionsHTML}
                <button onclick="alert('Answers submitted successfully!')">Submit Answers</button>
            </div>
        `;
    } else if (sectionName === "writing") {
        let prompt = ieltsDatabase.writingPrompts[0];
        contentArea.innerHTML = `
            <h2>Writing Practice</h2>
            <p><b>${prompt.task}</b></p>
            <textarea rows="10" placeholder="Type your essay here..." style="width:100%;"></textarea>
            <button onclick="alert('Essay saved!')">Submit Essay</button>
        `;
    } else if (sectionName === "speaking") {
        let cue = ieltsDatabase.speakingCueCards[0];
        let bullets = cue.bulletPoints.map(b => `<li>${b}</li>`).join('');
        contentArea.innerHTML = `
            <h2>Speaking Part 2: Cue Card</h2>
            <div class="cue-card">
                <p><b>Topic:</b> ${cue.topic}</p>
                <ul>${bullets}</ul>
            </div>
            <p><i>Tip: Practice speaking on this topic for 1 to 2 minutes aloud.</i></p>
        `;
    }
}
