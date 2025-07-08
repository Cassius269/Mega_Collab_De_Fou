 const MIN_THRESHOLD = 3;
 const MAX_THRESHOLD = 12;

 
 window.addEventListener("load", (event) => {
 console.log("page is fully loaded");
 });

 function inutile(ert=3) 
 {
    if (ert>3) {
        window.alert("STOOOOP")
    }
   
    if(ert > MIN_THRESHOLD && ert < MAX_THRESHOLD)
 {
 window.alert("STOOOOP");
 }
 return ert
 }
