var inputField = document.getElementById("handleInput")
var resultTitle = document.getElementById("resultTitle")
var result = document.getElementById("result")
console.log(result)
var result1 = document.getElementById("result1")
var result2 = document.getElementById("result2")
var result3 = document.getElementById("result3")
var bool = false

function onSubmit() {
    hideResult()
    var handle = inputField.value
    if (handle) {
        // do some process
        try{
            $.getJSON("https://api.github.com/users/"+handle, function(data){

            
                followers(data.followers, data.following)
            
            
                

                $.getJSON("https://api.github.com/users/"+handle+"/repos", function(reposData){

                
                
                repos(reposData.length)





                });
            
            });

            
            
        } catch(err){
            showResult(err)
        }
        
        
    } else {
        alert("Handle cannot be Empty!")
    }
    return false
}

async function repos(l){
var c = ""
if(l>50){
c+=l+" Repos. Do you even have a life?"
}
else if(l>35){
    c+=l+" Repos. Work more, your girlfriend will leave you soon."
}
else if(l>20){
    c+=l+" Repos. Hmm Not Bad."
}
else{
    c+=l+" Repos. Either you're new to Github or made Github to show off."
}

result1.style.visibility = "visible"
typewriter(c,result1)


}

async function followers(fol, fwg){
    var c = ""
    if(fol > 500){
        c=c+"Daamn, "+fol+" followers. "+"Must be famous eh? "
    }
    else if (fol > 100){
        c=c+fol+"Decent amount of followers, not bad. "
    }
    else{
        c=c+fol+" followers? "+"You don't have social life, atleast be active here. "
    }

    c= c+" Aand. "
    if(fol > fwg){
        c=c+"Commmon man, follow back people."
    }
    else if(fol == fwg){
        c=c+"Perfect ratio of followers and following eh? "
    }
    else{
        c=c+"Don't be that generous lol, unfollow people who don't follow you 🌚."
    }
    result.style.visibility = "visible"
    typewriter(c, result)
    
}

function hideResult() {
    resultTitle.style.visibility = "hidden"
    result.style.visibility = "hidden"
    result1.style.visibility = "hidden"
    result2.style.visibility = "hidden"
    result3.style.visibility = "hidden"
    
}

var speed = 100
function typewriter(char, ele){
    
    if(ele.innerHTML.length<char.length){
        ele.innerHTML += char[ele.innerHTML.length]
        setTimeout(typewriter,speed, char, ele)

    } else {
        bool = true
        console.log(12345)
    }

}






