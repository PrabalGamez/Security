function preload(){

}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TBd_C1grC/model.json", ModelLoaded);
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, GotResult);
}

function ModelLoaded(){
    console.log("Model Loaded!")
}

function GotResult(error, result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("NAME").innerHTML=result[0].label;
        document.getElementById("ACCU").innerHTML=floor(result[0].confidence*100)+"%";
    }
}