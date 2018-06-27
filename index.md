# Logica e Fondamenti di Matematica

## Introduzione

Parleremo di teoria degli insiemi e di logica, principalmente.
Oggi gli insiemi sono una componente imprescindibile della pratica matematica, però la loro introduzione
è "recente", infatti è stato *George Cantor* a introdurli nel 1800.

Gli insiemi sono stati completamente inventati da Cantor, e questa è una cosa degna di nota,
perché sono veramente rare le cose di cui si può individuare un'origine precisa.
Ad esempio... quando sono stati inventati i numeri naturali? E da chi?

Per altri concetti, la storia si fa più intricata, invece. Un esempio è il concetto di limite:
Esso era, sì, già più o meno conosciuto dai greci e da *Bonaventura Cavalieri*, ma la sua definizione
moderna risale al 1800, invece integrali e derivate sono idee precedenti. In particolare in ordine cronologico
vengono prima gli integrali, poi le derivate e infine i limiti, quindi tutto il contrario di quello a cui siamo abituati a pensare!

A margine di questi esempi, una piccola divagazione (citiamo il prof):
Molto spesso la storia della matematica riceve poca attenzione nello studio,
però lo sforzo storico è sicuramente collegato allo sforzo individuale di comprensione
e quindi può agevolare e anzi permettere una comprensione più profonda degli argomenti.


Ma se nella millenaria storia della matematica gli insiemi sono dei nuovi arrivati, sono davvero utili? In fondo prima non erano necessari...
Per rispondere a questa domanda dobbiamo prima capire cosa sono questi insiemi.
Ma ne vale la pena farlo?  
In fondo la teoria degli insiemi è contraddittoria! ahah


## Teoria degli insiemi: un primo tentativo

Cos'è un insieme? Possiamo provare a dare varie spiegazioni:
 - è un raggruppamento di cose
 - un raggruppamento di cose che hanno una proprietà in comune
 - ...

Queste però, sono per l'appunto più spiegazioni che buone definizioni.

Una definizione è ha due componenti:
 - il definiendum: ciò che viene definito
 - il definiens: il contenuto della definizione

Ecco un esempio:
**Il quadrato** è *un poligono regolare con 4 lati*

**Il quadrato** è il definiendum  
*un poligono regolare con 4 lati* è il definiens

Una buona definizione, una definizione che possiamo ritenere sicuramente valida, contiene nel definiens solo nozioni note.
La definizione data sopra di quadrato è sicuramente una buona definizione dato che conosciamo
il significato di poligono regolare e quello della proprietà di avere 4 lati.

Ma le definizioni date di insieme non sono delle buone definizioni, infatti non è chiaro cosa sia un raggruppamento o una proprietà.
Inoltre provare a definire questi concetti, ad esempio quello di proprietà, ci risulta altrettanto difficile.

Si potrebbe dunque notare che tutti abbiamo un'idea di cosa sia un insieme e potremmo quindi lasciare indefinito cos'è un insieme
e far sì che sia la nozione intuitiva di insieme ad essere, in un certo senso, la sua definizione.
Gli oggetti per i quali si adopera questa scelta vengono detti **Enti Primitivi**.
Insomma, non diamo una definizione precisa, ma cerchiamo di appellarci all'intuizione di ognuno aiutandoci con delle spiegazioni.
Si potrebbe obiettare dicendo che l'idea che le persone hanno di insieme non sia unica e che ognuno la interpreti a suo modo, d'altro canto questa
è la stessa strada intrapresa da Euclide per la geometria ed ha avuto un notevole successo.

> Nella geometria euclidea punti rette e piani sono gli enti primitivi

L'impossibilità di dare buone definizioni per tutto è conosciuta sin dall'antichità, infatti quando ci si prova ci si trova davanti ad un *Regressus ad infinitum*,
ovvero nel tentare di spiegare una cosa in termini di altre già note ci si ritrova a procedere all'infinito all'indietro.
Aristotele per uscire da questa situazione di empasse introdusse il motore immobile, ovvero qualcosa che genera movimento
e quindi la vita e il creato senza che però sia esso stesso stato messo in movimento, cioè creato.
Gli enti primitivi hanno un ruolo analogo a quello del motore immobile.


Come si determina quali nozioni sono primitive?
Spesso si dice che una nozione è primitiva se è sufficientemente intuitiva e quindi non c'è realmente bisogno di definirla.
È importante notare che avere gli insiemi come enti primitivi non è una necessità, infatti potremmo
avere come ente primitivo quello di proprietà o di oggetto e da questi poi definire cos'è un insieme in modo leggittimo.
Quindi decidere quali sono gli enti primitivi è una questione di comodità e di potenza espressiva,
nel momento in cui non riesco a definire qualcosa e mi serve, la posso assumere come ente primitivo.
Ovviamente avere un numero basso di enti primitivi rende la teoria più elegante e più maneggevole da studiare (ma magari non da studiare)
Inoltre scegliere i giusti enti primitivi permette poi di dare definizioni più naturali e semplici e rende la teoria più maneggevole.
(Un qualcosa di analogo avviene con le affermazioni, quando c'è un'affermazione che non riusciamo a dimostrare, ma ci piace, la prendiamo per vera e l'aggiungiamo agli assiomi.
Esempio famoso è il V assioma della geometria euclidea, si è cercato di dimostrarlo per secoli a partire dagli altri assiomi, senza però riuscirci)

