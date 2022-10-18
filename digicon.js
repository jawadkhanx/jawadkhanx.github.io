document.addEventListener('keyup', (event) => {
    var name = event.key;
  
    
    // Alert the alkey name and key code on keydown
    if(name==1){
        var greeting = document.getElementById("greeting");
          greeting.play();
    }
          if(name==2){
              var pitch = document.getElementById("pitch");
                pitch.play();
          }
          if(name==3){
            var dob = document.getElementById("dob");
              dob.play();
        }
        if(name==4){
            var medicareab = document.getElementById("medicareab");
              medicareab.play();
        }
        if(name=='Enter'){
            var transfer =document.getElementById('transfer');
    transfer.play();
        }
        if(name=='g'){
            var bye =document.getElementById('bye');
            bye.play();
        }
        if(name=='q'){
            var notinterested =document.getElementById('notinterested');
    notinterested.play();
        }
        if(name=='w'){
            var busy =document.getElementById('busy');
            busy.play();
        }
        if(name=='e'){
            var haveplan =document.getElementById('haveplan');
            haveplan.play();
        }
        if(name=='r'){
            var real =document.getElementById('real');
    real.play();
        }
        if(name=='t'){
            var there =document.getElementById('there');
    there.play();
        }
        if(name=='y'){
            var yes =document.getElementById('yes');
            yes.play();
        }
        if(name=='u'){
            var no =document.getElementById('no');
            no.play();
        }
        if(name=='o'){
            var ok =document.getElementById('ok');
            ok.play();
        }

          else if(name== 'Control'){
              var greeting = document.getElementById("greeting");
              var pitch = document.getElementById("pitch");
              var dob =document.getElementById('dob');
              var medicareab =document.getElementById('medicareab');
              var transfer = document.getElementById("transfer");
              var bye = document.getElementById("bye");
              var notinterested =document.getElementById('notinterested');
              var busy =document.getElementById('busy');
              var real = document.getElementById("real");
              var there = document.getElementById("there");
              var yes =document.getElementById('yes');
              var no =document.getElementById('no');
              var haveplan =document.getElementById('haveplan');
              var ok =document.getElementById('ok');
             
              greeting.pause();
              greeting.currentTime = 0;
              pitch.pause();
              pitch.currentTime = 0;
              dob.pause();
              dob.currentTime = 0;
              medicareab.pause();
              medicareab.currentTime = 0;
              transfer.pause();
              transfer.currentTime = 0;
              bye.pause();
              bye.currentTime = 0;
              notinterested.pause();
              notinterested.currentTime = 0;
              yes.pause();
              yes.currentTime = 0;
              no.pause();
              no.currentTime = 0;
              there.pause();
              there.currentTime = 0;
              ok.pause();
              ok.currentTime = 0;
              real.pause();
              real.currentTime = 0;
              haveplan.pause();
              haveplan.currentTime = 0;
              busy.pause();
              busy.currentTime = 0;
              
            
            
            
           
            
           
          }
 }, false);
function stop(){
    var greeting = document.getElementById("greeting");
    var pitch = document.getElementById("pitch");
    var dob =document.getElementById('dob');
    var medicareab =document.getElementById('medicareab');
    var transfer = document.getElementById("transfer");
    var bye = document.getElementById("bye");
    var notinterested =document.getElementById('notinterested');
    var busy =document.getElementById('busy');
    var real = document.getElementById("real");
    var there = document.getElementById("there");
    var yes =document.getElementById('yes');
    var no =document.getElementById('no');
    var haveplan =document.getElementById('haveplan');
    var ok =document.getElementById('ok');
   
    greeting.pause();
    greeting.currentTime = 0;
    pitch.pause();
    pitch.currentTime = 0;
    dob.pause();
    dob.currentTime = 0;
    medicareab.pause();
    medicareab.currentTime = 0;
    transfer.pause();
    transfer.currentTime = 0;
    bye.pause();
    bye.currentTime = 0;
    notinterested.pause();
    notinterested.currentTime = 0;
    yes.pause();
    yes.currentTime = 0;
    no.pause();
    no.currentTime = 0;
    there.pause();
    there.currentTime = 0;
    ok.pause();
    ok.currentTime = 0;
    real.pause();
    real.currentTime = 0;
    haveplan.pause();
    haveplan.currentTime = 0;
    busy.pause();
    busy.currentTime = 0;
    
  
}
  function greeting(){
    var greeting =document.getElementById('greeting');
    greeting.play();
   }
   function pitch(){
    var pitch =document.getElementById('pitch');
    pitch.play();
   }
   function dob(){
    var dob =document.getElementById('dob');
    dob.play();
   }
   function medicareab(){
    var medicareab=document.getElementById('medicareab');
    medicareab.play();
   }
   function transfer(){
    var transfer =document.getElementById('transfer');
    transfer.play();
   }
   function bye(){
    var bye =document.getElementById('bye');
    bye.play();
   }
   function notinterested(){
    var notinterested =document.getElementById('notinterested');
    notinterested.play();
   }
   function busy(){
    var busy =document.getElementById('busy');
    busy.play();
   }
   function haveplan(){
    var haveplan =document.getElementById('haveplan');
    haveplan.play();
   }
   function real(){
    var real =document.getElementById('real');
    real.play();
   }
   function there(){
    var there =document.getElementById('there');
    there.play();
   }
   function yes(){
    var yes =document.getElementById('yes');
    yes.play();
   }
   function no(){
    var no =document.getElementById('no');
    no.play();
   }
   function ok(){
    var ok=document.getElementById('ok');
    ok.play();
   }
