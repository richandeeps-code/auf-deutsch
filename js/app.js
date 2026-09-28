/* ============================================================
   AUF DEUTSCH! — App Logic
   ============================================================ */

let currentChapter = 0;

/* Safe localStorage wrapper — works on file:// URLs and private browsing */
const store = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, val)      { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }
};

let completed = new Set(store.get('completedChapters', []));

const sidebar      = document.getElementById('sidebar');
const overlay      = document.getElementById('sidebar-overlay');
const chapterList  = document.getElementById('chapter-list');
const contentWrap  = document.getElementById('content-wrap');
const navBar       = document.getElementById('nav-bar');
const prevBtn      = document.getElementById('prev-btn');
const nextBtn      = document.getElementById('next-btn');
const navCounter   = document.getElementById('nav-counter');
const completeBtn  = document.getElementById('complete-btn');
const progressFill = document.getElementById('progress-bar-fill');
const progressPct  = document.getElementById('progress-pct');
const breadcrumb   = document.getElementById('breadcrumb');

/* ── Build sidebar ── */
function buildSidebar() {
  const groups = { A1: [], A2: [], B1: [], B2: [], ref: [] };
  CHAPTERS.forEach((ch, i) => {
    if (ch.isCover) return;
    if (ch.isAppendix) { groups.ref.push({ ch, i }); return; }
    groups[ch.level]?.push({ ch, i });
  });

  const levelMeta = {
    A1:  { label: 'A1 — Beginner',         badge: 'badge-a1' },
    A2:  { label: 'A2 — Elementary',        badge: 'badge-a2' },
    B1:  { label: 'B1 — Intermediate',      badge: 'badge-b1' },
    B2:  { label: 'B2 — Upper Intermediate',badge: 'badge-b2' },
    ref: { label: 'Reference',              badge: 'badge-ref' },
  };

  chapterList.innerHTML = '';

  // Cover button
  const coverBtn = makeChapterBtn({ ch: CHAPTERS[0], i: 0 }, 'badge-a1');
  coverBtn.querySelector('.ch-num').textContent = '★';
  coverBtn.querySelector('span:nth-child(2)').textContent = 'Introduction';
  chapterList.appendChild(coverBtn);

  Object.entries(groups).forEach(([level, items]) => {
    if (!items.length) return;
    const { label, badge } = levelMeta[level];
    const grp = document.createElement('div');
    grp.className = 'level-group';
    grp.innerHTML = `<div class="level-label"><span class="level-badge ${badge}">${level === 'ref' ? 'REF' : level}</span>${label}</div>`;
    items.forEach(({ ch, i }) => grp.appendChild(makeChapterBtn({ ch, i }, badge)));
    chapterList.appendChild(grp);
  });
}

function makeChapterBtn({ ch, i }, badge) {
  const btn = document.createElement('button');
  btn.className = 'chapter-btn' + (completed.has(i) ? ' completed' : '');
  btn.dataset.index = i;
  const num = ch.isCover ? '★' : ch.isAppendix ? '★' : String(ch.id).padStart(2, '0');
  btn.innerHTML = `<span class="ch-num">${num}</span><span>${ch.title}</span><span class="ch-check">✓</span>`;
  btn.addEventListener('click', () => { navigateTo(i); closeSidebar(); });
  return btn;
}

/* ── Navigation ── */
function navigateTo(index) {
  currentChapter = index;
  render();
  updateSidebarActive();
  updateProgress();
  contentWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.scrollTo(0, 0);
}

function updateSidebarActive() {
  document.querySelectorAll('.chapter-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.index) === currentChapter);
  });
}

function updateProgress() {
  const total = CHAPTERS.filter(c => !c.isCover && !c.isAppendix).length;
  const done  = [...completed].filter(i => !CHAPTERS[i]?.isCover && !CHAPTERS[i]?.isAppendix).length;
  const pct   = Math.round((done / total) * 100);
  progressFill.style.width = pct + '%';
  progressPct.textContent  = pct + '%';
}

prevBtn.addEventListener('click', () => { if (currentChapter > 0) navigateTo(currentChapter - 1); });
nextBtn.addEventListener('click', () => { if (currentChapter < CHAPTERS.length - 1) navigateTo(currentChapter + 1); });

