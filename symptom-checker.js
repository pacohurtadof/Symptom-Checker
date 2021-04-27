function buttonClickHandlerBodyPart(e) {
    //check for last active element and hide it
    if(document.getElementsByClassName("symptom-description"+' active-description')[0]){
      document.getElementsByClassName("symptom-description"+' active-description')[0].setAttribute("hidden","");
    }
    //new active element
    document.getElementsByClassName('icon-trigger-points')[0].removeAttribute("hidden");
    document.getElementsByClassName("active-condition")[0].classList.remove('active-condition');
    document.getElementsByClassName("list-of-symptoms "+e.id)[0].className+= ' active-condition';
    document.getElementsByClassName('active-bodyPart-button')[0].className="button";
    document.getElementById(e.id).className= ' active-bodyPart-button';
    //remove last active option in list of symptoms
    if(document.getElementsByClassName(" active-condition-li")[0]){
      document.getElementsByClassName(" active-condition-li")[0].classList.remove("active-condition-li");
    }
    //delete active class from last icon
    document.getElementsByClassName("active-icon")[0].classList.remove("active-icon");
     //set new active icon
    document.getElementsByClassName("bodyIcon "+ e.id)[0].classList.add("active-icon")
   
  }

  function iconClickHandler(e) {
    //match icon className with button id
    let iconString= e.target.className.replace("active-icon","").trim()
    var buttonToMatch= document.getElementById(iconString.slice(9,));
    buttonClickHandlerBodyPart(buttonToMatch);
  }

  function symptomClickHandler(e) {
    if(document.getElementsByClassName('symptom-description'+' active-description')[0]){ //remove active class from last active element
      var lastActive= document.getElementsByClassName("symptom-description"+' active-description')[0];
      lastActive.classList.remove('active-description');
      lastActive.setAttribute("hidden","");
    }

    //remove hidden attribute from symptom text box
    var string= e.target.className.replace("active-condition-li"," ");
    var newActive= document.getElementsByClassName('symptom-description '+string.slice(20,))[0]; //new active Symptom box
    newActive.className= newActive.className+ ' active-description';
    newActive.removeAttribute("hidden");  
    document.getElementsByClassName('icon-trigger-points')[0].setAttribute("hidden",""); //hide dot animation element

    //set active li element in list of symptoms to change color to blue
    if(document.getElementsByClassName(" active-condition-li")[0]){
      document.getElementsByClassName(" active-condition-li")[0].classList.remove("active-condition-li"); //remove last active
    }
    e.target.classList.add("active-condition-li"); //new active Symptom
  }

  function closeDescriptionHandler() {
    if(document.getElementsByClassName("symptom-description"+' active-description')[0]){
      var lastActive= document.getElementsByClassName("symptom-description"+' active-description')[0];
      lastActive.classList.remove('active-description');
      lastActive.setAttribute("hidden","");
    }
    document.getElementsByClassName('icon-trigger-points')[0].removeAttribute("hidden");
    //remove last active option in list of symptoms
    if(document.getElementsByClassName(" active-condition-li")[0]){
      document.getElementsByClassName(" active-condition-li")[0].classList.remove("active-condition-li");
    }
    
  }