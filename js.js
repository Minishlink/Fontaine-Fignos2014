var TETE = 0, NB_PIX = 1, LAST_NB_PIX = 2, NB_PIX_MIN = 1, NB_PIX_MAX = 5, NB_ROW = 10, NB_COL = 5;

function random(from, to)
{
    return Math.floor(Math.random()*(to-from+1)+from);
}

function getLedPin(r, c)
{
	return c+NB_COL*r;
}

function on(ledPin)
{
	$("#"+ledPin).removeClass("off");
	$("#"+ledPin).addClass("on");
}

function off(ledPin)
{
	$("#"+ledPin).removeClass("on");
	$("#"+ledPin).addClass("off");
}

$(document).ready(function()
{
	//initialisation
	// chaque colonne a ses ordonnées de 0 à 9
	var LED = new Array(), r = 0, c = 0;
	for(c=0; c < NB_COL; c++) // pour chaque colonne
	{
		LED[c] = [random(0, NB_ROW-1), random(NB_PIX_MIN, NB_PIX_MAX), 0] //position aléatoire des débuts de gouttes et nombre de pixels aléatoire
	}
	
	setInterval(function() {	
		for(c=0; c < NB_COL; c++) // pour chaque colonne
		{
			r = LED[c][TETE];
			nbPix = LED[c][NB_PIX];
			last_nbPix = LED[c][LAST_NB_PIX];
			
			// Affichage
			on(getLedPin(r, c)); // tete 
			for(i=1; i < nbPix; i++) // queue
				on(getLedPin(r-i,c));
			off(getLedPin(r-nbPix,c)); // éteint après queue
			off(getLedPin(NB_ROW-(last_nbPix-r),c)); // éteint bas écran

			
			if(r == NB_ROW-1) // si on arrive à la fin on change de motif
			{
				LED[c][TETE] = 0;
				LED[c][LAST_NB_PIX] = nbPix;
				LED[c][NB_PIX] = random(NB_PIX_MIN, NB_PIX_MAX);
			}
			else LED[c][TETE]++; // Avance de la tete
		}
	},200);
});
