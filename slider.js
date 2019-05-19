
var contentIndex = 0;




// funtion to load the data from data file
function showContent(value) {
    var selectedMood = "";
    switch(value){
        case "0":
            selectedMood="Agitated";
            break;
        case "2":
            selectedMood="Calm";
            break;
        case "3":
            selectedMood="Happy";
            break;
        case "5":
            selectedMood="Sad";
            break;
        case "6":
            selectedMood="Tired";
            break;
        case "8":
            selectedMood="Wide Awake";
            break;
        case "9":
            selectedMood="Scared";
            break;
        case "11":
            selectedMood="Fearless";
            break;
        default:
        selectedMood="";
        break;
    }
    
    var AgitationCalmRangeValue = document.getElementById("ac").value;
    var HappySadRangeValue = document.getElementById("hs").value;
    var TiresAwakeRangeValue = document.getElementById("tw").value;
    var ScaredFearlessRangeValue = document.getElementById("sf").value;
    var multiselect = false;
    if(AgitationCalmRangeValue==="1" && HappySadRangeValue==="4" 
            && TiresAwakeRangeValue==="7" && ScaredFearlessRangeValue==="10")
    {
        resetRecommendations();
    }
    else{
        var selectedMoodCounter=0;
    if(AgitationCalmRangeValue !== "1") {selectedMoodCounter+=1;}
    if(HappySadRangeValue !== "4") {selectedMoodCounter+=1;}
    if(TiresAwakeRangeValue !== "7") {selectedMoodCounter+=1;}
    if(ScaredFearlessRangeValue !== "10") {selectedMoodCounter+=1;}
    
    if(selectedMoodCounter>1) { multiselect=true;}
    }
    
    
   // alert("Values:-" + AgitationCalmRangeValue + "--" + HappySadRangeValue + "--" + TiresAwakeRangeValue + "--" +  ScaredFearlessRangeValue)
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            loadRecommendations(this, selectedMood,multiselect);        
        }
    };
    xhttp.open("GET", "ContentList.xml", true);
    xhttp.send();
}

function resetRecommendations()
{
    
    for(var i=1;i<6;i++)
    {
        var contentCard = "<img class='card-img-top' src='---' style=height:220px alt='No Content' "
        +    "onerror=\"this.style.display='none'\""                
             + "<div class='card-body'><p>"
             + "<h4 class='card-title' >No Content</h4></div>"      
             +   "<div class='card-footer'>No Content</div>";
    
            
            document.getElementById(i).innerHTML = contentCard;
    }

}

function loadRecommendations(data, selectedMood,multipleMoodsSelected) {
    
    var maxContentToShow=5;
    if(multipleMoodsSelected){
        maxContentToShow=3;
    }
    
    var xml = data.responseXML;
    //alert(data.responseXML);
    var programmeNode = xml.getElementsByTagName("programme");
    //var count = contentIndex;        
    var nextCardNumber = getNextBlankCardNumber();
    var contentcardsdisplayed=0;
    for (var i = 0; i < programmeNode.length; i++) {                
        if ((programmeNode[i].getElementsByTagName("mood")[0].childNodes[0].nodeValue === selectedMood) ) 
        {
            contentcardsdisplayed +=1;
             var contentCard = "<img class='card-img-top' style=height:220px src=" 
                     + programmeNode[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue + ">" 
                     + "<div class='card-body '> <p class='card-title'>" 
                     + programmeNode[i].getElementsByTagName("name")[0].childNodes[0].nodeValue 
                     + "</p></div>";          
            
            document.getElementById(nextCardNumber).innerHTML = contentCard;
            if(nextCardNumber<5)
            {
                nextCardNumber += 1;
            }
            else{ nextCardNumber = 1;}

        }
        if(contentcardsdisplayed===maxContentToShow){
            break;
        }
    }

}
function  getNextBlankCardNumber(){
    var titles = document.getElementsByClassName("card-title");
    if(titles.length<5) return 1;
    for(var i=0;i<5;i++){
        if(titles[i].innerHTML==="No Content"){
            return (i+1);
            break;
        }        
    }
    return 1;
    
}

