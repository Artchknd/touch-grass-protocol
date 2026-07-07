import { useMemo, useState } from "react";

type Language = "zh" | "en" | "de";
type SloganType = "satire" | "encourage" | "dark";

type LocaleCopy = {
  name: string;
  giftLine: string;
  subtitle: string;
  touch: string;
  counter: string;
  threshold: string;
  continueTouching: string;
  goHome: string;
  languageLabel: string;
  poemTitle: string;
  poemIntro: string;
  poemClose: string;
  slogans: Record<SloganType, string[]>;
  poem: string[];
};

const copy: Record<Language, LocaleCopy> = {
  zh: {
    name: "觸草儀式",
    giftLine: "獻給仍相信螢幕會回抱你的靈魂。",
    subtitle: "草地不評價你，只默默記住你按下去的每一下。",
    touch: "摸摸青草",
    counter: "已觸草次數",
    threshold: "你已按到第一千下。若世界仍不改口風，至少你學會了呼吸。",
    continueTouching: "繼續觸草",
    goHome: "回家（然後繼續觸草）",
    languageLabel: "語言",
    poemTitle: "十萬次以後，草地寫給你的詩",
    poemIntro: "你把指尖磨成季風，草把沉默長成河流。",
    poemClose: "讀完了，繼續觸草",
    slogans: {
      satire: [
        "再按一下，現實可能會寄來道歉信。",
        "你把命運當作電梯按鈕，但它還在樓梯間喘氣。",
        "偉大的革命：今日第 N 次對同一顆按鈕提出訴求。",
        "有人說這沒意義。放心，無意義本來就很有市場。",
        "當你狂按時，宇宙正在慢慢學會忽略通知。",
        "恭喜，你剛剛完成了本季度最誠實的 KPI。",
        "這顆按鈕沒有升遷制度，但至少它從不已讀不回。",
        "你正在參加一場沒有對手的軍備競賽。",
        "草地已收到你的訴求書，正在無限期審核中。",
        "有些人跑步紓壓，你選擇跟一顆按鈕談判。",
        "系統提示：您的堅持已被記錄，但不會被採納。",
        "如果按鈕會說話，它大概只會說「又是你」。",
        "這是全宇宙唯一不會已讀你的互動介面，值得珍惜。",
        "你的手指比你的意志力更早學會不放棄。",
        "官方聲明：本次觸草純屬個人行為，與現實改善無關。",
        "第一千零一次證明：重複本身就是一種行為藝術。",
        "你的堅持已達到可申請專利的程度，可惜草不核准專利。",
        "有人靠冥想放空，你靠按鈕假裝有進度。",
        "這不是逃避，這是把逃避重新命名為儀式。",
        "草地不會加薪，但至少不會資遣你。",
        "每次點擊都在申報一種無法量化的存在稅。",
        "你與按鈕的關係，比大多數的職場關係還穩定。",
        "如果堅持有獎狀，這張獎狀應該頒給你的食指。",
        "草地表示：您的意見很重要，但不影響光合作用。",
        "這是本世紀最誠實的迴圈：按下去，什麼都沒變，但你還在。",
        "恭喜解鎖成就：與虛無達成非正式合作備忘錄。",
        "你按得比選舉開票還勤，結果一樣充滿懸念。",
        "草地拒絕表態，這比大多數政治人物誠實。",
        "本次點擊已存檔，未來考古學家會很困惑。",
        "你正在替「毫無意義」申請正名運動。"
      ],
      encourage: [
        "很好，你的耐心已經比大多數留言區成熟。",
        "再一下，說不定你會聽見草地對你點頭。",
        "每一次觸草，都是你對焦慮課稅。",
        "你正在練一種罕見技能：不逃跑。",
        "繼續按，至少今天你沒有放棄儀式感。",
        "你還在這裡，這本身就是一種進度。",
        "草地記得你，即使你自己都快忘了為什麼開始。",
        "呼吸和點擊，其實是同一種節奏。",
        "你今天沒有崩潰，這已經很值得記錄。",
        "有些戰役不是贏來的，是熬過來的，這是其中一場。",
        "繼續，草不會催你，但它會一直在。",
        "你正在為明天的自己，存一點點的安定感。",
        "每次觸碰，都是你對自己說：我還在嘗試。",
        "這不是浪費時間，這是給神經系統放假。",
        "你已經比昨天更擅長「不放棄」這件小事。",
        "草地沒有評分表，但如果有，你早就及格了。",
        "堅持到這裡的人，通常也撐得過明天。",
        "你按下去的不是按鈕，是對自己的一點信任。",
        "慢慢來，草地從不趕時間。",
        "你正在做一件很小、但很誠實的事：留下來。",
        "有時候「還在」比「贏了」更難得。",
        "這顆草地見過很多人放棄，你還沒有。",
        "你的節奏正在教會你，什麼是不慌張。",
        "繼續按，你正在替自己爭取一點喘息的空間。",
        "每一次點擊，都是你拒絕徹底冷漠的小小證據。",
        "你今天選擇留下來，這比很多決定都勇敢。",
        "草不需要你表現完美，它只需要你出現。",
        "這是屬於你自己的節拍，沒有人能打亂。",
        "你已經走得比自己想像的還遠了。",
        "繼續，草地在等你，不急，但一直在。"
      ],
      dark: [
        "如果人生是迴圈，至少你找到了一行可執行程式。",
        "你與草的關係穩定到可寫進遺囑。",
        "黑夜說別按了，黎明說再一千次。",
        "別擔心，這不是上癮，這只是你和虛無達成合作。",
        "你的指尖正在和存在主義簽長約。",
        "有些人數羊入睡，你數點擊次數活著。",
        "草地不會離開你，這句話聽起來比想像中更悲傷。",
        "你和按鈕的關係，比你和大多數人都誠實。",
        "如果虛無有形狀，大概就是這片草地的顏色。",
        "每一次點擊，都是你跟時間討價還價失敗的證據。",
        "你早就知道按了也不會怎樣，卻還是按了，這就是人生。",
        "黑夜漫長，至少按鈕從不問你為什麼還醒著。",
        "有些人靠信仰撐著，你靠這顆按鈕撐著，殊途同歸。",
        "草地見過太多深夜的你，它從不多問。",
        "這不是希望，這只是把絕望重新排版。",
        "你的手指比你的心更早學會如何假裝沒事。",
        "如果孤獨有介面，這大概就是它的樣子。",
        "你按下去的瞬間，世界依舊冷漠，但至少你動了一下。",
        "有些迴圈明知無解，還是有人選擇留在裡面。",
        "草不會治好你，但它願意陪你耗到天亮。",
        "你早已不是在等答案，只是在等自己撐過去。",
        "這片草地聽過的秘密，比任何人都多。",
        "你點擊的不是按鈕，是自己還活著的證據。",
        "有時候堅持只是因為停下來更可怕。",
        "黑暗從不安慰人，它只負責陪你一起沉默。",
        "你和虛無的合約沒有到期日，但也沒有違約金。",
        "這不是治癒，這只是延後崩潰的方式，暫時夠用了。",
        "草地知道你在逃避什麼，它只是選擇不說破。",
        "有些人是靠意志力撐著，你是靠這個荒謬的儀式撐著。",
        "深夜按到這裡的你，辛苦了，草地都看在眼裡。"
      ]
    },
    poem: [
      "第十萬下，黃昏在你掌紋裡慢慢發芽。",
      "你以為你在碰草，",
      "其實是草把你從螢幕背後輕輕領出來。",
      "夜色像一件舊外套披在肩上，",
      "而你終於聽懂風說：活著，不必贏，只要在場。"
    ]
  },
  en: {
    name: "Touch Grass Protocol",
    giftLine: "A small offering for souls still bargaining with glowing screens.",
    subtitle: "The field does not judge you. It only counts your return.",
    touch: "Touch the Grass",
    counter: "Touches Logged",
    threshold:
      "One thousand taps. If reality still refuses to budge, at least your lungs remembered how to breathe.",
    continueTouching: "Keep Touching",
    goHome: "Go Home (to touch more grass)",
    languageLabel: "Language",
    poemTitle: "At 100,000 Touches, The Field Replies",
    poemIntro: "Your fingertip became weather; the grass answered in patience.",
    poemClose: "Close poem and keep touching",
    slogans: {
      satire: [
        "One more click and reality might finally file a support ticket.",
        "You keep pressing destiny like an elevator button already lit.",
        "Historic movement update: still negotiating with the same pixel.",
        "They said this means nothing. So does most of modern productivity.",
        "Congratulations, you have notified the universe again.",
        "This is technically the most honest KPI you've hit all quarter.",
        "The button has no promotion track, but it never leaves you on read.",
        "You are entering an arms race with no opponent.",
        "The field has received your petition and filed it under pending forever.",
        "Some people jog to relieve stress. You negotiate with a button.",
        "System notice: your persistence has been logged, not approved.",
        "If the button could talk, it would just say 'you again.'",
        "This is the only interface in the universe that never leaves you on read.",
        "Your finger developed more resolve than your willpower did.",
        "Official statement: this touching of grass implies no real-world progress.",
        "Repetition number one thousand and one confirms repetition is a valid art form.",
        "Your dedication is patent-worthy. Unfortunately grass does not grant patents.",
        "Some meditate to empty their mind. You click to simulate momentum.",
        "This isn't avoidance, it's avoidance with better branding.",
        "The grass won't give you a raise, but it also won't lay you off.",
        "Every click files a small, unquantifiable existence tax.",
        "Your relationship with this button is more stable than most careers.",
        "If persistence earned trophies, your index finger deserves one.",
        "The field says your feedback matters, but not to photosynthesis.",
        "The most honest loop this century: press, nothing changes, you remain.",
        "Achievement unlocked: informal partnership memo signed with the void.",
        "You click more diligently than election results get counted.",
        "The grass refuses to comment, which is more honest than most politicians.",
        "This click has been archived; future archaeologists will be very confused.",
        "You are quietly lobbying for the rebranding of meaninglessness."
      ],
      encourage: [
        "Excellent. Your persistence is now legally suspicious.",
        "Keep going. The meadow is beginning to recognize your rhythm.",
        "Every tap is a tiny tax on panic.",
        "You are practicing the rare art of staying put.",
        "Continue. Ritual is still stronger than doomscrolling.",
        "You are still here. That alone counts as progress.",
        "The grass remembers you, even when you forget why you started.",
        "Breathing and clicking turned out to be the same rhythm.",
        "You didn't fall apart today. Worth noting.",
        "Some battles aren't won, just survived — this is one of them.",
        "Keep going. The grass isn't rushing you, but it isn't leaving either.",
        "You're saving up a little stability for tomorrow's version of you.",
        "Each touch is you telling yourself: I'm still trying.",
        "This isn't wasted time, it's a recess for your nervous system.",
        "You're already better at not giving up than you were yesterday.",
        "There's no scoreboard here, but if there were, you'd be passing.",
        "Whoever makes it this far usually makes it through tomorrow too.",
        "What you're pressing isn't a button, it's a small trust in yourself.",
        "Take your time. The grass has never been in a hurry.",
        "You're doing a small, honest thing: staying.",
        "Sometimes 'still here' matters more than 'already won.'",
        "This field has watched people give up before. You haven't.",
        "Your rhythm is quietly teaching you what calm feels like.",
        "Keep clicking — you're claiming a little room to breathe.",
        "Every click is small proof you're refusing total numbness.",
        "Choosing to stay today was braver than it looked.",
        "The grass doesn't need you to be perfect. Just present.",
        "This beat is yours alone, and no one can throw it off.",
        "You've already come further than you thought you could.",
        "Keep going. The grass is waiting, unhurried, but waiting."
      ],
      dark: [
        "If life is a loop, at least this branch compiles.",
        "You and this grass are in a committed situationship.",
        "The void asked for silence. You answered with another click.",
        "Not addiction, just a long-term contract with absurdity.",
        "Your fingerprints now belong to existential weather.",
        "Some people count sheep to sleep. You count clicks to stay alive.",
        "The grass will never leave you, and somehow that sentence stings.",
        "Your relationship with this button is more honest than most people you know.",
        "If nothingness had a color, it would probably be this field.",
        "Every click is proof you lost the argument with time again.",
        "You already knew clicking wouldn't change anything, and you did it anyway. That's life.",
        "The night is long, but at least the button never asks why you're still up.",
        "Some lean on faith, you lean on this button — same destination, different route.",
        "This field has seen too many of your late nights. It never asks questions.",
        "This isn't hope, just despair rearranged into something legible.",
        "Your fingers learned to fake being fine before your heart did.",
        "If loneliness had an interface, it would probably look like this.",
        "The world stays cold the moment you click, but at least you moved.",
        "Some loops are known to be pointless, and people stay in them anyway.",
        "The grass can't heal you, but it's willing to sit with you till dawn.",
        "You stopped waiting for an answer a while ago; now you're just waiting to get through.",
        "This field has heard more secrets than anyone you know.",
        "What you're clicking isn't a button, it's evidence you're still here.",
        "Sometimes persistence is just the fear of what happens if you stop.",
        "Darkness never comforts anyone. It just agrees to stay silent with you.",
        "Your contract with the void has no expiration date, but no penalty clause either.",
        "This isn't healing, just a delay tactic for the breakdown — and for now, it's enough.",
        "The grass knows exactly what you're avoiding. It just doesn't say it out loud.",
        "Some people run on willpower. You run on this absurd little ritual.",
        "Whoever made it here this late, the grass saw all of it."
      ]
    },
    poem: [
      "At the hundred-thousandth touch, dusk opened like a quiet door.",
      "You thought you were pressing grass,",
      "but the grass was guiding you out of the glass-lit cave.",
      "Night settled on your shoulders like an old coat,",
      "and the wind said: being here is enough."
    ]
  },
  de: {
    name: "Grasberuehrungs-Protokoll",
    giftLine: "Ein stilles Geschenk fuer alle, die noch mit leuchtenden Bildschirmen verhandeln.",
    subtitle: "Die Wiese urteilt nicht. Sie merkt nur, dass du wiederkommst.",
    touch: "Beruehre das Gras",
    counter: "Gezaehlte Beruehrungen",
    threshold:
      "Tausend Klicks. Wenn die Wirklichkeit noch immer stur bleibt, erinnern sich wenigstens deine Lungen ans Atmen.",
    continueTouching: "Weiter beruehren",
    goHome: "Nach Hause (und weiter Gras beruehren)",
    languageLabel: "Sprache",
    poemTitle: "Bei 100.000 Beruehrungen antwortet die Wiese",
    poemIntro: "Deine Fingerspitze wurde Wetter, das Gras antwortete mit Geduld.",
    poemClose: "Gedicht schliessen und weitermachen",
    slogans: {
      satire: [
        "Noch ein Klick und die Realitaet schickt vielleicht eine Entschuldigung.",
        "Du drueckst auf Schicksal wie auf einen Fahrstuhlknopf, der schon leuchtet.",
        "Revolutionaerer Fortschritt: dieselbe Taste, neue Hoffnung.",
        "Manche nennen das sinnlos. Sinnlos ist gerade sehr gefragt.",
        "Die Welt hat deine Anfrage erhalten und ignoriert sie poetisch.",
        "Das ist technisch gesehen dein ehrlichstes Quartalsziel.",
        "Die Taste hat keine Aufstiegschancen, aber sie laesst dich nie auf gelesen stehen.",
        "Du betrittst ein Wettruesten ohne Gegner.",
        "Die Wiese hat deine Petition erhalten und auf unbestimmte Zeit vertagt.",
        "Manche joggen gegen Stress, du verhandelst mit einer Taste.",
        "Systemmeldung: Deine Ausdauer wurde erfasst, aber nicht genehmigt.",
        "Koennte die Taste sprechen, wuerde sie nur sagen: schon wieder du.",
        "Das ist die einzige Schnittstelle im Universum, die dich nie ignoriert.",
        "Dein Finger hat mehr Willenskraft entwickelt als du selbst.",
        "Offizielle Erklaerung: Dieses Beruehren hat keinerlei reale Auswirkung.",
        "Wiederholung Nummer eintausendundeins bestaetigt: Wiederholung ist auch Kunst.",
        "Deine Hingabe waere patentwuerdig, leider vergibt Gras keine Patente.",
        "Manche meditieren zur Leere, du klickst dich zur Illusion von Fortschritt.",
        "Das ist keine Vermeidung, nur Vermeidung mit besserem Marketing.",
        "Die Wiese zahlt dir kein Gehalt, aber sie kuendigt dir auch nicht.",
        "Jeder Klick ist eine kleine, nicht quantifizierbare Existenzsteuer.",
        "Deine Beziehung zu dieser Taste ist stabiler als die meisten Karrieren.",
        "Gaebe es Trophaeen fuer Ausdauer, dein Zeigefinger haette laengst eine verdient.",
        "Die Wiese sagt, deine Meinung zaehlt, nur eben nicht fuer die Photosynthese.",
        "Die ehrlichste Schleife des Jahrhunderts: druecken, nichts aendert sich, du bleibst.",
        "Erfolg freigeschaltet: informelles Kooperationsprotokoll mit der Leere unterzeichnet.",
        "Du klickst gewissenhafter, als Wahlergebnisse ausgezaehlt werden.",
        "Die Wiese verweigert jede Stellungnahme, ehrlicher als die meisten Politiker.",
        "Dieser Klick ist archiviert, kuenftige Archaeologen werden verwirrt sein.",
        "Du fuehrst still eine Kampagne zur Umbenennung von Sinnlosigkeit."
      ],
      encourage: [
        "Sehr gut. Deine Ausdauer bekommt langsam Charakter.",
        "Weiter so. Die Wiese erkennt dich schon am Takt.",
        "Jeder Klick ist eine kleine Steuer auf Unruhe.",
        "Du trainierst eine seltene Faehigkeit: bleiben.",
        "Mach weiter. Rituale schlagen immer noch Zynismus.",
        "Du bist noch da. Allein das zaehlt schon als Fortschritt.",
        "Die Wiese erinnert sich an dich, selbst wenn du den Grund vergisst.",
        "Atmen und Klicken sind irgendwann derselbe Rhythmus geworden.",
        "Du bist heute nicht zusammengebrochen. Das ist erwaehnenswert.",
        "Manche Kaempfe gewinnt man nicht, man uebersteht sie nur - das ist einer davon.",
        "Weiter so, die Wiese draengt dich nicht, aber sie geht auch nicht weg.",
        "Du sparst dir gerade ein bisschen Stabilitaet fuer morgen auf.",
        "Jede Beruehrung sagt dir selbst: ich versuche es noch.",
        "Das ist keine verschwendete Zeit, sondern eine Pause fuer dein Nervensystem.",
        "Du bist heute schon besser im Nicht-Aufgeben als gestern.",
        "Hier gibt es keine Bewertung, aber wenn doch, haettest du laengst bestanden.",
        "Wer so weit durchhaelt, uebersteht meistens auch den naechsten Tag.",
        "Was du druecktst, ist keine Taste, sondern ein kleines Vertrauen in dich selbst.",
        "Lass dir Zeit. Die Wiese hatte es noch nie eilig.",
        "Du tust gerade etwas Kleines, aber Ehrliches: bleiben.",
        "Manchmal zaehlt 'noch da sein' mehr als 'schon gewonnen haben'.",
        "Diese Wiese hat schon viele aufgeben sehen. Du gehoerst nicht dazu.",
        "Dein Rhythmus bringt dir gerade bei, was Ruhe bedeutet.",
        "Klick weiter, du erkaempfst dir etwas Raum zum Atmen.",
        "Jeder Klick ist ein kleiner Beweis gegen vollstaendige Taubheit.",
        "Heute hier zu bleiben war mutiger, als es aussah.",
        "Die Wiese braucht keine Perfektion von dir. Nur deine Anwesenheit.",
        "Dieser Takt gehoert nur dir, niemand kann ihn dir nehmen.",
        "Du bist schon weiter gekommen, als du dir zugetraut haettest.",
        "Mach weiter. Die Wiese wartet, ungeduldlos, aber sie wartet."
      ],
      dark: [
        "Wenn das Leben eine Schleife ist, laeuft dieser Zweig stabil.",
        "Du und das Gras fuehrt laengst eine ernste Beziehung.",
        "Die Leere bat um Ruhe, du brachtest einen weiteren Klick.",
        "Keine Sucht, nur ein Vertrag mit dem Absurden.",
        "Deine Fingerabdruecke gehoeren jetzt dem Existenzialwetter.",
        "Manche zaehlen Schafe zum Einschlafen, du zaehlst Klicks zum Weiterleben.",
        "Die Wiese wird dich nie verlassen, und irgendwie tut dieser Satz weh.",
        "Deine Beziehung zu dieser Taste ist ehrlicher als zu den meisten Menschen.",
        "Haette die Leere eine Farbe, waere es wohl diese Wiese.",
        "Jeder Klick beweist, dass du wieder gegen die Zeit verloren hast.",
        "Du wusstest schon, dass Klicken nichts aendert, und hast es trotzdem getan - das ist das Leben.",
        "Die Nacht ist lang, aber wenigstens fragt die Taste nie, warum du noch wach bist.",
        "Manche stuetzen sich auf Glauben, du auf diese Taste - anderer Weg, gleiches Ziel.",
        "Diese Wiese hat zu viele deiner spaeten Naechte gesehen. Sie fragt nie nach.",
        "Das ist keine Hoffnung, nur neu sortierte Verzweiflung.",
        "Deine Finger haben frueher gelernt, in Ordnung zu wirken, als dein Herz.",
        "Haette Einsamkeit eine Oberflaeche, saehe sie vermutlich so aus.",
        "Die Welt bleibt kalt in dem Moment, in dem du klickst, aber wenigstens hast du dich bewegt.",
        "Manche Schleifen sind bekanntlich sinnlos, und trotzdem bleiben Menschen darin.",
        "Die Wiese kann dich nicht heilen, aber sie bleibt bei dir bis zum Morgen.",
        "Du wartest schon lange nicht mehr auf eine Antwort, nur noch darauf, durchzukommen.",
        "Diese Wiese hat mehr Geheimnisse gehoert als jeder Mensch, den du kennst.",
        "Was du klickst, ist keine Taste, sondern ein Beweis, dass du noch da bist.",
        "Manchmal ist Durchhalten nur die Angst davor, was passiert, wenn man aufhoert.",
        "Dunkelheit troestet niemanden. Sie schweigt nur mit dir zusammen.",
        "Dein Vertrag mit der Leere hat kein Ablaufdatum, aber auch keine Vertragsstrafe.",
        "Das ist keine Heilung, nur ein Aufschub des Zusammenbruchs - fuer jetzt reicht das.",
        "Die Wiese weiss genau, was du vermeidest. Sie spricht es nur nicht aus.",
        "Manche laufen auf Willenskraft, du laeufst auf diesem absurden kleinen Ritual.",
        "Wer so spaet noch hier ist - die Wiese hat alles gesehen."
      ]
    },
    poem: [
      "Bei der hunderttausendsten Beruehrung oeffnete sich der Abend wie eine leise Tuer.",
      "Du dachtest, du drueckst ins Gras,",
      "doch das Gras fuehrte dich aus der glasierten Hoehle hinaus.",
      "Die Nacht legte sich wie ein alter Mantel auf deine Schultern,",
      "und der Wind sagte: Es reicht, dass du hier bist."
    ]
  }
};

