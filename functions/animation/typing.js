const words = ["Marketing Digital", "Tráfego Pago", "SEO", "Redes Sociais"];
let currentWordIndex = 0;
let typingElement = document.getElementById("typing-text");

function typeWord(word, i, callback) {
    if (i < word.length) {
        typingElement.textContent += word.charAt(i);
        setTimeout(() => typeWord(word, i + 1, callback), 100);
    } else {
        callback();
    }
}

function eraseWord(word, i, callback) {
    if (i >= 0) {
        typingElement.textContent = word.substring(0, i);
        setTimeout(() => eraseWord(word, i - 1, callback), 50);
    } else {
        callback();
    }
}


function startTyping() {
    let word = words[currentWordIndex];
    typeWord(word, 0, function() {
        setTimeout(function() {
            eraseWord(word, word.length, function() {
                currentWordIndex = (currentWordIndex + 1) % words.length;
                startTyping();
            });
        }, 1000); // Aguarda 1 segundo antes de apagar
    });
}

// Iniciar a animação após a página ser carregada
window.onload = startTyping;
