https://teachablemachine.withgoogle.com/models/VnCA-6iek/
Webcam.set({
    width: 350,
    height:300,
    image_formage:'png',
    png_quality:90
    });
    
    camera= document.getElementById("camera");
    Webcam.attach('#camera');
    
    
    function takeSnapshot(){
    Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    
    
    
    })
    
    
    
    }
    console.log('versão ml5:',ml5.version);
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VnCA-6iek/',modelLoaded);
    
    function modelLoaded(){
    console.log("modelo carregando !");
    
    }
    
    function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
    }
    
    function gotResult(error, result){
    if(error){
        console.log(error)
    }
    else{
    console.log(result)
    document.getElementById('resultObjectName').innerHTML=result[0].label;
    document.getElementById('resultObjectAccuracy').innerHTML=result[0].confidence.toFixed(3);
    }
    }