# Bitcoin Bros

## Projektbeskrivning

Bitcoin Bros är en React-applikation som erbjuder användare möjlighet att följa den senaste prisutvecklingen för kryptovalutor, läsa de senaste kryptonyheterna, och använda en sparkalkylator för att beräkna framtida värde baserat på månatliga insättningar. Applikationen använder Vite som byggverktyg och Tailwind CSS för styling, samt Redux för att hantera global state.

## Teknikval

React: Används för att bygga dynamiska användargränssnitt och komponenter.

Vite: En snabb utvecklingsmiljö och byggverktyg som gör utvecklingen effektivare.

Tailwind CSS: Utility-first CSS-ramverk för att snabbt skapa responsiva och stiliga användargränssnitt.

Redux: Används för att hantera applikationens globala state, vilket möjliggör centraliserad datahantering och effektiv rendering av komponenter.

Axios: För att hämta data från externa API:er som CoinGecko för kryptodata och nyheter.

## Installation och körning

Klona repo från GitHub

    git clone https://github.com/Tibitoe/Dashboard.git

Installera beroenden

    npm install

Välj mapp

    cd nuggetdashboard

Starta utvecklingsservern

    npm run dev

Applikationen körs nu på http://localhost:3000.

## Funktioner

Kryptonyheter: Hämta de senaste artiklarna om kryptovalutor från News API.

Bitcoin Price History: Visualisera Bitcoins prisutveckling över olika tidsperioder (24h, 1 månad, 1 år).

Topplista av Kryptovalutor: Visa de 10 största kryptovalutorna efter marknadsvärde.

Sparkalkylator: Beräkna framtida värde baserat på initial insättning, månatlig insättning och förväntad avkastning.

Dark Mode: Välj mellan mörkt och ljust läge för att förbättra användarupplevelsen.

FAQ: Vanliga frågor och svar om applikationen och kryptovalutor.

Kontaktformulär: Möjlighet för användare att kontakta oss (Är ej fungerande).

## Teknisk Arkitektur

Redux Toolkit: Används för att hantera global state för kryptodata och historik.

Axios: För att kommunicera med externa API:er och hämta data i realtid.

Responsive Design: Applikationen är fullt responsiv och anpassar sig efter olika skärmstorlekar.

## Potentiella förbättringar och framtida funktioner

Stöd för fler kryptovalutor än Bitcoin.

Möjlighet att exportera kalkyler från sparkalkylatorn.

Integration med andra kryptonyhetskällor och API:er för ett bredare nyhetsflöde.