completeBtn.addEventListener('click', () => {
  if (completed.has(currentChapter)) {
    completed.delete(currentChapter);
    completeBtn.classList.remove('done');
    completeBtn.textContent = '○  Mark complete';
  } else {
    completed.add(currentChapter);
    completeBtn.classList.add('done');
    completeBtn.textContent = '✓  Completed';
  }
  store.set('completedChapters', [...completed]);
  updateProgress();
  // Update sidebar badge
  document.querySelectorAll('.chapter-btn').forEach(btn => {
    const i = parseInt(btn.dataset.index);
    btn.classList.toggle('completed', completed.has(i));
  });
});

/* ── Sidebar mobile ── */
document.getElementById('menu-toggle').addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
});
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
}
overlay.addEventListener('click', closeSidebar);

/* ── Render ── */
function render() {
  const ch = CHAPTERS[currentChapter];
  contentWrap.innerHTML = '';
  contentWrap.classList.remove('fade-in');
  void contentWrap.offsetWidth; // reflow
  contentWrap.classList.add('fade-in');

  // nav state
  prevBtn.disabled = currentChapter === 0;
  nextBtn.disabled = currentChapter === CHAPTERS.length - 1;
  navCounter.textContent = `${currentChapter + 1} / ${CHAPTERS.length}`;

  const isDone = completed.has(currentChapter);
  completeBtn.textContent = isDone ? '✓  Completed' : '○  Mark complete';
  completeBtn.classList.toggle('done', isDone);
  completeBtn.style.display = (ch.isCover || ch.isAppendix) ? 'none' : '';

  // breadcrumb
  breadcrumb.innerHTML = ch.isCover ? '<strong>Auf Deutsch!</strong>' :
    `<span>${ch.level || 'REF'}</span> → <strong>${ch.title}</strong>`;

  if (ch.isCover)    return renderCover();
  if (ch.isAppendix) return renderAppendix();
  renderChapter(ch);
}

/* ── Cover ── */
function renderCover() {
  contentWrap.innerHTML = `
    <div id="cover">
      <div id="cover-flag">🇩🇪</div>
      <h1>Auf Deutsch!</h1>
      <p class="subtitle">A Complete German Learning Book</p>
      <p style="color:var(--text-dim);font-size:14px;">From Absolute Beginner to Confident Conversation</p>
      <div class="tag-row">
        <span class="tag tag-green">A1 Beginner</span>
        <span class="tag tag-blue">A2 Elementary</span>
        <span class="tag tag-orange">B1 Intermediate</span>
        <span class="tag tag-red">B2 Upper Intermediate</span>
      </div>
      <div class="tag-row" style="margin-top:0">
        <span class="tag tag-blue">Top 1,000 Words</span>
        <span class="tag tag-orange">20 Chapters</span>
        <span class="tag tag-green">Grammar Tips</span>
        <span class="tag tag-red">Memory Tricks</span>
      </div>
      <button id="start-btn" onclick="navigateTo(1)">Start Learning →</button>
      <p style="margin-top:28px;font-size:13px;color:var(--text-dim);">Each chapter includes vocabulary · a reading passage · grammar tip · memory trick · practice sentences</p>
    </div>`;
}

