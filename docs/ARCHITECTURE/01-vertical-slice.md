# Pionowa sciezka

`app.py` serwuje pliki z `web/` standardowa biblioteka Pythona.
`web/app.js` zawiera demonstracyjny katalog, wybor i jedyne zrodlo prawdy dla
sumy ceny oraz poboru: CPU + GPU + 100 W platformy; moc PSU to 135 procent
poboru, zaokraglone w gore do 50 W.

`tests/test_smoke.py` uruchamia dokladnie ten serwer i uzywa Chromium do
zaladowania `smoke.html`. Ta strona zmienia kontrolke aplikacji i zapisuje
wynik jej wykonywanego JavaScript do DOM, ktory asercja odczytuje.
