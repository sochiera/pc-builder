# Inteligentny konfigurator PC

## Projekt i odbiorcy

Aplikacja webowa dla osob skladajacych komputer PC w Polsce. Ma pomagac wybrac
czesci, zrozumiec zgodnosc konfiguracji i koszt zakupu.

## Cel docelowy i sukces

Uzytkownik buduje, zapisuje i udostepnia zestaw, a aplikacja wiarygodnie ocenia
zgodnosc, pobor mocy, balans zastosowania oraz oferty cenowe. Sukces oznacza,
ze ocena wyjasnia wykryte problemy, dane mozna odswiezyc, a najtanszy koszyk
uwzglednia oferty i dostawe.

## Wymagania

- Katalog komponentow PC aktualizowany z x-kom oraz oferty innych sprzedawcow
  tylko dla rozpoznanych produktow.
- Konfigurator reagujacy na zmiane czesci, z poziomami: blokada, ostrzezenie i
  informacja; analiza obejmuje zaleznosci wieloelementowe.
- Analizy RAM, zasilania, balansu pod wybrane zastosowanie i budzetu.
- Filtrowanie, porownanie komponentow, historia cen, zapis, link udostepnienia
  oraz warianty konfiguracji.
- Testy logiki zgodnosci, kosztow, brakow danych i przypadkow brzegowych.

## Preferencje

Czytelny, rzeczowy interfejs, ktory najpierw komunikuje decyzje i ich powod,
uznania zgodnosci.

## Pomysly opcjonalne

Optymalizacja koszyka miedzy sklepami z uwzglednieniem lacznej dostawy.

## Obecny szkielet

Istnieje jedna pionowa sciezka: strona pozwala wybrac CPU i GPU z lokalnego
katalogu, a ten sam kod przegladarkowy oblicza widoczny koszt, pobor oraz
minimalna sugerowana moc PSU. Test uruchamia serwer aplikacji i Chromium,
zmienia GPU w prawdziwym UI i sprawdza podsumowanie.

## Ograniczenia i priorytety

Szkielet celowo nie jest katalogiem ani pelnym silnikiem zgodnosci. Najpierw
utrzymac pionowa, testowana sciezke, potem rozwijac reguly w malych krokach TDD.
Nie traktowac demonstracyjnych danych i wyniku zasilania jako danych rynkowych.

## Prawdopodobna kolejnosc

1. Dodac modele produktu i pojedyncza regule twardej zgodnosci CPU oraz plyty.
2. Dodac wybor plyty oraz komunikat problemu do podsumowania.
3. Rozbudowac zasilanie o wybrany PSU i jego zlacza.
4. Dopiero potem wprowadzic trwały katalog, import i oferty.

## Odlozone swiadomie

Wszystkie pozostale kategorie, import x-kom, konta i zapis, udostepnianie,
porownywarka ofert, historia cen, filtry, budzet, warianty i zaawansowane
reguly wieloelementowe.
