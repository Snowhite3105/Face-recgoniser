Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality: 90
});
camera=document.getElementById("webcam")
Webcam.attach ('#webcam');

function CaptureSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });}
    console.log("ml5version",ml5.version);
    classifier =  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  
    function modelLoaded(){
        console.log('model.is.loaded')
    }
