const songs=[
  {id:1,en:"Shri Gananatha Sindhoora Varna",kn:"ಶ್ರೀ ಗಣನಾಥ ಸಿಂಧೂರ ವರ್ಣ",file:"songs/Bhajana-01.pdf"},
  {id:2,en:"Sharanu Siddhivinayaka",kn:"ಶರಣು ಸಿದ್ಧಿವಿನಾಯಕ",file:"songs/Bhajana-02.pdf"},
  {id:3,en:"Vandanamu Igo Vinayaka",kn:"ವಂದನಮು ಇಗೋ ವಿನಾಯಕ",file:"songs/Bhajana-03.pdf"},
  {id:4,en:"Lambodara Shiva Gowri Sutha",kn:"ಲಂಬೋದರ ಶಿವ ಗೌರಿ ಸುತ",file:"songs/Bhajana-04.pdf"},
  {id:5,en:"Shri Sainatha Ashtaka Stotram",kn:"ಶ್ರೀ ಸಾಯಿನಾಥ ಅಷ್ಟಕ ಸ್ತೋತ್ರಂ",file:"songs/Bhajana-05.pdf"},
  {id:6,en:"Jaya Jaya Gurudeva Swami",kn:"ಜಯ ಜಯ ಗುರುದೇವ ಸ್ವಾಮಿ",file:"songs/Bhajana-06.pdf"},
  {id:7,en:"Shambho Hara Hara Sadashiva",kn:"ಶಂಭೋ ಹರ ಹರ ಸದಾಶಿವ",file:"songs/Bhajana-07.pdf"},
  {id:8,en:"Shri Subrahmanyam Subrahmanyam",kn:"ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯಂ ಸುಬ್ರಹ್ಮಣ್ಯಂ",file:"songs/Bhajana-08.pdf"},
  {id:9,en:"Phaniraja Muralidhari",kn:"ಫಣೀರಾಜ ಮುರಳಿಧಾರಿ",file:"songs/Bhajana-09.pdf"},
  {id:10,en:"Jayadevi Jaya Devi Shri Durgamatha",kn:"ಜಯದೇವಿ ಜಯ ದೇವಿ ಶ್ರೀ ದುರ್ಗಾಮಾತಾ",file:"songs/Bhajana-10.pdf"},
  {id:11,en:"Shri Vasavi Mangala Aarathi",kn:"ಶ್ರೀ ವಾಸವಿ ಮಂಗಳ ಆರತಿ",file:"songs/Bhajana-11.pdf"},
  {id:12,en:"Vasavamba Charithe (Mangalam)",kn:"ವಾಸವಾಂಬಾ ಚರಿತೆ (ಮಂಗಳಂ)",file:"songs/Bhajana-12.pdf"},
  {id:13,en:"Jayamu Jayamu Vasavamba",kn:"ಜಯಮು ಜಯಮು ವಾಸವಾಂಬಾ",file:"songs/Bhajana-13.pdf"},
  {id:14,en:"Rajarajeshwari Devi Kanya Kumari",kn:"ರಾಜರಾಜೇಶ್ವರಿ ದೇವಿ ಕನ್ಯಾ ಕುಮಾರಿ",file:"songs/Bhajana-14.pdf"},
  {id:15,en:"Devi Katyayani Tribhuvana Janani",kn:"ದೇವಿ ಕಾತ್ಯಾಯನಿ ತ್ರಿಭುವನ ಜನನಿ",file:"songs/Bhajana-15.pdf"},
  {id:16,en:"Amba Parameshwari Akhilandeshwari",kn:"ಅಂಬಾ ಪರಮೇಶ್ವರಿ ಅಖಿಲಾಂಡೇಶ್ವರಿ",file:"songs/Bhajana-16.pdf"},
  {id:17,en:"Varalakshmi Mayamma Siruliyyavamma",kn:"ವರಲಕ್ಷ್ಮೀ ಮಾಯಮ್ಮ ಸಿರುಲಿಯ್ಯವಮ್ಮ",file:"songs/Bhajana-17.pdf"},
  {id:18,en:"Saraswati Mata Jaya Jaya Saraswati Mata",kn:"ಸರಸ್ವತಿ ಮಾತಾ ಜಯ ಜಯ ಸರಸ್ವತಿ ಮಾತಾ",file:"songs/Bhajana-18.pdf"},
  {id:19,en:"Hari Yenniro Govinda Yenniro",kn:"ಹರಿ ಎನ್ನಿರೋ ಗೋವಿಂದ ಎನ್ನಿರೋ",file:"songs/Bhajana-19.pdf"},
  {id:20,en:"Hari Narayana Hari Narayana",kn:"ಹರಿ ನಾರಾಯಣ ಹರಿ ನಾರಾಯಣ",file:"songs/Bhajana-20.pdf"},
  {id:21,en:"Ikko Node Ranganathana Chikkapadava",kn:"ಇಕ್ಕೋ ನೋಡೆ ರಂಗನಾಥನ ಚಿಕ್ಕಪಾದವ",file:"songs/Bhajana-21.pdf"},
  {id:22,en:"Dasana Madiko Enna Swami",kn:"ದಾಸನ ಮಾಡಿಕೊ ಎನ್ನ ಸ್ವಾಮಿ",file:"songs/Bhajana-22.pdf"},
  {id:23,en:"Enagu Aane Ranga Ninagu Aane",kn:"ಎನಗೂ ಆಣೆ ರಂಗ ನಿನಗೂ ಆಣೆ",file:"songs/Bhajana-23.pdf"},
  {id:24,en:"Venunada Baro Venkataramanane Baro",kn:"ವೇಣುನಾದ ಬಾರೋ ವೇಂಕಟರಮಣನೇ ಬಾರೋ",file:"songs/Bhajana-24.pdf"},
  {id:25,en:"Tirumala Vasi Shri Venkatesha",kn:"ತಿರುಮಲ ವಾಸಿ ಶ್ರೀ ವೆಂಕಟೇಶ",file:"songs/Bhajana-25.pdf"},
  {id:26,en:"Shivuni Chetillo Damarukam Mogenu",kn:"ಶಿವುನಿ ಚೇತಿಲೋ ಢಮರುಕಂ ಮೊಗಿನು",file:"songs/Bhajana-26.pdf"},
  {id:27,en:"Rama Rama Rama Sita Rama",kn:"ರಾಮ ರಾಮ ರಾಮ ಸೀತಾ ರಾಮ",file:"songs/Bhajana-27.pdf"},
  {id:28,en:"Ninu Ennanu Kayabekayya Shri Anjaneya",kn:"ನೀನು ಎನ್ನನು ಕಾಯಬೇಕಯ್ಯ ಶ್ರೀ ಆಂಜನೇಯ",file:"songs/Bhajana-28.pdf"},
  {id:29,en:"Jaya Vijayibhava Hanumanta",kn:"ಜಯ ವಿಜಯೀಭವ ಹನುಮಂತಾ",file:"songs/Bhajana-29.pdf"},
  {id:30,en:"Ghatikachaladi Ninta Shri Hanumanta",kn:"ಘಟಿಕಾಚಲದಿ ನಿಂತ ಶ್ರೀ ಹನುಮಂತಾ",file:"songs/Bhajana-30.pdf"},
  {id:31,en:"Aarathi Belagona",kn:"ಆರತಿ ಬೆಳಗೋಣ",file:"songs/Bhajana-31.pdf"},
  {id:32,en:"Mangalamani Mangalamani",kn:"ಮಂಗಳಮನಿ ಮಂಗಳಮನಿ",file:"songs/Bhajana-32.pdf"},
  {id:33,en:"Sai Mahima",kn:"ಸಾಯಿ ಮಹಿಮಾ",file:"songs/Bhajana-33.pdf"},
  {id:34,en:"Sai Bol Sai Bol",kn:"ಸಾಯಿ ಬೋಲ್ ಸಾಯಿ ಬೋಲ್",file:"songs/Bhajana-34.pdf"},
  {id:35,en:"Shuladhari Shankara",kn:"ಶೂಲಧಾರಿ ಶಂಕರ",file:"songs/Bhajana-35.pdf"},
  {id:36,en:"Sundarananna Shiva Sundarananna",kn:"ಸುಂದರಾನನ್ನಾ ಶಿವ ಸುಂದರಾನನ್ನಾ",file:"songs/Bhajana-36.pdf"},
  {id:37,en:"Om Namo Namo Nataraja",kn:"ಓಂ ನಮೋ ನಮೋ ನಟರಾಜಾ",file:"songs/Bhajana-37.pdf"},
  {id:38,en:"Shri Kanyakamba Penugonda Vasini",kn:"ಶ್ರೀ ಕನ್ಯಕಾಂಬ ಪೆನುಗೊಂಡ ವಾಸಿನಿ",file:"songs/Bhajana-38.pdf"},
  {id:39,en:"Vasavikini Pushpala Mala",kn:"ವಾಸವಿಕಿನಿ ಪುಷ್ಪಾಲ ಮಾಲ",file:"songs/Bhajana-39.pdf"},
  {id:40,en:"Swagatamu Vasavi",kn:"ಸ್ವಾಗತಮು ವಾಸವಿ",file:"songs/Bhajana-40.pdf"},
  {id:41,en:"Sada Enna Naligeyali",kn:"ಸದಾ ಎನ್ನ ನಾಲಿಗೆಯಲಿ",file:"songs/Bhajana-41.pdf"},
  {id:42,en:"Andala Amma Kuma Kannikambaku",kn:"ಅಂದಾಲ ಅಮ್ಮ ಕುಮಾ ಕನ್ನಿಕಾಂಬಕು",file:"songs/Bhajana-42.pdf"},
  {id:43,en:"Jai Bhavani",kn:"ಜೈ ಭವಾನಿ",file:"songs/Bhajana-43.pdf"},
  {id:44,en:"Eshtondhu Alankara",kn:"ಎಷ್ಟೊಂದು ಅಲಂಕಾರ",file:"songs/Bhajana-44.pdf"},
  {id:45,en:"Akhilandeshwari Aarathi Haadu",kn:"ಅಖಿಲಾಂಡೇಶ್ವರಿ ಆರತಿ ಹಾಡು",file:"songs/Bhajana-45.pdf"},
  {id:46,en:"Durga Mathe Vachchindi",kn:"ದುರ್ಗಾ ಮಾತೆ ವಚ್ಚಿಂದಿ",file:"songs/Bhajana-46.pdf"},
  {id:47,en:"Durga Devi Durita Vihari",kn:"ದುರ್ಗಾ ದೇವಿ ದುರಿತ ವಿಹಾರಿ",file:"songs/Bhajana-47.pdf"},
  {id:48,en:"Deva Gangemma",kn:"ದೇವ ಗಂಗೆಮ್ಮ",file:"songs/Bhajana-48.pdf"},
  {id:49,en:"Saubhagya Lakshmi Ravamma",kn:"ಸೌಭಾಗ್ಯ ಲಕ್ಷ್ಮೀ ರಾವಮ್ಮಾ",file:"songs/Bhajana-49.pdf"},
  {id:50,en:"Mangalam Jaya Mangalam",kn:"ಮಂಗಳಂ ಜಯ ಮಂಗಳಂ",file:"songs/Bhajana-50.pdf"},
  {id:51,en:"Nadedu Bamma Lakshmi Devi",kn:"ನಡೆದು ಬಾಮ್ಮ ಲಕ್ಷ್ಮೀ ದೇವಿ",file:"songs/Bhajana-51.pdf"},
  {id:52,en:"Jayalakshmi Jaya Narayana",kn:"ಜಯಲಕ್ಷ್ಮೀ ಜಯ ನಾರಾಯಣ",file:"songs/Bhajana-52.pdf"},
  {id:53,en:"Nee Roopu Telupu Nee Hamsa Telupu",kn:"ನೀ ರೂಪು ತೆಲುಪು ನೀ ಹಂಸ ತೆಲುಪು",file:"songs/Bhajana-53.pdf"},
  {id:54,en:"Hamsavahini Jnana Dayini",kn:"ಹಂಸವಾಹಿನಿ ಜ್ಞಾನ ದಾಯಿನಿ",file:"songs/Bhajana-54.pdf"},
  {id:55,en:"Adimoolame Maaku Angaraksha",kn:"ಆದಿಮೂಲಮೇ ಮಾಕು ಅಂಗರಕ್ಷ",file:"songs/Bhajana-55.pdf"},
  {id:56,en:"Sharanu Sharanu Neeku",kn:"ಶರಣು ಶರಣು ನೀಕು",file:"songs/Bhajana-56.pdf"},
  {id:57,en:"Gandhamu Puyyaruga",kn:"ಗಂಧಮು ಪುಯ್ಯರುಗಾ",file:"songs/Bhajana-57.pdf"},
  {id:58,en:"Jaya Jaya Jaya Jaya Shri Chennakeshava",kn:"ಜಯ ಜಯ ಜಯ ಜಯ ಶ್ರೀ ಚೆನ್ನಕೇಶವ",file:"songs/Bhajana-58.pdf"},
  {id:59,en:"Sarvatra Govinda",kn:"ಸರ್ವತ್ರ ಗೋವಿಂದ",file:"songs/Bhajana-59.pdf"},
  {id:60,en:"Simharoopanada Shri Hari",kn:"ಸಿಂಹರೂಪನಾದ ಶ್ರೀ ಹರಿ",file:"songs/Bhajana-60.pdf"},
  {id:61,en:"Jaya Janardhana Swami Narasimhane",kn:"ಜಯ ಜನಾರ್ದನ ಸ್ವಾಮಿ ನರಸಿಂಹನೇ",file:"songs/Bhajana-61.pdf"},
  {id:62,en:"Vedamule Nee Nivasamata",kn:"ವೇದಮುಲೇ ನೀ ನಿವಾಸಮಟ",file:"songs/Bhajana-62.pdf"},
  {id:63,en:"Yaaru Kai Bittaru Nee Kaiya Bidadiru",kn:"ಯಾರು ಕೈ ಬಿಟ್ಟರೂ ನೀ ಕೈಯ ಬಿಡದಿರು",file:"songs/Bhajana-63.pdf"},
  {id:64,en:"Shrimannarayana Shrimannarayana",kn:"ಶ್ರೀಮನ್ನಾರಾಯಣ ಶ್ರೀಮನ್ನಾರಾಯಣ",file:"songs/Bhajana-64.pdf"},
  {id:65,en:"Ranga Baro Panduranga Baro",kn:"ರಂಗ ಬಾರೋ ಪಾಂಡುರಂಗ ಬಾರೋ",file:"songs/Bhajana-65.pdf"},
  {id:66,en:"Panduranga Vittale Harinarayana",kn:"ಪಾಂಡುರಂಗ ವಿಠ್ಠಲೇ ಹರಿನಾರಾಯಣ",file:"songs/Bhajana-66.pdf"},
  {id:67,en:"Pandharapuravemba Dodda Nagara",kn:"ಪಂಡರಾಪುರವೆಂಬ ದೊಡ್ಡ ನಗರ",file:"songs/Bhajana-67.pdf"},
  {id:68,en:"Narayana Narayana Hari Narayana",kn:"ನಾರಾಯಣ ನಾರಾಯಣ ಹರಿ ನಾರಾಯಣ",file:"songs/Bhajana-68.pdf"},
  {id:69,en:"Krishna Nee Begane Baro",kn:"ಕೃಷ್ಣ ನೀ ಬೇಗನೆ ಬಾರೋ",file:"songs/Bhajana-69.pdf"},
  {id:70,en:"Yaare Rangana Yaare Krishnana",kn:"ಯಾರೇ ರಂಗನ ಯಾರೇ ಕೃಷ್ಣನ",file:"songs/Bhajana-70.pdf"},
  {id:71,en:"Indiresha Govinda",kn:"ಇಂದಿರೇಶ ಗೋವಿಂದ",file:"songs/Bhajana-71.pdf"},
  {id:72,en:"Venkatesha Daya Mado Vedavedyane",kn:"ವೇಂಕಟೇಶ ದಯ ಮಾಡೋ ವೇದವೇದ್ಯನೆ",file:"songs/Bhajana-72.pdf"},
  {id:73,en:"Venkatesha Kalyana Vishwada Kalyana",kn:"ವೆಂಕಟೇಶ ಕಲ್ಯಾಣ ವಿಶ್ವದ ಕಲ್ಯಾಣ",file:"songs/Bhajana-73.pdf"},
  {id:74,en:"Govinda Gopala Gopikavallabha",kn:"ಗೋವಿಂದ ಗೋಪಾಲ ಗೋಪಿಕಾವಲ್ಲಭ",file:"songs/Bhajana-74.pdf"},
  {id:75,en:"Baro Brahmadi Vandya",kn:"ಬಾರೋ ಬ್ರಹ್ಮಾದಿ ವಂದ್ಯ",file:"songs/Bhajana-75.pdf"},
  {id:76,en:"Shripatiyu Namage Sampadaveeyali",kn:"ಶ್ರೀಪತಿಯು ನಮಗೆ ಸಂಪದವೀಯಲಿ",file:"songs/Bhajana-76.pdf"},
  {id:77,en:"Rama Raghuvara Rama Sita",kn:"ರಾಮ ರಘುವರ ರಾಮ ಸೀತಾ",file:"songs/Bhajana-77.pdf"},
  {id:78,en:"Nagumomu Galavani",kn:"ನಗುಮೋಮು ಗಲವಾನಿ",file:"songs/Bhajana-78.pdf"},
  {id:79,en:"Devadevam Bhaje Divya Prabhavam",kn:"ದೇವದೇವಂ ಭಜೇ ದಿವ್ಯ ಪ್ರಭಾವಂ",file:"songs/Bhajana-79.pdf"},
  {id:80,en:"Shri Rama Jaya Rama Shringara Rama",kn:"ಶ್ರೀ ರಾಮ ಜಯ ರಾಮ ಶೃಂಗಾರ ರಾಮ",file:"songs/Bhajana-80.pdf"}
];
const list=document.getElementById("list"),search=document.getElementById("search");
function esc(t){return t.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));}
function render(){const q=search.value.toLowerCase().trim(),filtered=songs.filter(s=>(s.en+" "+s.kn).toLowerCase().includes(q));list.innerHTML=filtered.length?filtered.map(s=>`<article class="card"><div class="num">${s.id}</div><div class="info"><div class="title">${esc(s.en)}</div><div class="kannada">${esc(s.kn)}</div></div><button class="open" onclick="openSong(${s.id})">Open</button></article>`).join(""):`<div class="empty">ಭಜನೆ ಸಿಗಲಿಲ್ಲ / No Bhajana found.</div>`;}
function openSong(id){const s=songs.find(x=>x.id===id);if(s)window.open(s.file,"_blank","noopener");}
search.addEventListener("input",render);render();

