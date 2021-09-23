function Startclassification(){
    navigator.mediaDevices.getUserMedia({audio : true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/SnJsVAQ9g/model.json" , Modelloaded)
}

function Modelloaded(){
    classifier.classify(Got_result)
}

function Got_result(error , results){
    if (error) {
      console.error(error);  
    }
    else {
       console.log(results)
       random_r = Math.floor(Math.random()*256)
       random_g = Math.floor(Math.random()*256)
       random_b = Math.floor(Math.random()*256)

       Dogs = "0"
       Cats = "0"
       Cows = "0"
       Lions = "0"

       if (results[0].label == "Background Noise") {
        document.getElementById("Img1").src = "Dog.png"
        document.getElementById("Dogs").innerHTML = Dogs = Dogs + 1
       }
       else if (results[0].label == "Cats") {
        document.getElementById("Img1").src ="Cat2.png"
        document.getElementById("Cats").innerHTML = Cats + Cats + 1
       }
        else if (results[0].label == "Cows") {
        document.getElementById("Img1").src = "Cow.png"
        document.getElementById("Cow").innerHTML = Cows = Cows + 1
    } 
         else if (results[0].label == "Lion"){
        document.getElementById("Img1").src = "lion.png"
        document.getElementById("Lion").innerHTML = Lions = Lions + 1
    }
    }
}