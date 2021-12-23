// CODE VOOR OPENEN VAN GENEREER FUNCTIE OP MOBILE
// Chevron element in header
var openHeaderFilterElement = document.querySelector('.header-arrow');
// Genereerfunctie element
var headerFilterElement = document.querySelector('.header-filter');
// Genereer functie is niet open
var isHeaderFilterOpen = false;
// Wanneer chevron element geklikt is:
openHeaderFilterElement.addEventListener('click', function() {
	// Als genereer functie niet open is:
	if(!isHeaderFilterOpen) {
		// Voeg de "is-active" class toe naar de chevron element
		openHeaderFilterElement.className = 'header-arrow fas fa-chevron-down is-active';
		// Voeg de "is-active" class toe naar de header element
		headerFilterElement.className = 'header-filter is-active';

	// Als genereer functie open is:
	} else {
		// Verwijder de "is-active" class uit het chevron element
		openHeaderFilterElement.className = 'header-arrow fas fa-chevron-down';
		// Verwijder de "is-active" class uit het header element
		headerFilterElement.className = 'header-filter';
	}
	
	// Zet de nieuwe waarde met de tegenstelling van de huideige waarde
	// dus open -> dicht -> open -> dicht -> ...
	isHeaderFilterOpen = !isHeaderFilterOpen;
}, false);

// CODE VOOR HARTJES
// Haal alle hart elementen op
var heartIcons = document.querySelectorAll('.article-body-title i');
// Aantal gelikete artikelen begint met 0
var favouriteCount = 0;
// Haal aantal gelikete artikel element op in HTML
var favouriteCountElement = document.querySelector('.favourite-count');
// Voor elk hartje:
heartIcons.forEach(function(heartIcon) {
	// Wanneer het hartje geklikt is:
	heartIcon.addEventListener('click', function() {
		// De naam van class van het geklikte haartje
		var heartClassName = this.className;

		// Als de class van de icon naam het woord "fas" niet bevat:
		if(heartClassName.indexOf('fas') < 0) {
			// Verander in de naam van class "far" naar "fas"
			this.className = 'fas fa-heart';
			// Aantal gelikete artikel + 1
			favouriteCount++;

		// Als de class van de icon naam het woord "fas" bevat:
		} else {
			// Verander in de naam van class "fas" naar "far"
			this.className = 'far fa-heart';
			// Aantal gelikete artikel - 1
			favouriteCount--;
		}

		// Als aantal gelikete artikel is meer dan 0
		if(favouriteCount > 0) {
			// Verwijder de class "is-hidden" uit aantal artikel element
			favouriteCountElement.className = 'favourite-count';
			// Wacht 100ms en voer dan de volgende functie uit:
			setTimeout(function() {
				// Voeg de "animation-bounce" class naar aantal gelikete artikel element
				favouriteCountElement.className = 'favourite-count animation-bounce';
				// Verandert de tekst van de aantal gelikt artikel element
				favouriteCountElement.innerHTML = favouriteCount;
			}, 100);
		// Als aantal gelikete artikel is gelijk aan 0
		} else {
			// Voeg de class "is-hidden" mar de aantal gelikete artikel element
			favouriteCountElement.className = 'favourite-count is-hidden';
		}
	}, false);
});

// CODE VOOR KLIKKEN OP FILTERS IN GENEREERFUNCTIE
// Haal alle filter buttons op in genereerfunctie
var generateOptionsButtons = document.querySelectorAll('.header-filter-grid-item:not(.header-filter-generate)');
// Aantal geselecterde filters (begin met 0)
var countSelectedButtons = 0;
// Voor elk filter button:
generateOptionsButtons.forEach(function(button) {
	// Wanneer de button geklikt is:
	button.addEventListener('click', function() {
		// De naam van class van de geklikte button
		var heartClassName = this.className;

		// Als de geklikte button de class "is-active" niet heeft:
		if(heartClassName.indexOf('is-active') < 0) {
			// Als aantal geselcteerde filter buttons minder dan 2 is:
			if(countSelectedButtons < 2) {
				// Voeg de "is-active" class toe naar de geklikte button
				this.className = 'header-filter-grid-item is-active';
				// Aantal geselecteerde filters + 1
				countSelectedButtons++;
			
			// Als aantal geselecteerde filter button niet minder dan 2 is: 
			} else {
				// Doet niks (max. geselecteerde filter is 2)
				return false;
			}

		// Als de geklikte button de class "is-active" heeft:
		} else {
			// Verwijder de "is-active" class uit de geklikte button
			this.className = 'header-filter-grid-item';

			// Als aantal geselecteerde filter button meer dan 0 is: 
			if(countSelectedButtons > 0) {
				// Aantal geselecteerde filters - 1
				countSelectedButtons--;
			}
		}
	}, false);
});

// CODE VOOR ARTIKEL GENEREREN
// De "genereren" button
var generateButton = document.querySelector('.header-filter-generate');
// Haal alle artikel elementen
var articles = document.querySelectorAll('.article');
// De container waar de genereerde artikel opkomt
var headerElement = document.querySelector('.header-wrapper');
// Wanneer de "genereren" button geklikt is:
generateButton.addEventListener('click', function() {
	// Als de container al een artikel bevat:
	if(headerElement.children.length > 1) {
		// Verwijder het huidige artikel uit de container
		headerElement.removeChild(headerElement.lastChild);
	}

	// Verander de tekst van de "genereren" button
	generateButton.innerHTML = 'Genereer opnieuw!';

	// Een willekeurige getal genereren tussen 0 en aantal artikelen
	var randomArticleIndex = getRandomNumberBetween(0, articles.length - 1);
	// Kopieer de door willekeurige getaal gekozen artikel
	var articleCopy = articles[randomArticleIndex].cloneNode(true);
	
	// Geeft de kopie van gekozen artikel de animatie class
	articleCopy.className = 'article animation-fadeIn';
	// Voeg het gekozen artikel toe in de container
	headerElement.appendChild(articleCopy);
}, false);

// Functie om een willekeurig getal tussen 2 getallen te genereren
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}