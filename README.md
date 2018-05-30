# lab35

Lab 35 - testning med React
Deadline för laborationen är 2018-06-15 15:55. Uppgiften ska utföras av två personer och redovisas i skolan innan deadline.
Ni ska göra ett projekt med create-react-app som utför enhetstester med Jest och Enzyme. Ni ska även granska en annan grupps kod och skriva en kort rapport.
Uppgift och kravspec
Ni ska bygga komponenter med hjälp av TDD. Det vill säga, ni ska använda metoden red, green, refactor. Börja med att ta fram de krav / user stories som gäller. Sedan kan ni skriva testfall. Ni väljer själva hur många av de fem komponent-alternativen ni vill göra: minst två för G och tre för VG.

Tips 1: när ni testar, använd wrapper.setState({}) istället för att "klicka sig fram" till det tillståndet man vill testa.
Tips 2: sådant som användaren skriver in i ett input-fält har alltid datatypen string.
Alternativ 1: räknare
Komponenten ska innehålla ett textfält och två button-element. Den ska dessutom skriva ut ett tal. Talet ska finnas lagrat i komponentens state. Användaren ska kunna skriva in strängar i textfältet. När man klickar på den första knappen ska värdet i state ökas; den andra knappen minskar värdet.
Om användaren skriver in ett tal i textfältet så ska det ersätta talet som finns lagrat i state. Men om användaren skriver in något som inte går att göra om till ett tal så ska värdet behållas.
Alternativ 2: redigerbar lista
Komponenten ska innehålla ett textfält där användaren kan skriva in en text. Där ska finnas en button, som man kan klicka på för att lägga till texten i en lista. Komponenten ska visa listan på något lämpligt sätt. När listan renderas ska varje element i den förses med en button som kan användas för att ta bort elementet.
Alternativ 3: minröjning
Komponenten ska rendera ett rutnät av valfri storlek med kvadratiska rutor. Rutnätet ska representeras av en lämplig datastruktur i komponentens state. Komponenten ska ta emot rutnätets första tillstånd via props. Varje position kan antingen innehålla en mina eller var tom. När spelaren klickar på en position i rutnätet så ska komponenten visa vad som fanns där. Om spelaren klickar på en position där det finns en mina ska komponenten dessutom skriva ut ett lämpligt meddelande till spelaren, som indikerar att man förlorade fett hårt.
(Man kan - frivilligt - komplettera komponenten, så att tomma rutor visar en siffra som säger hur många grannar de har som är minor.)
Alternativ 4: användarprofil
Komponenten ska innehålla ett formulär där användaren kan fylla i sin e-postadress och länk till profilbild. Alla fält ska valideras. Dvs om användaren fyller i ett felaktigt värde i något fält så ska det dyka upp ett meddelande i komponenten, som beskriver vad man har gjort fel. Använd bool-variabler i state. En e-postadress måste vara unik, så för att kontrollera att den som användaren skriver in inte är upptagen så måste komponenten få en lista över upptagna adresser via props. (I en riktig app hade man gjort AJAX till ett API i stället)
Alternativ 5: transformera text
Komponenten ska innehålla ett input-element som användaren kan skriva in text i. När användaren skriver i fältet ska komponenten skriva ut följande. Tänk på att skriva ut respektive sträng i ett HTML-element som du kan plocka ut med en selektor. Använd hellre CSS-klass än id.
texten baklänges, "10" → "01"
texten konverterad till bara stora bokstäver, "TeDeDe" → "TEDEDE"
texten som ett tal upphöjt till två, "5" → "25"
Rapporten
Gå igenom den andra gruppens kod för varje uppgift och svara på följande frågor.
Har ni testat samma saker?
Vilka är de viktigaste testfallen? Varför är de viktiga?
Finns det några onödiga testfall i deras kod? Varför är de onödiga?
Rapporten
Redovisas för läraren i klassrummet genom att köra appen lokalt och visa att alla test är gröna.
Bedömningskriterier
För G
relevanta testfall för minst två komponenter
utförligare testfall för minst en komponent

För VG
relevanta testfall för minst tre komponenter
utförligare testfall för minst två komponenter

"Relevanta" testfall innebär att ni har testat grundläggande saker och fått med det viktigaste.
"Utförligare" testfall innebär att ni har fler testfall. Till exempel täcker ni in alla olika sorters värden som inparametrarna kan ha, som det står i slides.
