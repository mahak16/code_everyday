const accordian = document.getElementsByClassName('content-container');
for(i = 0; i<accordian.length;i++){
    accordian[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}

//classList.toggle basically toggle between adding class and removing class
//with the help of loop we can add event listener to allof our content- conatinr, tht is3 question nd ans
//call the function(i.e, accordian) then add a toggle method