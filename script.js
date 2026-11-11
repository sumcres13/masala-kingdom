const page = document.body.dataset.page || "home";

document.getElementById("site-header-mount").innerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner container-wide">
      <a class="company-brand" href="index.html" aria-label="G.and P. 合同会社 ホーム" data-i18n-aria="companyHome"><img class="masala-header-logo" src="assets/logo.png" alt=""><span class="company-wordmark"><span class="company-title" data-i18n="companyName">G.and P. 合同会社</span></span></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション" data-i18n-aria="mainNavigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a>
        <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a>
        <a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a>
        <a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a>
      </nav>
      <div class="header-actions"><button class="language-switch" type="button" id="language-switch" aria-label="英語に切り替える"><svg class="language-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><ellipse cx="12" cy="12" rx="4" ry="9"></ellipse><path d="M3 12h18"></path></svg><span class="language-target">EN</span><svg class="language-arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="m7 5 5 5-5 5"></path></svg></button><button class="menu-toggle" type="button" id="menu-toggle" aria-label="メニューを開く" data-i18n-aria="openMenu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" data-i18n-aria="mobileNavigation" hidden><a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a><a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a><a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a></nav>
  </header>`;

document.getElementById("site-footer-mount").innerHTML = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a href="index.html"><span class="company-wordmark"><span class="company-title">MASALA KINGDOM</span><span class="company-name-suffix">G.and P. 合同会社</span></span></a><p data-i18n="footerStatement">スパイスの香りと、あたたかなおもてなし。</p></div>
    <div><h2 data-i18n="contactLabel">お問い合わせ</h2><p><span data-i18n="addressFull">〒212-0015 神奈川県川崎市幸区柳町７−８</span></p><a href="tel:0445333005">044-533-3005</a></div>
    <div class="footer-nav"><h2 data-i18n="navigationLabel">ナビゲーション</h2><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">私たちについて</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></div>
  </div><div class="container footer-bottom"><span>© <span id="year">2026</span> <span data-i18n="companyName">G.and P. 合同会社</span> <span data-i18n="rightsReserved">無断転載を禁じます。</span></span><a href="#main-content" data-i18n="footerBack">ページ上部へ ↑</a></div></footer>`;

