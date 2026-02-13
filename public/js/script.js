const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Let's just start over.."
];

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let btnWidth = 80;
let btnHeight = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "../images/no.png";
        refreshBanner();
    }
    clicks++;

    btnWidth += 30;
    btnHeight += 30;
    yes_button.style.width = `${btnWidth}px`;
    yes_button.style.height = `${btnHeight}px`;
    
    let total = answers_no.length;

    if (i < total - 1) {
        no_button.innerHTML = answers_no[i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[i]);
        i = 1;
        no_button.innerHTML = answers_no[0];
        yes_button.innerHTML = "Yes";
        
        yes_button.style.height = "50px";
        yes_button.style.width = "80px";
        btnWidth = 80;
        btnHeight = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "../images/yes.png";
    refreshBanner();
    
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";

    let heading = document.getElementById('question-heading');
    heading.style.display = "none";
    
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

// Redirect logic for the Riddle page
const takeRiddleBtn = document.getElementById('take-riddle-btn');
if (takeRiddleBtn) {
    takeRiddleBtn.addEventListener('click', () => {
        window.location.href = "riddle.html";
    });
}

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}