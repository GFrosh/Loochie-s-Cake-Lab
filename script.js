var bDay = document.getElementById("b-day");
var marr = document.getElementById("marr");
var wedAnni = document.getElementById("wed-anni");
var others = document.getElementById('others');
var txt = document.getElementById('event');
var dimen = document.getElementById("dimen");
var button1 = document.getElementById('STF1');
var button2 = document.getElementById('STF2');
var button3 = document.getElementById('submitAll');
var addr = document.getElementById('address');
var textArea1 = document.getElementById('textField1');
var textArea2 = document.getElementById('textField2');
var select1 = document.getElementById('selectFlavors');
const option0 = document.getElementById('selected');


var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById('li4');
var li5 = document.getElementById('li5');
var li6 = document.getElementById('li6');
var li7 = document.getElementById('li7');
var li8 = document.getElementById("li8");


function liFun1() {
    dimen.innerHTML = li1.innerHTML;
}

function liFun2() {
    dimen.innerHTML = li2.innerHTML;
}

function liFun3() {
    dimen.innerHTML = li3.innerHTML;
}

function liFun4() {
    dimen.innerHTML = li4.innerHTML;
}

function liFun5() {
    dimen.innerHTML = li5.innerHTML;
}

function liFun6() {
    dimen.innerHTML = li6.innerHTML;
}

function liFun7() {
    dimen.innerHTML = li7.innerHTML;
}

function liFun8() {
    dimen.innerHTML = li8.innerHTML;
}


//-------------------------


function eventChooseBday() {
    txt.innerHTML = bDay.innerHTML;
}

function eventChooseMarr() {
    txt.innerHTML = marr.innerHTML;
}

function eventChooseWedanni() {
    txt.innerHTML = wedAnni.innerHTML;
}

function eventChooseOthers() {
    txt.innerHTML = others.innerHTML;
}


//-------------------------


function unselect() {
    option0.removeAttribute("selected")
}

function getOption() {
    var selectedOptions1 = [];
    
    for (var i = 0; i < select1.options.length; i++) {
        if (select1.options[i].selected) {
            selectedOptions1.push(select1.options[i].value);
        }
    }
    
    
    if (selectedOptions1.length >= 1) {
        console.log(selectedOptions1);
    }
}

function getRequest() {
    event.preventDefault();
    
    var request = textArea1.value;
    console.log(request);
    
    textArea1.value = null;
    textArea1.placeholder = "Okay! We'll see to it.";
}

function unhide() {
    let toUnhide = document.getElementById('hide');
    toUnhide.style.visibility = "visible";
}

function getRequest2() {
    var address = addr.value;
    var request2 = textArea2.value;
    console.log(address);
    console.log(request2);
    
    addr.value = null;
    
    textArea2.value = null;
    textArea2.placeholder = "Thanks a lot!";
    
    unhide();
    event.preventDefault();
}

function submitAll() {
    if (required) {
        // empty spaces present
    }
    else {
    const form = document.querySelector("form");
    setTimeout(function() {
        form.addEventListener("submit", alert("Your order is being processed..."));
    }, 800);
    }
}

bDay.onclick = eventChooseBday;
marr.onclick = eventChooseMarr;
wedAnni.onclick = eventChooseWedanni;
others.onclick = eventChooseOthers;

li1.onclick = liFun1;
li2.onclick = liFun2;
li3.onclick = liFun3;
li4.onclick = liFun4;
li5.onclick = liFun5;
li6.onclick = liFun6;
li7.onclick = liFun7;
li8.onclick = liFun8;

select1.onclick = unselect;

select1.onchange = getOption;

button1.onclick = getRequest;

button2.onclick = getRequest2;

button3.onclick = submitAll;