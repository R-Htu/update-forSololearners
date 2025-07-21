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
      '︻デ═一',
      '▄︻̷̿┻̿═━一',
      '╾━╤デ╦︻',
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
      '＼(ﾟｰﾟ＼)︻╦╤─ Pew!',
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
      'Pew! ─╤╦︻／(ﾟｰﾟ／)',
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


document.querySelectorAll('.gun').forEach(el=>{
    el.addEventListener('click', ()=> {
        el.style.transition = "none";
        el.style.transform = "rotate(0deg)";
        el.offsetWidth;
        el.style.transition = "transform 0.6s ease";
        el.style.transform ="rotate(1080deg)";
    })
})