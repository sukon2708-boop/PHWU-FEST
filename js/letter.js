const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const hintText = document.getElementById("hintText");

const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const letterText = document.getElementById("letterText");
const nextBtn = document.getElementById("nextBtn");

let opening = false;
let letterOpened = false;

const MESSAGE = `
วาเลนไทน์ปีนี้
มีรักรออยู่รอบกาย 
ยังมีรักรอคุณอยู่ ที่นี่ ไม่ไกล :)

14 กุมภาพันธ์ 2569 
📍อาคารที่อาคารวิชาการ 8 
ตึกสำนักวิชาสาธารณสุขศาสตร์
`;

// 📨 คลิกที่ซองจดหมาย
openLetter.addEventListener("click", () => {

  // เปิดแล้ว → คลิกเพื่ออ่าน
  if (letterOpened) {
    openModal();
    return;
  }

  if (opening) return;
  opening = true;

  hintText.style.display = "none";
  readBtn.textContent = "กำลังเปิดจดหมาย...";

  openLetter.classList.remove("letter-closed");
  openLetter.src = "assets/letter2.png";

  setTimeout(() => {
    openLetter.src = "assets/letter3.png";
    letterOpened = true;
    opening = false;
    readBtn.textContent = "อ่านจดหมาย";
  }, 600);
});

// ปุ่มอ่านจดหมาย

readBtn.addEventListener("click", () => {
  if (!letterOpened) return;
  openModal();
});

// เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();

  // ⭐ จัดข้อความกึ่งกลาง
  letterText.style.textAlign = "center";
  letterText.style.whiteSpace = "pre-line"; // สำคัญมาก

  modalBackdrop.style.display = "flex";
  nextBtn.style.display = "inline-block";
}


// ปิด modal
closeModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    modalBackdrop.style.display = "none";
  }
});

// ไปหน้า music.html
function goToMusic(){
  window.location.href = "music.html";
}

// สุ่มหัวใจลอย
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 1200);
