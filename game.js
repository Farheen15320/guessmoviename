const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');

score = 0;
let play = false;
let newMovie = "";
let scrambleMovie = "";

let mNames = ['joker', 'suryavansham', 'coolie', 'hero', 'wanted', 'ready', 'dabangg', 'singham', 'golmaal', 'bhool bhulaiya', 'holiday', 'bell bottom', 'jab we met', 'naam shabana','shershaah', '3idiots', 'dangal', 'race','dhoom', 'rayees', 'ek villan', 'robot', 'main hoon na', 'padmavat', 'ashiqui2', 'mughal-e-Azam', 'suryavanshi', 'kedarnath', 'chichoore', 'shudh desi romance'];

const createNewWords = () => {
    let randomMovieName = Math.floor(Math.random() * mNames.length);
    
    let newMNames = mNames[randomMovieName];
    // console.log(newMNames.split(""));
    return newMNames;
}

const scrambleMNames = (arr) => {
    for(let i = arr.length-1; i>0; i--){
        let temp = arr[i];

        let j = Math.floor(Math.random()* (i+1));
        // console.log(temp);
        // console.log(i);
        // console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;

}
const updateScore = () => {
    
    scoreCount.innerHTML = "Your Score : " + score;
}
// function updateScore(score) {
//     scoreCount.innerHTML = "Your Score" + score

// }
btn.addEventListener('click', function() {
    if(!play)
    {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newMovie = createNewWords();
        scrambleMovie = scrambleMNames(newMovie.split(""));
        console.log(scrambleMovie.join(""));

        msg.innerHTML = `Guess : ${scrambleMovie.join("")}`;
    }else {
        let guessedName = guess.value;
        if(guessedName === newMovie)
        {
            console.log('correct');
            play = false;

            msg.innerHTML = `CORRECT! It is ${newMovie}`;
            btn.innerHTML = "Play again";
            guess.classList.toggle('hidden');
            guess.value = "";
            score += 10;
            updateScore();
        
        }else {
            console.log('wrong');
            play = false;
            msg.innerHTML = `Oops! WRONG!  It is ${newMovie}`;
            btn.innerHTML = "Play Again";
            guess.classList.toggle('hidden');
            guess.value="";
        }
    }


})