/* ── Chapter ── */
function renderChapter(ch) {
  const levelColors = { A1:'tag-green', A2:'tag-blue', B1:'tag-orange', B2:'tag-red' };
  const tagClass = levelColors[ch.level] || 'tag-blue';

  let html = `<div class="chapter-header">`;
  if (ch.partIntro) {
    html += `<div class="part-intro">${ch.partIntro}</div>`;
  }
  html += `
    <div><span class="tag ${tagClass} chapter-level-tag">${ch.level}</span></div>
    <h2 class="chapter-title">${ch.title}</h2>
    <p class="chapter-subtitle">${ch.subtitle}</p>
  </div>`;

  // Vocabulary
  html += `<div class="section-title">📚 Vocabulary</div>`;
  html += `<div style="overflow-x:auto"><table class="vocab-table">
    <thead><tr><th>German</th><th>Gender</th><th>English</th><th>Example</th></tr></thead><tbody>`;
  ch.vocab.forEach(([de, gender, en, ex]) => {
    html += `<tr>
      <td class="german">${de}</td>
      <td class="gender">${gender}</td>
      <td class="english">${en}</td>
      <td class="example">${ex}</td>
    </tr>`;
  });
  html += `</tbody></table></div>`;

  // Reading passage
  html += `<div class="section-title">📖 Reading Passage</div>`;
  html += `<div class="passage-card">
    <div class="passage-tabs">
      <button class="passage-tab active" onclick="switchTab(this,'de-${ch.id}')">🇩🇪 Deutsch</button>
      <button class="passage-tab" onclick="switchTab(this,'en-${ch.id}')">🇦🇺 English</button>
    </div>
    <div class="passage-content active" id="de-${ch.id}">
      <div class="passage-title">${ch.passageTitle}</div>
      ${ch.passageDE.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
    </div>
    <div class="passage-content" id="en-${ch.id}">
      <div class="passage-title">${ch.passageTitle}</div>
      ${ch.passageEN.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
    </div>
  </div>`;

  // Grammar tip
  html += `<div class="section-title">📘 Grammar Tip</div>`;
  html += `<div class="tip-box">
    <div class="box-header">📘 ${ch.grammarTitle}</div>
    ${ch.grammarHTML}
  </div>`;

  // Memory trick
  html += `<div class="section-title">🧠 Memory Trick</div>`;
  html += `<div class="memory-box">
    <div class="box-header">🧠 Remember It</div>
    ${ch.memoryHTML}
  </div>`;

  // Practice
  html += `<div class="section-title">✏️ Practice Sentences</div>`;
  html += `<div class="practice-card">
    <div class="practice-header">📝 Translate into English — then reveal the answer</div>
    <ul class="practice-list">`;
  ch.practice.forEach(([de, en], idx) => {
    html += `<li class="practice-item">
      <div class="practice-de">${idx + 1}. ${de}</div>
      <div class="practice-en" id="ans-${ch.id}-${idx}">${en}</div>
    </li>`;
  });
  html += `</ul>
    <button class="reveal-btn" onclick="revealAnswers(${ch.id})">👁 Reveal Answers</button>
  </div>`;

  contentWrap.innerHTML = html;
}

