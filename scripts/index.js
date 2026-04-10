import {initAnimation} from "./spark.js";

// changing the login page sticker
let stickerStatus = 0;
const loginSticker = document.querySelector('.login img');
let interval;

const loginBox = document.querySelector(".login"); 
loginBox.style.display = "block";
setTimeout(() => loginBox.classList.add("show"), 1000);

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

function changeStickers() {
 interval = setInterval(() => {
  if (stickerStatus === 0) {
   loginSticker.src = './assets/bears/eating.webp';
   stickerStatus = 1;
  }
  else if (stickerStatus === 1) {
   loginSticker.src = './assets/bears/cola-drinking.webp';
   stickerStatus = 2;
  }
  else if (stickerStatus === 2) {
   loginSticker.src = './assets/bears/playing-toys.webp';
   stickerStatus = 0
  }
 }, 5000)
 
}

changeStickers();

// handle password

const pass = "cindrella";

const input = document.querySelector('.login input');
input.addEventListener('change', () => {
 const ans = input.value;
 console.log(ans)
 if ((ans).toLowerCase() === pass) {
  document.querySelector("audio").play();
  document.querySelector(".question").innerText = "Ohh, My dear friend I know that\n you won't forget ! 🥰";
  //:document.querySelector(".question").classList.add('cryScale')
  clearInterval(interval);
  loginSticker.src = "./assets/bears/tight-hugging.webp";
  setTimeout(() => walkAway(), 1000)
 }
 else {
  console.log("failed");
  removeCry();
  loginSticker.src = "./assets/bears/cute-crying.webp";
  loginSticker.classList.add('cryScale');
  input.classList.add("wrongPass");
  document.querySelector(".question").innerText = "huh, you forgot the name that\n i often call you ! 😭"
 }
})

function removeCry() {
 clearInterval(interval);
 setTimeout(() => {
  changeStickers();
  loginSticker.classList.remove('cryScale');
  input.classList.remove("wrongPass");
 }, 8000);
 
}

// after entering crt password 

function walkAway() {
 let countDown = 3;
 const h1Tag = document.querySelector(".question");
 setTimeout(() => {
  clearInterval(interval);
  changeLogin();
 }, 4500);
 
 interval = setInterval(() => {
  h1Tag.innerText = `${countDown}`;
  h1Tag.style.fontSize = "45px";
  countDown--;
 }, 1000)
 
}

//changeLogin() 
// just to create

async function changeLogin() {
 loginBox.classList.remove("show");
 const walkingBox = document.querySelector(".walking");
 const walkingImg = walkingBox.querySelector("img");
 
 // walking start
 await delay(3000);
 loginBox.style.display = "none";
 walkingBox.style.display = "block";
 walkingImg.style.opacity = "80%";
 walkingBox.classList.add('show');
 
 // walking stops
 await delay(5000);
 const overlay = document.querySelector(".overlay");
 overlay.classList.add('showOverlay');
 walkingBox.classList.remove('show');
 const waitmsg = document.querySelector('.overlay h1');
 waitmsg.style.fontSize = "40px";
 waitmsg.style.lineHeight = "1.2";
 waitmsg.classList.add('showh1');
 
 
 // clear waiting text
 await delay(2500);
 waitmsg.innerText = "";
 waitmsg.style.lineHeight = "20";
 
 // 2nd message
 await delay(500);
 waitmsg.innerText = "Today is a\n Special day ✨️🧡";
 waitmsg.style.lineHeight = "1.3";
 
 // clear 2nd msg
 await delay(2500);
 waitmsg.innerText = "";
 waitmsg.style.fontSize = "10px";
 
 // 3rd msg
 await delay(500);
 overlay.classList.add("wishOverlay");
 initAnimation();
 waitmsg.style.fontSize = "40px";
 waitmsg.innerText = "Happy birthday \n My dear Friend \n😇☺️";
 
 //clear msg
 await delay(8000);
 waitmsg.style.fontSize = "10px";
 waitmsg.innerText = "";
 
 //4th msg
 await delay(500);
 waitmsg.style.fontSize = "40px";
 waitmsg.innerText = "A friend 🤗\n is a friend,  😇\nbut a best friend 👫\nis even better \nHappy birthday 🎊\nto the best friend🫂 \nanyone could ask \nfor! ✨️";
 
 // clear
 await delay(8000);
 waitmsg.style.fontSize = "10px";
 waitmsg.innerText = "";

 //5th msg
 await delay(500);
 waitmsg.style.fontSize = "40px";
 waitmsg.innerText = "Friends like you🤌\n are blessings🙌 and\n I'm forever grateful💛\n to have you by 😉\nmy side.😌";
 
  // clear
 await delay(8000);
 waitmsg.style.fontSize = "10px";
 waitmsg.innerText = "";
 
  //5th msg
 await delay(500);
 waitmsg.style.fontSize = "35px";
 waitmsg.innerText = "May god give you😇\n a long healthy and \nself satisfying life\n ahead.☺️\n May all you \nunfulfilled desires come\n true\n in your journey.🧡\n Wishing you a gleeful\n and joyous \nbirthday.😌";
 
 // stop wishes
 await delay(8000);
 waitmsg.innerText="";
 enterImageGallery();
}
 
async function enterImageGallery(){
 document.querySelector('.overlay').innerHTML+=
 `
    <section id="overlaySection">
    <div class="top">
     <div class="topSlide">
      <div><img src="./assets/images/1.jpg"></div>
      <div><img src="./assets/images/2.jpg"></div>
      <div><img src="./assets/images/9.jpg"></div>
      <div><img src="./assets/images/4.jpg"></div>
      <div><img src="./assets/images/5.jpg"></div>
      <!--copy-->
      <div><img src="./assets/images/1.jpg"></div>
      <div><img src="./assets/images/2.jpg"></div>
      <div><img src="./assets/images/9.jpg"></div>
      <div><img src="./assets/images/4.jpg"></div>
      <div><img src="./assets/images/5.jpg"></div>
     </div>
    </div>
    <div class="middle">
     <div class="mainImg">
      <img src="./assets/images/6.jpg">
     </div>
    </div>
    
    <div class="bottom">
     <div class="bottomSlide">
     <div><img src="./assets/images/6.jpg"></div>
      <div><img src="./assets/images/7.jpg"></div>
      <div><img src="./assets/images/8.jpg"></div>
      <div><img src="./assets/images/3.jpg"></div>
      <div><img src="./assets/images/10.jpg"></div>
      <!--copy-->
      <div><img src="./assets/images/6.jpg"></div>
      <div><img src="./assets/images/7.jpg"></div>
      <div><img src="./assets/images/8.jpg"></div>
      <div><img src="./assets/images/3.jpg"></div>
      <div><img src="./assets/images/10.jpg"></div>
    </div>
    </div>
  </section>
 `;

 const mainImg = document.querySelector(".mainImg img")
 for(let i=1;i<=10;i++){
  mainImg.src = `./assets/images/${i}.jpg`;
  await delay(5000);
  if(i==10){
    i=1;
  }
 }
}