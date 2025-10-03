const message = `hi, husni. i've run out of words to say, but thank you for surviving in this cruel world. a wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. aku berdoa untuk kamu, mudah mudahan kamu terus diberi kesehatan, berkelimpahan, dikelilingi orang orang yang baik dan bermanfaat, diberi kemudahan ditengah rasa sakitmu, rasa sulitmu, dan aku selalu berdoa mudah mudahan hatimu diberi kelapangan dan kesabaran atas hal apapun yang memberatkanmu, may allah grant u what ur heart truly desire, may allah make everything u want good for u, so that may accept all ur prayers and wishes.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}




