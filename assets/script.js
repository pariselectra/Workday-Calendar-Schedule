// var nineAmUserInput = document.getElementById("nineAmForm");
// var nineAmButton = document.getElementById("nineAmButton");

// nineAmButton.addEventListener("click",nineAmSubmit());

// function nineAmSubmit() {
//     console.log(nineAmUserInput.value);
// }


// var nineAmEntry = document.getElementById("nineAmEntry");
// var saveBtn = document.querySelector("#saveBtn");
// var firstSlot = document.getElementById("firstSlot");
// var nineAmArray = []
// const container = $('#container')
// localStorage.getItem("test");

// saveBtn.addEventListener("click",entryOne);

// function entryOne() {
//     console.log(nineAmEntry.value);
//     firstSlot.append(nineAmEntry.value);
//     localStorage.setItem("test",nineAmEntry.value);
// }
// localStorage.getItem("text");

var today = new Date();
var time = today.getHours();

let container = $('#container')
let workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
let saveButton;



function showSchedule(){

    // sets pm and am
    // use current time. add in 
// put data attribute that equals the hour. working hours[i]
// addClass.

    for (let i = 0; i < workingHours.length; i++) {
        let row = $("<div class='row'>");
        row.attr('id', 'rows'+i)
            let rows0 = document.getElementById('rows0');
            let rows1 = document.getElementById('rows1');
            let rows2 = document.getElementById('rows2');
            let rows3 = document.getElementById('rows3');
            let rows4 = document.getElementById('rows4');
            let rows5 = document.getElementById('rows5');
            let rows6 = document.getElementById('rows6');
            let rows7 = document.getElementById('rows7');
            let rows8 = document.getElementById('rows8');
        let colHr = $("<div class='col-sm-3'>");
        let businessHrs = workingHours[i] + ' a.m.';

        if(workingHours[i] >= 12){
            businessHrs = workingHours[i] + ' p.m.'; 
            
            if(workingHours[i] >= 13 ){
                businessHrs = workingHours[i] - 12 + ' p.m.';
            }
    

        }


    
       
        colHr.append(businessHrs);

        // creating text area and appending to 2nd column
        let colText = $("<div class='col-sm-6'>")
        let textArea = $("<textarea>")
        textArea.attr('id', 'textarea'+i)
        textArea.addClass('form-control')
        
        var getText = localStorage.getItem("text"+i) || "";
        textArea.text(getText);
        colText.append(textArea)
        
        // create save button and append on 3rd column
        let colSave = $("<div class='col-sm-3'>")
        saveButton = $('<button>')
        saveButton.addClass('saveBtn')
        saveButton.attr('id', 'save'+i)
        // saveButton.attr('onclick', 'save()')
        saveButton.text("Save")


        saveButton.on('click',() => {
            for (let i = 0; i<workingHours.length; i++) {
                let getText = $("#textarea" + i).val();
                console.log(getText);
                localStorage.setItem("text"+i, getText);
                console.log(getText);
            }
        })

        colSave.append(saveButton)
       

        row.append(colHr, colText, colSave);
        container.append(row)
        
    }   
    
       
}
showSchedule()


console.log('save button', saveButton)

 // if(workingHours[8]<time) {
        //     row.addClass('past');
        // }
 // let rows0 = document.getElementById("rows0");
    //     document.getElementById("rows0").style.backgroundColor = 'green';
    // }

    console.log(time);

