# Praktyczne heurystyki rozwiązywania problemów

Heurystyka to sposób szukania rozwiązania. Pomaga ruszyć z miejsca, ale nie gwarantuje poprawnej ani najlepszej odpowiedzi. W tym przewodniku zebrano metody z dokumentów w tym folderze, z pominięciem plików HTML. Możesz je stosować do różnych zadań. Przy każdej znajdziesz wyjaśnienie, kiedy się przydaje, oraz kroki, które pomogą ci ją zastosować.

Procedury opisano własnymi słowami, prostym językiem. Podobne pomysły połączono, żeby się nie powtarzały. Przykłady spoza matematyki pokazują, jak można zastosować metodę w innej dziedzinie. Nie oznacza to, że źródła potwierdzają jej skuteczność w takich sytuacjach. Oznaczenia źródeł prowadzą do przeglądu dokumentów na końcu przewodnika.

Wyjaśnienia napisano z myślą o osobach w wieku około 13–16 lat. Przykłady przy poszczególnych metodach powstały na potrzeby tego przewodnika. Nie są cytatami ani opisami zdarzeń zaczerpniętymi z dokumentów źródłowych.

## Jak korzystać z przewodnika

Zapisz, co chcesz osiągnąć, co już wiesz i jakie warunki musi spełniać poprawna odpowiedź. Wybierz schemat pasujący do napotkanej trudności. Notuj swoje próby i to, czego się z nich dowiadujesz. Zanim przyjmiesz wynik, sprawdź, czy odpowiada na pierwotne pytanie i spełnia wszystkie warunki.

Nie musisz przechodzić przez wszystkie schematy po kolei. Wybieraj te, których potrzebujesz. Czasem trzeba ponownie przemyśleć pytanie, zmienić metodę albo połączyć dwa podejścia. Heurystyka pomaga znaleźć odpowiedź. Dopiero dowód, odpowiedni test lub sprawdzenie, czy plan da się wykonać, pozwalają ocenić, na ile można jej zaufać.

### Jak szybko wybrać schemat

| Napotkana trudność | Od czego zacząć |
|---|---|
| Pytanie jest niejasne lub wydaje się, że brakuje danych | 17: Doprecyzuj problem; 34: Ustal tylko to, o co pytają |
| Rozumiesz cel, ale nie widzisz drogi do niego | 1: Rozumuj od końca; 2: Wykorzystaj analogię; 32: Dodaj element pomocniczy |
| Problem jest zbyt duży lub zagmatwany | 3: Podziel na części; 16: Wypróbuj mały przypadek; 18: Zmień sposób przedstawienia |
| Ograniczenia sprawiają, że każda próba zawodzi | 9: Złagodź ograniczenie; 10: Dopuść ułamki; 13: Dodawaj uzasadnione ograniczenia |
| Potrzebujesz przybliżonego wyniku lub sprawdzenia jego realności | 6: Oszacuj skalę; 7: Wykorzystaj podobne przypadki; 19: Sprawdź jednostki i granice |
| Wiele rozwiązań działa, ale szukasz lepszego | 5: Ulepszaj i próbuj od nowa; 11: Wyznacz oszacowania; 35: Zacznij od metody zachłannej |
| Plan ma etapy lub kilka poziomów decyzji | 14: Podejmuj decyzje etapami; 15: Sprawdzaj szczegóły względem ogólnego planu |
| Wybory wiążą się z niepewnością lub sprzecznymi interesami | 8: Sprawdź błędy poznawcze; 12: Wyceń kompromisy; 21: Porównaj skutki; 22: Rozrysuj zależności |
| Chcesz zbadać wzorzec lub ogólną regułę | 23: Eksperymentuj i wyjaśniaj; 29: Użyj rekurencji lub indukcji; 37: Uogólnij |
| Podejrzewasz, że twierdzenie jest fałszywe lub cel nieosiągalny | 24: Sprawdź zaprzeczenie; 25: Wybierz element skrajny; 27: Znajdź niezmiennik |
| Problem dotyczy zliczania lub układania obiektów | 20: Symetria; 26: Zasada szufladkowa; 30: Dopełnienie; 31: Policz na dwa sposoby; 33: Uporządkuj przypadki |
| Proces się powtarza lub twoja praca utknęła | 28: Śledź zmianę w jednym kierunku; 36: Oceń postęp i popraw plan |

## Schematy

### 1. Rozumuj od końca, zaczynając od celu

**Opis:** Zacznij od dokładnie opisanego celu i zapytaj: co musi być gotowe tuż przed nim? Potem zadaj to samo pytanie o ten wcześniejszy krok i cofaj się tak długo, aż dojdziesz do czegoś, co już wiesz albo możesz zrobić dziś. Odległy cel rozpada się na małe wymagania, a w planie widać braki. Na koniec przejdź łańcuch od początku do końca i sprawdź każde ogniwo: coś, co jest potrzebne, nie zawsze wystarcza.

**Przykład:** W piątek trzeba oddać plakat naukowy, a dziś jest poniedziałek. Cofasz się od celu: oddanie wymaga gotowego plakatu, plakat wymaga składu, a skład wymaga szkicu i źródeł, które możesz zacząć zbierać od razu. Wtedy widać lukę: przed oddaniem plakat musi obejrzeć nauczyciel, a w planie nie ma na to dnia. Układasz więc plan od końca: uwagi nauczyciela w czwartek, skład w środę, szkic we wtorek, źródła w poniedziałek. Na koniec czytasz plan od początku: źródła dają materiał na szkic, szkic na skład, skład na plakat dla nauczyciela, a jego uwagi na wersję do oddania.

**Kiedy się przydaje:** Przy planowaniu, szukaniu brakujących warunków wstępnych, rozwiązywaniu równań i budowaniu dowodów.

**Procedura:**
1. Opisz dokładnie końcowy wynik.
2. Zapytaj: „Co wystarczyłoby, żeby go uzyskać?”.
3. Powtarzaj to pytanie dla każdego nowego wymagania, aż dojdziesz do czegoś już znanego lub możliwego do wykonania.
4. Odwróć kolejność i wykonaj kroki od rzeczywistego punktu wyjścia.
5. Sprawdź każdy krok w kierunku celu. Warunek konieczny do sukcesu nie musi wystarczać do jego osiągnięcia.

**Uwaga:** Rozumowanie wstecz może wskazać drogę, ale samo nie dowodzi, że ta droga działa.