/* ── Appendix ── */
function renderAppendix() {
  const groups = [
    {
      title: '1 — Essential Function Words',
      rows: [
        ['der, die, das','the'],['ein, eine','a / an'],['ich','I'],['du','you (informal)'],
        ['er / sie / es','he / she / it'],['wir','we'],['und','and'],['oder','or'],
        ['aber','but'],['weil','because'],['dass','that'],['wenn','when / if'],
        ['nicht','not'],['kein','no / none'],['auch','also / too'],['noch','still / yet'],
        ['schon','already'],['immer','always'],['nie','never'],['oft','often'],
        ['manchmal','sometimes'],['sehr','very'],['so','so / such'],['mehr','more'],
        ['viel','much / a lot'],['alle','all'],['jeder','every / each'],
        ['mein','my'],['dein','your'],['sein','his'],['ihr','her / their'],
        ['dieser','this'],['man','one / you (impersonal)'],['es gibt','there is / are'],
      ]
    },
    {
      title: '2 — Essential Verbs (Top 50)',
      rows: [
        ['sein','to be'],['haben','to have'],['werden','to become / will'],
        ['können','can'],['müssen','must'],['wollen','to want'],['mögen','to like'],
        ['machen','to make / do'],['gehen','to go'],['kommen','to come'],
        ['sagen','to say'],['sehen','to see'],['wissen','to know'],['denken','to think'],
        ['finden','to find'],['nehmen','to take'],['geben','to give'],['stehen','to stand'],
        ['laufen','to run'],['fahren','to drive / travel'],['bringen','to bring'],
        ['lassen','to let'],['heißen','to be called'],['leben','to live'],
        ['arbeiten','to work'],['spielen','to play'],['essen','to eat'],['trinken','to drink'],
        ['kaufen','to buy'],['brauchen','to need'],['fragen','to ask'],['lesen','to read'],
        ['schreiben','to write'],['hören','to hear'],['sprechen','to speak'],
        ['verstehen','to understand'],['lernen','to learn'],['beginnen','to begin'],
        ['öffnen','to open'],['bleiben','to stay'],['kennen','to know (a person)'],
        ['treffen','to meet'],['reisen','to travel'],['erklären','to explain'],
        ['versuchen','to try'],['vergessen','to forget'],['warten','to wait'],
        ['kosten','to cost'],['lieben','to love'],['genießen','to enjoy'],
      ]
    },
    {
      title: '3 — People and Relationships',
      rows: [
        ['der Mensch','person / human'],['der Mann','man / husband'],['die Frau','woman / wife'],
        ['das Kind','child'],['der Junge','boy'],['das Mädchen','girl'],
        ['der Freund','friend / boyfriend'],['die Freundin','friend / girlfriend'],
        ['der Kollege','colleague (m)'],['die Kollegin','colleague (f)'],
        ['der Chef','boss (m)'],['die Chefin','boss (f)'],
        ['der Lehrer','teacher (m)'],['die Lehrerin','teacher (f)'],
        ['der Arzt','doctor (m)'],['die Ärztin','doctor (f)'],
        ['der Vater','father'],['die Mutter','mother'],
        ['der Bruder','brother'],['die Schwester','sister'],
        ['der Sohn','son'],['die Tochter','daughter'],
        ['der Großvater','grandfather'],['die Großmutter','grandmother'],
      ]
    },
    {
      title: '4 — Places',
      rows: [
        ['das Land','country'],['die Stadt','city'],['das Dorf','village'],
        ['das Haus','house'],['die Wohnung','flat'],['das Büro','office'],
        ['die Schule','school'],['die Universität','university'],
        ['das Krankenhaus','hospital'],['der Bahnhof','train station'],
        ['der Flughafen','airport'],['der Supermarkt','supermarket'],
        ['das Restaurant','restaurant'],['das Café','café'],['das Hotel','hotel'],
        ['die Kirche','church'],['das Museum','museum'],['der Park','park'],
        ['der Strand','beach'],['das Meer','sea'],['der Berg','mountain'],
        ['der Fluss','river'],['der Wald','forest'],['die Welt','world'],
      ]
    },
    {
      title: '5 — Time',
      rows: [
        ['die Zeit','time'],['die Stunde','hour'],['die Minute','minute'],
        ['der Tag','day'],['die Woche','week'],['der Monat','month'],['das Jahr','year'],
        ['heute','today'],['morgen','tomorrow'],['gestern','yesterday'],
        ['jetzt','now'],['bald','soon'],['früher','formerly'],['später','later'],
        ['der Morgen','morning'],['der Abend','evening'],['die Nacht','night'],
        ['das Wochenende','weekend'],['der Urlaub','holiday'],
        ['die Vergangenheit','the past'],['die Gegenwart','the present'],['die Zukunft','the future'],
      ]
    },
    {
      title: '6 — Essential Adjectives',
      rows: [
        ['groß','big / tall'],['klein','small / short'],['lang','long'],['kurz','short'],
        ['alt','old'],['jung','young'],['neu','new'],['gut','good'],['schlecht','bad'],
        ['schön','beautiful'],['schnell','fast'],['langsam','slow'],
        ['warm','warm'],['kalt','cold'],['heiß','hot'],['hell','bright'],['dunkel','dark'],
        ['schwer','heavy / difficult'],['leicht','light / easy'],
        ['richtig','right / correct'],['falsch','wrong'],['wichtig','important'],
        ['interessant','interesting'],['langweilig','boring'],['spannend','exciting'],
        ['einfach','simple'],['schwierig','difficult'],['teuer','expensive'],['billig','cheap'],
        ['gesund','healthy'],['krank','sick'],['glücklich','happy'],['traurig','sad'],
        ['müde','tired'],['stark','strong'],['bekannt','known / famous'],
        ['möglich','possible'],['nötig','necessary'],['modern','modern'],
      ]
    },
    {
      title: '7 — Key Prepositions',
      rows: [
        ['in','in / into (two-way)'],['an','at / on (two-way)'],['auf','on / onto (two-way)'],
        ['über','over / about (two-way)'],['unter','under (two-way)'],
        ['vor','in front of (two-way)'],['hinter','behind (two-way)'],
        ['neben','next to (two-way)'],['zwischen','between (two-way)'],
        ['mit','with (dative)'],['von','from / by (dative)'],['zu','to (dative)'],
        ['bei','at / with (dative)'],['nach','after / to (dative)'],
        ['aus','from / out of (dative)'],['seit','since / for (dative)'],
        ['durch','through (accusative)'],['für','for (accusative)'],
        ['gegen','against (accusative)'],['ohne','without (accusative)'],
        ['um','around / at (accusative)'],['wegen','because of (genitive)'],
        ['trotz','despite (genitive)'],['während','during (genitive)'],
      ]
    },
    {
      title: '8 — Essential Phrases',
      rows: [
        ['Wie bitte?','Pardon? / Could you repeat that?'],
        ['Ich verstehe nicht.','I don\'t understand.'],
        ['Können Sie bitte langsamer sprechen?','Can you please speak more slowly?'],
        ['Was bedeutet das?','What does that mean?'],
        ['Wie sagt man das auf Deutsch?','How do you say that in German?'],
        ['Ich spreche ein bisschen Deutsch.','I speak a little German.'],
        ['Entschuldigung!','Excuse me! / Sorry!'],
        ['Kein Problem.','No problem.'],
        ['Das stimmt.','That\'s right.'],
        ['Ich bin damit einverstanden.','I agree with that.'],
        ['Das weiß ich nicht.','I don\'t know.'],
        ['Ich bin nicht sicher.','I\'m not sure.'],
        ['Natürlich!','Of course!'],
        ['Leider nicht.','Unfortunately not.'],
        ['Es tut mir leid.','I\'m sorry.'],
        ['Herzlichen Glückwunsch!','Congratulations!'],
        ['Viel Erfolg!','Good luck!'],
        ['Gute Reise!','Have a good trip!'],
        ['Bis bald!','See you soon!'],
        ['Sie schaffen das!','You can do it!'],
      ]
    },
  ];

  let html = `<div class="chapter-header">
    <div><span class="tag tag-blue chapter-level-tag">REFERENCE</span></div>
    <h2 class="chapter-title">Top 1,000 German Words</h2>
    <p class="chapter-subtitle">Grouped by category — the words that make up 85% of everyday German</p>
  </div>`;

  groups.forEach(g => {
    html += `<div class="section-title">📌 Group ${g.title}</div>`;
    html += `<div style="overflow-x:auto"><table class="ref-table"><thead><tr><th>German</th><th>English</th></tr></thead><tbody>`;
    g.rows.forEach(([de, en]) => {
      html += `<tr><td>${de}</td><td>${en}</td></tr>`;
    });
    html += `</tbody></table></div>`;
  });

  html += `<div style="margin-top:40px;padding:28px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);text-align:center">
    <div style="font-size:32px;margin-bottom:12px">🎉</div>
    <h3 style="font-size:22px;margin-bottom:8px;color:#fff">Herzlichen Glückwunsch!</h3>
    <p style="color:var(--text-muted);font-size:15px;max-width:500px;margin:0 auto 16px">You have completed <strong style="color:#fff">Auf Deutsch!</strong> — 20 chapters, 1,000 words, A1 to B2. Keep practising every day. Sie schaffen das!</p>
    <button class="nav-btn primary" onclick="navigateTo(0)">← Back to Start</button>
  </div>`;

  contentWrap.innerHTML = html;
}

/* ── Helpers ── */
function switchTab(btn, targetId) {
  const card = btn.closest('.passage-card');
  card.querySelectorAll('.passage-tab').forEach(t => t.classList.remove('active'));
  card.querySelectorAll('.passage-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(targetId).classList.add('active');
}

function revealAnswers(chId) {
  document.querySelectorAll(`[id^="ans-${chId}-"]`).forEach(el => el.classList.add('revealed'));
}

/* ── Init ── */
buildSidebar();
render();
updateSidebarActive();
updateProgress();