const list=document.getElementById("list");
const search=document.getElementById("search");
const count=document.getElementById("count");
const pagination=document.getElementById("pagination");
const perPage=10;
let currentPage=1;
function esc(t){return t.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function filteredSongs(){const q=search.value.toLowerCase().trim();return songs.filter(s=>(s.en+" "+s.kn).toLowerCase().includes(q))}
function render(){const all=filteredSongs();const pages=Math.max(1,Math.ceil(all.length/perPage));if(currentPage>pages)currentPage=pages;const start=(currentPage-1)*perPage;const shown=all.slice(start,start+perPage);count.textContent=`${all.length} / ${songs.length} Bhajanas`;
list.innerHTML=shown.length?shown.map(s=>`<div class="card"><div class="num">${s.id}</div><div class="info"><div class="english">${esc(s.en)}</div><div class="kannada">${esc(s.kn)}</div></div><button class="open" onclick="openSong(${s.id})">Open</button></div>`).join(""):"<div class=\"empty\">ಭಜನೆ ಸಿಗಲಿಲ್ಲ / No Bhajana found.</div>";
pagination.innerHTML="";if(pages>1){for(let i=1;i<=pages;i++){if(i===1||i===pages||Math.abs(i-currentPage)<=1){const b=document.createElement("button");b.className="page"+(i===currentPage?" active":"");b.textContent=i;b.onclick=()=>{currentPage=i;render();window.scrollTo({top:document.querySelector('.list').offsetTop-20,behavior:'smooth'})};pagination.appendChild(b)}else if((i===2&&currentPage>3)||(i===pages-1&&currentPage<pages-2)){const d=document.createElement("span");d.className="dots";d.textContent="…";pagination.appendChild(d)}}}}
function openSong(id){const s=songs.find(x=>x.id===id);if(s)window.open(s.file,"_blank","noopener")}
search.addEventListener("input",()=>{currentPage=1;render()});render();
