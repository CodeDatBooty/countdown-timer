    /*ANYADIKE KAREEN CHINONYE     100 LEVEL S.E GROUP A     158229*/
    const countdown = () => {
    const  countdate = new Date('March 15, 2024 11:30:00').getTime();
    const CurrentTime= new Date();   

    const Timer = document.querySelector(".Timer");  
    const Difference= countdate - CurrentTime;

    Timer.textContent = 'Giveaway Ends On Friday, 15 March 2024 At 11:30 AM';
    //Set up the time
    const Second = 1000;
    const Minute = Second * 60;
    const Hour = Minute* 60;
    const Day = Hour * 24;
    //Calculate the time difference
    const Textday= Math.floor(Difference/Day);
    const Texthour = Math.floor((Difference % Day)/Hour);
    const Textminute = Math.floor((Difference % Hour)/Minute);
    const Textsecond = Math.floor((Difference % Minute )/Second);     
    //Update the html document
    if(Textday < 10){
        document.querySelector("#DAYS").innerText ="0" + Textday;
    }else{
        document.querySelector("#DAYS").innerText = Textday;
    }
    if(Texthour < 10){
        document.querySelector("#HOURS").innerText ="0" + Texthour;
    }else{
        document.querySelector("#HOURS").innerText = Texthour;
    }
    if(Textminute < 10){
        document.querySelector("#MINS").innerText ="0" + Textminute;
    }else{
        document.querySelector("#MINS").innerText = Textminute;
    }
    if(Textsecond < 10){
        document.querySelector("#SECS").innerText ="0" + Textsecond;
    }else{
        document.querySelector("#SECS").innerText = Textsecond;
    }
    if(Difference < 0){
           
            clearInterval(countdown);
            document.getElementById("counter").innerHTML= " ";
            document.getElementById('Expired').innerHTML = "This giveaway has expired";
         
            document.body.style.fontStyle = "italic";
            document.body.style.color = "red";     
    }

};
    setInterval(countdown, 1000);
 
    

       
           
       
    