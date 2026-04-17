const questions = [
    { q: "วันแรกที่เราเจอกันคือวันไหน?", a: ["1 มกราคม", "14 กุมภาพันธ์", "15 เมษายน", "วันอื่น"], correct: 1 },
    { q: "อาหารมื้อแรกที่กินด้วยกันคือ?", a: ["ส้มตำ", "ชาบู", "ก๋วยเตี๋ยว", "พิซซ่า"], correct: 2 },
    { q: "ใครเป็นคนเริ่มจีบก่อน?", a: ["เค้าเอง", "เธอนั่นแหละ", "พร้อมกัน", "ไม่มีใครจีบ"], correct: 0 },
    { q: "สถานที่เดทแรกคือที่ไหน?", a: ["สวนสาธารณะ", "ห้าง", "โรงหนัง", "ทะเล"], correct: 1 },
    { q: "เธอชอบให้เค้าเรียกว่าอะไร?", a: ["ที่รัก", "อ้วน", "ตัวเล็ก", "ชื่อเฉยๆ"], correct: 2 },
    { q: "เค้าเคยสัญญาอะไรไว้เป็นอย่างแรก?", a: ["จะรักตลอดไป", "จะพาไปเที่ยว", "จะตั้งใจทำงาน", "จะลดน้ำหนัก"], correct: 0 },
    { q: "สีที่เค้าชอบที่สุดคือสีอะไร?", a: ["แดง", "ชมพู", "ฟ้า", "ขาว"], correct: 2 },
    { q: "หนังเรื่องแรกที่ดูด้วยกัน?", a: ["หนังผี", "หนังรัก", "การ์ตูน", "หนังบู๊"], correct: 1 },
    { q: "เค้าแพ้อะไรมากที่สุด?", a: ["กุ้ง", "ฝุ่น", "เธอนั่นแหละ", "แมลงสาบ"], correct: 2 },
    { q: "เป้าหมายปีหน้าของเราคือ?", a: ["แต่งงาน", "ไปเที่ยวต่างประเทศ", "เก็บเงิน", "รักกันมากกว่าเดิม"], correct: 3 }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-number').innerText = `ข้อที่ ${currentQuestion + 1}/10`;
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('progress-bar').style.width = `${(currentQuestion / 10) * 100}%`;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    q.a.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        container.appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score-text').innerText = `ได้คะแนน ${score}/10`;
    
    let comment = "";
    if(score === 10) comment = "สมบูรณ์แบบ! จำได้ทุกอย่างเลย รักที่สุด ❤️";
    else if(score > 7) comment = "เก่งมากกก ใส่ใจกันสุดๆ เลยนะเนี่ย 💖";
    else comment = "จำได้เยอะนะ แต่ต้องมาสร้างความทรงจำใหม่กันอีกเยอะๆ เลย! ✨";
    
    document.getElementById('comment-text').innerText = comment;
}


// สร้าง Array รายชื่อไฟล์รูปภาพที่คุณมี (ก๊อปชื่อจากในเครื่องมาวางให้เป๊ะ)
const myPhotos = [
    'XXXX',
    'XXXX',
    'XXXX',
    'XXXX',
    'XXXX'
];

window.onload = () => {
    const photoContainer = document.getElementById('photo-bg');
    
    myPhotos.forEach((fileName) => {
        const frame = document.createElement('div');
        frame.className = 'photo-frame flex items-center justify-center';
        
        // สุ่มตำแหน่ง/เวลา (เหมือนเดิม)
        const top = Math.random() * 80 + 5;
        const left = Math.random() * 80 + 5;
        frame.style.top = `${top}%`;
        frame.style.left = `${left}%`;
        frame.style.animationDuration = `${15 + Math.random() * 15}s`;

        // ตรงนี้คือจุดสำคัญ! ../ คือการถอยออกจาก templates
        frame.innerHTML = `
            <div style="width:100%; height:100%; background:white; border-radius:12px; overflow:hidden; padding:5px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <img src="../uploads/${fileName}" 
                     style="width: 100%; height: 100%; object-fit: cover;"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span style="display: none; font-size: 30px;">❤️</span>
            </div>
        `;
        photoContainer.appendChild(frame);
    });
};