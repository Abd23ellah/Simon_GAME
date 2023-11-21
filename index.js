var cnt=700;
var level = 1;
var arrayClick=[];
var arrayRandom=[];
var colors =["green","yellow","red","blue"]
var clickOkay = false;
var refreshON=true;

// starting on pressing any key 
$(document).keydown(function(){
    if(refreshON){
        $("h1").text("level "+level+" ! ")
        randomClickes(cnt)
    }

})

// make sound and animation on click 
$(".btn").click(function(event){
    if(clickOkay){
        var colorClicked=event.currentTarget.id;
        var aduio = new Audio("sounds/"+colorClicked+".mp3");
             aduio.play();
               $("#"+colorClicked+"").addClass("pressed");
                 setTimeout(() => {
                     $("#"+colorClicked+"").removeClass("pressed");
                 }, 100);

            arrayClick.push(colorClicked)

            ckeckIfOK(colorClicked)

        }
            
})

//generate random clickes on screen 
function randomClickes(counter)
{   arrayRandom=[];
    arrayClick=[];
    clickOkay=false ;
    for(var i=700;i<=counter;i+=700)
    {
        setTimeout(() => {
            
            var randomClicke= Math.floor(Math.random()*4);
            var colorClicked=colors[randomClicke];
            var aduio = new Audio("sounds/"+colorClicked+".mp3");
                aduio.play();
                 $("#"+colorClicked+"").addClass("pressed");
                 setTimeout(() => {
                       $("#"+colorClicked+"").removeClass("pressed");
                 }, 100);


               arrayRandom.push(colorClicked)

        }, i);
    
            } 
            
            setTimeout(() => {
                clickOkay=true;   
          }, cnt);
                  

}


// check if the player playing the right order 
function ckeckIfOK (colorClicked) { 

    if(colorClicked!==arrayRandom[arrayClick.length-1])
        {
            var aduio = new Audio("sounds/wrong.mp3");
                aduio.play();
                    $("body").css("background-color","red");
                    $("h1").text("wrong pls refresh :( ")
                    clickOkay=false ;
                    refreshON=false ;
                    arrayRandom.push(11);

        }
        if(arrayRandom.length===arrayClick.length)
          {
            cnt+=700;
            level++;
            $("h1").text("level "+level+" ! ")
            randomClickes(cnt);
          }
 }