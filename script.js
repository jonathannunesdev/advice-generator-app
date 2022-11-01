// Click event
document.querySelector('a').addEventListener('click', async(e) => {
    e.preventDefault();
    
    playSong();
    let results = await fetch('https://api.adviceslip.com/advice');
    let json = await results.json();
    
    // Api request
    if(json.id !== null){
        showAdvice({
            id: json.slip.id,
            advice: json.slip.advice
        });
    };
});

// function to show information on screen
let showAdvice = (json) => {
    document.querySelector('.advice--number').innerHTML = `ADVICE #${json.id}`;
    document.querySelector('.advice').innerHTML = json.advice;
};

// function to play song of click
let playSong = () => {
    let song = document.querySelector('audio');
    song.play();
};