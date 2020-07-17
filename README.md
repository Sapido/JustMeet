1° ITERAZIONE 04/04/2020 - 06/05/2020
	- IDENTIFICAZIONE ATTORI
		- Utente non autenticato
		- Utente autenticato
		- Partecipante
		- Amministratore evento
	
	- IDENTIFICAZIONE CASI D'USO
		- Registrazione
		- Login
		- Recupero credenziali
		- Visualizza eventi
		- Visualizza dettaglio evento
		- Filtra eventi
		- Logout
		- Crea evento
		- Modifica evento
		- Cancella evento
		- Elimina partecipante
		- Partecipa
		- Cancella partecipazione

	- IDENTIFICAZIONE CLASSI DI ANALISI
		- Utente
		- Evento
		- AuthService
		- EventAction
		- PostController
		- AuthController
		- Post
		- User

	- IDENTIFICAZIONE DIAGRAMMI DI SEQUENZA
		- Registrazione
		- Login
		- Visualizza eventi
		- Visualizza dettaglio evento
		- Logout

2° ITERAZIONE 07/05/2020 - 27/05/2020
	- IDENTIFICAZIONE ATTORI
		- Amministratore di sistema
	
	- IDENTIFICAZIONE CASI D'USO
		- Visualizza eventi creati
		- Visualizza eventi con partecipazione
		- Cancellazione account utente
		- Cancellazione account
		- Visualizza profilo
		- Modifica profilo

	- IDENTIFICAZIONE CLASSI DI ANALISI
		- UserActions
		- DeletedPost
		- DeletedController
		- UserController

	- IDENTIFICAZIONE DIAGRAMMI DI SEQUENZA
		- AggiungiEvento
		- Partecipa
		- AnnullaPartecipazione
		- Cancella evento
		- Visualizza profilo

3° ITERAZIONE 28/05/2020 - 15/06/2020	
	- IDENTIFICAZIONE CASI D'USO
		- Visualizza recensioni utente
		- Aggiungi recensione utente
		- Elimina recensione utente
		- Visualizza eventi cancellati
		- Ripristina evento cancellato

	- IDENTIFICAZIONE CLASSI DI ANALISI
		- RatingController
		- Rating
		- RatingActions
		- Recensione

	- IDENTIFICAZIONE DIAGRAMMI DI SEQUENZA
		- VisualizzaPostCreati
		- VisualizzaPostConPartecipazione
		- VisualizzaRecensioni
		- AggiungiRecensioneutente