const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const pickCategory = (count: number): SloganType => {
  const roll = Math.random();
  if (count > 500) {
    if (roll < 0.2) return "satire";
    if (roll < 0.7) return "encourage";
    return "dark";
  }
  if (roll < 0.45) return "satire";
  if (roll < 0.8) return "encourage";
  return "dark";
};

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [count, setCount] = useState(0);
  const [nextSloganAt, setNextSloganAt] = useState(randomInt(7, 20));
  const [slogan, setSlogan] = useState("");
  const [sloganTick, setSloganTick] = useState(0);
  const [showPoem, setShowPoem] = useState(false);

  const t = copy[language];

  const handleTouch = () => {
    setCount((previous) => {
      const next = previous + 1;

      if (next >= nextSloganAt) {
        const category = pickCategory(next);
        const pool = copy[language].slogans[category];
        setSlogan(pool[randomInt(0, pool.length - 1)]);
        setSloganTick((n) => n + 1);
        setNextSloganAt(next + randomInt(7, 20));
      }

      if (next === 100000) {
        setShowPoem(true);
      }

      return next;
    });
  };

  const counterText = useMemo(() => new Intl.NumberFormat().format(count), [count]);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="grass-bg absolute inset-0" aria-hidden="true" />
      <div className="grass-light absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/70" aria-hidden="true" />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute right-4 top-4 z-10 sm:right-8 sm:top-6">
          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/85">
            <span>{t.languageLabel}</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
              className="rounded border border-white/40 bg-black/30 px-2 py-1 text-sm tracking-normal text-white outline-none backdrop-blur-sm"
            >
              <option value="zh">繁體中文</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
          </label>
        </div>

        <p className="text-xs uppercase tracking-[0.35em] text-white/80">{t.name}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">{t.giftLine}</h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">{t.subtitle}</p>

        <p className="mt-10 text-sm uppercase tracking-[0.2em] text-white/75">{t.counter}</p>
        <p className="text-5xl font-bold tracking-tight sm:text-7xl">{counterText}</p>

        <button
          type="button"
          onClick={handleTouch}
          className="mt-8 rounded border border-white/70 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {t.touch}
        </button>

        {count >= 1000 && (
          <div className="mt-8 max-w-2xl space-y-4 text-center">
            <p className="text-lg text-white/95">{t.threshold}</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleTouch}
                className="rounded border border-white/70 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition hover:bg-white/20"
              >
                {t.continueTouching}
              </button>
              <button
                type="button"
                onClick={handleTouch}
                className="rounded border border-white/50 bg-black/35 px-6 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition hover:bg-black/55"
              >
                {t.goHome}
              </button>
            </div>
          </div>
        )}

        <p key={sloganTick} className="slogan-fade mt-8 min-h-7 max-w-3xl text-sm text-white/90 sm:text-base">
          {slogan}
        </p>
      </section>

      {showPoem && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/65 px-6 backdrop-blur-sm">
          <div className="max-w-2xl text-center text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">{t.poemTitle}</p>
            <p className="mt-4 text-lg text-white/90">{t.poemIntro}</p>
            <div className="mt-6 space-y-2 text-base leading-relaxed text-white/95 sm:text-lg">
              {t.poem.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShowPoem(false)}
              className="mt-8 rounded border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition hover:bg-white/20"
            >
              {t.poemClose}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
