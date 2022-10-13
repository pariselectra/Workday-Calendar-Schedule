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

let container = $('#container')
let workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
let saveButton;

function showSchedule(){

    // sets pm and am
    for (let i = 0; i < workingHours.length; i++) {
        let row = $("<div class='row'>")
        let colHr = $("<div class='col-sm-3'>")
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