const en = {
  "navHome": "Home",
  "navAbout": "About us",
  "navStore": "Store & access",
  "navReservePlain": "Reservations",
  "companyName": "G.and P. 合同会社",
  "companyHome": "G.and P. 合同会社 home",
  "footerStatement": "Fragrant spices and a warm welcome.",
  "heroLine1": "A taste of spice,",
  "heroLine2": "a warm welcome in Shitte.",
  "heroCopy": "Welcome to MASALA KINGDOM.<br class=\"desktop-break\">Indian cuisine and a warm welcome in Shitte, Kawasaki.",
  "heroReserve": "Reserve a table",
  "heroAccess": "Store & access",
  "heroImageAlt": "MASALA KINGDOM storefront in Shitte, Kawasaki",
  "aboutTitle": "<span class=\"about-heading-line\">Authentic flavors,</span><span class=\"about-heading-line\">a heartfelt welcome.</span>",
  "aboutBody": "MASALA KINGDOM in Shitte, Kawasaki welcomes you to enjoy Indian cuisine. Share fragrant curries, naan, and a relaxing meal with family and friends. We look forward to welcoming you.",
  "aboutLink": "About us",
  "diningImageAlt": "Warm MASALA KINGDOM dining room with wooden tables",
  "homeStoreInfoLabel": "STORE INFORMATION",
  "shopName": "MASALA KINGDOM Shitte",
  "homeQuality1Title": "Authentic Indian flavors",
  "homeQuality1Text": "Enjoy curry, naan, and dishes filled with the fragrance of spices.",
  "homeQuality2Title": "A warm and welcoming dining room",
  "homeQuality2Text": "Warm colors and wooden tables create a comfortable place to unwind.",
  "homeQuality3Title": "Enjoy at the restaurant or at home",
  "homeQuality3Text": "Lunch 11:00–15:00 and dinner 17:00–22:00. Enjoy our food through delivery partners too.",
  "snsTitle": "Stay close to MASALA KINGDOM.",
  "snsCopy": "Our LINE link will be available here soon.",
  "lineFollow": "LINE (coming soon)",
  "homeReserveTitle": "Reservations & inquiries",
  "homeReserveCopy": "Find reservation methods and delivery services here.",
  "reservePage": "Reservations",
  "aboutPageTitle": "About us",
  "repRole": "Representative Director",
  "representativeName": "Padam Bahadur GC",
  "representativeAlt": "The team welcoming guests outside MASALA KINGDOM",
  "ceoP1": "Welcome to MASALA KINGDOM, and thank you for joining us. With heartfelt cooking and warm hospitality, we hope to make your time with us full of smiles. Relax, share a meal with family and friends, and enjoy. We look forward to welcoming you.",
  "valuesTitle": "What matters to us",
  "value1Title": "Food made with care",
  "value1Text": "Bringing the fragrance and flavor of spices to your table.",
  "value2Title": "Warm hospitality",
  "value2Text": "We hope to welcome every guest with a smile.",
  "value3Title": "Happy moments together",
  "value3Text": "Enjoy a relaxed meal with family and friends.",
  "companyTitle": "Company overview",
  "companyNameLabel": "Company",
  "companyRepLabel": "Representative",
  "companyRepValue": "Padam Bahadur GC",
  "companyBusinessLabel": "Business",
  "companyBusiness": "Operating MASALA KINGDOM, an Real Indian Restaurant.",
  "companyLocationLabel": "Restaurant location",
  "storesPageTitle": "Store & access",
  "storeCuisine": "Real Indian Restaurant",
  "addressLabel": "Address",
  "addressFull": "7-8 Yanagicho, Saiwai Ward, Kawasaki, Kanagawa 212-0015, Japan",
  "hoursLabel": "Hours",
  "hoursValue": "11:00–15:00 / 17:00–22:00",
  "closedLabel": "Closed",
  "closedValue": "Every Monday",
  "phoneLabel": "Phone",
  "galleryTitle": "Scenes from MASALA KINGDOM",
  "slideOne": "A warm space to unwind.",
  "slideTwo": "Take your time around our wooden tables.",
  "slideThree": "Enjoy a meal at MASALA KINGDOM.",
  "locationTitle": "Location",
  "openMap": "Open in Google Maps ↗",
  "mapTitle": "Map to MASALA KINGDOM",
  "storeImageAlt": "Entrance to MASALA KINGDOM",
  "bookingTitle": "Reservations & inquiries",
  "bookingIntro": "Explore Tabelog or call us for reservations. Restaurant details are also available on Rakuten Gurunavi.",
  "telephoneTitle": "Reserve by phone",
  "telephoneAction": "Call now",
  "deliveryTitle": "Delivery",
  "deliveryIntro": "Order MASALA KINGDOM food through a delivery partner.",
  "orderAction": "Order now",
  "uberAlt": "Uber Eats",
  "demaeAlt": "Demae-can",
  "rocketAlt": "Rocket Now",
  "lineAlt": "LINE",
  "mainNavigation": "Main navigation",
  "mobileNavigation": "Mobile navigation",
  "openMenu": "Open menu",
  "closeMenu": "Close menu",
  "contactLabel": "CONTACT",
  "navigationLabel": "NAVIGATION",
  "previousPhoto": "Previous photo",
  "nextPhoto": "Next photo",
  "galleryPhotos": "Choose a gallery photo",
  "photoOne": "Photo 1",
  "photoTwo": "Photo 2",
  "photoThree": "Photo 3",
  "skipLink": "Skip to content",
  "footerBack": "BACK TO TOP ↑",
  "rightsReserved": "All rights reserved.",
  "companyEmailLabel": "Email",
  "interiorWideAlt": "MASALA KINGDOM table seating and orange walls",
  "interiorDetailAlt": "Wooden tables inside MASALA KINGDOM",
  "gurunaviTitle": "Rakuten Gurunavi",
  "gurunaviAlt": "Rakuten Gurunavi",
  "listingExternal": "View restaurant information",
  "listingAction": "View store details",
  "ceoCatch": "Good food.<br>Happy moments.",
  "ceoMessageLabel": "A WARM WELCOME",
  "companyPhoneLabel": "Restaurant phone",
  "tabelogTitle": "Tabelog",
  "tabelogAlt": "Tabelog",
  "tabelogDetails": "Menus & restaurant information",
  "tabelogAction": "Open Tabelog",
  "photoFour": "Photo 4",
  "teamImageAlt": "The team welcoming guests outside MASALA KINGDOM",
  "slideWelcome": "Welcome to MASALA KINGDOM.",
  "companyShopLabel": "Restaurant",
  "companyHoursLabel": "Opening hours"
};

