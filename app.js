const USER="chaman", PASS="ielts2026";
const tests={
 Reading:{desc:"Original IELTS-style reading practice. Start with a short diagnostic test.",questions:[
  ["The city introduced a bicycle scheme to reduce traffic. What was its main purpose?","To reduce traffic","To increase parking","To raise fares"], 
  ["Which word is closest in meaning to 'substantial'?","considerable","temporary","uncertain"],
  ["The passage states that public transport became more popular after what change?","lower fares","new uniforms","longer holidays"]]},
 Listening:{desc:"Listening practice area. Audio can be added to this portal later.",questions:[
  ["What time does the speaker say the meeting begins?","9:30","10:30","11:30"],
  ["Where will the visitors meet?","At reception","At the library","At the café"],
  ["What does the speaker recommend bringing?","A notebook","A passport","A camera"]]},
 Writing:{desc:"Writing practice with original IELTS-style prompts.",questions:[
  ["Task 1: Describe a chart showing changes in household transport use over ten years.","Write your response in the box below.",""],
  ["Task 2: Some people think online education is more effective than classroom education. Discuss both views and give your opinion.","Write your response in the box below.",""]]},
 Speaking:{desc:"Practise all three parts of the IELTS Speaking structure.",questions:[
  ["Part 1: What do you usually do when you have some free time?","Speak for 30–45 seconds.",""],
  ["Part 2: Describe a skill you would like to learn. You should say what it is, why you want to learn it, and how you would learn it.","Speak for 1–2 minutes.",""],
  ["Part 3: How has technology changed the way people learn new skills?","Speak for 45–60 seconds.",""]]}
};
function login(){let u=document.getElementById("username").value.trim(),p=document.getElementById("password").value;if(u===USER&&p===PASS){sessionStorage.setItem("login","1");document.getElementById("studentName").textContent=u;show("dashboard");updateStats()}else document.getElementById("loginMsg").textContent="Incorrect username or password."}
function logout(){sessionStorage.removeItem("login");show("login")}
function show(id){["login","dashboard","module"].forEach(x=>document.getElementById(x).classList.toggle("hidden",x!==id))}
function back(){show("dashboard")}
function showModule(name){document.getElementById("moduleTitle").textContent=name;document.getElementById("moduleDesc").textContent=tests[name].desc;let body=document.getElementById("moduleBody");body.innerHTML="";tests[name].questions.forEach((q,i)=>{let d=document.createElement("div");d.className="question";if(name==="Writing"||name==="Speaking"){d.innerHTML=`<p>${i+1}. ${q[0]}</p><textarea rows="7" placeholder="${q[1]}"></textarea>`}else{d.innerHTML=`<p>${i+1}. ${q[0]}</p>${q.slice(1).map((x,j)=>`<button class="option" data-i="${j}" onclick="pick(this)">${x}</button>`).join("")}`}body.appendChild(d)});let b=document.createElement("button");b.textContent="Finish practice";b.onclick=()=>finish(name);body.appendChild(b);show("module")}
function pick(btn){btn.parentElement.querySelectorAll(".option").forEach(x=>x.style.outline="none");btn.style.outline="2px solid #4f46e5";btn.parentElement.dataset.answer=btn.dataset.i}
function finish(name){let score=0;if(name==="Reading"||name==="Listening"){document.querySelectorAll(".question").forEach((q,i)=>{if(q.dataset.answer==="0")score++});let total=tests[name].questions.length;let pct=Math.round(score/total*100);save(pct);document.getElementById("moduleBody").insertAdjacentHTML("beforeend",`<div class="result"><b>Practice complete: ${score}/${total} (${pct}%)</b><br>For this demo, the first option is the correct answer.</div>`)}else document.getElementById("moduleBody").insertAdjacentHTML("beforeend",`<div class="result"><b>Response saved for practice.</b><br>Human/AI evaluation can be connected in a later version.</div>`)}
function startMock(){showModule("Reading");document.getElementById("moduleDesc").textContent="Demo full-test entry point. A production version can chain all four timed modules.";document.getElementById("moduleBody").insertAdjacentHTML("afterbegin",'<div class="result"><b>Full Mock Test</b><br>This starter portal demonstrates the structure. We can expand it with original full-length tests, timers, audio, scoring and progress tracking.</div>')}
function save(p){let a=JSON.parse(localStorage.getItem("scores")||"[]");a.push(p);localStorage.setItem("scores",JSON.stringify(a));updateStats()}
function updateStats(){let a=JSON.parse(localStorage.getItem("scores")||"[]");document.getElementById("attempts").textContent=a.length;document.getElementById("best").textContent=a.length?Math.max(...a)+"%":"—"}
if(sessionStorage.getItem("login")==="1"){document.getElementById("studentName").textContent=USER;show("dashboard");updateStats()}