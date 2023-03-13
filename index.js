const names =["Guadalupe", "Ollie", "Aki"];
const messages =[]
function writeCards(names, eventNames){
for (let i =0; i< names.length; i++)
{let message = `Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`;}
return messages;
}

function countDown(number){
  while (number >= 0){
    conesole.log(number); 
    number --;
  }}