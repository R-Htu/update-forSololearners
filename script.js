/* 
===========================================
    🔫 Gun Section & Horizontal/Vertical Lines 
===========================================
*/
const gunSounds = [
      new Audio('gunSound/cinematic-gun.mp3'),
      new Audio('gunSound/plasma-gun-fire.mp3'),
      new Audio('gunSound/gun-fire1.mp3'),
      new Audio('gunSound/laser-gun.mp3'),
      new Audio('gunSound/laser-gun2.mp3'),
      new Audio('gunSound/single-gun-shot.mp3'),
      new Audio('gunSound/ray-gun.mp3'),
      new Audio('gunSound/grappling-gun.mp3'),
  ];

const myGuns = [
      '(⌐■_■)–︻╦╤─',
      '(☞ﾟ∀ﾟ)☞︻╦̵̵͇̿̿̿̿╤──',
      '(╯°□°）╯︻デ═一',
      '(°ロ°)\'▄︻̷̿┻̿═━一',
      '╾━╤デ╦︻(¬‿¬)',
      '( ͡° ͜ʖ͡°)︻╦╤─',
      '(▀̿Ĺ̯▀̿ ̿)︻̷̿┻̿═━一 BANG!',
      '(╯°□°）╯︵ ┻━┻︻デ═一',
      '(⌐■_■)–︻╦╤─ Pew Pew!',
      "(ง'̀-'́)ง︻デ═一",
      '(•_•) /︻╦̵̵͇̿̿̿̿╤──',
      '(¬_¬")︻╦╤─',
      '(¬‿¬)︻╦╤─ Pew',
      '(°ロ°)☝︻╦̵̵͇̿̿̿̿╤──',
      '(☞ຈل͜ຈ)☞︻デ═一 Pew Pew',
      'ヽ༼ ಠ益ಠ ༽ﾉ︻╦╤─ - FIRE!',
      '＼(ﾟｰﾟ)︻╦╤─ Pew!',
      '(ง ͠° ͟ل͜ ͡°)ง︻デ═一',
      'ヽ( ͝° ͜ʖ͡°)ﾉ︻╦̵̵͇̿̿̿̿╤── Pew',
      'ಠ_ಠ︻デ═一',
      '(ʘ‿ʘ)╾━╤デ╦︻ Pew',
      'ᕙ(⇀‸↼‶)ᕗ︻╦̵̵͇̿̿̿̿╤──',
      '(ಥ﹏ಥ)︻╦╤─ Pew...',
      '(ノಠ益ಠ)ノ彡︻╦╤─ Pew Pew!',
      'ლ(ಠ益ಠლ)︻デ═一',
      '(ง°ل͜°)ง︻╦̵̵͇̿̿̿̿╤── Boom',
        'Pew ─╤╦︻(¬‿¬)',
      '──╤̿̿̿̿╵╵╦︻☝(°ロ°)',
      'Pew Pew 一═デ︻☜(ຈل͜ຈ☜)',
      'FIRE! ─╤╦︻ﾉ(༼ ಠ益ಠ ༽ヽ',
      'Pew! ─╤╦︻／(ﾟｰﾟ)',
      '一═デ︻ง(°͟ل͜°͠ ง)',
      'Pew ──╤̿̿̿̿╵╵╦︻ﾉ( ͝° ͜ʖ͡°)ヽ',
      '一═デ︻ಠ_ಠ',
      'Pew ╾━╤デ╦︻(ʘ‿ʘ)',
      '──╤̿̿̿̿╵╵╦︻ᕗ(‶↼‸↼⇀)ᕙ',
      'Pew... ─╤╦︻(ಥ﹏ಥ)',
      'Pew Pew! ─╤╦︻彡ノ(ಠ益ಠ)ノ',
      'BANG! ━═┻̿︻̷̿( ̿▀̿Ĺ̯▀̿)',
      'Boom ──╤̵̵͇̿̿̿̿╦︻ง(°ل͜°ง)',
      '─╤╦︻( ͡° ͜ʖ͡°)',
      '─╤╦︻–(■_■⌐)',
      '──╤̵̵͇̿̿̿̿╦︻☜(ﾟ∀ﾟ☜)',
      '一═デ︻ง(ง̀-́’)',
      '──╤̵̵͇̿̿̿̿╦︻ \\(•_•)',
      '─╤╦︻("¬_¬)'
    ];

const gunColors = [
  '#2f2f2f', 
  '#4b4b4b',
  '#8a8a8a', 
  '#c0c0c0', 
  '#a0522d', 
  '#deb887', 
  '#1c1c1c', 
  '#d3d3d3', 
  '#3a3a3a', 
  '#f5f5f5'
];


const guns = document.querySelectorAll('.gun');

/*guns.forEach(gun=>{
  gun.style.color = gunColors[Math.floor(Math.random()*gunColors.length)]
})*/


guns.forEach(el=>{
    el.addEventListener('click', ()=> {
        const randomGun = myGuns[Math.floor(Math.random()*myGuns.length)]
        const randomSound =gunSounds[Math.floor(Math.random()*gunSounds.length)];
        el.style.color = gunColors[Math.floor(Math.random()*gunColors.length)];
        el.textContent = randomGun;
        el.style.fontWeight = "bolder";
        el.style.transition = "none";
        el.style.transform = "rotate(0deg)";
        el.offsetWidth;
        el.style.transition = "transform 0.6s ease";
        el.style.transform ="rotate(1080deg)";
        randomSound.play();

         for (let i = 0; i < 6; i++) {
          const puff = document.createElement('div');
          puff.classList.add('smoke');
          puff.textContent = '💨💥';

          // 🤪🤪Random offset in a circle
          const angle = Math.random()*2 * Math.PI;
          const radius = Math.random() * 80 + 5; // distance from center

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          // 🎯 Position from center of the gun
      const rect = el.getBoundingClientRect();
const gunCenterX = rect.left + rect.width / 2 + window.scrollX;
const gunCenterY = rect.top + rect.height / 2 + window.scrollY;
     puff.style.left = `${gunCenterX}px`;
          puff.style.top = `${gunCenterY}px`;
          puff.style.setProperty('--move-x', `${x}px`);
          puff.style.setProperty('--move-y', `${y}px`);
         
          document.body.appendChild(puff);

          setTimeout(() => puff.remove(), 800);


    }
    })

   
})

/*
document.querySelectorAll('.gun').forEach(el => {
  el.dataset.rotation = "0";

  el.addEventListener('click', () => {
    let current = parseInt(el.dataset.rotation);
    let next = current + 1080;

    el.style.transition = "transform 0.6s ease";
    el.style.transform = `rotate(${next}deg)`;

    el.dataset.rotation = next;
  });
});



*/