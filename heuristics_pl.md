# Praktyczne heurystyki rozwiązywania problemów

Heurystyka to użyteczny sposób poszukiwania rozwiązania, a nie gwarancja, że będzie ono poprawne lub najlepsze. Ten przewodnik zbiera schematy wielokrotnego użytku z dokumentów znajdujących się w tym folderze, z pominięciem plików HTML. Przy każdym schemacie znajdziesz wyjaśnienie, kiedy go użyć i co zrobić dalej.

Procedury są opracowaniami napisanymi prostym językiem, nie cytatami. Przykłady spoza matematyki pokazują, jak można przenieść dany schemat na inny obszar; nie oznacza to, że źródła potwierdzają jego skuteczność w tych zastosowaniach. Podobne pomysły połączono, zamiast je powtarzać. Krótkie oznaczenia źródeł odsyłają do przeglądu dokumentów na końcu.

Rozwinięte wyjaśnienia są przeznaczone dla osób w wieku około 13–16 lat. Przy każdym schemacie znajduje się przykład przygotowany na potrzeby tego przewodnika. Nie jest to cytat ani opis przypadku przypisany dokumentom źródłowym.

## Jak korzystać z przewodnika

Zapisz, co chcesz osiągnąć, co już wiesz i jakie warunki musi spełniać poprawna odpowiedź. Wybierz schemat pasujący do napotkanej trudności. Notuj swoje próby i to, czego się z nich dowiadujesz. Zanim przyjmiesz wynik, sprawdź go względem pierwotnego problemu.

Traktuj schematy jako zestaw do wyboru, nie listę do wykonania po kolei. Czasem trzeba wrócić do sformułowania problemu, zmienić metodę albo połączyć dwa podejścia. Heurystyka pomaga odkryć odpowiedź; dowód, odpowiedni test lub sprawdzenie wykonalności pozwalają ustalić, co można o niej powiedzieć z pewnością.

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

**Opis:** Rozumowanie od końca zaczyna się od dokładnego wyniku, którego chcesz, i pytania, jaki warunek umożliwiłby bezpośrednio wcześniejszy krok. Cofaj się, aż dojdziesz do czegoś, co już wiesz lub potrafisz zrobić, a potem odczytaj łańcuch w przód. Odległy cel zamienia się w serię mniejszych wymagań i może ujawnić brakujący krok. To sposób szukania drogi, nie dowód. Warunek konieczny, czyli taki, który musi być spełniony, może nie wystarczać, dlatego sprawdź każdy krok w kierunku celu.

**Przykład:** W piątek musisz oddać plakat naukowy. Wysyłka wymaga wyeksportowanego pliku; plik wymaga zmieszczenia tekstu i obrazów; układ wymaga szkicu i źródeł; oddanie wymaga uwag nauczyciela. Na pierwszej liście nie było na nie czasu, więc planujesz szkic na wtorek, układ na środę, uwagi na czwartek, a wysyłkę na piątek. Łańcuch od końca ujawnił tę lukę; sprawdzenie w przód nie pozwala pomylić szkicu z gotowym plakatem.

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

**Opis:** Analogia to porównanie sytuacji, które mają ważne zależności wspólne. Zamiast dopasowywać tematy lub kopiować odpowiedź, ustal, co od czego zależy, co jest ograniczone i po czym poznasz sukces. Przenieś te role z rozwiązanego problemu do nowego, a potem sprawdź różnice, które mogą zepsuć porównanie. Taka metoda podpowiada drogę przy nieznanym temacie, lecz samo zewnętrzne podobieństwo jest słabym dowodem. Liczą się relacje, nie dekoracje.

**Przykład:** W planszówce na pewnym poziomie trzeba zebrać klucze, zanim otworzy się drzwi. Wykorzystujesz tę strukturę przy planowaniu prezentacji grupowej: klucze stają się źródłami, drzwi slajdami, a ostatnia brama próbą generalną. Kilka osób może szukać źródeł równocześnie, więc dostosowujesz analogię zamiast kopiować ruchy z gry. Mapa pokazuje, że brak źródła blokuje slajd, a praca równoległa oszczędza czas. Pomogła zależność, nie temat gry.

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

**Opis:** Podziel duży problem na mniejsze zadania z jasno określonym wynikiem, a potem połącz te wyniki i sprawdź połączenia. Zaznacz zależności, czyli zadania, których nie można zacząć, dopóki nie powstanie inny wynik. To zmniejsza przeciążenie i ułatwia podział pracy, ale nie usuwa wzajemnego wpływu części: dobre elementy mogą się zderzyć po połączeniu. Końcowa kontrola nadal musi sprawdzić pierwotny cel i wszystkie ograniczenia.

**Przykład:** Organizacja klasowego wieczoru filmowego wygląda jak jedno wielkie zadanie. Podziel ją na zgodę i salę, wybór filmu, przekąski, godziny oraz ogłoszenia. Zgoda musi być przed rezerwacją, a długość filmu wyznacza koniec. Dwie osoby wybierają przekąski osobno, lecz ich listy przekraczają budżet, więc klasa łączy je i usuwa jeden produkt. Podział wyjaśnia, kto za co odpowiada, a ponowne połączenie ujawnia konflikt budżetu i godzin.

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

**Opis:** Kontrolowane próby i błędy oznaczają, że każda próba jest małym eksperymentem: wybierasz wiarygodnego kandydata, przewidujesz wynik, bezpiecznie go testujesz i zapisujesz, czego dowiedziałeś się z rezultatu. Jeśli możesz, zmień jedną ważną cechę, aby połączyć przyczynę ze skutkiem. Nieudana próba jest pożyteczna, gdy wyklucza możliwość; losowe zgadywanie niczego nie wyjaśnia. Stosuj ten sposób tylko wtedy, gdy koszt i ryzyko są ograniczone.

**Przykład:** Przewidujecie, że złożone paski wzmocnią papierowy most. Budujecie ten sam most długości 20 centymetrów: najpierw z trzema paskami, potem z pięcioma, zmieniając tylko ich liczbę. Dodajecie identyczne książki pojedynczo, aż każda wersja się zapadnie: trzy paski utrzymują cztery książki, a pięć osiem. Nośność jest zmierzonym wynikiem, nie zgadywaniem. Drugi test wspiera użycie większej liczby pasków, ale nie dowodzi, że każdy most potrzebuje pięciu.

**Kiedy się przydaje:** Przy diagnozowaniu usterek, tworzeniu prototypów i niewielkich poszukiwaniach, gdy testy są tanie i bezpieczne.

**Procedura:**
1. Określ jednoznaczny test sukcesu.
2. Wybierz wiarygodnego kandydata na rozwiązanie i przewidź, co powinno się wydarzyć.
3. Przetestuj go przy ograniczonym koszcie i ryzyku.
4. Zapisz, co zadziałało, co zawiodło i jakie możliwości wyklucza niepowodzenie.
5. Jeśli to możliwe, zmień jedną istotną cechę i przetestuj ponownie. Nie powtarzaj prób, z których niczego się nie dowiadujesz.

**Uwaga:** Bez zapisu zmian trudno ustalić, co spowodowało poprawę. Nie eksperymentuj bez zabezpieczeń, jeśli skutki mogą być nieodwracalne lub niebezpieczne.

