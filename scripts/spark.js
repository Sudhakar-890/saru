let width;
let height;

const canvas = document.querySelector("canvas");
const pen = canvas.getContext("2d");

document.addEventListener('resize',resize);
resize();

function resize(){
 width = canvas.width = window.innerWidth;
 height = canvas.height = window.innerHeight;
}


let sparkleBalls = [];

class sparkBall{
 constructor(){
  this.createPosition();
 }
 
 createPosition(){
  this.x = width/2;
    this.y = height/2;
    this.vx = (Math.random() - 0.5) * 1; 
    this.vy = (Math.random() - 0.5) * 1;
    this.radius = Math.random() * 2 + 1;
    this.alpha = 0; 
    this.fadeSpeed = Math.random() * 0.02 + 0.005;
    this.isFadingOut = false;
 }
 
 moveBalls(){
      this.x += this.vx;
      this.y += this.vy;
    
    if (!this.isFadingOut) {
      this.alpha += this.fadeSpeed;
      //if (this.alpha >= 1) this.isFadingOut = true;
    } else {
      this.alpha -= this.fadeSpeed;
      if (this.alpha <= 0) {
        this.createPosition();
      }
    }
 }
 
 drawBalls(){
  pen.beginPath();
  pen.arc(this.x,this.y,this .radius,0,Math.PI*2);
  pen.fillStyle = `rgba(100,255,100,${this.alpha})`;
  pen.fill();
  pen.closePath();
 }
 
}

function makeBalls(){
 for(let i=0;i<=150;i++){
  sparkleBalls.push(new sparkBall());
 }
}
 
 function animate(){
  pen.clearRect(0,0,width,height);
  sparkleBalls.forEach(ball=>{
   ball.drawBalls();
   ball.moveBalls();
  });
  requestAnimationFrame(animate);
 }
 
 
export function initAnimation(){
  setInterval(()=>{
    makeBalls();
    animate();
  },8500);
   makeBalls();
   animate(); 
}


