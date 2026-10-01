import './style.css';

const icon = (name, size = 20) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use href="#${name}"/></svg>`;

document.querySelector('#app').innerHTML = `
<svg class="sprite" xmlns="http://www.w3.org/2000/svg">
  <symbol id="sparkle" viewBox="0 0 24 24"><path d="m12 3-1.7 6.4L4 11l6.3 1.6L12 19l1.7-6.4L20 11l-6.3-1.6L12 3Z"/><path d="m19 18-.6 2.4L16 21l2.4.6L19 24l.6-2.4L22 21l-2.4-.6L19 18Z"/></symbol>
  <symbol id="mic" viewBox="0 0 24 24"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></symbol>
  <symbol id="pen" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"/></symbol>
  <symbol id="upload" viewBox="0 0 24 24"><path d="M12 15V3M8 7l4-4 4 4M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></symbol>
  <symbol id="scan" viewBox="0 0 24 24"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10"/></symbol>
  <symbol id="arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
  <symbol id="check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></symbol>
  <symbol id="fire" viewBox="0 0 24 24"><path d="M12 22c4 0 7-2.5 7-6.5 0-2.6-1.3-4.7-4-7.5.1 2.4-1.1 3.8-2 4.5C13.1 8.8 10.6 6 8 3c.2 3-3 5.6-3 9.4C5 18 8 22 12 22Z"/></symbol>
  <symbol id="calendar" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></symbol>
  <symbol id="more" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/></symbol>
  <symbol id="home" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/></symbol>
  <symbol id="layers" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></symbol>
  <symbol id="user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c.7-4 3.3-6 8-6s7.3 2 8 6"/></symbol>
</svg>
<main class="shell">
  <nav class="topbar">
    <a class="brand" href="#"><span class="brand-mark">m</span><span>medrecall<span class="brand-ai">AI</span></span></a>
    <div class="nav-right"><button class="icon-button notification" aria-label="Notifications">${icon('sparkle', 19)}<i></i></button><button class="avatar" aria-label="Your profile">SM</button></div>
  </nav>

  <section class="welcome">
    <div><p class="eyebrow">THURSDAY, OCTOBER 1</p><h1>Good morning, <em>Sushma.</em></h1><p class="subhead">Your future patients are counting on you. Let’s make today’s learning stick.</p></div>
    <div class="streak"><div class="streak-icon">${icon('fire',21)}</div><div><strong>12 day streak</strong><span>Keep the momentum going</span></div></div>
  </section>

  <section class="capture card">
    <div class="capture-copy"><div class="ai-badge">${icon('sparkle',15)} MEDRECALL AI</div><h2>What did you learn today?</h2><p>Tell us anything—from a quick thought to a full lecture. We’ll turn it into recall that lasts.</p></div>
    <div class="capture-actions">
      <button class="capture-action speak" data-action="Speak"><span>${icon('mic',23)}</span><b>Speak</b><small>Voice memo</small></button>
      <button class="capture-action" data-action="Type"><span>${icon('pen',22)}</span><b>Type</b><small>Write a note</small></button>
      <button class="capture-action" data-action="Upload"><span>${icon('upload',22)}</span><b>Upload</b><small>PDF or slides</small></button>
      <button class="capture-action" data-action="Scan"><span>${icon('scan',22)}</span><b>Scan</b><small>Photo or image</small></button>
    </div>
  </section>

  <section class="dashboard-grid">
    <article class="review card">
      <div class="section-head"><div><p class="eyebrow">TODAY’S FOCUS</p><h2>Ready for a quick review?</h2></div><span class="due-pill">32 due</span></div>
      <p class="review-desc">A focused session now will help move these concepts to long-term memory.</p>
      <div class="progress-row"><div class="progress-track"><span></span></div><b>8 / 40</b></div>
      <button class="review-button" id="start-review">Start today’s review ${icon('arrow',18)}</button>
      <button class="skip-button">I’ll come back later</button>
    </article>
    <article class="calendar card"><div class="section-head"><div><p class="eyebrow">YOUR RHYTHM</p><h2>Recall activity</h2></div><button class="more">${icon('more',21)}</button></div><div class="week"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div><div class="week-bars"><i class="active"></i><i class="active"></i><i class="active"></i><i class="today"></i><i></i><i></i><i></i></div><p class="activity-note">You’re most consistent in the morning. <b>Nice work.</b></p></article>
  </section>

  <section class="recent"><div class="section-head"><div><p class="eyebrow">FROM YOUR LEARNING</p><h2>Recently remembered</h2></div><button class="text-link">See all ${icon('arrow',15)}</button></div><div class="concept-grid">
    <article class="concept card"><div class="concept-top"><span class="topic renal">RENAL</span><button class="more">${icon('more',19)}</button></div><h3>Nephrotic syndrome</h3><p>Proteinuria, edema, and the key distinctions that matter.</p><div class="concept-foot"><span>${icon('layers',15)} 8 recall prompts</span><span class="mastered">${icon('check',14)} Mastered</span></div></article>
    <article class="concept card"><div class="concept-top"><span class="topic cardio">CARDIO</span><button class="more">${icon('more',19)}</button></div><h3>ACE inhibitors</h3><p>Ang II, aldosterone, bradykinin—and the clinical picture.</p><div class="concept-foot"><span>${icon('layers',15)} 6 recall prompts</span><span class="learning">In learning</span></div></article>
    <article class="concept card new-concept"><div class="concept-top"><span class="topic neuro">NEURO</span><button class="more">${icon('more',19)}</button></div><h3>Basal ganglia pathways</h3><p>Direct and indirect pathways, made simple.</p><div class="concept-foot"><span>${icon('layers',15)} 10 recall prompts</span><span class="new">New</span></div></article>
  </div></section>
