let rowList = document.getElementsByClassName('background');
console.log('rowList', rowList);
let rowArray = Object.values(rowList);
console.log('rowArray', rowArray)

rowArray.map(row=>{
    console.log('row',row);
    for(let i = 0; i < 6; i++){
        row.innerHTML +=(` <div class="bug leaf">
        <img  src="arjuna page/Background/Bug_leaf.png" />
      </div>`)
    } 
})

    

