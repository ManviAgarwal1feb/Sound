function sound_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/DtjebKsKw/model.json",modleready);
}

function modleready(){
    classifier.classify(gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
        document.getElementById("accuracy_result").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";

        img=document.getElementById("alien_1");
        if(results[0].label=="barking"){
img.src="dog.png";
        }

       else if(results[0].label=="meow"){
            img.src="cat.png";
                    }

                    else if(results[0].label=="roaring"){
                        img.src="lion.png";
                                }

                               else if(results[0].label=="chirping"){
                                    img.src="bird.png";
                                            }

                                            else{
                                                img.src="bn.png";
                                            }

    }
}