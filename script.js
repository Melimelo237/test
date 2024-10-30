document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // empêcher la soumission par défaut du formulaire

    const interestLevel = document.getElementById('interest').value;

    if (interestLevel === 'beaucoup') {
        alert('Tu es très importante pour moi ! ❤️');
    } else if (interestLevel === 'un peu') {
        alert('Tu me plais bien ! 😊');
    } else {
        alert('Je suis désolé, je ne comprends pas ton niveau d\'intérêt. Hum BOB A ajouté');
    }
});