**Źródła:** [S1](#s1); [S4](#s4), podrozdział 2.2, strategia przedostatniego kroku, s. 27.

### 2. Wykorzystaj strukturę rozwiązanego problemu

**Opis:** Analogia: nowe zadanie działa jak takie, które już rozwiązano – inna historia, te same zależności. Nie kopiuj odpowiedzi i nie dopasowuj samego tematu. Ustal, co od czego zależy, co jest ograniczone i do czego zmierzasz. Przypisz każdą część rozwiązanego zadania do części nowego i użyj tej samej metody, bo te same zależności oznaczają, że ta sama metoda zadziała. Zanim uznasz dopasowanie za pewne, sprawdź różnice, które mogłyby je zepsuć.

**Przykład:** Masz już rozwiązane zadanie: kran A napełnia basen w 3 godziny, a kran B w 6 godzin. Razem potrzebują 2 godzin, bo w godzinę A napełnia 1/3 basenu, B 1/6, czyli razem 1/2. Nowe zadanie: Ola maluje płot w 3 godziny, a Kuba w 6. Historia inna, struktura ta sama: malarz odpowiada kranowi, płot basenowi, a tempa się dodają. Zatem 1/3 + 1/6 = 1/2 płotu na godzinę, czyli 2 godziny. Zostaje sprawdzić jedną różnicę: to działa tylko wtedy, gdy malują jednocześnie i sobie nie przeszkadzają, na przykład dwoma pędzlami.

**Kiedy się przydaje:** Przy nieznanych problemach, projektowaniu, diagnozowaniu usterek i nauce nowego zagadnienia.

**Procedura:**
1. Wypisz główne obiekty, zależności, ograniczenia i cel obecnego problemu.
2. Znajdź rozwiązany problem o podobnej strukturze.
3. Każdej ważnej części tamtego problemu przyporządkuj część obecnego.
4. Dostosuj zastosowaną wcześniej metodę rozwiązania.
5. Wskaż różnice, które mogłyby podważyć analogię, i sprawdź je w pierwszej kolejności.

**Uwaga:** Zewnętrzne podobieństwo to słaby argument. Zależności, dzięki którym wcześniejsze rozwiązanie działało, muszą zachodzić również tutaj.

**Źródła:** [S1](#s1).

### 3. Podziel problem na części

**Opis:** Gdy problem jest za duży, żeby ogarnąć go naraz, podziel go na mniejsze zadania i zapisz, jaki wynik ma dać każde z nich. Zaznacz, które zadanie musi poczekać na wynik innego: sali nie zarezerwujesz bez zgody. Małe zadania łatwiej zacząć i podzielić między osoby. Potem połącz wyniki i sprawdź powiązania, bo części, które działają osobno, razem mogą sobie przeszkadzać. Na końcu sprawdź, czy całość spełnia pierwotny cel i wszystkie warunki.

**Przykład:** Klasa chce zorganizować wieczór filmowy, co od razu wygląda na ogromną robotę. Dzielicie ją na pięć części: zgoda, sala, film, przekąski, ogłoszenie. Zaznaczacie, co musi poczekać: salę rezerwujecie po zgodzie, a ogłoszenie potrzebuje filmu i sali. Jedna osoba planuje napoje, druga jedzenie, każda lista kosztuje 6 euro, a budżet klasy to 10 euro. Po połączeniu listy kosztują 12 euro, więc klasa rezygnuje z jednej pozycji za 2 euro i mieści się dokładnie w 10. Podział pokazał, kto za co odpowiada, ale budżet wyszedł dopiero przy sprawdzeniu całości.

**Kiedy się przydaje:** W projektach, złożonych obliczeniach, projektowaniu systemów i wieloetapowych analizach.

**Procedura:**
1. Podziel problem na części o jasno określonych wynikach.
2. Zaznacz, które części zależą od innych.
3. Najpierw rozwiąż niezależną część lub spełnij ważny warunek wstępny.
4. Połącz wyniki częściowe, uwzględniając pracę potrzebną do ich połączenia.
5. Sprawdź całość względem pierwotnego celu i ograniczeń.

**Uwaga:** Części mogą na siebie wpływać. Kilka dobrych rozwiązań lokalnych nie musi tworzyć dobrego rozwiązania całości.

**Źródła:** [S1](#s1).

### 4. Stosuj kontrolowane próby i błędy

**Opis:** Potraktuj każdą próbę jak mały eksperyment. Wybierz pomysł, który ma szansę zadziałać, przewidź wynik, a potem bezpiecznie go sprawdź. Zapisz, co się wydarzyło i czego się z tego dowiadujesz. Jeśli to możliwe, w kolejnej próbie zmień tylko jedną ważną cechę, żeby łatwiej ustalić przyczynę różnicy. Niepowodzenie też się przydaje, jeśli pozwala odrzucić błędny pomysł. Przypadkowe zgadywanie bez sprawdzania wyników niewiele wyjaśnia. Eksperymentuj w ten sposób tylko przy ograniczonym koszcie i ryzyku.

**Przykład:** Przypuszczacie, że złożone paski papieru wzmocnią papierowy most. Budujecie dwa identyczne mosty o długości 20 centymetrów, jeden z trzema paskami, drugi z pięcioma, więc liczba pasków to jedyna różnica. Potem kładziecie na każdym po jednej identycznej książce, aż most się zapadnie: trzy paski utrzymały cztery książki, pięć pasków osiem. Skoro zmieniła się tylko liczba pasków, dodatkowe książki wynikają najpewniej z pasków. Przewidywanie sprawdziło się, bo policzyliście książki. Nie wynika z tego jednak, że każdy most potrzebuje pięciu pasków.

**Kiedy się przydaje:** Przy diagnozowaniu usterek, tworzeniu prototypów i niewielkich poszukiwaniach, gdy testy są tanie i bezpieczne.

**Procedura:**
1. Określ jednoznaczny test sukcesu.
2. Wybierz rozwiązanie, które ma szansę zadziałać, i przewidź, co powinno się wydarzyć.
3. Przetestuj go przy ograniczonym koszcie i ryzyku.
4. Zapisz, co zadziałało, co zawiodło i jakie możliwości wyklucza niepowodzenie.
5. Jeśli to możliwe, zmień jedną istotną cechę i przetestuj ponownie. Nie powtarzaj prób, z których niczego się nie dowiadujesz.

**Uwaga:** Bez zapisu zmian trudno ustalić, co spowodowało poprawę. Nie eksperymentuj bez zabezpieczeń, jeśli skutki mogą być nieodwracalne lub niebezpieczne.

**Źródła:** [S1](#s1).

### 5. Ulepszaj działające rozwiązanie i wychodź ze ślepych zaułków

**Opis:** Zacznij od rozwiązania, które spełnia wszystkie obowiązkowe wymagania. Potem wprowadzaj małe zmiany, na przykład zamień miejscami dwa elementy, i sprawdzaj, czy wynik jest lepszy według wybranego kryterium. Zachowuj udane poprawki. Jeśli żadna drobna zmiana już nie pomaga, być może masz lokalne optimum: najlepszy wynik spośród wariantów dostępnych przez takie zmiany. Zapisz go i spróbuj większej zmiany lub zacznij inaczej. Możesz w ten sposób znaleźć lepsze rozwiązanie, ale nie masz jeszcze dowodu, że jest najlepsze ze wszystkich.

**Przykład:** Klasa ma pięć wieczorów, od poniedziałku do piątku, na naukę pięciu przedmiotów, jeden przedmiot na wieczór. Sprawdziany są stałe: matematyka w środę, fizyka w czwartek, biologia w piątek. Plan dostaje punkt za każdy sprawdzian, którego przedmiot uczycie się poprzedniego wieczoru. Zaczynacie od matematyki, fizyki, historii, biologii i geografii: pasuje tylko biologia, wynik 1. Zamiana poniedziałku i wtorku daje matematykę we wtorek: wynik 2. Teraz każda zamiana sąsiednich wieczorów daje tylko 1 (pomogłaby dopiero większa zmiana, np. zamiana poniedziałku ze środą): to lokalne optimum. Zaczynacie więc od nowa: historia, geografia, matematyka, fizyka, biologia (wynik 0). Trzy zamiany dają historię, matematykę, fizykę, biologię i geografię: wynik 3 to maksimum możliwych punktów, bo sprawdziany są tylko trzy.

**Kiedy się przydaje:** Przy harmonogramach, układach przestrzennych, trasach, podziale zasobów i projektach z wieloma możliwymi rozwiązaniami.

**Procedura:**
1. Ustal, co sprawia, że jedno poprawne rozwiązanie jest lepsze od innego.
2. Przygotuj rozwiązanie początkowe spełniające wymagania.
3. Wypróbuj niewielkie zmiany i zachowuj korzystne ulepszenia.
4. Gdy postęp ustanie, zachowaj kopię najlepszego rozwiązania i spróbuj zacząć od nowa lub wprowadzić większą zmianę.
5. Porównuj najlepszych kandydatów według tych samych kryteriów. Zakończ po osiągnięciu ustalonego poziomu jakości lub limitu czasu.

**Uwaga:** Rozwiązanie lepsze od wszystkich bliskich wariantów nie musi być najlepsze w całym zbiorze możliwości. Podczas poszukiwań zachowuj bezwzględne ograniczenia.

**Źródła:** [S1](#s1), „Improvement heuristics” i „Meta-heuristic methods”; [S3](#s3), części 7.2 i 8.2. To adaptacja do samodzielnej pracy, nie pełna specyfikacja tych algorytmów.

### 6. Oszacuj skalę, zanim zaczniesz dokładnie liczyć

**Opis:** Zanim zaczniesz dokładnie liczyć, oszacuj rząd wielkości, czyli sprawdź, jak dużego wyniku mniej więcej się spodziewać. Zaokrąglij niepewne dane i zapisz jednostki oraz przyjęte założenia. Wykonaj obliczenia dla niższych i wyższych wartości, żeby otrzymać przybliżony zakres. Takie oszacowanie pomaga zauważyć nadmiarowe zero w rachunkach lub plan, który od początku jest nierealny. Nie traktuj go jednak jak dokładnej odpowiedzi ani obietnicy, że koszt na pewno się nie zmieni. Jeśli od wyniku zależy ważna decyzja, może być potrzebne dokładniejsze obliczenie.

**Przykład:** Wasza klasa chce zebrać 100 euro ze sprzedaży przekąsek. Szybkie oszacowanie: 20 uczniów, po 3 przekąski, po 2 euro za sztukę, czyli 20 × 3 × 2 = 120 euro. Część uczniów sprzeda tylko 2 przekąski, a część 4, co daje 20 × 2 × 2 = 80 euro w najgorszym i 20 × 4 × 2 = 160 euro w najlepszym przypadku. Zakres od 80 do 160 euro obejmuje 100, więc cel jest realny. Gdyby dokładny rachunek dał później 1200 euro, oszacowanie od razu pokaże, że wkradło się dodatkowe zero. Koszty i niesprzedane przekąski trzeba jeszcze sprawdzić.

**Kiedy się przydaje:** We wstępnym planowaniu, szybkiej ocenie wykonalności i wykrywaniu niewiarygodnych wyników obliczeń.

**Procedura:**
1. Nazwij szukaną wielkość i jej jednostkę.
2. Rozłóż ją na wielkości łatwiejsze do oszacowania.
3. Wybierz zaokrąglone wartości i zapisz stojące za nimi założenia.
4. Połącz wartości, sprawdzając zgodność jednostek.
5. Dla niepewnych danych wejściowych wypróbuj wiarygodne wartości niskie i wysokie. Podaj przybliżony zakres zamiast pozornej precyzji.

**Uwaga:** Oszacowanie nie jest dokładnym wynikiem, gwarancją ani zobowiązaniem do stałej ceny. Gdy wymaga tego decyzja, użyj bardziej rygorystycznej metody.

**Źródła:** [S1](#s1), „What is Estimation?” i „Improving Estimation Accuracy”.

### 7. Szacuj na podstawie części i podobnych przypadków

**Opis:** Oszacuj pracę na dwa sposoby i porównaj wyniki. Najpierw podziel ją na części, które się nie pokrywają, i każdą wyceń na podstawie podobnej pracy z przeszłości, na przykład liczby minut na montaż jednego nagrania. Dodaj to, co dotyczy całości, na przykład wspólny wstęp i wysyłkę. Potem zestaw sumę z czasem, jaki zajęło podobne całe zadanie; gdy wyniki się różnią, szukaj przyczyny. Dwie drogi, które się zgadzają, dają pewniejsze oszacowanie. Rozróżniaj też dwie wielkości: nakład pracy to czas wszystkich osób zsumowany, a czas trwania biegnie od początku do końca i jest krótszy, gdy ludzie pracują równocześnie.

**Przykład:** Klasowy podcast ma cztery wywiady i szacujecie czas montażu. Montaż jednego wywiadu zajmował wcześniej 15 minut, więc 4 × 15 = 60 minut. Dodajecie 30 minut na wspólny wstęp i wysyłkę: razem 90 minut pracy. Dwie osoby montują po dwa wywiady (30 minut), potem jedna z nich dodaje wstęp i wysyła (30 minut), więc na zegarze mija 30 + 30 = 60 minut. Poprzedni odcinek, też z czterema wywiadami, zajął 120 minut pracy. Różnica 30 minut ma przyczynę: wtedy nauczyciel zgłaszał jeszcze poprawki, a teraz tego kroku nie ma. Zatem 90 minut wygląda wiarygodnie. Po skończeniu zapiszcie rzeczywisty czas i poprawcie stawkę 15 minut.

**Kiedy się przydaje:** Przy szacowaniu nakładu pracy, wydajności, ilości i kosztów, gdy dostępne są odpowiednie dane z przeszłości.

**Procedura:**
1. Podziel pracę na części, które się nie pokrywają.
2. Oszacuj każdą część na podstawie podobnej ukończonej pracy lub odpowiedniego wskaźnika, na przykład czasu na jednostkę.
3. Uwzględnij koordynację, integrację i inne zadania, które nie należą do pojedynczej części.
4. Porównaj sumę z wynikiem podobnego zadania rozpatrywanego jako całość. Wyjaśnij duże różnice.
5. Po zakończeniu porównaj oszacowanie z rzeczywistym wynikiem i popraw założenia na przyszłość.

**Uwaga:** Nakład pracy i czas od rozpoczęcia do zakończenia to różne wielkości. Praca równoległa, zależności i wspólne ryzyka wpływają na wynik całości; nietypowa praca może nie pasować do historycznych wskaźników.

**Źródła:** [S1](#s1), „Improving Estimation Accuracy” i „Business”.

### 8. Sprawdź, czy skrót myślowy cię nie zwodzi

**Opis:** Pierwsza odpowiedź może wynikać ze skrótu myślowego. Najczęstszy to dostępność: to, co łatwo sobie przypomnieć, wydaje się częstsze, niż jest, na przykład dwa autobusy, na które długo czekaliście. Inne skróty to ocenianie po podobieństwie i trzymanie się pierwszej usłyszanej liczby. Potraktuj więc pierwszą odpowiedź jak przypuszczenie do sprawdzenia. Zastanów się, który skrót mógł za nią stać, poszukaj danych o podobnych przypadkach, także takich, które jej przeczą, i oszacuj to samo inną drogą. Porównaj obie odpowiedzi i powiedz, czego nadal nie wiesz.

**Przykład:** Autobus do szkoły spóźnił się dwa razy z rzędu, więc zgadujesz, że z następnych dziesięciu kursów spóźni się połowa, czyli 5. Te dwa spóźnienia łatwo sobie przypomnieć, bo były irytujące: to właśnie dostępność. Druga droga: w notatkach z ostatnich dziesięciu kursów są tylko 2 spóźnione, te same, które pamiętasz. To 20 procent, czyli lepiej pasuje niż 50. Dziesięć kursów to mała próba, a deszcz mógłby coś zmienić, więc nie mówisz „autobus jest punktualny”, tylko „spóźniają się około 2 kursy na 10, ale nie mam pewności”. Sprawdzenie poprawiło wrażenie, ale nie przewidziało przyszłości.

**Kiedy się przydaje:** Przy niepewnych ocenach, interpretowaniu dowodów i sprawdzaniu oszacowań.

**Procedura:**
1. Zapisz pierwszą odpowiedź i powód, dla którego wydaje się wiarygodna.
2. Zapytaj, czy wynika głównie z niedawnego lub zapadającego w pamięć przykładu, podobieństwa albo początkowej liczby.
3. Poszukaj odpowiednich danych i porównywalnych przypadków, w tym dowodów przeciwko pierwszej odpowiedzi.
4. Opracuj drugie oszacowanie lub wyjaśnienie inną drogą, zamiast tylko korygować pierwsze.
5. Porównaj wyniki i określ, co pozostaje niepewne.

**Uwaga:** Dostępność, reprezentatywność i zakotwiczenie opisują możliwe skróty w ocenianiu, a nie niezawodne procedury ustalania prawdy.

**Źródła:** [S1](#s1), „Examples of Common Heuristics” i „Limitations”.

### 9. Tymczasowo usuń trudne ograniczenie

**Opis:** Wybierz jedną regułę, która utrudnia zadanie, i tylko w szkicu udawaj, że jej nie ma. W grafiku dyżurów może to być „nikt nie dyżuruje dwa dni z rzędu”. Zadanie robi się łatwe, więc szybko dostajesz kompletny szkic. Potem sprawdź go z pominiętą regułą: miejsca, które ją łamią, pokazują, gdzie naprawdę leży trudność. Przywróć regułę i popraw tylko te miejsca. Czasem szkic pokazuje też, jak dobra może być odpowiedź w najlepszym razie (zobacz schemat 11). Reguł bezpieczeństwa, prawa i dostępności nie wolno pomijać w końcowym wyniku.

**Przykład:** Klasa układa grafik dyżurów na poniedziałek–piątek: po 2 uczniów dziennie, każdy z pięciu uczniów (A–E) dyżuruje dokładnie dwa razy i nikt nie dyżuruje dwa dni z rzędu. Wszystkie trzy reguły naraz trudno pogodzić. Na chwilę pomijacie ostatnią i od razu wypełniacie tabelę: Pn A B, Wt A C, Śr D E, Cz E B, Pt C D. Teraz sprawdzacie pominiętą regułę: A dyżuruje w poniedziałek i wtorek, a E dyżuruje w środę i czwartek. Kłopot sprawiają tylko dwie osoby. Zamieniacie A we wtorek z E w środę: Wt E C, Śr D A. Sprawdzacie jeszcze raz: wszystkie reguły są spełnione, a szkic pokazał tylko, gdzie jest trudność.

**Kiedy się przydaje:** Przy planach obciążonych zbyt wieloma ograniczeniami, podziale zasobów, harmonogramowaniu i optymalizacji.

**Procedura:**
1. Wypisz pierwotne ograniczenia, oddzielając rzeczywiste wymagania od założeń lub zwyczajów.
2. Wybierz jedno trudne ograniczenie i jawnie usuń je lub złagodź w roboczym modelu.
3. Rozwiąż tę wersję, nie zmieniając pierwotnego celu.
4. Sprawdź, które pierwotne ograniczenia narusza wynik.
5. Przywracaj je pojedynczo, dostosowując rozwiązanie lub wykorzystując wynik wyłącznie jako oszacowanie graniczne bądź wskazówkę.

**Uwaga:** Rozwiązanie problemu po relaksacji może być niemożliwe w rzeczywistym zadaniu. Wymagania bezpieczeństwa łagodź wyłącznie w modelu; nigdy nie pomijaj ich bez wyjaśnienia w końcowym rozwiązaniu.

**Źródła:** [S2](#s2), „Constraint Relaxation”.

### 10. Najpierw dopuść ułamki, potem wróć do całych jednostek

**Opis:** Niektórych wyborów nie da się podzielić: stoisko na festynie przygotowujesz w całości albo wcale, autobus wynajmujesz cały, a osoby nie przydzielisz w połowie. Gdy takich wyborów jest kilka, trzeba sprawdzać wiele kombinacji. Na chwilę udaj więc, że dzielenie jest możliwe: pół stoiska zajmuje pół czasu i daje połowę punktów. Wtedy wystarczy brać po kolei to, co daje najwięcej za każdą godzinę, a wynik pokaże, ile najwyżej da się osiągnąć (sufit). Na koniec wróć do całych wyborów i sprawdź prawdziwe kombinacje, bo zaokrąglony ułamek może przekroczyć limit.

**Przykład:** Samorząd ma 6 godzin na stoiska na festyn i chce zdobyć najwięcej punktów. Stoisko A zajmuje 4 godziny i daje 8 punktów, B zajmuje 3 godziny i daje 6 punktów, a C zajmuje 2 godziny i daje 3 punkty. Pół stoiska nie istnieje, ale na próbę udajecie, że można: A i B dają po 2 punkty za godzinę, C tylko 1,5. Bierzecie całe A, a w pozostałe 2 godziny 2/3 B za 4 punkty. Razem 12 punktów. Każdy prawdziwy plan jest też dozwolony w wersji z ułamkami, a tam więcej niż 12 się nie da, więc żaden prawdziwy plan nie da więcej. Z całych stoisk A + B to 7 godzin, za dużo; A + C mieści się w 6 godzinach i daje 11 punktów, więcej niż B + C (9) czy samo A (8).

**Kiedy się przydaje:** Przy wyborze przedmiotów, przydzielaniu zasobów i planowaniu ilości, które ostatecznie muszą być całkowite.

**Procedura:**
1. Wskaż decyzje wymagające liczb całkowitych lub wyboru tak/nie.
2. Dopuść ułamki w tych samych granicach, zachowując pozostałe ograniczenia i cel.
3. Rozwiąż problem po relaksacji.
4. Potraktuj wynik jako wskazówkę przy szukaniu dopuszczalnych wyborów całkowitoliczbowych.
5. Ponownie sprawdź każde pierwotne ograniczenie i porównaj końcową wartość z oszacowaniem uzyskanym z relaksacji.

**Uwaga:** Zaokrąglenie może naruszyć budżet, pojemność lub wymaganą dokładną sumę. Bliskie rozwiązanie całkowitoliczbowe może nie istnieć, a najlepsze poprawne rozwiązanie może leżeć daleko.

**Źródła:** [S2](#s2), „Continuous Relaxation” i „Linear (LP) Relaxation”.

### 11. Wyznacz oszacowania, aby ocenić możliwą poprawę

**Opis:** Granica to wartość, poza którą najlepszy wynik nie może się znaleźć. Załóżmy, że szukasz najkrótszej trasy. Pomiń jedną regułę, na przykład „jedź ulicami”, i znajdź najlepszą odpowiedź łatwiejszego zadania. Prawdziwa trasa jest tam też dozwolona, więc najlepsza odpowiedź łatwego zadania może być tylko krótsza albo równa: to granica dolna. Prawdziwa trasa, którą znajdziesz, pokazuje, że najlepsza ma najwyżej tyle: to granica górna. Najlepszy wynik leży więc między nimi, a różnica mówi, ile jeszcze możesz zyskać. Gdy granice się spotkają, wynik jest dowiedziony. Przy szukaniu największego wyniku role się odwracają. Każdą granicę trzeba uzasadnić, a nie zgadywać.

**Przykład:** Jedziesz rowerem z domu do szkoły i szukasz najkrótszej trasy ulicami. Pomijasz regułę o ulicach: w linii prostej jest 8 km. Trasy ulicami są dozwolone także w tej łatwiejszej wersji, więc żadna nie może być krótsza: 8 km to granica dolna. Znajdujesz trasę ulicami na 10 km, więc najlepsza ma najwyżej 10 km. Najlepsza trasa ulicami leży między 8 a 10 km, a dalsze szukanie może zaoszczędzić najwyżej 2 km. Później znajdujesz trasę na 9 km: przedział zwęża się do 8–9 km. Trasa ulicami na dokładnie 8 km od razu dowiodłaby, że jest najlepsza; w innym razie potrzebna jest lepsza granica dolna.

**Kiedy się przydaje:** W optymalizacji, sprawdzaniu wykonalności i decydowaniu, czy warto kontynuować poszukiwania.

**Procedura:**
1. Określ, czy coś minimalizujesz, na przykład odległość, czy maksymalizujesz, na przykład wielkość produkcji.
2. Uzyskaj udowodnione oszacowanie graniczne, na przykład znajdując optimum poprawnie zrelaksowanego problemu.
3. Znajdź rozwiązanie spełniające wszystkie pierwotne ograniczenia i oblicz jego wartość.
4. Przy minimalizacji optimum problemu po relaksacji daje oszacowanie dolne, a wartość rozwiązania dopuszczalnego daje oszacowanie górne. Przy maksymalizacji jest odwrotnie.
5. Porównaj różnicę. Jeśli wartości są równe, optymalność została wykazana; w przeciwnym razie podaj pozostałą różnicę.

**Uwaga:** Dowolne przybliżone rozwiązanie problemu po relaksacji nie jest automatycznie udowodnionym oszacowaniem granicznym. Zmiana funkcji celu wymaga osobnego uzasadnienia oszacowania.

**Źródła:** [S2](#s2), „Mathematical problem relaxation” i „Concluding Remarks”.

### 12. Przypisz kompromisom jawny koszt

**Opis:** Czasem nie da się spełnić wszystkich życzeń naraz: poprawa jednego wyniku pogarsza inny. Oddziel więc twarde zasady, których nie wolno złamać, od miękkich życzeń, które możesz wymieniać jedno na drugie. Każdemu miękkiemu życzeniu przypisz cenę w punktach karnych za jednostkę niepowodzenia. Dzięki temu różne straty mierzysz jedną miarą, więc możesz je dodać i porównać plany. Sprawdź też inne ceny i to, czy zmieniają wybór. Liczby porządkują decyzję, ale nie dowodzą, że zwycięski plan jest matematycznie najlepszy.

**Przykład:** Szkolny zespół wybiera plan próby. Dwie zasady są twarde: sala jest zarezerwowana, a nagranie trzeba wysłać w piątek. Dwa życzenia są miękkie i mają cenę: 5 punktów karnych za każdą nieobecną osobę i 1 punkt za każde 15 minut, o które próba przedłuża się poza planowe zakończenie o 18:00. Plan A czeka, aż przyjdą wszyscy, i kończy się o 18:45: 3 × 1 = 3 punkty. Plan B zaczyna się o czasie bez jednej osoby i kończy o 18:00: 1 × 5 = 5 punktów. Wygrywa A, bo 3 to mniej niż 5. Gdyby nieobecność kosztowała tylko 2 punkty, wygrałby B z wynikiem 2, więc ceny trzeba podawać otwarcie. Żadna cena nie pozwala pominąć sali ani piątkowego nagrania.

**Kiedy się przydaje:** Przy godzeniu preferencji dotyczących harmonogramów, wykorzystania zasobów i projektów.

**Procedura:**
1. Oddziel ograniczenia nienegocjowalne od celów, w których dopuszczasz kompromisy.
2. Określ sposób mierzenia odstępstwa od celu i przypisz mu jawną wagę.
3. Porównuj kandydatów na rozwiązanie, uwzględniając pierwotną ocenę oraz ważone koszty odstępstw.
4. Zmieniaj wagi i obserwuj, które wybory się zmieniają.
5. Przedstaw kompromisy i przed wyborem sprawdź wszystkie nienegocjowalne ograniczenia.

**Uwaga:** Kara nie oznacza zgody na złamanie bezwzględnego wymagania. To praktyczna adaptacja modelu kar inspirowana omówieniem relaksacji Lagrange'a w źródle, nie formalny algorytm tej relaksacji. Dowolnie dobrane kary nie wyznaczają udowodnionych granic optimum.

**Źródła:** [S2](#s2), „Lagrangian Relaxation”.

### 13. Dodawaj brakujące ograniczenia, gdy ujawnią je niepowodzenia

**Opis:** Zacznij od uproszczonej wersji problemu, która ma tylko podstawowe reguły, i znajdź jakąkolwiek odpowiedź. Sprawdź ją w prawdziwej sytuacji. Gdy zawodzi, ustal dlaczego i dopisz jedną ogólną regułę, która wyklucza tego rodzaju błąd, a nie tylko tę jedną odpowiedź. Taką regułę nazywa się cięciem, bo odcina złych kandydatów. Potem szukaj nowej odpowiedzi i powtarzaj. Każda reguła musi wynikać z zadania i zostawiać wszystkie poprawne odpowiedzi; reguła oparta na upodobaniu może wyrzucić dobre rozwiązanie.

**Przykład:** W szkole są trzy koła (robotyka, szachy, chór) oraz dwie sale, pracownia i aula, obie wolne o 15:00 i 16:00. Podstawowa reguła: każde koło dostaje salę i godzinę, a żadna sala nie jest zajęta dwa razy naraz. Pierwszy plan stawia robotykę i szachy na 15:00, ale jeden uczeń chodzi na oba koła. Nowa ogólna reguła: koła ze wspólnym uczniem nie spotykają się naraz. Następny plan daje robotyce aulę, a tam nie ma gniazdek dla robotów. Nowa reguła: robotyka tylko w pracowni. Obie reguły wynikają z faktów, więc żaden poprawny plan nie ginie. Trzeci plan przechodzi: robotyka w pracowni i chór w auli o 15:00, szachy w auli o 16:00.

**Kiedy się przydaje:** Przy złożonych modelach planowania, konfiguracji i poszukiwaniach z wieloma ograniczeniami.

**Procedura:**
1. Rozwiąż uproszczoną wersję problemu.
2. Sprawdź kandydata względem pierwotnych wymagań.
3. Ustal przyczynę niepowodzenia i wyraź ją jako ogólne ograniczenie.
4. Sprawdź, czy ograniczenie zachowuje każde poprawne rozwiązanie, a następnie je dodaj.
5. Rozwiąż problem ponownie. Powtarzaj, aż kandydat przejdzie kontrolę lub model wykaże, że żaden kandydat nie może spełnić wymagań.

**Uwaga:** Nie wykluczaj odpowiedzi tylko dlatego, że jest nietypowa. Poprawne ograniczenie musi wynikać z pierwotnego problemu, nie z twoich preferencji.

**Źródła:** [S2](#s2), „Cutting Plane Methods”. To schemat do samodzielnego zastosowania, na którym opiera się formalna metoda.

### 14. Podejmuj decyzje etapami, pozostawiając późniejsze wybory otwarte

**Opis:** Długi plan decyduj blok po bloku, zamiast ustalać wszystkie szczegóły naraz. Blok to grupa powiązanych decyzji, na przykład dekoracje, gry albo sprzątanie. Pierwszy blok rozplanuj dokładnie, a późniejsze naszkicuj z grubsza i sprawdź, czy zostaje dla nich dość czasu, miejsca i materiałów. Jeśli któryś późniejszy blok już się nie mieści, wróć do wcześniejszego wyboru i go zmień. Wczesne decyzje mogą zablokować dalszą pracę, a metoda nie gwarantuje najlepszego planu.

**Przykład:** Maja ma salę na 4 godziny, żeby udekorować ją na festyn, poprowadzić gry i posprzątać. Decyduje etapami (blokami). Najpierw wybiera dekoracje: bogaty zestaw zajmie 2,5 godziny. Dla kolejnych etapów szkicuje tylko przybliżone czasy: gry 1,5 godziny, sprzątanie 1 godzina. Sprawdza: 2,5 + 1,5 + 1 = 5 godzin, czyli o godzinę za dużo. Wraca więc do pierwszego wyboru: proste dekoracje zajmą 1,5 godziny, a 1,5 + 1,5 + 1 = 4 godziny mieści się dokładnie. Bez tego sprawdzenia problem wyszedłby dopiero w trakcie festynu.

**Kiedy się przydaje:** Przy wieloetapowych harmonogramach i planach zbyt dużych, by rozstrzygnąć je w całości naraz.

**Procedura:**
1. Podziel decyzje na etapy lub logiczne bloki.
2. Na razie nie zmieniaj wcześniejszych decyzji. W bieżącym etapie wybieraj tylko rzeczywiste możliwości, bez ułamkowych uproszczeń, a późniejsze etapy potraktuj w sposób uproszczony.
3. Rozwiąż bieżący podproblem i sprawdź, czy nadal pozostaje miejsce na późniejszą pracę.
4. Ustal decyzje z bieżącego bloku i przejdź do następnego.
5. Jeśli późniejszy blok okaże się niewykonalny, wróć do wcześniejszych decyzji, zamiast uznawać cały plan za działający.

**Uwaga:** Wczesne wybory mogą zablokować późniejsze etapy. To heurystyka, nie gwarancja wykonalności ani optymalności.

**Źródła:** [S2](#s2), „Relax-and-Fix Heuristics”.

### 15. Przeplataj ogólny plan ze sprawdzaniem szczegółów

**Opis:** Duży plan wyznacza kierunek, ale może wyglądać dobrze, dopóki nie rozpiszesz szczegółów. Dlatego przechodź tam i z powrotem: zaproponuj plan, potem sprawdź, ile naprawdę potrzeba zadań, czasu, osób i pieniędzy. Jeśli coś się nie mieści, wskaż dokładnie, która część to powoduje, i na tej podstawie zmień plan. Taka informacja zwrotna to konkretny fakt ze szczegółów, a nie mgliste przeczucie, że się nie uda. Powtarzaj, aż oba poziomy się zgadzają. Zgodność nie gwarantuje sukcesu, więc na końcu sprawdź całość.

**Przykład:** Czworo uczniów planuje film naukowy. Ogólny plan: nagrać całe doświadczenie na żywo w szkolnej pracowni, którą mają tylko na 20 minut. Sprawdzenie szczegółów: przygotowanie doświadczenia zajmuje 12 minut, a jego nagranie 10, czyli 12 + 10 = 22 minuty, o 2 więcej niż mają. Wniosek jest konkretny: w pracowni nie mieści się samo przygotowanie. Poprawiają więc ogólny plan: zestaw złożą w domu, a w szkole tylko go podłączą, co zajmie 4 minuty. Nowe sprawdzenie: 4 + 10 = 14 minut, więc zostaje 6 minut na powtórkę. Plan i szczegóły są już zgodne.

**Kiedy się przydaje:** Przy wyborze lokalizacji, planowaniu obsady, projektowaniu systemów i innych zadaniach, w których trzeba podejmować zarówno ogólne, jak i szczegółowe decyzje.

**Procedura:**
1. Oddziel ogólne wybory od szczegółowej pracy, która z nich wynika.
2. Zaproponuj ogólny plan.
3. Opracuj szczegóły przy tych założeniach, sprawdzając wykonalność i koszt.
4. Jeśli szczegóły nie dają się zrealizować, wskaż odpowiedzialną za to kombinację ogólnych decyzji. Uwzględnij wykryte ograniczenie lub informację o koszcie w poprawionym planie.
5. Powtarzaj, aż oba poziomy będą zgodne, a następnie sprawdź całe rozwiązanie.

**Uwaga:** Informacja zwrotna musi być uzasadniona i wystarczająco konkretna, aby poprawić kolejną propozycję. Ta adaptacja do samodzielnej pracy nie daje matematycznych gwarancji formalnych algorytmów dekompozycji.

**Źródła:** [S2](#s2), „Benders Decomposition”.

### 16. Najpierw rozwiąż mały lub prosty przypadek

**Opis:** Jeśli duże zadanie cię przytłacza, spróbuj najpierw mniejszej wersji: z mniejszą liczbą obiektów, mniejszymi liczbami lub prostszymi regułami. Zachowaj jednak tę zależność, którą chcesz zrozumieć. Rozwiąż uproszczone zadanie do końca, a potem sprawdź nieco większy przypadek. Zwróć uwagę, które kroki można powtórzyć. To może podpowiedzieć metodę dla całego zadania. Sam sukces w kilku małych przypadkach nie jest jeszcze dowodem. Wróć do pierwotnych danych i wyjaśnij, dlaczego sposób nadal działa przy obowiązujących regułach.

**Przykład:** W turnieju gra 20 osób i każda rozgrywa z każdą inną dokładnie jedną partię. Ile będzie partii? Zacznij od małych przypadków: dwóch graczy rozgrywa 1 partię, trzech rozgrywa 3, czterech rozgrywa 6. Co się powtarza: każdy nowy gracz gra po jednej partii z każdym, kto już jest, więc przejście z 3 graczy na 4 dodaje 3 partie. Dla 20 graczy ostatni dokłada 19, więc razem jest 1 + 2 + … + 19, czyli suma wszystkich liczb od 1 do 19: 190 partii. Małe przypadki podsunęły regułę, a pomysł z nowym graczem ją wyjaśnia. Działa ona tylko wtedy, gdy każda para gra raz; przy innych zasadach trzeba sprawdzić ją od nowa.

**Kiedy się przydaje:** Przy nieznanych regułach, zliczaniu, nauce, prototypach i szukaniu pierwszego punktu zaczepienia.

**Procedura:**
1. Zastąp duże liczby, wiele obiektów lub kilka wymiarów przypadkiem, z którym łatwiej pracować.
2. Rozwiąż go w całości i zapisz ważne kroki.
3. Wypróbuj przypadek nieco większy lub mniej wygodny.
4. Wskaż, co pozostało takie samo, i zaproponuj metodę do ponownego użycia.
5. Wróć do pierwotnego rozmiaru i sprawdź, dlaczego metoda nadal działa.

**Uwaga:** Zmniejszenie przykładu nie musi być formalną relaksacją problemu optymalizacyjnego. Sukces w szczególnym przypadku jest wskazówką, nie dowodem ogólnego twierdzenia.

**Źródła:** [S2](#s2), „Problem Relaxation in K-12 Math Problem-Solving”, praktyczne strategie do pracy w klasie; [S3](#s3), część 5.

### 17. Doprecyzuj problem i zakwestionuj ukryte założenia

**Opis:** Zanim zaczniesz rozwiązywać, doprecyzuj pytanie. Zapisz cel, czyli co uznasz za sukces, fakty, które są podane lub sprawdzone, oraz ograniczenia, które naprawdę obowiązują. Osobno wypisz założenia: rzeczy przyjęte za prawdę bez sprawdzenia. Zapytaj, czy dana reguła jest prawdziwa, czy tylko tak się przyjęło. To ważne, bo doskonałe rozwiązanie trochę innego pytania nikomu nie pomoże. Po rozwiązaniu wróć do pytania i sprawdź, czy odpowiedź dotyczy tego, o które pytano.

**Przykład:** Klasa pyta: „Czy wszyscy dotrą do muzeum przed 9:00?”. Najpierw ustalacie, kogo obejmuje „wszyscy”: 28 uczniów i 2 nauczycieli, razem 30 osób. Autobus odjeżdża o 8:10 i jedzie 35 minut, więc będzie na miejscu o 8:45, na czas. Szkoła wymaga miejsca siedzącego dla każdego, a ten autobus ma tylko 28 miejsc. Łatwo po cichu założyć, że dwie osoby postoją, i odpowiedzieć „tak”. Porównajcie to założenie z regułą: nie wytrzymuje, więc 2 osoby nie mają miejsca i odpowiedź brzmi „nie”, chociaż czas pasuje. Klasa potrzebuje większego autobusu albo drugiego. Nazwanie założenia pokazało, na jakie pytanie naprawdę odpowiadacie.

**Kiedy się przydaje:** Przy niemal każdym problemie, szczególnie gdy nie ma zgody co do tego, co właściwie trzeba rozwiązać.

**Procedura:**
1. Sformułuj pytanie własnymi słowami i opisz, co będzie oznaczało sukces.
2. Wypisz niewiadome, podane fakty i ograniczenia.
3. Zapisz założenia oddzielnie od faktów. Zapytaj, które ograniczenia są rzeczywiste, a które wynikają z przyzwyczajeń lub konwencji.
4. Sprawdź, czy informacje są wystarczające, sprzeczne lub nieistotne.
5. Wybierz pierwszy plan, realizuj go z bieżącą kontrolą, a następnie oceń zarówno odpowiedź, jak i metodę.

**Uwaga:** Rozwiązanie precyzyjnie postawionego pytania jest bezużyteczne, jeśli pytanie było niewłaściwe. Sprawdź, czy przyjęte sformułowanie nadal służy pierwotnemu celowi.

**Źródła:** [S3](#s3), części 3, 5 i 6; [S2](#s2), cztery etapy rozwiązywania problemów; [S5](#s5), s. 220-223, w tym potrzeba powrotów do wcześniejszych etapów.

### 18. Zmień sposób przedstawienia problemu

**Opis:** Opisz ten sam problem inaczej: narysuj go, ułóż tabelę, zapisz równanie albo zbuduj model z przedmiotów. Nowa forma ma ułatwić zobaczenie ukrytej zależności, na przykład gdy nieznane liczby oznaczysz literami. Oznacz każdą wielkość i przenieś wszystkie warunki z treści, czyli każdy fakt z opisu musi znaleźć się w nowej postaci, bo inaczej rozwiążesz inne zadanie. Szkic podpowiada odpowiedź, ale jej nie dowodzi.

**Przykład:** Obwód prostokąta wynosi 26 cm, a jego długość jest o 3 cm większa od szerokości. W słowach trudno to ogarnąć, więc rysujesz prostokąt i oznaczasz szerokość literą w, a długość jako w + 3. Obwód to dwie szerokości i dwie długości: 2w + 2(w + 3) = 26, czyli 4w + 6 = 26. Stąd 4w = 20, więc w = 5, a długość to 8. Sprawdzenie: 2 × 5 + 2 × 8 = 26, a 8 to o 3 więcej niż 5. Rysunek i litery zamieniły opis słowny w równanie, nie gubiąc żadnego z dwóch warunków.

**Kiedy się przydaje:** Przy zawiłych zadaniach tekstowych, niewygodnych wyrażeniach algebraicznych, relacjach przestrzennych i splątanych zależnościach.

**Procedura:**
1. Ustal, co trudno dostrzec w obecnym przedstawieniu.
2. Wybierz formę, która to uwidoczni, na przykład rysunek dla relacji przestrzennych lub tabelę dla przypadków.
3. Oznacz każdą ważną wielkość i przenieś wszystkie ograniczenia.
4. Rozwiąż lub zbadaj problem w nowej postaci.
5. Przełóż wynik z powrotem na pierwotną postać i sprawdź, czy niczego nie pominięto ani nie dodano.

**Uwaga:** Przekształcenie równoważne zachowuje problem. Przybliżenie go zmienia i wymaga osobnej kontroli; szkic nie dowodzi dokładnej zależności.

**Źródła:** [S3](#s3), część 5, „Substitution or transformation” i „Abstraction”; [S2](#s2), modele z użyciem konkretnych przedmiotów.

### 19. Sprawdź jednostki i przypadki graniczne

**Opis:** Dopisz jednostki do każdej mierzonej wielkości i wypróbuj proste przypadki skrajne, zanim zaufasz wzorowi. Jednostki mówią, co dokładnie obliczasz: odległość podzielona przez czas daje prędkość, a czas podzielony przez odległość daje godziny na kilometr. Proste przypadki to zero, jeden, równe wartości oraz najmniejsza i największa dozwolona wartość. Mogą ujawnić odwrócone działanie albo granicę modelu, ale ich przejście nie dowodzi, że wzór jest dobry. Nie wstawiaj niedozwolonych danych, na przykład zera godzin do dzielenia.

**Przykład:** Rowerzysta przejeżdża 18 km w 1,5 godziny, a ty szukasz jego prędkości. Łatwo podzielić w złą stronę i obliczyć 1,5 ÷ 18, czyli około 0,083. Dopisz jednostki: godziny podzielone przez kilometry to godziny na kilometr, a nie prędkość, więc dzielenie jest odwrócone. Poprawnie: 18 ÷ 1,5 = 12 km/h. Teraz przypadki skrajne: 0 km w 1,5 godziny daje 0 km/h, tak jak powinno być: brak drogi to brak prędkości. A 36 km, czyli dwa razy dalej, w tym samym czasie daje 24 km/h, dwa razy szybciej, tak jak powinno być. Zera godzin nie sprawdzasz, bo przez zero nie można dzielić.

**Kiedy się przydaje:** Przy wzorach, oszacowaniach, modelach i wykrywaniu błędów przed szczegółowymi obliczeniami.

**Procedura:**
1. Dopisz jednostki do wszystkich mierzonych wielkości i sprawdź ich zgodność po obu stronach każdego równania.
2. Sprawdź proste dane wejściowe, takie jak zero, jeden, równe wielkości lub przypadek pusty, jeśli są dopuszczalne.
3. Zbadaj, co dzieje się w pobliżu dozwolonego minimum lub maksimum albo gdy wielkość staje się bardzo duża.
4. Porównaj to zachowanie z wymaganiami pierwotnej sytuacji.
5. Wyjaśnij każdą rozbieżność, w tym możliwość, że przy danej granicy model przestaje obowiązywać.

**Uwaga:** Przejście tych kontroli nie dowodzi poprawności. Nie oczekuj sensownego zachowania poza określonym zakresem stosowalności modelu.

**Źródła:** [S3](#s3), część 5, „Dimensional analysis” i „Limiting cases”.

### 20. Wykorzystaj symetrię, aby nie powtarzać pracy

**Opis:** Szukaj symetrii, czyli zmiany, która nie łamie żadnej reguły i nie zmienia celu: na przykład przesunięcia wszystkich o jedno miejsce, zamiany dwóch jednakowych części albo zmiany oznaczeń. Jeśli różne przypadki po takiej zmianie stają się takie same, policz albo rozwiąż tylko jeden z nich i przenieś wynik na resztę. Najpierw sprawdź reguły: oznaczone miejsce, inny kolor albo wyróżniony gracz psuje symetrię.

**Przykład:** Czworo przyjaciół – Ania, Bartek, Celina i Darek – siada przy okrągłym stole bez oznaczonych miejsc. Układem jest kolejność osób dookoła stołu zgodnie z ruchem wskazówek zegara, więc gdy wszyscy przesiądą się o jedno miejsce, nic się nie zmienia. Takich przesunięć jest 4, więc policzenie wszystkich 4 × 3 × 2 × 1 = 24 sposobów posadzenia zlicza każdy układ 4 razy. Lepiej posadzić Anię na dowolnym miejscu, co usuwa przesuwanie, a pozostałą trójkę ustawić na 3 × 2 × 1 = 6 sposobów. Sprawdzenie: 24 ÷ 4 = 6. Gdyby jedno krzesło było oznaczone „przy drzwiach”, przesunięcie zmieniałoby, kto na nim siedzi, więc każde z 24 posadzeń byłoby inne.

**Kiedy się przydaje:** W geometrii, zliczaniu, układaniu obiektów i optymalizacji z wymiennymi elementami.

**Procedura:**
1. Znajdź przekształcenia, które zachowują wszystkie reguły i cel.
2. Pogrupuj przypadki równoważne względem tych przekształceń.
3. Rozwiąż jeden przypadek reprezentujący każdą grupę.
4. Przenieś wynik na przypadki równoważne.
5. Jeśli zliczasz, starannie uwzględnij rozmiary grup; niektóre konfiguracje mają więcej symetrii niż inne.

**Uwaga:** Problem symetryczny nie musi mieć wyłącznie symetrycznych rozwiązań. Ograniczenia różnicujące elementy mogą zniszczyć pozorną symetrię.

**Źródła:** [S3](#s3), część 5, „Symmetry reduction”.

### 21. Porównuj wybory przez ich skutki i kompromisy

**Opis:** Przy każdym wyborze zapisz, co możesz zyskać, co stracić i z czego rezygnujesz. Gdy wynik jest niepewny, wypisz możliwe skutki. Prawdopodobieństwo, czyli uzasadnione oszacowanie, jak często coś się zdarza, przypisuj skutkowi tylko wtedy, gdy masz do tego dane: brak wiedzy to nie 50 procent. Z prawdopodobieństwami możesz obliczyć wynik oczekiwany, czyli średni wynik, gdyby wybór powtarzać wiele razy. Sprawdź też najgorszy skutek, bo jedna średnia go ukrywa.

**Przykład:** Rita wybiera jeden z dwóch sposobów nauki do sprawdzianu. Plan A zajmuje dwie godziny. W czterech podobnych kartkówkach po takiej nauce trzy razy dostała 80 punktów, a raz 60, więc szacuje 75 procent szans na 80 punktów i 25 procent na 60. Wynik oczekiwany, czyli średnia z wielu powtórzeń, to 0,75 × 80 + 0,25 × 60 = 75 punktów. Plan B zajmuje godzinę, ale Rita nie ma kartkówek, które by go oceniły, więc jego szansa jest nieznana, a nie równa 50 procent. Może go wypróbować, ale nie obliczy średniej z wymyślonej liczby. A jeśli 60 punktów to dla niej za mało, bo nie zalicza, średnia 75 nie rozstrzyga wyboru.

**Kiedy się przydaje:** Przy decyzjach obarczonych niepewnością, konkurujących celach lub kilku rozsądnych możliwościach.

**Procedura:**
1. Wypisz wykonalne opcje, w razie potrzeby uwzględniając także brak działania.
2. Rozrysuj ważne możliwe skutki każdej opcji.
3. Zapisz korzyści, koszty, porzucone alternatywy i oszacowania prawdopodobieństw, które potrafisz uzasadnić.
4. Porównaj skutki według spójnych kryteriów. Jeśli wartości liczbowe i prawdopodobieństwa mają sens, oblicz sumy ważone prawdopodobieństwami.
5. Przed decyzją zmieniaj niepewne założenia i sprawdzaj niekorzystne scenariusze.

**Uwaga:** Korzystna średnia może ukrywać niedopuszczalną stratę. Nie wymyślaj prawdopodobieństw ani nie ukrywaj ocen wartościujących w jednym wskaźniku.

**Źródła:** [S3](#s3), części 7.3 i 9.

### 22. Rozrysuj zależności i motywacje uczestników

**Opis:** Narysuj problem jako mapę: osoby lub części jako punkty, a strzałki pokazują, kto komu przekazuje pracę lub na kogo wpływa. Na mapie szukaj wąskiego gardła, czyli miejsca, które ogranicza tempo całości, oraz zachęt, czyli nagród sprawiających, że ludzie wybierają dane zachowanie. Taka mapa pomaga przewidzieć skutki uboczne zmiany. Pokazuje powiązania, a nie przyczyny, więc najpierw wypróbuj małą zmianę i oceń cały wynik.

**Przykład:** Czworo uczniów wysyła po 4 albo 5 slajdów do jednej koleżanki, redaktorki, która składa prezentację na termin. Nauczyciel daje punkt za każdy slajd, więc każdy wysyła ich coraz więcej. Redaktorka dostaje późno 18 slajdów, w dużej części powtarzających te same treści, i nie zdąży. Mapa pokazuje dlaczego: punkt za slajd to zachęta, która zalewa redaktorkę, czyli wąskie gardło. Uczniowie proszą nauczyciela o próbę: ocena całej prezentacji i najwyżej 3 slajdy na osobę. Teraz przychodzi 4 × 3 = 12 slajdów bez powtórzeń, a redaktorka kończy na czas. Jedna próba sugeruje, że zasada pomogła, ale nie dowodzi, że spowodowała każdą poprawę.

**Kiedy się przydaje:** W problemach organizacyjnych, przy wąskich gardłach procesów, koordynacji i zmianach wywołujących skutki uboczne.

**Procedura:**
1. Narysuj ważne elementy lub uczestników jako węzły.
2. Połącz je zależnościami, przepływami lub oddziaływaniami i zaznacz ich kierunek.
3. Poszukaj wąskich gardeł, pętli sprzężenia zwrotnego i konkurujących celów.
4. Przewidź wpływ proponowanej zmiany na resztę systemu i możliwe reakcje pozostałych uczestników.
5. Przetestuj zmianę w ograniczonym zakresie i oceń wynik całego systemu, nie tylko ulepszonej części.

**Uwaga:** Schemat sieci jest modelem, a nie dowodem istnienia związku przyczynowego. Nie zakładaj, że ludzie mają te same informacje lub zachowują się dokładnie tak, jak przewiduje model.

**Źródła:** [S3](#s3), części 8.1 i 8.4. Procedura jest praktyczną adaptacją tych podejść.

### 23. Eksperymentuj, znajdź wzorzec i go wyjaśnij

**Opis:** Wykonaj kilka małych eksperymentów, aby odkryć możliwy wzorzec, a potem znajdź powód, dla którego powinien się utrzymać. Wzorzec to powtarzająca się zależność, a dowód wyjaśnia, dlaczego musi ona zachodzić przy podanych regułach. Zapisuj przykłady w stały sposób. Kilka pierwszych wyników pasuje do wielu reguł, więc przykłady podpowiadają regułę, ale nie dowodzą, że działa zawsze. Gdy test zawiedzie, popraw regułę zamiast ukrywać wyjątek.

**Przykład:** Z zapałek układasz kwadraty w rzędzie tak, że sąsiednie mają wspólny bok. Na jeden kwadrat potrzeba 4 zapałek, na dwa 7, a na trzy 10. Za każdym razem przybywają 3, więc na osiem kwadratów powinno wystarczyć 4 + 7 × 3 (pierwszy kwadrat i 7 kolejnych) = 25 zapałek. Dlaczego? Nowy kwadrat ma już jeden bok wspólny z poprzednim, więc dokładasz tylko trzy zapałki. To wyjaśnia każdy prosty rząd. Same liczby 4, 7 i 10 nie byłyby dowodem, bo pasują do nich także inne reguły.

**Kiedy się przydaje:** Przy ciągach, powtarzających się procesach, zliczaniu i badaniu nieznanych systemów.

**Procedura:**
1. Przygotuj kilka małych przykładów i zapisz je w spójnej tabeli lub na rysunku.
2. Poszukaj powtórzeń, różnic, ilorazów lub innych stałych zależności.
3. Sformułuj przypuszczalną regułę precyzyjnie, określając także przewidywany zakres jej obowiązywania.
4. Celowo sprawdzaj niewygodne przypadki, zamiast wybierać tylko przykłady, które prawdopodobnie pasują.
5. Jeśli reguła się utrzymuje, wyjaśnij ją lub udowodnij na podstawie struktury problemu. Jeśli zawodzi, wykorzystaj niepowodzenie do jej poprawienia.

**Uwaga:** Do tych samych początkowych przykładów może pasować wiele różnych reguł. Potwierdzenie w przykładach i ogólny dowód to dwie różne rzeczy.

**Źródła:** [S4](#s4), podrozdział 2.2, zwłaszcza s. 26-33, oraz podrozdział 6.1, s. 195; [S3](#s3), części 4 i 6.

### 24. Sprawdź zaprzeczenie i poszukaj kontrprzykładu

**Opis:** Sprawdzając twierdzenie, spróbuj je podważyć. Jeśli podejrzewasz, że jest fałszywe, szukaj kontrprzykładu: jednego przypadku, który spełnia założenia, ale nie pasuje do wniosku. Wystarczy jeden, żeby twierdzenie odrzucić. Jeśli podejrzewasz, że jest prawdziwe, załóż coś przeciwnego i wyciągaj konsekwencje. Gdy prowadzą do czegoś niemożliwego, przeciwieństwo odpada, a twierdzenie zostaje (to dowód przez sprzeczność). Brak kontrprzykładu po kilku próbach jeszcze niczego nie dowodzi.

**Przykład:** Twierdzenie 1: „Każda liczba kończąca się na 5 jest pierwsza”. Przykład 5 pasuje, ale jeden przykład niczego nie dowodzi, więc szukasz przypadku, który je łamie. Liczba 15 kończy się na 5, a 15 = 3 × 5, więc nie jest pierwsza. Jeden kontrprzykład wystarcza, żeby odrzucić twierdzenie. Twierdzenie 2: „Nie istnieje największa liczba całkowita”. Załóż przeciwnie: istnieje największa, N. Ale N + 1 też jest liczbą całkowitą i jest większa od N. Największa liczba, która nie jest największa, to rzecz niemożliwa, więc przeciwieństwo odpada, a twierdzenie zostaje.

**Kiedy się przydaje:** Przy dowodzeniu, sprawdzaniu twierdzeń ogólnych i ujawnianiu błędnych reguł.

**Procedura:**
1. Zapisz oddzielnie założenia i dokładny wniosek.
2. Starannie zaprzecz wnioskowi. Na przykład zaprzeczeniem „każdy przypadek działa” jest „co najmniej jeden przypadek nie działa”.
3. Zbadaj tę możliwość, zachowując pierwotne założenia.
4. Jeśli prowadzi do rzeczywistej sprzeczności, wyjaśnij, dlaczego zaprzeczenie wniosku jest niemożliwe.
5. Jeśli zamiast tego znajdziesz poprawny kontrprzykład, odrzuć pierwotne twierdzenie lub zawęź jego zakres.

**Uwaga:** Brak znalezionego kontrprzykładu nie jest dowodem. W problemach empirycznych sprzeczność może wskazywać na błędny model lub założenie, a nie rozstrzygać o ogólnej prawdzie.

**Źródła:** [S4](#s4), podrozdział 2.3, s. 41-44.

### 25. Skup się na elemencie skrajnym

**Opis:** Wybierz z grupy element skrajny: najwyższą osobę, najmniejszą liczbę, pierwszy lub ostatni krok. Element na końcu skali nie może mieć tego, co mógłby mieć zwykły element, więc jedno spojrzenie na niego może zastąpić sprawdzanie wszystkich. Najpierw upewnij się, że taki element istnieje (w skończonej grupie zawsze jest najwyższy). Potem zapytaj, czego od niego wymagałoby badane twierdzenie. Jeśli czegoś jeszcze większego lub mniejszego, masz sprzeczność. Wybierz kogoś, kto naprawdę jest w grupie, a nie wymyśloną osobę wyższą od wszystkich.

**Przykład:** Pięcioro przyjaciół stoi w kółku. Każde mówi: „Osoba po mojej prawej jest wyższa ode mnie”. Czy wszyscy mogą mówić prawdę? Nie musisz znać niczyjego wzrostu ani sprawdzać wszystkich ustawień. Weź najwyższą osobę. Jeśli mówi prawdę, to jej sąsiad z prawej jest wyższy od najwyższej osoby w kółku, a to niemożliwe. Zatem przynajmniej jedna osoba się myli. Ten sam argument działa przy kółku z dowolną liczbą osób.

**Kiedy się przydaje:** Przy dowodach istnienia, układaniu obiektów, uporządkowanych danych i upraszczaniu złożonych przypadków.

**Procedura:**
1. Wybierz porządek lub wielkość do minimalizacji bądź maksymalizacji.
2. Sprawdź, czy obiekt skrajny rzeczywiście istnieje.
3. Wybierz go i zapisz, co wyklucza jego skrajna pozycja.
4. Zapytaj, czy proponowana konfiguracja wymuszałaby istnienie jeszcze mniejszego lub większego obiektu, przecząc temu wyborowi.
5. Wykorzystaj otrzymane ograniczenie do rozwiązania lub uproszczenia problemu.

**Uwaga:** Zbiór nieskończony nie musi mieć minimum ani maksimum. W tym schemacie wybierasz rzeczywisty obiekt skrajny; to co innego niż sprawdzanie wzoru przy wartości granicznej.

**Źródła:** [S4](#s4), podrozdział 3.2, s. 73-83.

### 26. Wykaż, że pewne obiekty muszą trafić do tej samej szufladki

**Opis:** Zasada szufladkowa mówi: jeśli wkładasz więcej przedmiotów do mniejszej liczby szufladek, w którejś znajdą się co najmniej dwa. Przedmiotami mogą być osoby, daty, pliki lub pionki, a szufladkami to, według czego je dzielisz. Dzięki temu dowodzisz, że powtórzenia albo zderzenia nie da się uniknąć, choć nie wiesz, w której szufladce nastąpi. Żeby wykazać więcej, pomnóż liczbę szufladek przez 2: więcej niż 12 × 2 przedmiotów w 12 szufladkach oznacza, że w którejś będą co najmniej 3.

**Przykład:** W klasie jest 25 uczniów. Czy na pewno co najmniej troje z nich urodziło się w tym samym miesiącu? Podziel uczniów według miesiąca urodzin: masz 12 szufladek i każdy uczeń trafia do dokładnie jednej. Spróbuj to obalić. Załóż, że w każdym miesiącu jest najwyżej 2 uczniów. Wtedy w klasie byłoby najwyżej 12 × 2 = 24 uczniów. Jest ich 25, więc w jakimś miesiącu urodziło się co najmniej 3. Wiesz to bez sprawdzania ani jednej daty urodzin, ale zasada nie mówi, który to miesiąc.

**Kiedy się przydaje:** Przy dowodzeniu nieuniknionych powtórzeń, kolizji, istnienia bliskich par i ograniczeń pojemności.

**Procedura:**
1. Ustal, które obiekty przyporządkujesz do kategorii.
2. Zdefiniuj kategorie tak, aby przynależność do tej samej kategorii dawała użyteczną zależność.
3. Przypisz każdy obiekt do dokładnie jednej kategorii, jednoznacznie rozstrzygając przypadki brzegowe.
4. Porównaj liczbę obiektów z liczbą lub pojemnością kategorii. Więcej niż `k × m` obiektów w `m` kategoriach oznacza, że jakaś kategoria zawiera co najmniej `k + 1` obiektów.
5. Przełóż wspólną przynależność do kategorii na potrzebny wniosek.

**Uwaga:** Najtrudniej bywa wybrać odpowiednie kategorie. Zasada pozwala stwierdzić, że pewne obiekty muszą trafić do tej samej kategorii, ale nie musi wskazywać, do której.

**Źródła:** [S4](#s4), podrozdział 3.3, s. 84-91.

### 27. Znajdź coś, co nie może się zmienić

**Opis:** Niezmiennik to coś, czego żaden dozwolony ruch nie zmienia, na przykład parzystość liczby włączonych przełączników (parzysta czy nieparzysta), suma albo reszta z dzielenia. Zapisz dokładnie ruchy, wybierz kandydata na niezmiennik i sprawdź, czy każdy ruch go zachowuje. Jeśli w stanie początkowym i docelowym ma on różną wartość, celu nie da się osiągnąć. Gdy wartości są takie same, nie wiesz jeszcze nic: cel może być nieosiągalny z innych powodów, więc trzeba dalej badać ruchy.

**Przykład:** Trzy przełączniki są wyłączone: 000, gdzie 1 oznacza włączony. Jedyny dozwolony ruch przełącza jednocześnie przełączniki 1 i 2. Czy da się dojść do 100? Policz włączone przełączniki. Każdy przełączany przełącznik zmienia ich liczbę o +1 lub -1, więc ruch zmienia ją o +2, 0 albo -2 i liczba pozostaje parzysta. Stan 100 ma jeden włączony, czyli liczbę nieparzystą, więc jest niemożliwy. A 101? Dwa włączone to liczba parzysta, więc parzystość go nie wyklucza, ale z 000 dojdziesz tylko do 110 i z powrotem do 000, bo przełącznik 3 nigdy się nie zmienia. Stan 101 też jest więc niemożliwy: sama zgodna parzystość nie wystarczyła.

**Kiedy się przydaje:** W zagadkach z przekształceniami, badaniu osiągalności, rozliczeniach i sprawdzaniu powtarzanych operacji.

**Procedura:**
1. Dokładnie zdefiniuj dozwolone ruchy.
2. Sprawdź kandydatów na niezmienniki, takich jak suma, różnica, parzystość, reszta z dzielenia lub bilans kolorów.
3. Udowodnij, że każdy rodzaj ruchu zachowuje wybraną własność.
4. Porównaj jej wartość na początku i w pożądanym stanie końcowym.
5. Jeśli wartości się różnią, cel jest nieosiągalny przy tych ruchach. Jeśli są zgodne, kontynuuj poszukiwania, używając niezmiennika do kontroli.

**Uwaga:** Zgodność niezmiennika nie dowodzi osiągalności. Musisz sprawdzić każdy dozwolony ruch, nie tylko te występujące w pierwszych przykładach.

**Źródła:** [S4](#s4), podrozdział 3.4, s. 92-102; przykład z kolorowaniem w podrozdziale 2.4, s. 54-55.

### 28. Śledź wielkość, która zmienia się tylko w jednym kierunku

**Opis:** Znajdź liczbę opisującą bieżącą sytuację, która przy każdym dozwolonym ruchu zmienia się tylko w jedną stronę: albo tylko maleje, albo tylko rośnie. Taka liczba pokazuje postęp, może wykluczyć cel albo dowieść, że proces się skończy. Samo malenie nie gwarantuje jednak końca, bo liczba może maleć coraz wolniej i nigdy nie dojść do zera. Sprawdź więc dwie rzeczy: czy w każdym ruchu spada o co najmniej 1 i czy nie może zejść poniżej 0, jak liczba żetonów w stosie.

**Przykład:** Dwoje graczy ma stos 12 żetonów. W każdym ruchu gracz zabiera 1, 2 albo 3 żetony, a gra kończy się, gdy stos jest pusty. Czy gra się skończy i ile ruchów może trwać? Patrz na liczbę żetonów: każdy ruch zmniejsza ją o co najmniej 1, a poniżej 0 nie zejdzie. Po co najwyżej 12 ruchach (gdy każdy zabiera po jednym) stos jest więc pusty. Liczba połowiona w każdej rundzie (1, 1/2, 1/4…) też stale maleje, ale nigdy nie dojdzie do 0, bo kroki są coraz mniejsze. Dlatego liczy się „co najmniej 1 w ruchu”.

**Kiedy się przydaje:** Przy powtarzanych procedurach, grach, stopniowym ulepszaniu i dowodzeniu zakończenia procesu.

**Procedura:**
1. Zdefiniuj liczbową miarę bieżącego stanu.
2. Sprawdź, jak zmienia ją każdy dozwolony ruch.
3. Ustal kierunek zmian i ewentualne ograniczenie dolne lub górne.
4. Aby udowodnić zatrzymanie, wykaż, że zmiany nie mogą trwać w nieskończoność, na przykład dlatego, że nieujemna liczba całkowita maleje o co najmniej jeden przy każdym aktywnym kroku.
5. Wskaż stany, w których postęp się zatrzymuje, i sprawdź, czy spełniają pożądany wniosek.

**Uwaga:** Wartość rzeczywista może maleć bez końca. Sama ograniczoność i monotoniczność oceny nie dowodzą zakończenia w skończonej liczbie kroków, a ruchy niezmieniające oceny nadal mogą tworzyć cykle.

**Źródła:** [S4](#s4), podrozdział 3.4, „Monovariants”, s. 102-106.

### 29. Zbuduj duży przypadek z mniejszych

**Opis:** Najpierw policz ręcznie najmniejsze przypadki, a potem każdy większy zbuduj z mniejszych, które już masz. Zapytaj: jak może wyglądać ostatni ruch prowadzący do tego rozmiaru? Każdy taki sposób wraca do mniejszego, już rozwiązanego przypadku, więc wyniki dodają się krok po kroku. Reguła, która wylicza kolejny wynik z wcześniejszych, nazywa się rekurencją. Udowodnienie, że wzór działa dla każdego rozmiaru, to inne zadanie (indukcja).

**Przykład:** Robot wchodzi po schodach, a każdy skok to 1 albo 2 stopnie. Na ile różnych sposobów może dojść na 4. stopień? Małe przypadki policz ręcznie: na stopień 1 jest 1 sposób (skok o 1), na stopień 2 są 2 sposoby (1 + 1 albo 2). Ostatni skok na stopień 3 zaczyna się na stopniu 2 (skok o 1) albo na stopniu 1 (skok o 2), więc sposobów na stopień 3 jest tyle, ile na stopień 2, plus tyle, ile na stopień 1: 2 + 1 = 3. Tak samo na stopień 4: 3 + 2 = 5. Sprawdzenie listą: 1 + 1 + 1 + 1, 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1, 2 + 2 – pięć.

**Kiedy się przydaje:** Przy zliczaniu, ciągach, procedurach rekurencyjnych i dowodach indeksowanych liczbami całkowitymi.

**Procedura:**
1. Dokładnie zdefiniuj wynik lub twierdzenie dla rozmiaru `n`.
2. Rozwiąż wszystkie potrzebne przypadki początkowe.
3. Wyjaśnij, jak większy przypadek sprowadza się do mniejszych lub jak poprawność mniejszych przypadków pozwala wykazać następny.
4. Przy zliczaniu upewnij się, że konstrukcja obejmuje każdy przypadek bez powtórzeń. W dowodzie uzasadnij krok dla dowolnego dopuszczalnego rozmiaru.
5. Połącz przypadki początkowe z krokiem przejścia; sprawdź, czy żaden rozmiar nie został pominięty.

**Uwaga:** Jeśli zakładasz prawdziwość właśnie tego przypadku, którego próbujesz dowieść, rozumujesz w błędnym kole. Sam krok indukcyjny bez wymaganych przypadków początkowych nie wystarcza do dowodu.

**Źródła:** [S4](#s4), podrozdział 2.3, s. 45-50, i podrozdział 6.4, s. 214-217.

### 30. Rozpatrz lub policz dopełnienie

**Opis:** Gdy w zadaniu jest „co najmniej jeden”, policz zamiast tego przypadek przeciwny: wyniki, w których nic takiego się nie zdarza. Tworzą one dopełnienie. Od liczby wszystkich możliwych wyników odejmij dopełnienie. To łatwiejsze, bo „żadnego” opisuje jeden prosty warunek, a „co najmniej jeden” kryje kilka przypadków naraz. Prawdopodobieństwo to liczba dobrych wyników podzielona przez liczbę wszystkich, ale tylko wtedy, gdy każdy wynik ma taką samą szansę, jak przy uczciwej kostce.

**Przykład:** Rzucasz dwa razy uczciwą kostką i chcesz wyrzucić co najmniej jedną szóstkę. Liczenie wprost wymaga trzech przypadków: szóstka w pierwszym rzucie, w drugim albo w obu. Policz więc przypadek przeciwny: żadnej szóstki. Każdy wynik to para (pierwszy rzut, drugi rzut), więc wszystkich par jest 6 × 6 = 36 i każda ma taką samą szansę. Bez szóstki każdy rzut ma 5 możliwości, czyli 5 × 5 = 25 par. Co najmniej jedna szóstka pada więc w 36 − 25 = 11 parach, a prawdopodobieństwo wynosi 11/36. Dodanie par z szóstką w pierwszym rzucie (6) i w drugim (6) dałoby 12, bo parę (6, 6) policzono by dwa razy.

**Kiedy się przydaje:** Przy zliczaniu, prawdopodobieństwie i warunkach typu „co najmniej jeden” lub „nie wszystkie”.

**Procedura:**
1. Zdefiniuj pełny zbiór dopuszczalnych możliwości.
2. Dokładnie określ, które możliwości nie spełniają pożądanego warunku.
3. Sprawdź, czy sukces i niepowodzenie są rozłączne i razem obejmują cały zbiór.
4. Policz całość i odejmij niepowodzenia albo użyj `P(sukces) = 1 - P(niepowodzenie)` z poprawnym modelem prawdopodobieństwa.
5. Sprawdź przypadki brzegowe i to, czy któregokolwiek niepowodzenia nie policzono więcej niż raz.

**Uwaga:** Wyznaczanie prawdopodobieństwa przez dzielenie liczebności wymaga jednakowo prawdopodobnych wyników elementarnych. Nie można po prostu dodawać nakładających się kategorii niepowodzeń.

**Źródła:** [S4](#s4), podrozdział 6.3, s. 207-208.

### 31. Policz to samo na dwa sposoby

**Opis:** Policz to samo dwa razy, z dwóch różnych punktów widzenia. Oba rachunki dotyczą tych samych obiektów, więc wyniki muszą się zgadzać. Dzięki temu trudne liczenie można zastąpić łatwiejszym, a niezgodność zdradza błąd. Zanim zaczniesz, ustal, co dokładnie jest jednym obiektem i czy kolejność ma znaczenie. Zastanów się też, czy jeden obiekt nie zostanie policzony więcej niż raz; jeśli tak, trzeba to potem poprawić.

**Przykład:** Sześcioro uczniów wita się uściskiem dłoni, każda para dokładnie raz. Ile jest uścisków? Pierwszy sposób, po kolei: pierwsza osoba ściska 5 nowych dłoni, druga już tylko 4 nowe, potem 3, 2 i 1, razem 5 + 4 + 3 + 2 + 1 = 15. Drugi sposób, po końcach: każdy z 6 uczniów ściska 5 dłoni, więc końców uścisków jest 6 × 5 = 30. Każdy uścisk ma dwa końce, po jednym u każdej z dwóch osób, więc policzyliśmy go dwa razy: 30 / 2 = 15. Oba sposoby dają 15, więc wynik się potwierdza. Gdyby wyszło 15 i 30, niezgodność zdradziłaby błąd – tu zapomniane dzielenie przez 2.

**Kiedy się przydaje:** Przy tożsamościach kombinatorycznych, audytach, sprawdzaniu spójności i zapisywaniu układów obiektów w prostszej postaci.

**Procedura:**
1. Dokładnie określ, co liczysz i czy kolejność ma znaczenie.
2. Policz obiekty według jednego podziału lub punktu widzenia.
3. Policz je niezależnie z innej perspektywy albo skonstruuj odwracalne przyporządkowanie do łatwiejszych obiektów.
4. Sprawdź, czy obie drogi obejmują każdy poprawny obiekt tyle samo razy.
5. Przyrównaj sumy lub skorzystaj z łatwiejszego zliczania. Wyjaśnij każdą rozbieżność.

**Uwaga:** Nadmiarowe wybory prowadzą do wielokrotnego liczenia. Gdy wcześniejsze wybory jednoznacznie wyznaczają późniejszy, nie jest on już niezależnym wyborem.

**Źródła:** [S4](#s4), podrozdział 6.1, s. 191-192, i podrozdział 6.2, zwłaszcza s. 199-200.

### 32. Dodaj pomocniczy obiekt lub wielkość pośrednią

**Opis:** Gdy to, co wiesz, nie łączy się z tym, czego szukasz, dodaj coś, o co zadanie nie pytało: dorysuj odcinek, oznacz niewiadomą literą albo policz sumę pośrednią. Wybierz to tak, żeby powiązało to, co wiesz, z tym, czego szukasz. To most, a nie nowe założenie: to, co dodajesz, musi dać się narysować i nie może zakładać tego, co chcesz wykazać. Na końcu wróć do pierwotnego pytania.

**Przykład:** Prostokątne boisko szkolne ma boki 6 m i 8 m. Jaka odległość dzieli dwa przeciwległe narożniki? Same boki jej nie podają, więc dorysuj przekątną. Dzieli ona boisko na dwa trójkąty prostokątne, a przekątna jest w każdym z nich najdłuższym bokiem. Z twierdzenia Pitagorasa kwadrat najdłuższego boku to suma kwadratów dwóch pozostałych: d² = 6² + 8² = 36 + 64 = 100 (d² znaczy d · d). Skoro 10 · 10 = 100, to d = 10 m. Dorysowana linia pomogła tylko w obliczeniu, boiska nie zmieniła.

**Kiedy się przydaje:** W geometrii, przy niewygodnych wyrażeniach i problemach, w których dane wydają się niezwiązane z celem.

**Procedura:**
1. Zapytaj, jaka zależność ułatwiłaby ostatni krok.
2. Wprowadź obiekt lub wielkość, które mają ujawnić tę zależność.
3. Zdefiniuj je precyzyjnie i sprawdź, czy istnieją w dopuszczalnych warunkach.
4. Wykorzystaj je do sformułowania mniejszych twierdzeń łączących dane z celem.
5. Przełóż wniosek na pierwotny problem, tak aby końcowa odpowiedź nie zależała od nieuzasadnionej konstrukcji.

**Uwaga:** Konstrukcja, która wygląda użytecznie, może być niemożliwa albo przemycać pożądany wniosek. Dodawanie elementów bez konkretnego celu rzadko pomaga.

**Źródła:** [S4](#s4), podrozdział 8.4, s. 282-284; [S3](#s3), część 5, zmienne i konstrukcje pomocnicze.

### 33. Systematycznie wypisuj przypadki i eliminuj niemożliwe

**Opis:** Wypisz wszystkie możliwości w ustalonym porządku, na przykład w tabeli albo na rozgałęzionej liście, i skreślaj te, które łamią regułę. Zacznij od reguły, która od razu skreśla najwięcej, a przy każdym skreśleniu zapisz powód. Podziel możliwości tak, żeby każda trafiła do dokładnie jednej gałęzi: niczego nie brakuje i nic się nie powtarza. Metoda działa, gdy pełna lista jest dość krótka. Jeśli sprawdzisz tylko część, możesz znaleźć rozwiązanie, ale nie możesz twierdzić, że innych nie ma.

**Przykład:** Kod do szafki składa się z cyfr 1, 2, 3, 4, każdej dokładnie raz. Reguły: ostatnia cyfra jest parzysta, a pierwsza mniejsza od drugiej. Podziel kody według ostatniej cyfry. Kody z końcówką 1 albo 3 skreślasz od razu, bo te cyfry są nieparzyste. Gałąź z końcówką 2: na pierwszych trzech miejscach cyfry 1, 3, 4 mogą stać w 6 kolejnościach. Skreślasz 3142, 4132 i 4312, bo pierwsza cyfra jest większa od drugiej; zostają 1342, 1432 i 3412. Gałąź z końcówką 4 sprawdzasz tak samo, zostają 1234, 1324 i 2314. Gałęzie się nie nakładają i obejmują każde dozwolone zakończenie, więc kodów jest dokładnie sześć.

**Kiedy się przydaje:** W zagadkach logicznych, niewielkich zbiorach konfiguracji, problemach porządkowania i poszukiwaniu wszystkich rozwiązań.

**Procedura:**
1. Określ możliwe wybory lub stany i spójny sposób ich zapisu.
2. Podziel poszukiwania na przypadki obejmujące wszystkie możliwości bez powtórzeń.
3. Najpierw zastosuj kontrole najsilniej ograniczające wybór lub najtańsze w wykonaniu i skreśl przypadki, które ich nie spełniają.
4. W każdym pozostałym przypadku przejdź do następnego nierozstrzygniętego wyboru. Zachowuj uzasadnienia wykluczeń.
5. Sprawdź każdą pozostałą odpowiedź względem wszystkich warunków. Jeśli twierdzisz, że innych nie ma, wyjaśnij, dlaczego przeszukiwanie było kompletne.

**Uwaga:** Lista może nadmiernie się rozrosnąć. Jeśli ograniczysz poszukiwania, zaznacz, że są jeszcze niesprawdzone możliwości. Brak odpowiedzi po przejrzeniu części listy nie dowodzi, że rozwiązanie nie istnieje.

**Źródła:** [S5](#s5), s. 285-286, pełne wyliczenie tras, oraz s. 331-332, problem samochodów różnych kolorów; [S3](#s3), część 6, uporządkowane wypisywanie i eliminacja.

### 34. Ustal tylko tę wielkość, o którą pyta zadanie

**Opis:** Przeczytaj dokładnie, o co pyta zadanie. Często potrzebna jest tylko suma, różnica, iloraz albo czyjeś miejsce, a nie każda liczba z osobna. Zapisz, co wiesz, i połącz te informacje tak, żeby niepotrzebne niewiadome zniknęły. Oszczędzasz rachunki i nie zmyślasz danych, których zadanie nie podaje. Na końcu sprawdź, czy odpowiedź jest jednoznaczna: jeśli dwa przypadki zgodne z danymi dają różne odpowiedzi na pytanie, informacji brakuje.

**Przykład:** Działka w kształcie prostokąta jest ogrodzona 28 m siatki. Ile metrów wynoszą razem długość i szerokość? Można by szukać obu boków, ale dane ich nie podają: działka 6 na 8 i działka 5 na 9 zużywają po 28 m (2 · 6 + 2 · 8 = 28 oraz 2 · 5 + 2 · 9 = 28). Siatka biegnie wzdłuż dwóch długości i dwóch szerokości, więc 2 długości + 2 szerokości = 28 m, a jedna długość i jedna szerokość to połowa: 14 m. Sprawdzenie: 6 + 8 = 14 i 5 + 9 = 14. Gdyby zadanie pytało o pole, obie działki dałyby różne wyniki (48 i 45 m²) i danych by brakowało.

**Kiedy się przydaje:** Przy problemach pozornie niedookreślonych, długich obliczeniach i pytaniach o wielkości łączne.

**Procedura:**
1. Podkreśl dokładnie tę wielkość, której dotyczy pytanie.
2. Zapytaj, czy obecny plan nie prowadzi do wyznaczania dodatkowych, niepotrzebnych informacji.
3. Połącz znane zależności tak, aby bezpośrednio wyznaczyć szukaną wielkość.
4. Poszukaj redukujących się składników, par, stałych sum lub informacji wystarczających do wykluczenia każdej innej odpowiedzi.
5. Sprawdź, czy szukana wielkość jest jednoznacznie ustalona, nawet jeśli niektóre pojedyncze wartości pozostają nieznane.

**Uwaga:** Ustalona suma nie wyznacza jej poszczególnych składników. Jeśli kilka dopuszczalnych konfiguracji daje różne wartości szukanej wielkości, informacji rzeczywiście jest za mało.

**Źródła:** [S5](#s5), s. 322-323, sumowanie kątów bez wyznaczania każdego z osobna, oraz s. 332, ustalenie pierwszego samochodu bez odtwarzania całej kolejności; [S4](#s4), podrozdział 3.4, przykład turnieju na s. 102.

### 35. Zacznij od wyborów zachłannych

**Opis:** Metoda zachłanna buduje odpowiedź krok po kroku: za każdym razem bierzesz to, co w tej chwili wygląda najlepiej według prostej reguły, na przykład największy żeton, który jeszcze się mieści, albo najbliższy przystanek na trasie. Szybko dostajesz pierwszą propozycję, gdy sprawdzanie wszystkich możliwości trwałoby za długo. Potem obejrzyj cały wynik i spróbuj go poprawić. Ruch, który dziś wygląda dobrze, może zostawić kłopotliwą resztę albo ślepy zaułek, więc wynik zachłanny jest kandydatem, a nie dowodem, że nie ma nic lepszego.

**Przykład:** W grze trzeba zebrać dokładnie 6 punktów, przy jak najmniejszej liczbie żetonów. Żetony są warte 1, 3 i 4 punkty, a każdego rodzaju możesz brać dowolnie dużo. Reguła zachłanna: zawsze bierz największy żeton, który jeszcze się mieści. Bierzesz 4 (zostają 2 punkty), żeton 3 już się nie mieści, więc 1 i 1: razem 3 żetony. Tymczasem dwa żetony po 3 punkty też dają 6. Wynik zachłanny jest więc poprawny, ale nie najlepszy: duży żeton zostawił resztę 2, którą da się wypełnić tylko drobnymi. Dwa żetony to minimum, bo nie ma żetonu wartego 6.

**Kiedy się przydaje:** Gdy trzeba szybko przygotować pierwszą trasę, kolejność lub podział zasobów, a pełne przeszukiwanie jest zbyt kosztowne.

**Procedura:**
1. Zdefiniuj lokalną regułę, na przykład wybieranie najbliższego nieodwiedzonego przystanku.
2. W każdym kroku wybierz najlepszą dostępną opcję według tej reguły, nie naruszając od razu żadnego bezwzględnego ograniczenia.
3. Kontynuuj, aż otrzymasz kompletnego kandydata lub nie będzie można iść dalej.
4. Sprawdź cały wynik, w tym wymagania takie jak powrót do punktu wyjścia.
5. Zanim go zaakceptujesz, porównaj go z innym wyborem początkowym, lokalnym ulepszeniem lub oszacowaniem granicznym.

**Uwaga:** Najlepszy następny ruch może wymusić kosztowny ruch później albo prowadzić do ślepego zaułka. Uznanie wyniku metody zachłannej za optymalny wymaga osobnego dowodu.

**Źródła:** [S5](#s5), s. 285-286. W przykładzie z czterema miastami metoda najbliższego sąsiada daje trasę 635 km, podczas gdy pełne porównanie pozwala znaleźć trasę 625 km.

### 36. Sprawdzaj postęp i świadomie zmieniaj plan

**Opis:** Zatrzymaj się co pewien czas i sprawdź, czego dowiadujesz się z pracy. Co udało się ustalić? Czego nadal nie wiesz? Dlaczego następny krok miałby pomóc? Takie pytania pozwalają odróżnić brak potrzebnej wiedzy od źle dobranej metody lub błędnie odczytanego warunku. Kontynuuj, jeśli próby przynoszą informacje. Jeśli nie, ustal, co warto zmienić, zamiast zmieniać wszystko przypadkowo. Nie trzymaj się też planu tylko dlatego, że poświęcono mu dużo czasu. Na końcu sprawdź odpowiedź i zapisz, co przyda się następnym razem.

**Przykład:** Za tydzień masz kartkówkę. Czytasz notatki przez 30 minut, a potem rozwiązujesz próbny test z 10 pytań i masz 2 dobre odpowiedzi. Zamiast czytać dalej, sprawdzasz 8 błędów: w 6 chodziło o definicje, których nie potrafisz sobie przypomnieć, a pytania o przykłady idą dobrze. Problemem jest więc przypominanie, nie czas czytania. Zmieniasz plan na fiszki z definicjami i zadania ćwiczeniowe, a w podobnym teście masz 7/10. To nie dowodzi, że materiał jest opanowany, ale pokazuje, że nowy plan działa lepiej niż pierwszy. Na koniec zapisujesz wniosek: po czytaniu sprawdzaj się pytaniami.

**Kiedy się przydaje:** Przy długich analizach, powtarzających się niepowodzeniach, nauce i każdym problemie bez oczywistej metody.

**Procedura:**
1. Określ, co ma ustalić bieżąca próba.
2. W odpowiednim momencie kontroli zapytaj: „Czego dowiaduję się z tej próby? Co pozostaje nieznane? Dlaczego następny krok miałby pomóc?”.
3. Oddziel brak wiedzy od źle dobranej strategii lub błędnego odczytania problemu.
4. Kontynuuj, jeśli próba przynosi wiedzę lub postęp; w przeciwnym razie wróć do odpowiedniego wcześniejszego etapu, uzupełnij wiedzę albo wybierz inny schemat.
5. Na końcu zweryfikuj odpowiedź i zapisz wniosek do ponownego wykorzystania, błędne założenie oraz sytuacje, w których metoda znów mogłaby się przydać.

**Uwaga:** Nie zmieniaj metody przy każdej trudności, ale też nie trzymaj się planu tylko dlatego, że poświęcono mu już czas. Te schematy nie zastąpią niezbędnej wiedzy z danej dziedziny.

**Źródła:** [S5](#s5), s. 27-28, 48-50 i 220-226, o samokontroli, cyklicznym rozwiązywaniu problemów oraz wzajemnym wpływie wiedzy, strategii, kontroli i przekonań.

### 37. Uogólnij, aby ujawnić strukturę

**Opis:** Uogólnianie polega na zastąpieniu jednej konkretnej liczby literą, na przykład n, która oznacza dowolną liczbę całkowitą od 1 wzwyż, i zbadaniu całej rodziny podobnych przypadków. Wzór zauważony w kilku przypadkach to na razie tylko domysł. Żeby mieć pewność, pokaż, że działa dla pierwszego przypadku i że gdy działa dla jednego, działa też dla następnego. Wtedy działa dla wszystkich, jak rząd przewracających się kostek domina. Dopiero potem wstaw do ogólnego wyniku pierwotną liczbę.

**Przykład:** Ile wynosi 1 + 3 + 5 + 7, czyli suma pierwszych czterech liczb nieparzystych? Małe przypadki: 1 = 1 · 1, 1 + 3 = 2 · 2. Domysł: suma pierwszych n takich liczb to n · n, czyli n². Wyobraź sobie n · n kropek w kwadracie. Taki kwadrat rośnie warstwami „L” po 1, 3, 5… kropek; następna ma 2n + 1 (dla n = 3 to 7). Jeśli suma pierwszych n liczb nieparzystych to n², to po dodaniu następnej, 2n + 1, dostajesz n² + 2n + 1 = (n + 1)². Działa dla 1, a każdy przypadek prowadzi do następnego, więc działa zawsze. Dla czterech liczb wychodzi 16.

**Kiedy się przydaje:** Przy niewyjaśnionych wzorcach liczbowych, wzorach do wielokrotnego użycia i problemach ze stałymi, które wyglądają na przypadkowo dobrane.

**Procedura:**
1. Wskaż ustalony szczegół, który może ukrywać strukturę.
2. Zastąp go parametrem i określ dopuszczalne wartości.
3. Porównaj kilka przypadków z nowej rodziny, w tym przypadek pierwotny.
4. Poszukaj zależności lub argumentu obowiązującego w całej rodzinie i wskaż wyjątki.
5. Uzasadnij tę zależność, a następnie podstaw pierwotną wartość, aby odpowiedzieć na pierwotne pytanie.

**Uwaga:** Szersze twierdzenie może być trudniejsze lub fałszywe. Jeśli uogólnienie zwiększa zamieszanie, wróć do prostszego przypadku i zachowaj wszelkie częściowe wnioski.

**Źródła:** [S4](#s4), podrozdział 2.2, przykład 2.2.2, s. 28, zastąpienie stałej parametrem; [S3](#s3), część 3, abstrakcja i uogólnianie.

## Łączenie schematów w praktyce

Te przykłady pokazują, jak korzystać z przewodnika. Powstały na jego potrzeby, nie pochodzą z dokumentów źródłowych.

- **Zaplanuj niewielkie warsztaty:** Określ sukces i ograniczenia (17), rozumuj wstecz od wydarzenia (1), podziel przygotowania na zadania (3) i szacuj na podstawie podobnej pracy (7). Sprawdź, czy mieści się cały harmonogram, nie tylko każde zadanie z osobna.
- **Zbadaj powracającą usterkę oprogramowania:** Dokładnie opisz usterkę (17), odtwórz ją w mniejszym przypadku (16) i przeprowadź kontrolowane testy (4). Zapisuj każdy wynik i zmieniaj hipotezę, gdy dowody przestają ją wspierać (36).
- **Sprawdź, czy przekształcenie jest możliwe:** Zapisz dozwolone ruchy (17), eksperymentuj na małych przypadkach (23) i poszukaj zachowywanej wielkości (27). Jeśli stan początkowy i docelowy różnią się pod jej względem, wyjaśnij, dlaczego każdy dozwolony ruch ją zachowuje, zanim uznasz cel za nieosiągalny.

## Szablon notatki roboczej

Na początku pracy skopiuj ten szablon i uzupełniaj go w miarę postępów:

- **Cel i test sukcesu:**
- **Znane fakty i niewiadome:**
- **Bezwzględne ograniczenia i niesprawdzone założenia:**
- **Wybrany schemat i powód wyboru:**
- **Co zrobię dalej i czego chcę się z tego dowiedzieć:**
- **Wynik i dowody:**
- **Co nadal wymaga sprawdzenia:**
- **Kontynuować, poprawić czy zakończyć:**
- **Co przyda mi się przy kolejnym problemie:**

## Przegląd źródeł w kolejności lektury

Przegląd obejmuje wszystkie pięć dokumentów na ten temat z tego folderu, z pominięciem plików HTML. Trzy dokumenty Word przeczytano w całości po wyodrębnieniu tekstu. W dwóch obszernych plikach PDF przejrzano wymienione niżej części i przykłady w poszukiwaniu metod rozwiązywania problemów. Nie przeanalizowano całych zbiorów ćwiczeń ani przeglądów literatury. Tekstów źródłowych nie zmieniono.

<a id="s1"></a>
### S1 Heurystyki i szacowanie

**Dokument:** [/home/andrzey/git-claude/heuristics/heuristics&estimation_in_problem_solving_2024_12_19.docx](/home/andrzey/git-claude/heuristics/heuristics&estimation_in_problem_solving_2024_12_19.docx)

**Zakres przeglądu:** Cały tekst główny wraz z bibliografią. Najważniejsze treści: rozumowanie wstecz, analogia, dekompozycja, próby i błędy, stopniowe ulepszanie, szacowanie, kalibracja oraz ostrzeżenia przed błędami w ocenianiu. Bibliografia jest częścią dostarczonego dokumentu, a nie zbiorem niezależnie zweryfikowanych źródeł.

**Dobór treści:** Zachowano ogólne metody, które można zastosować w praktyce. Dostępność, reprezentatywność i zakotwiczenie potraktowano jako zjawiska wymagające kontroli, nie wskazówki do naśladowania. Pominięto ogólne twierdzenia o zastosowaniach zawodowych i skuteczności potwierdzanej badaniami, ponieważ nie wnoszą dodatkowej procedury do wykorzystania.

<a id="s2"></a>
### S2 Relaksacja problemu

**Dokument:** [/home/andrzey/git-claude/heuristics/problem_relaxation_2025_01_04.docx](/home/andrzey/git-claude/heuristics/problem_relaxation_2025_01_04.docx)

**Zakres przeglądu:** Cały tekst główny, w tym wstępny przegląd, dodatkowe techniki matematyczne i obie części edukacyjne. Najważniejsze treści: relaksacja ograniczeń i relaksacja ciągła, oszacowania graniczne, kary, stopniowe dodawanie ograniczeń, podejmowanie decyzji etapami, informacje zwrotne między poziomami planowania oraz prostsze przypadki.

**Dobór treści i korekty:** Zachowano ogólne procedury zamiast specjalistycznych instrukcji dla programów optymalizacyjnych. Odróżniono łatwiejszy przykład dydaktyczny od formalnej relaksacji. Nie powtórzono twierdzeń, że każdy problem wypukły ma jednoznaczne optimum lub że proste zaokrąglenie daje poprawną odpowiedź. Wykluczono błędne przykłady: rozłożenie sześcianu nie zamienia ścieżki po powierzchni w ścieżkę biegnącą wyłącznie po krawędziach; równania `5c + 3d = 100` i `c + d = 25` wymuszają `c = d = 12.5`, więc nie mają rozwiązania całkowitoliczbowego; twierdzenie o półkolu jako rozwiązaniu dla dowolnych figur pod parabolą jest nieuzasadnione. Przykład ze słupkami ogrodzenia miesza również rozumowanie o stałym obwodzie z parami dzielników. Tych przykładów nie należy traktować jako instrukcji.

<a id="s3"></a>
### S3 Myślenie matematyczne i rozwiązywanie problemów

**Dokument:** [/home/andrzey/git-claude/heuristics/problem‑solving_heuristics_2026_04_26.docx](/home/andrzey/git-claude/heuristics/problem‑solving_heuristics_2026_04_26.docx)

**Zakres przeglądu:** Wszystkie dziesięć części. Najważniejsze treści: jasne sformułowanie problemu, cykl zrozumienie-plan-wykonanie-ocena, sposoby przedstawienia, jednostki, przypadki graniczne, symetria, uporządkowane podejmowanie decyzji oraz modele systemów i bodźców wpływających na uczestników. Omówienie poszukiwania ewolucyjnego i wychodzenia z optimów lokalnych uzupełnia schemat 5; analogia i dekompozycja uzupełniają schematy 2 i 3.

**Dobór treści:** Ogólne podejścia przełożono na wyraźnie oznaczone procedury do samodzielnego zastosowania. Nie przedstawiono nazwanych algorytmów przeszukiwania jako zamiennych ani nie powtórzono ogólnego twierdzenia, że żaden z nich nie może gwarantować optymalności. Pominięto szerokie twierdzenia historyczne i metafory chemiczne tam, gdzie nie prowadziły do odrębnego działania możliwego do sprawdzenia.

<a id="s4"></a>
### S4 Sztuka i rzemiosło rozwiązywania problemów

**Dokument:** [/home/andrzey/git-claude/heuristics/the-art-and-craft-of-problem-solving.pdf](/home/andrzey/git-claude/heuristics/the-art-and-craft-of-problem-solving.pdf)

**Autor i wydanie:** Paul Zeitz, wydanie drugie. Numery stron w odwołaniach pochodzą z wydania drukowanego i mogą różnić się od numerów w przeglądarce PDF.

**Przegląd pod kątem metod wielokrotnego użytku:** Spis treści i wskazówki dotyczące lektury; omówienia metod i wybrane rozwiązane przykłady w podrozdziałach 2.2-2.4, 3.2-3.4, 6.1-6.4 i 8.4. Porównano wyrenderowaną stronę geometryczną dotyczącą zasady ekstremalnej z wyodrębnionym tekstem. Główne uzupełnienia: sprawdzanie hipotez, sprzeczność, elementy skrajne, zasada szufladkowa, niezmienniki, monowarianty, indukcja i rekurencja, dopełnienia, zliczanie na dwa sposoby oraz konstrukcje pomocnicze.

**Dobór treści:** To przegląd metod, nie rozwiązanie ani przepisanie zbioru ćwiczeń z książki. Specjalistyczne narzędzia algebry, teorii liczb, analizy matematycznej i geometrii wykraczają poza ten przewodnik, chyba że ujawniają schemat o szerokim zastosowaniu. Książka uzupełnia również opisane wcześniej rozumowanie wstecz, upraszczanie, zmianę sposobu przedstawienia, symetrię i myślenie za pomocą grafów.

<a id="s5"></a>
### S5 Heurystyki w nauczaniu i uczeniu się matematyki

**Dokument:** [/home/andrzey/git-claude/heuristics/Heuristics in Problem Solving for the Teaching and Learning of Mathematics.pdf](</home/andrzey/git-claude/heuristics/Heuristics in Problem Solving for the Teaching and Learning of Mathematics.pdf>)

**Autor i data:** Nuno Álvaro Ferreira Rodrigues, rozprawa doktorska, Uniwersytet w Coimbrze, 2015. Numery stron w odwołaniach pochodzą z wydania drukowanego.

**Przegląd pod kątem metod wielokrotnego użytku:** Streszczenie, spis treści, wybrane omówienia metapoznania i rozwiązywania problemów na s. 27-28 i 48-50, wnioski w okolicy s. 212-213 oraz plan aneksu i wskazówki metodyczne na s. 215-226. Przeanalizowano wybrane rozwiązane przykłady na s. 236-237, 252-253, 285-286, 320-333 i końcowe omówienie paradoksu wizualnego na s. 402-405. Sprawdzono wizualnie schemat cyklicznego procesu na s. 223 i porównanie metod wyznaczania tras na s. 285.

**Najważniejsze treści:** Systematyczne wyliczanie i eliminacja, wyznaczanie tylko szukanej wielkości, konstrukcja zachłanna z wyraźnym kontrprzykładem dla jej optymalności oraz kontrolowanie i poprawianie procesu rozwiązywania. Wcześniejsze schematy uzupełniono konkretnymi przykładami sposobów przedstawienia, relaksacji, konstrukcji pomocniczych, symetrii i wyborów skrajnych.

**Dobór treści:** Aneks potraktowano jako źródło przeanalizowanych schematów rozumowania, nie powód do kopiowania każdego ćwiczenia matematycznego czy anegdoty historycznej. Rozprawa opisuje ograniczenia krótkiej interwencji w klasie, dlatego przewodnik nie twierdzi, że samo nauczenie się listy heurystyk gwarantuje poprawę wyników. Nadal potrzebne są praktyka, wiedza z danej dziedziny i kontrola własnego rozumowania.