const ja = {
  "companyName": "G.and P. 合同会社",
  "companyHome": "G.and P. 合同会社 ホーム",
  "footerStatement": "スパイスの香りと、あたたかなおもてなし。",
  "heroLine1": "川崎・尻手で、",
  "heroLine2": "スパイス香るひととき。",
  "heroCopy": "MASALA KINGDOMへようこそ。<br class=\"desktop-break\">本場インド料理を、あたたかな空間で。",
  "heroImageAlt": "川崎・尻手のMASALA KINGDOMの店舗外観",
  "aboutTitle": "<span class=\"about-heading-line\">本場の味わいと、</span><span class=\"about-heading-line\">心を込めたおもてなし。</span>",
  "aboutBody": "<span class=\"budoux-phrase\">川崎・尻手の</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">MASALA KINGDOMは、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">本場インド料理の</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お店です。</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">香り</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">豊かな</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">スパイスの</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">カレーや</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ナンとともに、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ご家族や</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ご友人との</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お食事を</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お楽しみください。</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">皆さまを</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">あたたかく</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お迎えします。</span>",
  "diningImageAlt": "MASALA KINGDOMの木のテーブルとあたたかな店内",
  "shopName": "MASALA KINGDOM 尻手",
  "homeQuality1Title": "スパイス香る、本場インド料理",
  "homeQuality1Text": "<span class=\"budoux-phrase\">カレーや</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ナンを</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">はじめ、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">本場インドの</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">味わいを</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お楽しみください。</span>",
  "homeQuality2Title": "あたたかな、くつろぎの空間",
  "homeQuality2Text": "<span class=\"budoux-phrase\">木の</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">テーブルと</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">落ち着いた</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">店内で、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ゆっくりと</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お食事を。</span>",
  "homeQuality3Title": "お店でも、ご自宅でも",
  "homeQuality3Text": "<span class=\"budoux-phrase\">ランチ 11:00–15:00、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ディナー 17:00–22:00。</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">デリバリーでも</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お楽しみいただけます。</span>",
  "snsTitle": "MASALA KINGDOMを、もっと身近に。",
  "snsCopy": "LINEのご案内は、準備が整い次第お知らせします。",
  "repRole": "代表取締役",
  "representativeName": "パダム バハドゥル ジーシー",
  "representativeAlt": "MASALA KINGDOMの店頭でお迎えするスタッフ",
  "ceoP1": "MASALA KINGDOMへようこそ。ご来店いただき、ありがとうございます。心を込めた料理とあたたかなおもてなしで、皆さまのひとときが笑顔あふれる時間になりますように。ご家族やご友人と、どうぞゆっくりお楽しみください。皆さまのお越しを心よりお待ちしております。",
  "value1Title": "心を込めたひと皿",
  "value1Text": "スパイスの香りとおいしさを、皆さまの食卓へ。",
  "value2Title": "あたたかなおもてなし",
  "value2Text": "皆さまを笑顔でお迎えするお店でありたいと願っています。",
  "value3Title": "笑顔で過ごす時間",
  "value3Text": "ご家族やご友人と、楽しいお食事のひとときを。",
  "companyRepValue": "パダム バハドゥル ジーシー",
  "companyBusiness": "MASALA KINGDOMの運営。本場インド料理。",
  "companyEmailLabel": "メールアドレス",
  "storeCuisine": "本場インド料理",
  "addressFull": "〒212-0015 神奈川県川崎市幸区柳町７−８",
  "hoursValue": "11:00–15:00 / 17:00–22:00",
  "closedValue": "毎週月曜日",
  "galleryTitle": "MASALA KINGDOMの風景",
  "slideOne": "あたたかな色に包まれる、くつろぎの空間。",
  "slideTwo": "木のテーブルで、ゆっくりお食事を。",
  "slideThree": "MASALA KINGDOMで、心地よいひとときを。",
  "mapTitle": "MASALA KINGDOMの所在地の地図",
  "storeImageAlt": "MASALA KINGDOMの店舗入口",
  "interiorWideAlt": "MASALA KINGDOMのテーブル席とオレンジ色の壁",
  "interiorDetailAlt": "MASALA KINGDOMの木のテーブルと店内",
  "bookingIntro": "食べログの店舗ページ、またはお電話からどうぞ。店舗情報は楽天ぐるなびでもご確認いただけます。",
  "gurunaviTitle": "楽天ぐるなび",
  "gurunaviAlt": "楽天ぐるなび",
  "listingExternal": "店舗情報をご覧いただけます",
  "listingAction": "店舗情報を見る",
  "deliveryIntro": "MASALA KINGDOMのお料理を、各サービスからご注文いただけます。",
  "ceoCatch": "おいしい時間を、<br>笑顔とともに。",
  "ceoMessageLabel": "ごあいさつ",
  "companyPhoneLabel": "店舗電話",
  "tabelogTitle": "食べログ",
  "tabelogAlt": "食べログ",
  "tabelogDetails": "メニュー・店舗情報をご覧いただけます",
  "tabelogAction": "食べログを見る",
  "aboutLink": "私たちについて",
  "lineFollow": "LINE（準備中）",
  "valuesTitle": "私たちが大切にすること",
  "companyRepLabel": "代表者",
  "companyLocationLabel": "店舗所在地",
  "photoFour": "写真 4",
  "teamImageAlt": "MASALA KINGDOMの店頭でお迎えするスタッフ",
  "slideWelcome": "MASALA KINGDOMへようこそ。",
  "companyShopLabel": "店舗名",
  "companyHoursLabel": "営業時間"
};
document.querySelectorAll("[data-i18n]").forEach(element => {
  if (ja[element.dataset.i18n] !== undefined) element.innerHTML = ja[element.dataset.i18n];
});
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
  const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
  const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
  if (ja[key] !== undefined) element.setAttribute(attribute, ja[key]);
});
const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => originalText.set(element, element.innerHTML));
const originalAttributes = new Map();
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => originalAttributes.set(element, { aria: element.getAttribute("aria-label"), alt: element.getAttribute("alt"), title: element.getAttribute("title") }));
const languageButton = document.getElementById("language-switch");
let language = "ja";
try { language = localStorage.getItem("masalaKingdomLanguage") === "en" ? "en" : "ja"; } catch {}
function renderLanguage(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.innerHTML = language === "ja" ? originalText.get(element) : en[element.dataset.i18n] ?? originalText.get(element); });
  document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
    const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
    const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
    const original = originalAttributes.get(element)?.[element.dataset.i18nAria ? "aria" : element.dataset.i18nAlt ? "alt" : "title"];
    element.setAttribute(attribute, language === "ja" ? original : en[key] ?? original);
  });
  languageButton.classList.toggle("is-en", language === "en");
  languageButton.querySelector(".language-target").textContent = language === "ja" ? "EN" : "日本語";
  languageButton.setAttribute("aria-label", language === "ja" ? "英語に切り替える" : "Switch to Japanese");
  const descriptions = {"ja": {"home": "川崎・尻手のMASALA KINGDOM（マサラキングダム）。本場インド料理、店舗情報、ご予約、デリバリーをご案内します。", "about": "G.and P. 合同会社と代表者padam bahadur gcのメッセージ。MASALA KINGDOMを運営しています。", "stores": "MASALA KINGDOMの住所、営業時間、電話番号、店内写真とアクセスをご案内します。", "reservation": "MASALA KINGDOMの電話予約と店舗情報、Uber Eats・出前館・Rocket Nowのデリバリーサービス。"}, "en": {"home": "MASALA KINGDOM Real Indian Restaurant in Shitte, Kawasaki, operated by G.and P. 合同会社.", "about": "Meet G.and P. 合同会社 and representative padam bahadur gc. A warm welcome from MASALA KINGDOM.", "stores": "Find the MASALA KINGDOM address, opening hours, phone number, dining room photos, and map.", "reservation": "Call MASALA KINGDOM for reservations, view Rakuten Gurunavi, or order with Uber Eats, Demae-can, and Rocket Now."}};
  document.querySelector('meta[name="description"]').content = descriptions[language][page];
  document.title = (language === "ja"
    ? {home:"ホーム",about:"私たちについて",stores:"店舗・アクセス",reservation:"ご予約"}
    : {home:"Home",about:"About us",stores:"Store & access",reservation:"Reservations"})[page] + " | " + "MASALA KINGDOM";
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) menuToggle.setAttribute("aria-label", mobileNav.hidden ? (language === "ja" ? "メニューを開く" : "Open menu") : (language === "ja" ? "メニューを閉じる" : "Close menu"));
}

