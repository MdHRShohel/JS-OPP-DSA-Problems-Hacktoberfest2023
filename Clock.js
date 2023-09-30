let hr = document.getElementById("hr"); 
 let mn = document.getElementById("mn"); 
 let sc = document.getElementById("sc"); 
  
 setInterval(() => { 
   let day = new Date(); 
   let hh = day.getHours() * 30; 
   let mm = day.getMinutes() * 6; 
   let ss = day.getSeconds() * 6; 
   hr.style.transform = `rotateZ(${hh + mm / 12}deg)`; 
   mn.style.transform = `rotateZ(${mm}deg)`; 
   sc.style.transform = `rotateZ(${ss}deg)`; 
  
   //  digital clock 
  
   let hours = document.getElementById("hour"); 
   let minutes = document.getElementById("minutes"); 
   let seconds = document.getElementById("seconds"); 
   let ampm = document.getElementById("ampm"); 
  
   let h = new Date().getHours(); 
   let m = new Date().getMinutes(); 
   let s = new Date().getSeconds(); 
   let AmPm = h >= 12 ? "PM" : "AM"; 
   //    conver 24hr clock into 12hr clolck 
  
   if (h == 00) { 
     h = 12; 
   } 
   if (h > 12) { 
     h = h - 12; 
   } 
   //    add zero before signle digite number 
   if (h < 10) { 
     h = "0" + h; 
   } 
   if (m < 10) { 
     m = "0" + m; 
   } 
   if (s < 10) { 
     s = "0" + s; 
   } 
   hours.innerHTML = h; 
   minutes.innerHTML = m; 
   seconds.innerHTML = s; 
   ampm.innerHTML = AmPm; 
 });
