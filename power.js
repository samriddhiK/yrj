function take_snapshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
   });
}

console.log('ml5 version;', ml5.version);

classifier = ml5.imageclassifier()