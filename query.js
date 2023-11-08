//QuerySelector
var item = document.querySelector('.list-group-item');
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.innerHTML = ' ';

//QuerySelectorAll
var listItems = document.querySelectorAll("#items li");
if (listItems.length >= 2) 
{
    listItems[1].style.color = 'red';
}

var odd= document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
}