</main>
<nav class="mobile-nav"><a class="active">${icon('home',19)}<span>Home</span></a><a>${icon('layers',19)}<span>Library</span></a><button class="nav-capture" aria-label="Capture learning">+</button><a>${icon('calendar',19)}<span>Review</span></a><a>${icon('user',19)}<span>Profile</span></a></nav>
<div class="toast" role="status" aria-live="polite"></div>
<dialog class="capture-dialog" id="capture-dialog" aria-labelledby="capture-title">
  <form method="dialog" class="capture-form" id="capture-form">
    <button class="close-dialog" value="cancel" aria-label="Close capture dialog">×</button>
    <p class="eyebrow" id="capture-mode">NEW LEARNING</p>
    <h2 id="capture-title">Tell MedRecall what you learned</h2>
    <p class="dialog-intro">Add the details in your own words. We’ll identify the high-yield concepts and create your review plan.</p>
    <label for="learning-note">Learning note</label>
    <textarea id="learning-note" name="learning-note" rows="7" placeholder="Example: ACE inhibitors decrease angiotensin II and aldosterone, while increasing bradykinin…" required></textarea>
    <div class="form-footer"><span class="privacy-note">Your notes stay private to your account.</span><button class="generate-button" value="submit">Create my recall set ${icon('arrow', 17)}</button></div>
  </form>
</dialog>`;

const toast = document.querySelector('.toast');
const dialog = document.querySelector('#capture-dialog');
const captureMode = document.querySelector('#capture-mode');
const captureTitle = document.querySelector('#capture-title');
const note = document.querySelector('#learning-note');
const form = document.querySelector('#capture-form');
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3400);
}

document.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => {
  const mode = button.dataset.action;
  captureMode.textContent = `${mode.toUpperCase()} CAPTURE`;
  captureTitle.textContent = mode === 'Speak' ? 'Record what you learned' : 'Tell MedRecall what you learned';
  note.placeholder = mode === 'Upload' ? 'Paste your lecture notes or describe the material you want to upload…' : 'Example: ACE inhibitors decrease angiotensin II and aldosterone, while increasing bradykinin…';
  dialog.showModal();
  note.focus();
}));

form.addEventListener('submit', event => {
  event.preventDefault();
  const learning = note.value.trim();
  if (!learning) return;
  const saved = JSON.parse(localStorage.getItem('medrecall-captures') || '[]');
  saved.unshift({ createdAt: new Date().toISOString(), mode: captureMode.textContent, note: learning });
  localStorage.setItem('medrecall-captures', JSON.stringify(saved.slice(0, 50)));
  form.reset();
  dialog.close();
  showToast('Recall set created. Your first questions are ready for review.');
});

document.querySelector('#start-review').addEventListener('click', () => showToast('Your review session is starting…'));