**Źródła:** [S1](#s1).

### 5. Ulepszaj działające rozwiązanie i wychodź ze ślepych zaułków

**Opis:** Zacznij od dowolnego rozwiązania spełniającego twarde wymagania, a potem poprawiaj je małymi zmianami, na przykład zamianą dwóch elementów. Zachowuj zmiany, które poprawiają wybraną ocenę. Gdy małe zmiany przestają pomagać, możesz być w lokalnym optimum, czyli sytuacji, w której nic bliskiego nie jest lepsze. Zachowaj najlepszą wersję i zacznij od innego punktu albo wykonaj większą zmianę. Takie poszukiwanie może znaleźć lepszą odpowiedź, ale nie dowodzi, że jest najlepsza z możliwych.

**Przykład:** Wasza grupa ma poprawny plan nauki pięciu przedmiotów, ale trzy sprawdziany przypadają jednego wieczoru. Zamiana dwóch bloków poprawia wynik, bo każdy sprawdzian dostaje czas na powtórkę. Po trzech zamianach bliskie warianty są gorsze. Zachowujecie plan i budujecie drugi od innej kolejności przedmiotów. Drugi lepiej rozkłada powtórki wokół stałych terminów sprawdzianów, a terminy i przedmioty pozostają bez zmian. Jedna ocena chroni przed wyborem ładniejszego, lecz słabszego planu.

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

**Opis:** Oszacowanie rzędu wielkości pyta, jak duży jest wynik w przybliżeniu, zanim poświęcisz czas na dokładne rachunki. Zaokrąglaj niepewne dane, zapisuj jednostki i założenia oraz użyj niskiego i wysokiego wariantu, aby otrzymać zakres. Dzięki temu wcześnie wykryjesz przestawione zero albo nierealny plan. To sprawdzenie realności przed ważną decyzją, nie dokładna odpowiedź, gwarancja ani stała cena; gdy decyzja tego wymaga, użyj ścisłych obliczeń.

**Przykład:** Wasza klasa chce zebrać 100 euro ze sprzedaży przekąsek. Szybkie oszacowanie przyjmuje 20 uczniów, po 3 produkty i 2 euro za produkt: 20 × 3 × 2 = 120 euro. Jeśli część sprzeda po 2, a część po 4 produkty, przybliżony zakres wynosi od 80 do 160 euro. Zakres pokazuje, że cel jest możliwy, ale nadal trzeba sprawdzić dokładne koszty i niesprzedane przekąski.

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

**Opis:** Oszacuj zadanie na dwa sposoby. Najpierw podziel je na niepokrywające się części i użyj wskaźnika z podobnej pracy, na przykład liczby minut na montaż jednego nagrania. Dodaj wspólne zadania, takie jak uzgodnienia i wysyłka. Potem porównaj sumę z podobnym zadaniem potraktowanym jako całość. Różnica to wskazówka do sprawdzenia, nie błąd do ukrycia. Pamiętaj, że nakład pracy różni się od czasu trwania, gdy ludzie pracują równolegle.

**Przykład:** Klasowy podcast ma cztery wywiady. Wcześniej montaż jednego zajmował średnio 15 minut, więc montaż potrwa około 4 × 15 = 60 minut. Dodajcie 30 minut na wspólny wstęp i wysyłkę: razem 90 minut pracy. Dwie osoby mogą montować równolegle, więc czas od początku do końca może być bliższy 60 minutom. Jeśli poprzedni cały podcast trwał 2 godziny, porównajcie różnicę i poprawcie wskaźnik po tym odcinku.

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

**Opis:** Potraktuj pierwszą ocenę jako hipotezę, nie wyrok. Dostępność to wpływ przykładu, który łatwo przychodzi na myśl; reprezentatywność oznacza ocenianie na podstawie podobieństwa; zakotwiczenie to przyciąganie przez pierwszą liczbę. Zapytaj, który skrót działa, poszukaj porównywalnych danych i dowodów przeciw pierwszej myśli, a potem oszacuj sprawę drugą drogą. Porównaj wyniki i nazwij to, co nadal pozostaje niepewne. Taka kontrola nie usuwa niepewności, tylko ją odsłania.

**Przykład:** Po dwóch spóźnionych autobusach przewidujesz, że połowa z dziesięciu następnych kursów się spóźni. Wyraziste opóźnienia sprawiają, że ryzyko wydaje się większe. Dziesięć wcześniejszych kursów obejmuje dwa spóźnione, więc 20 procent lepiej pasuje do tej małej próby niż 50. Pogoda może zmienić wynik, dlatego zostawiasz niepewność zamiast ogłaszać autobusy niezawodnymi. Kontrola poprawiła wrażenie, lecz nie dowodzi przyszłości.

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

**Opis:** Relaksacja ograniczeń oznacza tymczasowe rozwiązanie łatwiejszej wersji tego samego problemu przez usunięcie lub złagodzenie jednej reguły. Zachowaj cel, sprawdź, czego nie spełnia rozwiązanie po relaksacji, i przywróć pierwotne reguły przed oddaniem wyniku. To może ujawnić wąskie gardło, czyli etap blokujący resztę, albo użyteczną granicę. Jest to model do myślenia, nie zgoda na pomijanie prawdziwych wymagań bezpieczeństwa, prawa lub dostępności.

**Przykład:** Wasza grupa musi skończyć film, ale wszyscy mają być na każdym spotkaniu. Tymczasowo usuwacie tę regułę w arkuszu: dwie pary montują sceny, a potem spotykają się na 20-minutowe nagranie. To pokazuje, że blokadą był wspólny montaż. Przywracacie pierwotną regułę i układacie jedno dłuższe spotkanie z obecnością wszystkich; wersja po relaksacji była tylko wskazówką. Jeśli nauczyciel zmieni wymagania, zapisujecie to osobno. Bezpieczeństwo i zgody nie zostały złagodzone.

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

**Opis:** Relaksacja ciągła tymczasowo pozwala, aby wybory całych jednostek lub decyzje tak/nie przyjmowały wartości ułamkowe, przy zachowaniu pozostałych limitów i celu. Łatwiejsze obliczenie może pokazać, które wybory są ważne, oraz dać granicę lub cel. Ułamki są tylko wskazówką: zaokrąglenie może naruszyć pojemność, budżet albo dokładną sumę, a bliskie rozwiązanie całkowitoliczbowe może nie istnieć. Na końcu sprawdź rzeczywiste całe wybory względem każdej pierwotnej reguły.

**Przykład:** Samorząd ma 6 godzin. Stoiska A, B, C potrzebują 4, 3, 2 godzin i dają 8, 6, 3 punktów; każde wybiera się w całości albo wcale. Przy 0 ≤ A, B, C ≤ 1 relaksacja wybiera A = 1 i B = 2/3: 6 godzin, 12 punktów. Zaokrąglenie B w górę wymaga 7 godzin i odpada. Całe wybory dają A + C: 6 godzin, 11 punktów, więc plan działa.

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

**Opis:** Oszacowanie graniczne to limit, którego prawdziwy wynik nie może przekroczyć. Gdy szukasz najmniejszego wyniku, zrelaksowany problem może dać granicę dolną, a poprawne rozwiązanie granicę górną; gdy szukasz największego, role się odwracają. Gdy obie wartości są równe, masz dowód, że odpowiedź jest najlepsza z możliwych. Gdy się różnią, luka mówi, ile niepewności zostało. Granica musi mieć uzasadnienie, a nie wynikać z przybliżonego zgadywania. Tak samo oceniasz maksymalny możliwy zysk.

**Przykład:** Szukasz najkrótszej trasy między trzema szkolnymi przystankami. Po pominięciu jednego trudnego ograniczenia najkrótsza trasa zrelaksowanego problemu ma 8 minut, więc żadna trasa spełniająca wszystkie reguły nie może być krótsza. Trasa zgodna z każdą regułą zajmuje 10 minut. Najlepszy wynik leży zatem między 8 a 10 minutami, a luka wynosi 2 minuty; nie możesz twierdzić, że 8 minut jest osiągalne. Jeśli znajdziesz poprawną trasę na 8 minut, równe granice dowodzą optymalności.

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

**Opis:** Kompromis pojawia się, gdy poprawa jednej preferencji pogarsza inną. Oddziel twarde ograniczenia, których nie wolno łamać, od miękkich celów, przy których można ustąpić. Każdemu odstępstwu od miękkiego celu nadaj mierzalną karę i wagę, połącz te koszty ze zwykłą oceną i sprawdź, jak zmiana wag wpływa na wybór. Liczby porządkują decyzję, lecz dowolne kary nie dowodzą, że wynik jest matematycznie najlepszy.

**Przykład:** Wasza grupa wybiera godzinę próby. Sala i wysyłka w piątek to twarde ograniczenia. Obecność jest miękka: 5 punktów za każdą nieobecną osobę i 1 za każde 15 minut opóźnienia. Plan A ma wszystkich, lecz kończy się 45 minut później, więc kosztuje 3. Plan B kończy się na czas, ale brakuje jednej osoby, więc kosztuje 5. Przy tych wagach wygrywa A. Jeśli obecność ważniejsza, zwiększcie jej karę; nie usprawiedliwia ona braku sali ani terminu.

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

**Opis:** Dodawaj ograniczenia stopniowo, gdy kandydat na rozwiązanie zawodzi. Nowe ograniczenie, czasem nazywane cięciem, powinno ogólnie opisywać wykryty błąd i wykluczać ten niepoprawny wzorzec, a zarazem zachowywać każde poprawne rozwiązanie. Rozwiąż model ponownie i powtarzaj. Dzięki temu duży model pozostaje możliwy do obsłużenia, lecz reguła oparta wyłącznie na guście może usunąć prawidłową odpowiedź. Proces kończy się kandydatem, który przechodzi kontrolę, albo pokazuje, że żaden nie działa.

**Przykład:** Uproszczony plan pozwala jednej osobie być na dwóch spotkaniach naraz. Dodajecie regułę, że uczeń nie może mieć nakładających się zajęć. Późniejszy kandydat umieszcza rejestrator w sali bez gniazdka, choć zadanie wymaga sprzętu zasilanego z gniazdka, więc wymagacie gniazdka przy każdym nagraniu. Sprawdzacie, czy reguły wynikają z zadania, nie z upodobania do znanych planów. Cięcia usuwają błędne harmonogramy, lecz zachowują poprawne; po kolejnym rozwiązaniu klasa ma plan, którego może przestrzegać.

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

**Opis:** Ten schemat polega na układaniu długiego planu blokami, zamiast ustalania od razu każdego szczegółu. Najpierw rozstrzygnij pierwszy etap, przyjmij zgrubny obraz dalszych etapów i sprawdź, czy zostaje dość czasu, miejsca lub materiałów. Blok to grupa powiązanych decyzji, a wykonalność oznacza, że reszta pracy nadal mieści się w regułach. Jeśli późniejszy etap okaże się niemożliwy, zmień wcześniejszy wybór. Ta metoda oszczędza wysiłek przy zbyt dużym planie, ale wczesne decyzje mogą zablokować dalszy ciąg i nie gwarantuje ona najlepszego planu.

**Przykład:** Na przykład Maja ma cztery godziny na szkolny festyn: przygotowanie, gry i sprzątanie. Najpierw wybiera dekoracje zajmujące 2,5 godziny. Późniejsze bloki potrzebują 1,25 godziny na gry i godziny na sprzątanie, więc razem wychodzi 4,75 godziny. Maja wraca do pierwszej decyzji, wybiera prostsze dekoracje na 1,5 godziny i zostawia 1,5 godziny na gry oraz godzinę na sprzątanie. Nowy harmonogram zajmuje całe cztery godziny i jest wykonalny.

**Kiedy się przydaje:** Przy wieloetapowych harmonogramach i planach zbyt dużych, by rozstrzygnąć je w całości naraz.

**Procedura:**
1. Podziel decyzje na etapy lub logiczne bloki.
2. Zachowaj wcześniejsze decyzje jako ustalone, w bieżącym bloku wymagaj poprawnych wyborów dyskretnych, a późniejsze bloki uprość.
3. Rozwiąż bieżący podproblem i sprawdź, czy nadal pozostaje miejsce na późniejszą pracę.
4. Ustal decyzje z bieżącego bloku i przejdź do następnego.
5. Jeśli późniejszy blok okaże się niewykonalny, wróć do wcześniejszych decyzji, zamiast uznawać cały plan za działający.

**Uwaga:** Wczesne wybory mogą zablokować późniejsze etapy. To heurystyka, nie gwarancja wykonalności ani optymalności.

**Źródła:** [S2](#s2), „Relax-and-Fix Heuristics”.

### 15. Przeplataj ogólny plan ze sprawdzaniem szczegółów

**Opis:** Ogólny plan wybiera kierunek, a szczegółowa kontrola sprawdza, czy zadania, czas, ludzie i koszty naprawdę się mieszczą. Przeplataj oba poziomy: zaproponuj strategię, rozpisz wersję wykonania, zamień problemy w konkretną informację zwrotną i popraw strategię. Informacja zwrotna to wiadomość ze szczegółów, która zmienia większy plan, a nie mgliste przeczucie. Schemat pomaga, gdy dobry pomysł psuje się podczas realizacji. Zgodność obu poziomów nadal nie dowodzi sukcesu.

**Przykład:** Na przykład czworo uczniów planuje film naukowy do sześciu minut: minutę wstępu, trzy minuty doświadczenia na żywo i dwie minuty podsumowania. Pracownia jest dostępna tylko przez 20 minut, a przygotowanie zajmuje 12, zaś nagranie 15, więc doświadczenie potrzebuje 27 minut. Uczniowie zmieniają plan na przygotowany wcześniej, trzydziestosekundowy pokaz, którego nagranie zajmuje 5 minut bez tego przygotowania. Nagranie wstępu i podsumowania zajmuje 14 minut, więc film ma 3,5 minuty, a praca w pracowni 19 minut.

**Kiedy się przydaje:** Przy wyborze lokalizacji, planowaniu obsady, projektowaniu systemów i innych decyzjach mających poziom strategiczny oraz operacyjny.

**Procedura:**
1. Oddziel ogólne wybory od szczegółowej pracy, która z nich wynika.
2. Zaproponuj ogólny plan.
3. Opracuj szczegóły przy tych założeniach, sprawdzając wykonalność i koszt.
4. Jeśli szczegóły nie dają się zrealizować, wskaż odpowiedzialną za to kombinację ogólnych decyzji. Uwzględnij wykryte ograniczenie lub informację o koszcie w poprawionym planie.
5. Powtarzaj, aż oba poziomy będą zgodne, a następnie sprawdź całe rozwiązanie.

**Uwaga:** Informacja zwrotna musi być uzasadniona i wystarczająco konkretna, aby poprawić kolejną propozycję. Ta adaptacja do samodzielnej pracy nie daje matematycznych gwarancji formalnych algorytmów dekompozycji.

**Źródła:** [S2](#s2), „Benders Decomposition”.

### 16. Najpierw rozwiąż mały lub prosty przypadek

**Opis:** Mały przypadek to zmniejszona wersja tego samego problemu: z mniejszą liczbą obiektów, mniejszymi liczbami albo prostszymi regułami, ale z zachowaną zależnością, którą chcesz zrozumieć. Rozwiąż go w całości, porównaj z trochę większym przypadkiem i poszukaj kroków, które się nie zmieniają. To daje punkt zaczepienia, gdy pierwotne zadanie jest zagmatwane. Wynik jest wskazówką co do metody, nie dowodem, że metoda działa dla każdego rozmiaru. Potem wróć do pierwotnych danych i sprawdź argument względem ich reguł.

**Przykład:** Na przykład w turnieju, w którym każdy gracz spotyka się z każdym innym raz, zacznij od małych przypadków. Dwóch graczy daje jedną grę, trzech daje trzy, a czterech daje sześć. Każdy nowy gracz dodaje po jednej grze z każdym wcześniejszym, więc dla 20 graczy otrzymujemy 1 + 2 + ... + 19 = 190 gier. Małe przypadki ujawniły powtarzalny krok, a suma daje wynik. Same przykłady nie dowodzą, że inna reguła turnieju da ten sam wzór.

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

**Opis:** Najpierw zamień niejasną trudność w pytanie z wyraźnym celem, znanymi faktami i prawdziwymi ograniczeniami. Oddziel fakty od założeń: fakt jest podany lub sprawdzony, a założenie to coś uznane za prawdę bez kontroli. To pomaga, bo łatwo rozwiązać precyzyjnie sformułowaną, lecz niewłaściwą wersję pytania. Ustal, co oznacza sukces, jakich danych brakuje i czy dana reguła jest rzeczywista, czy tylko zwyczajowa. Potem zaplanuj działanie i oceń także samo sformułowanie problemu, bo ładne rozwiązanie złego pytania niewiele daje.

**Przykład:** Na przykład klasa pyta: „Czy wszyscy dotrą do muzeum przed dziewiątą?”. Doprecyzowanie słowa „wszyscy” daje 28 uczniów i 2 nauczycieli. Autobus odjeżdża o 8:10, jedzie 35 minut i ma 30 miejsc. Szkoła wymaga miejsca siedzącego dla każdej osoby, więc grupa mieści się dokładnie i przyjeżdża o 8:45. Jeśli można użyć tylko 28 miejsc, dwie osoby nie mają siedzenia i trzeba znaleźć inną trasę.

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

**Opis:** Zmień sposób przedstawienia, opisując ten sam problem jako rysunek, tabelę, równanie, model z przedmiotów albo nowy zestaw zmiennych. Dobra postać uwidacznia zależność ukrytą w słowach. Oznacz wielkości i przenieś każde ograniczenie, bo inaczej możesz po cichu zmienić zadanie. Schemat pomaga przy długich zadaniach tekstowych, układach przestrzennych i splątanych zależnościach. Dokładne przekształcenie zachowuje pierwotne pytanie, lecz przybliżenie je zmienia i wymaga osobnej kontroli. Szkic może podsunąć wynik, ale nie dowodzi dokładnej zależności.

**Przykład:** Na przykład z treści wynika, że prostokąt ma obwód 26 cm, a długość jest o 3 cm większa od szerokości. Oznacz szerokość przez w, a długość przez w + 3. Równanie 2w + 2(w + 3) = 26 zmienia się w 4w + 6 = 26, więc w = 5, a długość wynosi 8. Kontrola daje 2 × 5 + 2 × 8 = 26. Zastąpienie słów zmiennymi odsłoniło zależność bez zmiany warunków.

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

**Opis:** Dopisz jednostki do mierzonych wielkości i sprawdź proste przypadki graniczne, zanim zaufasz wzorowi. Jednostki mówią, jakiego rodzaju jest wynik: odległość podzielona przez czas daje prędkość, a nie czas na odległość. Przypadki graniczne obejmują zero, jeden, równe wartości oraz dozwolone minimum lub maksimum. Mogą ujawnić odwrócone działanie albo model, który przestaje obowiązywać, choć przejście tych testów nie dowodzi poprawności. Nie dziel przez dane wykluczone przez model, na przykład przez zero godzin w obliczeniu prędkości.

**Przykład:** Na przykład rowerzysta przejeżdża 18 km w 1,5 godziny, więc prędkość powinna wynosić 18 ÷ 1,5 = 12 km/h. Gdy Leo odwraca dzielenie, otrzymuje 0,083 godziny na kilometr, a jednostki pokazują błąd. Sprawdza 0 km: poprawny wzór daje 0 km/h. Sprawdza 36 km w 1,5 godziny: otrzymuje 24 km/h, czyli dwa razy więcej przy dwa razy większej odległości. Zaznacza też 0 godzin jako wartość niedozwoloną, bo przez zero nie można dzielić.

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

**Opis:** Wykorzystaj symetrię, gdy zamiana, obrót, odbicie lub zmiana oznaczeń nie zmienia żadnej reguły ani celu. Pogrupuj przypadki rzeczywiście równoważne, rozpatrz jeden reprezentatywny przypadek i przenieś wynik na pozostałe. Dzięki temu nie powtarzasz pracy w geometrii, zliczaniu, układaniu i grach z wymiennymi elementami. Najpierw sprawdź reguły: oznaczone krzesło, inny kolor albo wyróżniony gracz może zniszczyć pozorną symetrię. Symetryczny rysunek nie wymaga symetrycznego rozwiązania, a przy zliczaniu trzeba uważać na liczebność każdej grupy.

**Przykład:** Na przykład czterech nazwanych graczy siedzi przy nieoznaczonym okrągłym stole, a w grze liczy się kolejność zgodna z ruchem wskazówek zegara, więc odbicie jest innym układem. Obrót wszystkich osób daje ten sam wynik, więc ustal Anię i ustaw pozostałych zgodnie z ruchem wskazówek: 3 × 2 × 1 = 6 przypadków. Jeśli nauczyciel oznaczy jedno krzesło jako „przy drzwiach”, obrót też zmienia wynik. Każdy gracz może zająć to krzesło, a pozostałe miejsca wypełnić na 3! sposobów, więc mamy 4 × 6 = 24 przypadki.

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

**Opis:** Wypisz każdy wykonalny wybór, jego skutki, koszty i możliwości, z których rezygnujesz. Skutek to możliwy rezultat, kompromis oznacza zysk połączony z rezygnacją z czegoś innego, a prawdopodobieństwo to uzasadnione oszacowanie częstości rezultatu. Sumy ważone prawdopodobieństwami mają sens tylko wtedy, gdy prawdopodobieństwa opierają się na danych. Nieznana szansa nie wynosi automatycznie 50 procent. Porównaj także niekorzystne skutki i nie ukrywaj ocen wartościujących w jednym wskaźniku.

**Przykład:** Na przykład Rita porównuje dwa sposoby nauki. Plan A zajmuje dwie godziny, a na podstawie czterech podobnych kartkówek szacuje 75 procent szans na 80 punktów i 25 procent na 60. Zgrubny wynik oczekiwany to 0,75 × 80 + 0,25 × 60 = 75 punktów. Plan B zajmuje godzinę, lecz Rita nie ma porównywalnych danych, więc jego szansa jest nieznana, a nie wynosi automatycznie 50 procent. Może go przetestować, ale nie powinna liczyć średniej na podstawie zmyślonego prawdopodobieństwa. Jeśli 60 punktów byłoby nie do przyjęcia, sama średnia nie wystarczy.

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

**Opis:** Przedstaw problem jako system, a nie zbiór osób lub części. Narysuj uczestników jako węzły i połącz zależności, przepływy oraz wpływy strzałkami. Poszukaj wąskiego gardła, czyli punktu ograniczającego proces, pętli sprzężenia zwrotnego i bodźców. Bodziec to powód zwiększający skłonność do działania. Schemat pomaga przewidzieć skutki uboczne. Mapa jest tylko modelem, nie dowodem przyczynowości, więc przetestuj małą zmianę i oceń całość.

**Przykład:** Na przykład czworo uczniów wysyła slajdy do jednego redaktora. Nauczyciel przyznaje punkt za każdy slajd, więc każdy ma bodziec, by dodawać więcej. Redaktor staje się wąskim gardłem i późno dostaje 18 powtarzających się slajdów. Grupa rozrysowuje zależności: uczniowie tworzą slajdy, slajdy trafiają do redakcji, a redakcja wpływa na termin. Prosi nauczyciela o próbę oceny spójności prezentacji i limitu trzech slajdów na osobę. Nauczyciel się zgadza, a grupa kończy 12 niepowtarzających się slajdów na czas. Ta próba sugeruje, że reguła pomogła, ale nie dowodzi, że spowodowała wszystkie ulepszenia.

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

**Opis:** Wykonaj kilka małych eksperymentów, aby odkryć możliwy wzorzec, a potem znajdź powód, dla którego powinien się utrzymać. Wzorzec to powtarzająca się zależność, natomiast dowód wyjaśnia, dlaczego musi ona zachodzić przy podanych regułach. Zapisuj przykłady w stały sposób, sprawdź niewygodny przypadek i określ przewidywany zakres. Wiele reguł może pasować do kilku pierwszych wyników, więc przykłady wspierają przypuszczenie, ale nie dowodzą twierdzenia ogólnego. Gdy test zawiedzie, popraw regułę zamiast ukrywać wyjątek.

**Przykład:** Na przykład rząd połączonych kwadratowych płytek wymaga 4 patyczków dla jednego kwadratu, 7 dla dwóch i 10 dla trzech. Różnice sugerują dodawanie po 3, więc osiem kwadratów powinno wymagać 4 + 7 × 3 = 25 patyczków. Wyjaśnienie wynika z budowy: każdy nowy kwadrat dzieli jeden bok z rzędem i dodaje tylko trzy patyczki. To tłumaczy wzorzec dla dowolnego prostego rzędu, nie tylko dla trzech przykładów. Same liczby 4, 7 i 10 mogłyby pasować do innej zmyślonej reguły, więc nie były dowodem.

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

**Opis:** Oddziel założenia od dokładnego wniosku, a następnie sprawdź jego zaprzeczenie. Sprzeczność pojawia się wtedy, gdy założenia razem z zaprzeczonym wnioskiem prowadzą do czegoś niemożliwego. Kontrprzykład jest czymś innym: to jeden poprawny przypadek, który spełnia założenia, ale łamie wniosek. Sprzeczność wspiera twierdzenie ogólne, a kontrprzykład pozwala je odrzucić lub zawęzić. Sam brak znalezionego kontrprzykładu niczego nie dowodzi, a w doświadczeniu konflikt może ujawnić zły model, nie twierdzenie matematyczne.

**Przykład:** Na przykład twierdzenie „Każda wielokrotność 4 jest parzysta” można sprawdzić przez sprzeczność. Gdyby liczba była jednocześnie podzielna przez 4 i nieparzysta, byłaby podzielna przez 2, a zarazem dawałaby resztę 1, co jest niemożliwe. Kontrprzykład obala twierdzenie „Każda liczba kończąca się na 5 jest pierwsza”: 15 kończy się na 5, ale dzieli się przez 3 i 5. Ten poprawny przypadek nie tworzy sprzeczności; bezpośrednio łamie wniosek.

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

**Opis:** Wybierz rzeczywisty obiekt najmniejszy, największy, pierwszy, ostatni albo najbardziej ograniczony. Jego skrajna pozycja wyklucza możliwości, które nadal byłyby dostępne dla dowolnego obiektu. W skończonym zbiorze najpierw sprawdź, czy taki obiekt istnieje, a potem zapytaj, czy proponowany układ wymuszałby coś jeszcze mniejszego lub większego. To potrafi zamienić złożony argument o istnieniu w krótką sprzeczność. Nie chodzi o podstawienie bardzo dużej liczby do wzoru ani zbliżanie się do granicy, lecz o obiekt naprawdę obecny w zbiorze.

**Przykład:** Na przykład pięciu graczy ma wyniki 12, 8, 15, 10 i 9 punktów. Wybierz największy wynik, 15. Twierdzenie, że po każdym graczu można wskazać kogoś z wyższym wynikiem, nie może działać, bo na liście nie ma wyniku większego niż 15. Skrajny gracz od razu daje punkt zatrzymania. W dłuższym skończonym rankingu ten wybór oszczędza sprawdzania każdej osoby. Gdyby zbiór był nieskończony i nie miał największego elementu, argument nie działałby automatycznie.

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

**Opis:** Zasada szufladkowa mówi, że gdy do mniejszej liczby oznaczonych kategorii wkładamy więcej obiektów, któraś kategoria dostanie co najmniej dwa. Kategorie są szufladkami, a obiektami mogą być osoby, daty, pliki albo pionki. Ta metoda pozwala dowieść, że powtórzenie lub kolizja jest nieunikniona, nawet jeśli nie wiadomo, gdzie dokładnie wystąpi. Przy mocniejszym wniosku porównaj liczbę obiektów z pojemnością każdej kategorii, a nie tylko z liczbą kategorii.

**Przykład:** W klasie jest 25 uczniów. Przyporządkuj miesiąc urodzin każdemu uczniowi, więc mamy 12 szuflad, a każdy trafia dokładnie do jednej. Gdyby w każdym miesiącu były najwyżej 2 urodziny, wszystkich uczniów byłoby najwyżej 12 × 2 = 24. Jest ich 25, więc to założenie odpada: w którymś miesiącu urodziły się co najmniej 3 osoby. Wiemy, że taki miesiąc istnieje, ale sama zasada nie wskazuje który.

**Kiedy się przydaje:** Przy dowodzeniu nieuniknionych powtórzeń, kolizji, istnienia bliskich par i ograniczeń pojemności.

**Procedura:**
1. Ustal, które obiekty przyporządkujesz do kategorii.
2. Zdefiniuj kategorie tak, aby przynależność do tej samej kategorii dawała użyteczną zależność.
3. Przypisz każdy obiekt do dokładnie jednej kategorii, jednoznacznie rozstrzygając przypadki brzegowe.
4. Porównaj liczbę obiektów z liczbą lub pojemnością kategorii. Więcej niż `k × m` obiektów w `m` kategoriach oznacza, że jakaś kategoria zawiera co najmniej `k + 1` obiektów.
5. Przełóż wspólną przynależność do kategorii na potrzebny wniosek.

**Uwaga:** Trudność polega na wyborze użytecznych kategorii. Zasada gwarantuje istnienie kategorii współdzielonej przez obiekty, ale nie musi wskazywać, która to kategoria.

**Źródła:** [S4](#s4), podrozdział 3.3, s. 84-91.

### 27. Znajdź coś, co nie może się zmienić

**Opis:** Niezmiennik to własność, która pozostaje taka sama po każdym dozwolonym ruchu. Najpierw dokładnie opisz ruchy, potem sprawdzaj kandydatów, na przykład parzystość, resztę z dzielenia, sumę albo bilans kolorów. Różne wartości na początku i na końcu dowodzą, że cel jest nieosiągalny. Zgodność jest jednak tylko warunkiem koniecznym, a nie drogą dojścia: dwa stany mogą mieć ten sam niezmiennik, lecz należeć do rozłącznych części gry. Osiągalność wymaga dodatkowego rozumowania o ruchach.

**Przykład:** Trzy przełączniki zaczynają w stanie 000, gdzie 1 oznacza włączenie. Jedyny ruch zmienia przełączniki 1 i 2. Liczba włączonych przełączników zachowuje parzystość, bo zmiana dwóch daje przyrost +2, 0 albo -2. Cel 100 ma jeden włączony, więc jest niemożliwy. Cel 101 ma dwa włączone, więc niezmiennik się zgadza, lecz z 000 można przejść tylko do 110, a powtórzenie wraca do 000. Zatem 101 także jest nieosiągalny.

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

**Opis:** Monowariant to liczba przypisana bieżącemu stanowi, która przy każdym dozwolonym kroku nigdy nie rośnie albo nigdy nie maleje. Może wskazać postęp, wykluczyć cel lub pomóc dowieść zakończenia. Do zatrzymania w skończonym czasie potrzeba czegoś więcej: dyskretnego ograniczenia, na przykład nieujemnej liczby całkowitej malejącej o co najmniej 1, gdy procedura trwa. Ograniczona liczba rzeczywista może zmieniać się ściśle w jedną stronę bez końca, a ruchy bez zmiany oceny mogą tworzyć cykl.

**Przykład:** Zacznij od dodatniej liczby rzeczywistej x = 1 i w każdej rundzie zastąp ją przez x/2; zatrzymaj się dopiero dla x = 0. x ściśle maleje, ale pozostaje powyżej 0. Po n rundach x = 1/2^n, więc dla każdego skończonego n procedura nadal trwa. W innym procesie stos 12 kulek traci co najmniej jedną kulkę w aktywnym kroku; liczba kulek, będąca całkowitym monowariantem, osiąga 0 w najwyżej 12 krokach.

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

**Opis:** Rekurencja to reguła obliczania przypadku na podstawie wcześniejszych przypadków. Indukcja matematyczna to metoda dowodu: sprawdzasz przypadki początkowe, a potem pokazujesz, że jeśli teza działa dla potrzebnych mniejszych rozmiarów, działa też dla następnego. Obie metody budują duże przypadki z małych, lecz odpowiadają na różne pytania. Rekurencja produkuje wartości, a indukcja uzasadnia twierdzenie dla każdego dopuszczalnego rozmiaru całkowitego. Krok nie może zakładać nieudowodnionej tezy, a baza musi obejmować rozmiary potrzebne regule.

**Przykład:** Policz drogi robota na n stopni, gdy skacze o 1 albo 2. Niech a(n) oznacza liczbę dróg, przy a(1) = 1 i a(2) = 2. Ostatni skok pochodzi z n-1 albo n-2, więc a(n) = a(n-1) + a(n-2); stąd a(3) = 3 i a(4) = 5. Rekurencja oblicza wartości, ale nie dowodzi wzoru dla każdego n. Indukcja sprawdziłaby bazę i dowiodła kroku dla dowolnego n.

**Kiedy się przydaje:** Przy zliczaniu, ciągach, procedurach rekurencyjnych i dowodach indeksowanych liczbami całkowitymi.

**Procedura:**
1. Dokładnie zdefiniuj wynik lub twierdzenie dla rozmiaru `n`.
2. Rozwiąż wszystkie potrzebne przypadki początkowe.
3. Wyjaśnij, jak większy przypadek sprowadza się do mniejszych lub jak poprawność mniejszych przypadków pozwala wykazać następny.
4. Przy zliczaniu upewnij się, że konstrukcja obejmuje każdy przypadek bez powtórzeń. W dowodzie uzasadnij krok dla dowolnego dopuszczalnego rozmiaru.
5. Połącz przypadki początkowe z krokiem przejścia; sprawdź, czy żaden rozmiar nie został pominięty.

**Uwaga:** Założenie poprawności właśnie tego przypadku, którego próbujesz dowieść, jest błędnym kołem. Sam krok indukcyjny bez wymaganych przypadków początkowych niczego nie ustanawia.

**Źródła:** [S4](#s4), podrozdział 2.3, s. 45-50, i podrozdział 6.4, s. 214-217.

### 30. Rozpatrz lub policz dopełnienie

**Opis:** Dopełnienie to zbiór wszystkich dopuszczalnych wyników, które nie spełniają szukanego warunku. Gdy sukces trudno opisać, a porażkę łatwo, policz całość i odejmij porażki. W prawdopodobieństwie użyj P(sukces) = 1 - P(porażka), ale najpierw określ model. Dzielenie liczby sprzyjających wyników przez liczbę wszystkich działa tylko wtedy, gdy pojedyncze możliwości są jednakowo prawdopodobne. Przypadki porażki muszą też być rozłączne albo trzeba poprawić nakładanie się kategorii.

**Przykład:** Rzuć dwa razy uczciwą sześcienną kostką i zapytaj o co najmniej jedną szóstkę. Dopełnieniem jest brak szóstki w obu rzutach. Mamy 6 × 6 = 36 jednakowo prawdopodobnych uporządkowanych wyników, a wyników bez szóstki jest 5 × 5 = 25. Zatem sukces ma 36 - 25 = 11 wyników, więc jego prawdopodobieństwo wynosi 11/36. Licząc osobno szóstkę w pierwszym i drugim rzucie, policzylibyśmy dwa razy wynik z dwiema szóstkami.

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

**Opis:** Podwójne zliczanie polega na policzeniu jasno określonego zbioru z dwóch punktów widzenia. Obie metody opisują te same obiekty, więc sumy muszą się zgadzać. Można tak odkryć wzór, zastąpić trudne zliczanie łatwiejszym albo znaleźć błąd. Najpierw ustal, czy kolejność ma znaczenie i ile razy każdy obiekt pojawia się w każdym rachunku. Jeśli wcześniejsze wybory wymuszają późniejszy, nie traktuj go jako niezależnego, bo powstanie nadmiarowe zliczanie.

**Przykład:** Sześciu uczniów podaje sobie ręce, każda para dokładnie raz. Z jednego punktu widzenia każdy spotyka 5 osób, więc mamy 6 × 5 = 30 końców uścisków. Każdy rzeczywisty uścisk ma dwie końcówki, po jednej dla każdej osoby, zatem policzyliśmy wszystko dwa razy i 30/2 = 15. Drugi rachunek wybiera od razu parę uczestników: 6 × 5 / 2 = 15. Zgodność potwierdza wynik.

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

**Opis:** Obiekt pomocniczy to nowa prosta, zmienna, suma częściowa, ilustracja albo cel pośredni, o które zadanie nie pytało. Dodaj go z konkretnym powodem: powinien odsłonić zależność łączącą dane z celem. Zdefiniuj go dokładnie i sprawdź, czy wolno go zbudować. To most, nie dodatkowe założenie; jeśli nie może istnieć albo tylko powtarza pożądany wniosek, rozumowanie zawodzi. Na końcu przełóż wynik z powrotem na pierwotne pytanie.

**Przykład:** Prostokątne boisko szkolne ma boki 6 m i 8 m. Narysuj przekątną, aby powstał trójkąt prostokątny. Reguła Pitagorasa mówi, że kwadrat najdłuższego boku równa się sumie kwadratów pozostałych: d² = 6² + 8² = 100, więc d = 10 m. Dodana prosta połączyła znane boki z szukaną odległością, ale nie zmieniła boiska.

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

**Opis:** Kompletne przeszukiwanie przypadków zapisuje każdą dopuszczalną możliwość w ustalonej kolejności, zwykle w tabeli albo na rozgałęzionej liście. Kompletne znaczy, że niczego nie pominięto, a rozłączne, że jedna możliwość nie trafia do dwóch gałęzi. Najpierw stosuj najsilniejszy szybki warunek i skreślaj niemożliwe przypadki, zachowując powód. Metoda działa, gdy lista jest mała. Jeśli sprawdzisz tylko część kandydatów, możesz znaleźć rozwiązanie, lecz nie dowiedziesz, że innych nie ma.

**Przykład:** Czterocyfrowy kod do szafki używa cyfr 1, 2, 3, 4 po jednej, musi kończyć się cyfrą parzystą, a pierwsza cyfra ma być mniejsza od drugiej. Podziel kody na rozłączne przypadki według ostatniej cyfry. Dla 2 zostają 1342, 1432, 3412 po sprawdzeniu pierwszej nierówności. Dla 4 zostają 1234, 1324, 2314. Tylko 2 albo 4 może być na końcu, więc sześć kodów wyczerpuje możliwości i każdy spełnia warunki.

**Kiedy się przydaje:** W zagadkach logicznych, niewielkich zbiorach konfiguracji, problemach porządkowania i poszukiwaniu wszystkich rozwiązań.

**Procedura:**
1. Określ możliwe wybory lub stany i spójny sposób ich zapisu.
2. Podziel poszukiwania na przypadki obejmujące wszystkie możliwości bez powtórzeń.
3. Najpierw zastosuj kontrole najsilniej ograniczające wybór lub najtańsze w wykonaniu i skreśl przypadki, które ich nie spełniają.
4. W każdym pozostałym przypadku przejdź do następnego nierozstrzygniętego wyboru. Zachowuj uzasadnienia wykluczeń.
5. Sprawdź każdą pozostałą odpowiedź względem wszystkich warunków. Jeśli twierdzisz, że innych nie ma, wyjaśnij, dlaczego przeszukiwanie było kompletne.

**Uwaga:** Lista może nadmiernie się rozrosnąć. Jeśli ograniczysz poszukiwania, zaznacz, że pozostali niezbadani kandydaci; brak odpowiedzi w częściowym przeszukiwaniu nie jest dowodem niemożliwości.

**Źródła:** [S5](#s5), s. 285-286, pełne wyliczenie tras, oraz s. 331-332, problem samochodów różnych kolorów; [S3](#s3), część 6, uporządkowane wypisywanie i eliminacja.

### 34. Ustal tylko tę wielkość, o którą pyta zadanie

**Opis:** Wielkość łączna to suma, różnica, iloraz albo pozycja, a nie każda pojedyncza wartość. Najpierw podkreśl dokładnie to, o co pyta zadanie. Potem połącz dane tak, aby dodatkowe niewiadome się skróciły albo przestały mieć znaczenie. Oszczędza to rachunków i nie dopisuje informacji, których dane nie zawierają. Sprawdź jednak jednoznaczność: ustalona suma nie wyznacza składników, a różne dopuszczalne ustawienia z różnymi szukanymi wynikami oznaczają brak danych.

**Przykład:** Prostokąt ma obwód 28 cm, a pytanie dotyczy sumy długości i szerokości. Jeśli boki to a i b, wtedy 2a + 2b = 28, więc od razu a + b = 14 cm. Nie trzeba wyznaczać a i b osobno: prostokąty 6 na 8 oraz 5 na 9 mają ten sam obwód, ale w obu suma boków wynosi 14. Szukana wielkość łączna jest ustalona, choć pojedyncze boki nie są.

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

**Opis:** Metoda zachłanna buduje kandydata, za każdym razem wybierając to, co według prostej lokalnej reguły wygląda najlepiej teraz. Przydaje się do szybkiego ułożenia trasy, planu albo podziału, gdy sprawdzenie wszystkich możliwości byłoby kosztowne. Po lokalnych wyborach obejrzyj cały wynik i porównaj go z alternatywami lub ulepsz. Zachłanność tworzy kandydata, ale sama nie dowodzi najlepszego wyniku. Dobry ruch w tej chwili może zostawić niewygodną resztę, drogi finał albo ślepą uliczkę.

**Przykład:** Gra ma dać dokładnie 6 punktów za pomocą żetonów wartych 1, 3 i 4 punkty, używając ich jak najmniej. Metoda zachłanna bierze najpierw największy żeton: 4, potem 1 i 1, razem 3 żetony. Tymczasem dwa żetony po 3 dają 6 w 2 żetonach. Wynik zachłanny jest poprawny, ale nieoptymalny. Aby uznać go za najlepszy, trzeba osobno dowieść optymalności albo wykluczyć lepsze kombinacje.

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

**Opis:** Monitorowanie oznacza zatrzymanie się w trakcie pracy i porównanie dowodów z planem. Zapytaj, co próba ustaliła, co nadal jest nieznane i dlaczego następny krok miałby pomóc. To odróżnia brak wiedzy od złej strategii albo błędnego odczytania warunku. Kontynuuj, gdy próba daje informacje; w przeciwnym razie zmień uzasadniony element planu, a nie wszystko losowo ani tylko dlatego, że poświęcono już czas. Na końcu sprawdź odpowiedź i zapisz wniosek do ponownego użycia.

**Przykład:** Chcesz poprawić wynik kartkówki. Pierwszy plan to czytanie notatek przez 30 minut. Test z 10 pytań daje 2 poprawne odpowiedzi. Przegląd błędów pokazuje, że nie pamiętasz definicji, choć rozumiesz przykłady, więc problemem jest przypominanie, a nie czas czytania. Zmieniasz plan na fiszki i zadania, a podobny test daje 7/10. Liczby nie dowodzą pełnego opanowania, ale pokazują, dlaczego nowy plan rokuje lepiej.

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

**Opis:** Uogólnienie zastępuje jeden ustalony szczegół zmienną i bada całą rodzinę podobnych przypadków. Zmienna pełni rolę parametru, czyli symbolu, dla którego trzeba podać dopuszczalne wartości. To może ujawnić wzór lub strukturę ukrytą przez jeden przykład, lecz sprawdzenie kilku wartości nie jest dowodem. Poprawne twierdzenie ogólne wymaga argumentu obejmującego cały określony zakres, na przykład każdą dodatnią liczbę całkowitą, oraz osobnego wskazania wyjątków. Dopiero potem podstaw pierwotną wartość.

**Przykład:** Dla pierwszych n liczb nieparzystych sprawdź 1 = 1² oraz 1 + 3 = 2². Aby dowieść wzoru dla każdej dodatniej liczby całkowitej n, załóż, że pierwsze n dają n². Następna liczba nieparzysta to 2n + 1, więc nowa suma wynosi n² + 2n + 1 = (n + 1)². Baza i ten krok obejmują każde dodatnie n. Zatem pierwsze 4 liczby dają 4² = 16; kilka przykładów nie dowodzi wzoru.

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

Te przykłady ilustrują użycie przewodnika; nie są dodatkowymi studiami przypadków pochodzącymi ze źródeł.

- **Zaplanuj niewielkie warsztaty:** Określ sukces i ograniczenia (17), rozumuj wstecz od wydarzenia (1), podziel przygotowania na zadania (3) i szacuj na podstawie podobnej pracy (7). Sprawdź, czy mieści się cały harmonogram, nie tylko każde zadanie z osobna.
- **Zbadaj powracającą usterkę oprogramowania:** Dokładnie opisz usterkę (17), odtwórz ją w mniejszym przypadku (16) i przeprowadź kontrolowane testy (4). Zapisuj każdy wynik i zmieniaj hipotezę, gdy dowody przestają ją wspierać (36).
- **Sprawdź, czy przekształcenie jest możliwe:** Zapisz dozwolone ruchy (17), eksperymentuj na małych przypadkach (23) i poszukaj zachowywanej wielkości (27). Jeśli stan początkowy i docelowy różnią się pod jej względem, wyjaśnij, dlaczego każdy dozwolony ruch ją zachowuje, zanim uznasz cel za nieosiągalny.

## Szablon notatki roboczej

Skopiuj te pytania pomocnicze, gdy zaczynasz pracę nad problemem:

- **Cel i test sukcesu:**
- **Znane fakty i niewiadome:**
- **Bezwzględne ograniczenia i niesprawdzone założenia:**
- **Wybrany schemat i powód wyboru:**
- **Następne działanie i czego ma mnie nauczyć:**
- **Wynik i dowody:**
- **Co nadal wymaga sprawdzenia:**
- **Kontynuować, poprawić czy zakończyć:**
- **Wniosek do ponownego wykorzystania:**

## Przegląd źródeł w kolejności lektury

Poniżej uwzględniono wszystkie pięć dokumentów dotyczących tematu z tego folderu, z pominięciem plików HTML. Trzy dokumenty Word przeczytano w całości w postaci tekstu. W dwóch obszernych plikach PDF przejrzano wskazane niżej części i przykłady pod kątem metod rozwiązywania problemów. Nie opracowano wyczerpująco zbiorów ćwiczeń ani przeglądów literatury. Teksty źródłowe pozostały bez zmian.

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

**Autor i wydanie:** Paul Zeitz, wydanie drugie. Odwołania do stron używają numeracji drukowanej, nie pozycji w przeglądarce PDF.

**Przegląd pod kątem metod wielokrotnego użytku:** Spis treści i wskazówki dotyczące lektury; omówienia metod i wybrane rozwiązane przykłady w podrozdziałach 2.2-2.4, 3.2-3.4, 6.1-6.4 i 8.4. Porównano wyrenderowaną stronę geometryczną dotyczącą zasady ekstremalnej z wyodrębnionym tekstem. Główne uzupełnienia: sprawdzanie hipotez, sprzeczność, elementy skrajne, zasada szufladkowa, niezmienniki, monowarianty, indukcja i rekurencja, dopełnienia, zliczanie na dwa sposoby oraz konstrukcje pomocnicze.

**Dobór treści:** To przegląd metod, nie rozwiązanie ani przepisanie zbioru ćwiczeń z książki. Specjalistyczne narzędzia algebry, teorii liczb, analizy matematycznej i geometrii wykraczają poza ten przewodnik, chyba że ujawniają schemat o szerokim zastosowaniu. Książka uzupełnia również opisane wcześniej rozumowanie wstecz, upraszczanie, zmianę sposobu przedstawienia, symetrię i myślenie za pomocą grafów.

<a id="s5"></a>
### S5 Heurystyki w nauczaniu i uczeniu się matematyki

**Dokument:** [/home/andrzey/git-claude/heuristics/Heuristics in Problem Solving for the Teaching and Learning of Mathematics.pdf](</home/andrzey/git-claude/heuristics/Heuristics in Problem Solving for the Teaching and Learning of Mathematics.pdf>)

**Autor i data:** Nuno Álvaro Ferreira Rodrigues, rozprawa doktorska, Uniwersytet w Coimbrze, 2015. Odwołania do stron używają numeracji drukowanej.

**Przegląd pod kątem metod wielokrotnego użytku:** Streszczenie, spis treści, wybrane omówienia metapoznania i rozwiązywania problemów na s. 27-28 i 48-50, wnioski w okolicy s. 212-213 oraz plan aneksu i wskazówki metodyczne na s. 215-226. Przeanalizowano wybrane rozwiązane przykłady na s. 236-237, 252-253, 285-286, 320-333 i końcowe omówienie paradoksu wizualnego na s. 402-405. Sprawdzono wizualnie schemat cyklicznego procesu na s. 223 i porównanie metod wyznaczania tras na s. 285.

**Najważniejsze treści:** Systematyczne wyliczanie i eliminacja, wyznaczanie tylko szukanej wielkości, konstrukcja zachłanna z wyraźnym kontrprzykładem dla jej optymalności oraz kontrolowanie i poprawianie procesu rozwiązywania. Wcześniejsze schematy uzupełniono konkretnymi przykładami sposobów przedstawienia, relaksacji, konstrukcji pomocniczych, symetrii i wyborów skrajnych.

**Dobór treści:** Aneks potraktowano jako źródło przeanalizowanych schematów rozumowania, nie powód do kopiowania każdego ćwiczenia matematycznego czy anegdoty historycznej. Rozprawa opisuje ograniczenia krótkiej interwencji w klasie, dlatego przewodnik nie twierdzi, że samo nauczenie się listy heurystyk gwarantuje poprawę wyników. Nadal potrzebne są praktyka, wiedza z danej dziedziny i kontrola własnego rozumowania.