if(time=0){
rows0.style.backgroundColor = "#77dd77";
rows1.style.backgroundColor = "#77dd77";
rows2.style.backgroundColor = "#77dd77";
rows3.style.backgroundColor = "#77dd77";
rows4.style.backgroundColor = "#77dd77";
rows5.style.backgroundColor = "#77dd77";
rows6.style.backgroundColor = "#77dd77";
rows7.style.backgroundColor = "#77dd77";
rows8.style.backgroundColor = "#77dd77";
}
else if(time=1){
    rows0.style.backgroundColor = "#77dd77";
    rows1.style.backgroundColor = "#77dd77";
    rows2.style.backgroundColor = "#77dd77";
    rows3.style.backgroundColor = "#77dd77";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time=2){
rows0.style.backgroundColor = "#77dd77";
rows1.style.backgroundColor = "#77dd77";
rows2.style.backgroundColor = "#77dd77";
rows3.style.backgroundColor = "#77dd77";
rows4.style.backgroundColor = "#77dd77";
rows5.style.backgroundColor = "#77dd77";
rows6.style.backgroundColor = "#77dd77";
rows7.style.backgroundColor = "#77dd77";
rows8.style.backgroundColor = "#77dd77";
}
else if(time=3){
    rows0.style.backgroundColor = "#77dd77";
    rows1.style.backgroundColor = "#77dd77";
    rows2.style.backgroundColor = "#77dd77";
    rows3.style.backgroundColor = "#77dd77";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time=4){
rows0.style.backgroundColor = "#77dd77";
rows1.style.backgroundColor = "#77dd77";
rows2.style.backgroundColor = "#77dd77";
rows3.style.backgroundColor = "#77dd77";
rows4.style.backgroundColor = "#77dd77";
rows5.style.backgroundColor = "#77dd77";
rows6.style.backgroundColor = "#77dd77";
rows7.style.backgroundColor = "#77dd77";
rows8.style.backgroundColor = "#77dd77";
}
else if(time=5){
    rows0.style.backgroundColor = "#77dd77";
    rows1.style.backgroundColor = "#77dd77";
    rows2.style.backgroundColor = "#77dd77";
    rows3.style.backgroundColor = "#77dd77";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time=6){
rows0.style.backgroundColor = "#77dd77";
rows1.style.backgroundColor = "#77dd77";
rows2.style.backgroundColor = "#77dd77";
rows3.style.backgroundColor = "#77dd77";
rows4.style.backgroundColor = "#77dd77";
rows5.style.backgroundColor = "#77dd77";
rows6.style.backgroundColor = "#77dd77";
rows7.style.backgroundColor = "#77dd77";
rows8.style.backgroundColor = "#77dd77";
}
else if(time=7){
    rows0.style.backgroundColor = "#77dd77";
    rows1.style.backgroundColor = "#77dd77";
    rows2.style.backgroundColor = "#77dd77";
    rows3.style.backgroundColor = "#77dd77";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time=8){
rows0.style.backgroundColor = "#77dd77";
rows1.style.backgroundColor = "#77dd77";
rows2.style.backgroundColor = "#77dd77";
rows3.style.backgroundColor = "#77dd77";
rows4.style.backgroundColor = "#77dd77";
rows5.style.backgroundColor = "#77dd77";
rows6.style.backgroundColor = "#77dd77";
rows7.style.backgroundColor = "#77dd77";
rows8.style.backgroundColor = "#77dd77";
}
else if(time = 9){
    rows0.style.backgroundColor = "#ff6961";
    rows1.style.backgroundColor = "#77dd77";
    rows2.style.backgroundColor = "#77dd77";
    rows3.style.backgroundColor = "#77dd77";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }

else if(time = 10){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#ff6961";;
    rows2.style.backgroundColor = "#77dd77";
    rows3.style.backgroundColor = "#77dd77";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time = 11){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#ff6961";;
    rows2.style.backgroundColor = "#77dd77";
    rows3.style.backgroundColor = "#77dd77";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time = 12){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#d3d3d3";;
    rows2.style.backgroundColor = "#ff6961";
    rows3.style.backgroundColor = "#77dd77";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time = 13){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#d3d3d3";;
    rows2.style.backgroundColor = "#d3d3d3";
    rows3.style.backgroundColor = "#ff6961";
    rows4.style.backgroundColor = "#77dd77";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time = 14){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#d3d3d3";;
    rows2.style.backgroundColor = "#d3d3d3";
    rows3.style.backgroundColor = "#d3d3d3";
    rows4.style.backgroundColor = "#ff6961";
    rows5.style.backgroundColor = "#77dd77";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time = 15){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#d3d3d3";;
    rows2.style.backgroundColor = "#d3d3d3";
    rows3.style.backgroundColor = "#d3d3d3";
    rows4.style.backgroundColor = "#d3d3d3";
    rows5.style.backgroundColor = "#ff6961";
    rows6.style.backgroundColor = "#77dd77";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time = 16){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#d3d3d3";;
    rows2.style.backgroundColor = "#d3d3d3";
    rows3.style.backgroundColor = "#d3d3d3";
    rows4.style.backgroundColor = "#d3d3d3";
    rows5.style.backgroundColor = "#d3d3d3";
    rows6.style.backgroundColor = "#ff6961";
    rows7.style.backgroundColor = "#77dd77";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time = 17){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#d3d3d3";;
    rows2.style.backgroundColor = "#d3d3d3";
    rows3.style.backgroundColor = "#d3d3d3";
    rows4.style.backgroundColor = "#d3d3d3";
    rows5.style.backgroundColor = "#d3d3d3";
    rows6.style.backgroundColor = "#d3d3d3";
    rows7.style.backgroundColor = "#ff6961";
    rows8.style.backgroundColor = "#77dd77";
    }
else if(time = 18){
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#d3d3d3";;
    rows2.style.backgroundColor = "#d3d3d3";
    rows3.style.backgroundColor = "#d3d3d3";
    rows4.style.backgroundColor = "#d3d3d3";
    rows5.style.backgroundColor = "#d3d3d3";
    rows6.style.backgroundColor = "#d3d3d3";
    rows7.style.backgroundColor = "#d3d3d3";
    rows8.style.backgroundColor = "#ff6961";
    }
else{
    rows0.style.backgroundColor = "d3d3d3";
    rows1.style.backgroundColor = "#d3d3d3";;
    rows2.style.backgroundColor = "#d3d3d3";
    rows3.style.backgroundColor = "#d3d3d3";
    rows4.style.backgroundColor = "#d3d3d3";
    rows5.style.backgroundColor = "#d3d3d3";
    rows6.style.backgroundColor = "#d3d3d3";
    rows7.style.backgroundColor = "#d3d3d3";
    rows8.style.backgroundColor = "#d3d3d3";
    }
