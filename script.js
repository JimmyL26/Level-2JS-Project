var randomArr = []
var select = 0;
var foundArr = []

function initialize() {
    img1 = document.getElementById("image1");
    img2 = document.getElementById("image2");
    img3 = document.getElementById("image3");
    img4 = document.getElementById("image4");
    img5 = document.getElementById("image5");
    img6 = document.getElementById("image6");
    img7 = document.getElementById("image7");
    img8 = document.getElementById("image8");
    img9 = document.getElementById("image9");
    img10 = document.getElementById("image10");
    img11 = document.getElementById("image11");
    img12 = document.getElementById("image12");
    img13 = document.getElementById("image13");
    img14 = document.getElementById("image14");
    img15 = document.getElementById("image15");
    img16 = document.getElementById("image16");
    imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]
    console.log(randomArr);
    shuffle();
}

function selectCard(num) {
    index = num - 1;
    if (select == 0) {
        select = index;
        imgArr[index].src = "images/picture" + randomArr[index] + ".PNG";
        imgArr[index].removeAttribute("onclick");
    }
    else {
        if (randomArr[index] == randomArr[select]) {
            imgArr[index].src = "images/picture" + randomArr[index] + ".PNG";
            imgArr[index].removeAttribute("onclick");
            imgArr[select].removeAttribute("onclick");
            foundArr.push(select);
            foundArr.push(index);
        }
        else {
            imgArr[index].src = "images/picture" + randomArr[index] + ".PNG";;
            imgArr[index].removeAttribute("onclick");
            
            setTimeout(() => {
                imgArr[select].src="images/picture0.PNG";
                imgArr[index].src="images/picture0.PNG";
                console.log(select);
                let value = "selectCard(" + (select + 1) + ");";
                imgArr[select].setAttribute("onclick", value);
                value = "selectCard(" + (index + 1) + ");";
                imgArr[index].setAttribute("onclick", value);
            }, 1000 );
        }
    }
    select = 0;
}

function shuffle() {
    while (randomArr.length < 16) {
        count = 0;
        num = Math.floor(Math.random() * 8) + 1;
        for (let i = 0; i < randomArr.length; i++) {
            if (randomArr[i] == num) {
                count++;
            }
        }
        if (count < 2) {
            randomArr.push(num);
        }
    }
}