const header = document.getElementById("site-header");
const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
renderLanguage(language);
languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ja" ? "en" : "ja";
  try { localStorage.setItem("masalaKingdomLanguage", nextLanguage); } catch {}
  renderLanguage(nextLanguage);
});
function updateHeader(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
menuToggle.addEventListener("click",()=>{ const opening=mobileNav.hidden; mobileNav.hidden=!opening; header.classList.toggle("menu-open",opening); menuToggle.setAttribute("aria-expanded",String(opening)); menuToggle.setAttribute("aria-label",opening?(language === "ja" ? "メニューを閉じる" : "Close menu"):(language === "ja" ? "メニューを開く" : "Open menu")); });
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");}));

const slides=[...document.querySelectorAll(".gallery-slide")];
if(slides.length){ const dots=[...document.querySelectorAll(".gallery-dots button")];let current=0;function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>slide.classList.toggle("is-active",i===current));dots.forEach((dot,i)=>{dot.classList.toggle("is-active",i===current);if(i===current)dot.setAttribute("aria-current","true");else dot.removeAttribute("aria-current");});}document.querySelector(".gallery-prev").addEventListener("click",()=>showSlide(current-1));document.querySelector(".gallery-next").addEventListener("click",()=>showSlide(current+1));dots.forEach((dot,i)=>dot.addEventListener("click",()=>showSlide(i)));}

const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:"0px 0px 30px 0px"});reveals.forEach(element=>observer.observe(element));}else reveals.forEach(element=>element.classList.add("is-visible"));
document.getElementById("year").textContent=new Date().getFullYear();

