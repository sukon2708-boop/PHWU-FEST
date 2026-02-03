/* ===============================
   Music Player Script (FULL)
================================ */

const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const vinyl = document.getElementById("vinyl");

const progress = document.getElementById("progress");
const currentTimeText = document.getElementById("currentTime");
const durationText = document.getElementById("duration");

/* แปลงเวลาเป็น mm:ss */
function formatTime(sec){
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

/* โหลดความยาวเพลง */
music.addEventListener("loadedmetadata", () => {
  progress.max = Math.floor(music.duration);
  durationText.textContent = formatTime(music.duration);
});

/* อัปเดตเวลาเพลง */
music.addEventListener("timeupdate", () => {
  progress.value = music.currentTime;
  currentTimeText.textContent = formatTime(music.currentTime);
});

/* ลากแถบเวลา */
progress.addEventListener("input", () => {
  music.currentTime = progress.value;
});

/* ===============================
   โน้ตเพลงลอย 🎵
================================ */
let noteInterval = null;
const notes = ["🎵","🎶","♪","♫"];

function startMusicNotes(){
  if(noteInterval) return;

  noteInterval = setInterval(() => {
    const note = document.createElement("div");
    note.className = "music-note";
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = Math.random() * 100 + "vw";
    note.style.fontSize = 18 + Math.random() * 14 + "px";
    document.body.appendChild(note);

    setTimeout(() => note.remove(), 4000);
  }, 900);
}

function stopMusicNotes(){
  clearInterval(noteInterval);
  noteInterval = null;
}

/* ===============================
   ปุ่มเล่น / หยุด
================================ */
playBtn.addEventListener("click", () => {
  if(music.paused){
    music.play();
    vinyl.classList.add("spin");
    playBtn.textContent = "〢 หยุดเพลง";
    startMusicNotes();
  }else{
    music.pause();
    vinyl.classList.remove("spin");
    playBtn.textContent = "▶ เล่นเพลง";
    stopMusicNotes();
  }
});

/* เพลงจบ */
music.addEventListener("ended", () => {
  vinyl.classList.remove("spin");
  playBtn.textContent = "▶ เล่นเพลง";
  stopMusicNotes();
});

/* ===============================
   หัวใจลอย ❤️
================================ */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 1200);
