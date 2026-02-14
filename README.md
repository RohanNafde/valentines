# 💘 Valentine's Day Proposal Website

A fully interactive, responsive, and animated website designed to ask that special someone to be your Valentine. It features a playful "Yes/No" button mechanic, a riddle challenge, and a final surprise page with a voice message.

## ✨ Features

* **Floating Hearts Background:** Beautiful, deep red hearts float up the screen on every page.
* **Playful "No" Button:** The "No" button is elusive! It changes text and eventually resets if clicked too many times, while the "Yes" button grows invitingly.
* **Riddle Challenge:** An intermediate page that requires a "Magic Number" (answer: `6`) to proceed. Includes a "shake" animation for incorrect answers.
* **Embedded Audio:** The final page features a built-in HTML5 audio player for your voice message, so no download is required to listen.
* **Mobile Responsive:** Layout adapts perfectly to phone screens, ensuring the buttons never break the layout.

## 📂 Project Structure

For the code to work exactly as written (using the `../` links), your folder structure should look like this:

```text
/Valentine-Project
│
├── css/
│   └── style.css          # The main stylesheet with animations
│
├── js/
│   └── script.js          # Logic for buttons, hearts, and riddles
│
├── images/
│   ├── first.png          # Initial cute GIF/Image
│   ├── yes.png            # Image shown when "Yes" is clicked
│   └── no.png             # Image shown when "No" is clicked
│
├── files/
│   ├── letter.pdf         # The Riddle PDF (for riddle.html)
│   ├── final_letter.pdf   # The Final Love Letter (for final_letter.html)
│   └── message.mp3        # Your recorded voice message
│
└── pages/                 # <--- Your HTML files go here!
    ├── index.html         # The main landing page
    ├── riddle.html        # The riddle input page
    └── final_letter.html  # The success page