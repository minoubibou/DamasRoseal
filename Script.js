let clockID = 0;

function UpdateClock() {
  // Si un minuteur existe déjà, on l'annule
  if (clockID) {
    clearTimeout(clockID);
    clockID = 0;
  }

  // Récupération de la date actuelle
  let tDate = new Date();
  
  // Mise à jour de l'affichage de l'horloge
  document.theClock.theTime.value =
    tDate.getHours().toLocaleString('fr', { minimumIntegerDigits: 2, useGrouping: false }) + ":" +
    tDate.getMinutes().toLocaleString('fr', { minimumIntegerDigits: 2, useGrouping: false }) + ":" +
    tDate.getSeconds().toLocaleString('fr', { minimumIntegerDigits: 2, useGrouping: false });

  // Mise en place du prochain appel
  clockID = setTimeout(UpdateClock, 1000);
}


function KillClock() {
    if (clockID) {
        clearTimeout(clockID); // Arrêt du minuteur
        clockID = 0;
    }
}

// Démarrer l'horloge lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', UpdateClock);

    // Gestion du son
    const toggleButton = document.getElementById("toggle-sound");
    const audio = document.getElementById("bee-sound");
    
    if (toggleButton && audio) {
        toggleButton.addEventListener("click", function() {
            if (audio.paused) {
                audio.play();
                this.textContent = "Désactiver le son";
            } else {
                audio.pause();
                this.textContent = "Activer le son";
            }
        });
    }
;