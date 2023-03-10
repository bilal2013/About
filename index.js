document;

function input1(){
    let name1 =prompt("Enter your name")
    let n1 =document.querySelector(".p1")
    n1.innerHTML= name1

    

}
function input2(){
    let name2 =prompt("Enter your height")
    let n2 =document.querySelector(".p2")
    n2.innerHTML="height: "+name2+"CM"

    

}

function input3(){
    let name3 =prompt("Enter your weight")
    let n3 =document.querySelector(".p3")
    n3.innerHTML="weight: "+name3+"KG"

    

}

function input4(){
    let name4 =prompt("Enter your location")
    let n4 =document.querySelector(".p4")
    n4.innerHTML="location: "+name4

    

}
function input5(){
    let name5 =prompt("Enter your quote")
    let n5 =document.querySelector(".p5")
    n5.innerHTML=name5

    

}
input1()
input2()
input3()
input4()
input5()
