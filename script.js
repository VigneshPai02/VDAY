// ================= LETTER STAGE =================

const letterText = `
My dearest,

I wrote this little letter hoping it would make you smile.
The last 3 months with you have been the best 3 months of my life.
I know you think I forgot (again), but I did not 💌
`;

let i = 0;

window.onload = function () {
    setTimeout(openEnvelope, 800);
};

function openEnvelope() {
    document.getElementById('envelope').classList.add('open');

    setTimeout(() => {
        document.getElementById('envelope').style.display = 'none';
        document.getElementById('letter-paper').classList.remove('hidden');
        typeLetter();
    }, 1200);
}

function typeLetter() {
    if (i < letterText.length) {
        document.getElementById('typewriter-text').innerHTML +=
            letterText.charAt(i) === "\n" ? "<br>" : letterText.charAt(i);
        i++;
        setTimeout(typeLetter, 35);
    } else {
        document.querySelector('.signature').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('letter-question').classList.remove('hidden');
            document.getElementById('letter-options').classList.remove('hidden');
        }, 600);
    }
}

function handleLetterResponse(read) {
    if (read) {
        document.getElementById('letter-container').style.display = 'none';
        document.getElementById('container').style.display = 'flex';
    } else {
        const sadContainer = document.getElementById('sad-image-container');
        sadContainer.innerHTML = '';
        const sadImg = new Image();
        sadImg.src = 'sad.gif';
        sadImg.alt = 'Sad';
        sadContainer.appendChild(sadImg);
    }
}

// ================= ORIGINAL VALENTINE LOGIC (UNCHANGED) =================

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        const yesButton = document.getElementById('yes-button');
        const currentSize = parseFloat(
            window.getComputedStyle(yesButton).getPropertyValue('font-size')
        );
        yesButton.style.fontSize = (currentSize * 2) + 'px';
    }
}

function flashRainbowColors(callback) {
    const colors = ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#9400d3'];
    let i = 0;
    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i++ % colors.length];
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        callback();
    }, 2000);
}

function displayCat() {
    const img = new Image();
    img.src = 'cat.gif';
    img.alt = 'Cat';
    document.getElementById('image-container').appendChild(img);
}

function displayCatHeart() {
    const container = document.getElementById('image-container');
    container.innerHTML = '';
    container.classList.add('heart-container');

    const loveText = document.createElement('div');
    loveText.className = 'love-text';
    loveText.innerText = 'I LOVE YOU SO MUCH. MWAH!';

    const heartImg = new Image();
    heartImg.src = 'cat-heart.gif';
    heartImg.alt = 'Cat Heart';

    container.appendChild(loveText);
    setTimeout(() => container.appendChild(heartImg), 700);

    document.getElementById('options').style.display = 'none';
}

displayCat();
