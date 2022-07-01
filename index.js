let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let ampm = document.querySelector('#ampm');

setInterval(() => {
    
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotate(${hh+(mm/12)}deg)`;
mn.style.transform = `rotate(${mm}deg)`;
sc.style.transform = `rotate(${ss}deg)`;

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h > 12 ? 'PM' : 'AM';

//* making 24 hr clock a 12 hr clock:

if(h > 12) {
    h-=12;
}

hours.innerHTML = String(h).padStart(2, 0);
minutes.innerHTML = String(m).padStart(2, 0);
seconds.innerHTML = String(s).padStart(2, 0);
ampm.innerHTML = am;
}, 1000);