La strada di assumere l'insieme come ente primitivo è quella che seguì Cantor.


Una piccola digressione:
> Qual è la definizione di definizione?  
> Le definizioni non sono necessarie in matematica, infatti, in linea di principio, data una definizione, si possono sempre sostituire
> tutte le occorrenze del definiendum con il definiens, e in questo modo il significato resta lo stesso.
> Per questo motivo non è necessario dare una definizione o assumere il concetto di definizione come ente primitivo perché se ne può fare a meno.
> Però nella pratica le definizioni sono invece utili perché permettono di snellire il linguaggio!


## Teoria degli insiemi: così parlò Cantor

Euclide, nei suoi Elementi, come abbiamo già avuto modo di ricordare, assume come enti primitivi il punto, la retta e il piano.
Per essi dà anche una "definizione", ad esempio per il punto afferma: "un punto è ciò che non ha dimensioni".
Ovviamente questa non è una buona definizione, come ci aspettavamo, però non è questo il fine di questa descrizione, ma
piuttosto, essa serve a far capire il lettore di cose si vuole parlare, cosa si vuole intendere per punto, a delimitare il discorso.

Anche Cantor fa una cosa simile per la nozione di insieme, egli dice:
> Un insieme è una collezione in un tutto unico di oggetti definiti distinti della nostra
> percezione o del nostro pensiero, che sono chiamati gli elementi dell'insieme.

Si nota facilmente che questa non può essere una buona definizione (cos'è una collezione? E un oggetto?), ma è piuttosto un'esplicazione, nello stile di Euclide.

Analizziamo questa descrizione:

Leggiamo che un insieme è una collezione **in un tutto unico** di oggetti:
ciò significa che alla pluralità dei numeri naturali viene sostituito l'insieme dei numeri naturali che è un'entità unica.

inoltre gli oggetti devono essere **definiti e distinti**:
gli oggetti non devono essere cose vaghe, ma ben circoscritti nel loro significato,
mentre il fatto che debbano essere distinti comporta che non possiamo ripetere lo stesso oggetto più volte,
quindi in un insieme troveremo oggetti tutti diversi, non incontreremo mai lo stesso oggetto più volte.

Il fatto che gli oggetti siano **della nostra percezione o del nostro pensiero** significa che gli insiemi possono contenere sia oggetti concreti che astratti.
Ma resta comunque vago cosa siano gli oggetti **del nostro pensiero**

Notiamo esplicitamente che nella nozione di insieme proposta da Cantor non compare mai la nozione di proprietà,
che nel precedente capitolo pure pensavamo fosse collegata a quella di insieme.
Quindi si può avere anche una collezione eterogenea di oggetti per cui non è detto che ci sia una proprietà che le colleghi tutte.

> Un esempio di oggetti non ben definiti sono le nuvole! Quindi non possiamo avere insiemi di nuvole, occhio!

Da questa definizione intuitiva è difficile dedurre qualcosa, ad esempio un insieme con un solo elemento contiene tutti oggetti distinti?
La risposta non è chiara, quindi bisogna fare una scelta dando un'interpretazione delle parole di Cantor.

Questa definizione non comprende il caso di un insieme senza elementi, l'insieme vuoto, però siccome ci è utile,
facciamo una scelta deliberata e lo includiamo tra i possibili insiemi.

Data queste piccole difficoltà già si può capire che le definizioni che rimandano all'intuizione sono molto deboli.


## L'insieme di tutti gli insiemi

Dimostriamo che in ZF (ma anche nella teoria naive di Cantor) l'insieme di tutti gli insiemi non esiste
ovvero che  
"non esiste x tale che per ogni y si abbia y \in x"

Per dimostrarlo è più comodo considerare la proposizione equivalente:
"per ogni x esiste y tale che y \notin x"

Dimostrazione.  
Sia x un insieme. Sfruttando l'assioma A6 di comprensione possiamo considerare l'insieme y = { z \in x : z \notin z }
Sì. stiamo sfruttando il paradosso di Russel, ma in questo contesto l'assurdo a cui ci porterà non sarà distruttivo per la teoria, ma anzi auspicabile.
Supponiamo che y \in x, allora vediamo che il paradosso di Russel ha effetto:  
si possono avere due casi:  
- y \in y    -> in questo caso per definizione di y si ha y \notin y, quindi abbiamo un assurdo
- y \notin y -> in questo caso per definizione di y si ha y \in y, quindi abbiamo un assurdo.  
Insomma y \in x non è possibile, quindi deve essere y \notin x.  
Abbiamo, dunque, trovato un elemento non contenuto nell'insieme x. Quindi non esiste un insieme che contenga tutti gli insiemi,  
perché per ogni insieme riusciamo a trovare un oggetto che non gli appartenga.  
                                                                                                  QUADRATOBIANCO
