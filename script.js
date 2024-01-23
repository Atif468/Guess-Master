let random = parseInt(Math.random()*100+1);

document.querySelector('button').addEventListener('click',guess);
let data = document.querySelector('.win');
console.log(random);
let count = 10; 
function guess()
{
    let number = parseInt(document.querySelector('.inp').value);
    document.querySelector('.inp').value = '';
    
    
    count--;
    let ch = document.querySelector('.gr');
    ch.innerHTML = count; 

    validateGuess(number);
    guessnumber(number);

}

let pg = [];
let chance = 1;


function guessnumber(number)
{
    if( number === random )
    {
        
        data.innerHTML = `Congratulations, You win the game in ${chance} attempt`;
    }
    else
    {
        pg.push(number);
        document.querySelector('.pg').innerHTML = `${pg }`;

        loworhigh(number);
    }
    chance++;
    if( chance === 11 )
    {
        data.innerHTML = `Game Over. Random number was ${random}, please refresh the page to be continue`;
        document.querySelector('.inp').removeAttribute('disabled');
    }
}

//for check the validity of number.
function validateGuess(number)
{
    if(isNaN(number))
    {
        alert("Please enter valid number");
    }
    else if( number < 1 )
    {
        alert("Please enter the number greater then 1");
    }
    else if( number > 100 )
    {
        alert("Please enter the number less then 100");
    }
}

//to check number is > or <.
function loworhigh(number)
{
    if( number < random )
    {
        data.innerHTML = `${number} is less than random number`;
    }
    else
    {
        data.innerHTML = `${number} is greater than random number`;
    }
}