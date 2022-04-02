var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    console.log(content)
    if (content=="take my selfie.") {
        speak()
        console.log("taking your selfie")
    }
   
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
function speak(){
    var synth=window.speechSynthesis
    speakData="Taking your selfie in 5 seconds"
    var utterThis=new SpeechSynthesisUtterance(speakData)
    synth.speak(utterThis)
    Webcam.attach(camera)
  setTimeout(function()  {
      takeSnapshot()
      Save()
  }, 5000); 
}
function takeSnapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='selfie' src="+data_url+">"
    })
}
function Save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src
    link.href=img
    link.click()
}
