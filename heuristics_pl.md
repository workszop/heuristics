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

**Opis:** Zacznij od celu i zapytaj: „Co musiałoby być gotowe tuż przed jego osiągnięciem?”. Potem zadaj to samo pytanie dla wcześniejszego kroku. Cofaj się tak długo, aż dojdziesz do czegoś, co już wiesz lub umiesz zrobić. W ten sposób rozpiszesz odległy cel na mniejsze wymagania i zauważysz ewentualne braki. Następnie przejdź przez plan od początku do końca. Samo znalezienie potrzebnego warunku nie wystarcza: sprawdź, czy każdy krok rzeczywiście pozwala wykonać następny.

**Przykład:** W piątek musisz oddać plakat naukowy. Żeby go wysłać, potrzebujesz wyeksportowanego pliku. Wcześniej musisz rozmieścić tekst i ilustracje, a do tego mieć szkic i źródła. Przed oddaniem plakat musi też obejrzeć nauczyciel. W pierwszym planie zabrakło czasu na jego uwagi. Wyznaczasz więc szkic na wtorek, skład plakatu na środę, uwagi na czwartek, a wysyłkę na piątek. Teraz sprawdzasz plan od początku: czy po każdym etapie masz wszystko, czego potrzebujesz w następnym?

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

**Opis:** Przypomnij sobie zadanie, które już udało ci się rozwiązać. Czy w nowym problemie coś zależy od czegoś innego w podobny sposób? Na takim porównaniu polega analogia. Ustal, które elementy obu zadań sobie odpowiadają, jakie mają ograniczenia i do czego zmierzasz. Następnie spróbuj dostosować znaną metodę. Nie kopiuj gotowej odpowiedzi. Nawet podobnie brzmiące zadania mogą mieć różne warunki, dlatego sprawdź przede wszystkim te różnice, które mogłyby sprawić, że wcześniejszy sposób tutaj nie zadziała.

**Przykład:** W planszówce trzeba zebrać klucze, żeby otworzyć drzwi. Podobnie planujesz prezentację grupową: źródła są jak klucze potrzebne do przygotowania slajdów, a gotowe slajdy pozwalają przeprowadzić próbę generalną. Dostrzegasz też różnicę: kilka osób może szukać źródeł równocześnie, więc nie trzeba kopiować kolejności ruchów z gry. Porównanie pomaga ustalić, co można robić jednocześnie, a z czym trzeba poczekać. Brak źródła zatrzymuje pracę nad danym slajdem.

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

**Opis:** Gdy trudno objąć cały problem, podziel go na mniejsze zadania. Przy każdym zapisz, jaki ma dać wynik i czy trzeba wcześniej skończyć coś innego. Łatwiej wtedy zdecydować, od czego zacząć i jak podzielić pracę między osoby. Po rozwiązaniu części połącz je i sprawdź całość. Poszczególne części mogą działać osobno, a po połączeniu sobie przeszkadzać. Ostatecznie cały wynik musi odpowiadać pierwotnemu celowi i spełniać wszystkie warunki.

**Przykład:** Organizację klasowego wieczoru filmowego dzielisz na uzyskanie zgody i znalezienie sali, wybór filmu, zakup przekąsek, ustalenie godzin oraz ogłoszenie wydarzenia. Zgoda jest potrzebna przed rezerwacją, a długość filmu wpływa na godzinę zakończenia. Dwie osoby osobno wybierają przekąski. Dopiero po połączeniu ich list widać, że zakupy przekroczą budżet, więc klasa rezygnuje z jednego produktu. Podział pracy ustala odpowiedzialność, ale dopiero sprawdzenie całości pozwala dopilnować budżetu i godzin.

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

**Przykład:** Przypuszczacie, że złożone paski papieru wzmocnią papierowy most. Budujecie dwie wersje mostu o długości 20 centymetrów: z trzema i z pięcioma paskami. Poza liczbą pasków niczego nie zmieniacie. Na każdej wersji kładziecie pojedynczo identyczne książki, aż most się zapadnie. Most z trzema paskami utrzymał cztery książki, a z pięcioma osiem. W tej próbie więcej pasków oznaczało większą wytrzymałość. Nie wynika z niej jednak, że każdy most powinien mieć akurat pięć pasków.

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

**Przykład:** Wasza grupa ma plan nauki pięciu przedmiotów, ale powtórki do trzech sprawdzianów zaplanowano na jeden wieczór. Zamiana dwóch bloków nauki pomaga rozłożyć przygotowania. Po trzech zamianach kolejne drobne zmiany już pogarszają plan. Zachowujecie go i układacie drugi, zaczynając od innej kolejności przedmiotów. Ten lepiej rozkłada powtórki przed ustalonymi terminami sprawdzianów. Nie zmieniacie ani terminów, ani zestawu przedmiotów. Oba plany oceniacie według tego samego kryterium, zamiast wybierać ten, który tylko wygląda lepiej.

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

**Przykład:** Wasza klasa chce zebrać 100 euro ze sprzedaży przekąsek. Zakładacie, że każdy z 20 uczniów sprzeda po 3 produkty za 2 euro: 20 × 3 × 2 = 120 euro. Sprawdzacie też warianty z 2 i 4 produktami na osobę. Otrzymujecie przybliżony zakres od 80 do 160 euro. Cel wydaje się możliwy, ale to jeszcze nie kwota, która wam zostanie. Trzeba uwzględnić koszty i sprawdzić, ile przekąsek może się nie sprzedać.

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

**Opis:** Oszacuj pracę na dwa sposoby. Najpierw podziel ją na części tak, żeby niczego nie liczyć podwójnie. Skorzystaj z danych z podobnych zadań, na przykład z liczby minut potrzebnych na montaż jednego nagrania. Dodaj pracę wspólną dla całości, taką jak uzgodnienia i wysyłka. Następnie porównaj sumę z czasem wykonania podobnego całego zadania. Jeśli wyniki się różnią, poszukaj przyczyny. Pamiętaj też, że łączny czas pracy wszystkich osób to nie to samo co czas od rozpoczęcia do zakończenia projektu.

**Przykład:** Klasowy podcast zawiera cztery wywiady. Montaż jednego zajmował wcześniej średnio 15 minut, więc na wszystkie potrzeba około 4 × 15 = 60 minut pracy. Dodajcie 30 minut na wspólny wstęp i wysyłkę: razem 90 minut. Jeśli dwie osoby montują równocześnie, od rozpoczęcia do zakończenia może minąć bliżej 60 minut. Poprzedni odcinek przygotowywaliście jednak przez 2 godziny. Sprawdźcie, skąd ta różnica, a po skończeniu nowego odcinka poprawcie założenia do przyszłych oszacowań.

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

**Opis:** Pierwszą odpowiedź potraktuj jako przypuszczenie do sprawdzenia. Może wynikać ze skrótu myślowego. O dostępności mówimy, gdy duży wpływ ma przykład, który łatwo sobie przypomnieć. Reprezentatywność polega na ocenianiu przez podobieństwo, a zakotwiczenie na zbyt silnym sugerowaniu się pierwszą liczbą. Sprawdź, czy któryś z tych mechanizmów wpływa na twoją ocenę. Poszukaj porównywalnych danych, również takich, które jej przeczą. Potem spróbuj oszacować wynik inną metodą i porównaj odpowiedzi. To pomoże zauważyć, czego nadal nie wiesz, choć nie usunie całej niepewności.

**Przykład:** Po dwóch spóźnionych autobusach przewidujesz, że połowa z dziesięciu następnych kursów też się spóźni. Opóźnienia dobrze zapadły ci w pamięć i wpływają na ocenę. Sprawdzasz dziesięć wcześniejszych kursów: spóźnione były dwa, więc do tej małej próby lepiej pasuje 20 procent niż 50. Korygujesz przewidywanie, ale nie uznajesz autobusów za niezawodne. Pogoda może wpłynąć na kolejne kursy, a dane z przeszłości nie dają pewności, co wydarzy się później.

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

**Opis:** Spróbuj rozwiązać łatwiejszą wersję zadania, w której tymczasowo pomijasz lub łagodzisz jedną regułę. To właśnie relaksacja ograniczeń. Cel pozostaje ten sam. Sprawdź, co udało się dzięki uproszczeniu i których pierwotnych warunków wynik nie spełnia. Możesz w ten sposób zauważyć, co blokuje resztę pracy, albo uzyskać oszacowanie graniczne, jak w schemacie 11. Przed przyjęciem odpowiedzi przywróć pierwotne reguły. Uproszczenie służy rozumowaniu: nie pozwala ignorować rzeczywistych wymagań bezpieczeństwa, prawa czy dostępności.

**Przykład:** Wasza grupa musi skończyć film, a wszyscy mają być na każdym spotkaniu. W roboczym arkuszu na chwilę pomijacie ten wymóg: dwie pary montują sceny osobno, potem spotykają się na 20-minutowe nagranie. Widać, że trudność sprawia wspólny montaż. Wracacie do obowiązującej reguły i planujecie jedno dłuższe spotkanie całej grupy. Uproszczony plan był tylko podpowiedzią. Ewentualną zgodę nauczyciela na zmianę wymagań zapisujecie osobno. Wymagania dotyczące bezpieczeństwa i niezbędne zgody nadal obowiązują.

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

**Opis:** Czasem musisz wybierać całe przedmioty albo decydować „tak” lub „nie”. Na próbę dopuść także ułamki, pozostawiając bez zmian cel i pozostałe ograniczenia. Takie uproszczenie nazywa się relaksacją ciągłą. Może ułatwić obliczenia, podpowiedzieć cel poszukiwań lub dać oszacowanie graniczne. Potem trzeba wrócić do rzeczywistych wyborów. Samo zaokrąglenie ułamków może przekroczyć budżet, pojemność lub wymaganą sumę. Być może żadne rozwiązanie w całych jednostkach nie będzie bliskie wynikowi uproszczonemu, dlatego sprawdź wszystkie pierwotne warunki.

**Przykład:** Samorząd ma do dyspozycji 6 godzin. Przygotowanie stoisk A, B i C zajmuje odpowiednio 4, 3 i 2 godziny, a każde daje odpowiednio 8, 6 i 3 punkty. Stoisko trzeba wybrać w całości albo z niego zrezygnować. Na próbę dopuszczacie 0 ≤ A, B, C ≤ 1. Wtedy A = 1 i B = 2/3 daje 12 punktów w 6 godzin. Zaokrąglenie B w górę oznacza jednak 7 godzin. W rzeczywistym planie wybieracie A + C: 11 punktów w 6 godzin.

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

**Opis:** Nie zawsze musisz od razu znać najlepszy wynik. Najpierw spróbuj ustalić granice, między którymi musi się znajdować. Przy szukaniu minimum najlepszy wynik zadania po złagodzeniu ograniczeń może dać granicę dolną: niżej nie da się zejść. Każde rozwiązanie spełniające pierwotne warunki daje granicę górną: optimum nie może być od niego większe. Przy szukaniu maksimum jest odwrotnie. Jeśli obie granice się spotkają, masz dowód optymalności. Jeśli nie, ich różnica pokazuje, ile najwyżej można jeszcze poprawić. Każda granica wymaga uzasadnienia, a nie tylko oszacowania na wyczucie.

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

**Opis:** Czasem nie da się spełnić wszystkich oczekiwań naraz: poprawa jednego wyniku pogarsza inny. Oddziel wtedy obowiązkowe wymagania od preferencji, z których możesz częściowo zrezygnować. Ustal, jak mierzyć odstępstwo od każdej preferencji i jak dużo ma ono ważyć w ocenie. Możesz przypisać mu punkty karne i uwzględnić je przy porównywaniu planów. Sprawdź też, czy inne wagi zmieniłyby wybór. Liczby pomagają jasno opisać kompromis, ale dowolnie dobrane kary nie są dowodem, że rozwiązanie jest matematycznie najlepsze.

**Przykład:** Wybieracie godzinę próby. Musicie mieć salę i dotrzymać piątkowego terminu wysyłki. Przy obecności i porze zakończenia dopuszczacie kompromis: 5 punktów karnych za każdą nieobecną osobę i 1 za każde 15 minut opóźnienia. W planie A są wszyscy, ale próba kończy się 45 minut później: 3 punkty karne. W planie B kończy się o planowanej porze, ale jednej osoby brakuje: 5 punktów. Wygrywa A. Jeśli obecność jest ważniejsza, możecie zwiększyć karę za nieobecność. Żadna punktacja nie pozwala jednak pominąć sali ani piątkowego terminu.

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

**Opis:** Zacznij od uproszczonego modelu i sprawdź proponowane rozwiązanie. Jeśli narusza warunki zadania, ustal dlaczego i dopisz regułę, która wykluczy również inne rozwiązania z tym samym błędem. Takie ograniczenie bywa nazywane cięciem. Musi wynikać z zadania i pozostawiać wszystkie poprawne możliwości, nawet te, które ci się nie podobają. Rozwiąż model ponownie i powtarzaj kontrolę. Stopniowe dodawanie reguł ułatwia pracę z dużym modelem. Kończysz, gdy wynik spełnia wymagania lub model wykaże, że nie da się ich spełnić.

**Przykład:** Uproszczony plan przydziela jednej osobie dwa spotkania w tym samym czasie. Dodajecie regułę zakazującą nakładających się zajęć danego ucznia. W kolejnej wersji nagranie odbywa się w sali bez gniazdka, choć wymagany rejestrator musi być zasilany z gniazdka. Dopisujecie więc ten wymóg dla sali nagrań. Obie reguły wynikają z zadania, a nie z osobistych preferencji. Usuwają błędne propozycje, pozostawiając poprawne. Po ponownym rozwiązaniu klasa otrzymuje plan, który da się wykonać.

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

**Opis:** Przy długim planie nie musisz od razu ustalać każdego szczegółu. Podziel decyzje na etapy. Pierwszy rozplanuj dokładnie, a dla późniejszych przyjmij uproszczone założenia. Sprawdź, czy zostawiasz na nie dość czasu, miejsca i materiałów. Potem przejdź do kolejnego etapu. Jeśli okaże się, że nie da się go wykonać, wróć do wcześniejszych wyborów i je popraw. Dzięki temu nie opracowujesz całego dużego planu naraz. Wczesne decyzje nadal mogą jednak zablokować dalszą pracę, a metoda nie gwarantuje najlepszego rozwiązania.

**Przykład:** Maja ma cztery godziny na przygotowanie szkolnego festynu, gry i sprzątanie. Najpierw wybiera dekoracje, których przygotowanie zajmie 2,5 godziny. Gry zajmą jeszcze 1,25 godziny, a sprzątanie godzinę. Razem to 4,75 godziny, więc plan się nie mieści. Maja wraca do pierwszej decyzji: wybiera prostsze dekoracje na 1,5 godziny, zostawia 1,5 godziny na gry i godzinę na sprzątanie. Teraz wszystkie etapy mieszczą się w czterech godzinach.

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

**Opis:** Ogólny pomysł może wyglądać dobrze, dopóki nie rozpiszesz jego wykonania. Sprawdź więc szczegóły: potrzebny czas, osoby, zadania i koszty. Jeśli coś się nie mieści, ustal, z której decyzji to wynika, i popraw ogólny plan. Potem ponownie przyjrzyj się szczegółom. Zamiast mówić „to się nie uda”, wskaż konkretną przeszkodę, którą trzeba usunąć. Takie przechodzenie między planem a jego wykonaniem pomaga poprawiać pomysł. Na końcu nadal sprawdź całość, bo zgodność planów sama nie gwarantuje sukcesu.

**Przykład:** Czworo uczniów planuje film naukowy trwający najwyżej sześć minut: minutę wstępu, trzy minuty doświadczenia na żywo i dwie minuty podsumowania. Mają pracownię na 20 minut. Samo przygotowanie doświadczenia zajmuje jednak 12 minut, a jego nagranie kolejne 15, czyli razem 27. Zmieniają pomysł: przygotują pokaz przed wejściem do pracowni. W filmie zajmie on trzydzieści sekund, a nagranie go potrwa 5 minut. Na nagranie wstępu i podsumowania potrzeba 14 minut. Gotowy film ma więc 3,5 minuty, a praca w pracowni zajmuje 19 minut.

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

**Przykład:** W turnieju każdy gracz rozgrywa po jednej partii z każdym innym. Ile będzie partii? Dla dwóch graczy jest jedna, dla trzech są trzy, a dla czterech sześć. Zauważasz, że każdy nowy gracz musi rozegrać po jednej partii ze wszystkimi wcześniejszymi. Dla 20 graczy daje to 1 + 2 + ... + 19 = 190 partii. Małe przypadki pomogły zauważyć regułę, a sposób dołączania graczy ją wyjaśnia. Przy innych zasadach turnieju trzeba sprawdzić rozumowanie od nowa.

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

**Opis:** Zanim zaczniesz rozwiązywać problem, upewnij się, że wiesz, o co chodzi. Zapisz cel, podane lub sprawdzone fakty i obowiązujące ograniczenia. Osobno wypisz założenia, czyli rzeczy przyjęte za prawdę bez sprawdzenia. Ustal, jakich danych brakuje i czy każda reguła rzeczywiście obowiązuje, czy tylko tak się przyjęło. Dopiero wtedy wybierz sposób działania. Podczas pracy wracaj też do samego pytania: nawet poprawne rozwiązanie niewiele pomoże, jeśli dotyczy innego problemu niż ten, który chcesz rozwiązać.

**Przykład:** Klasa pyta: „Czy wszyscy dotrą do muzeum przed dziewiątą?”. Najpierw ustalacie, kogo obejmuje „wszyscy”: 28 uczniów i 2 nauczycieli. Autobus odjeżdża o 8:10, jedzie 35 minut i ma 30 miejsc. Szkoła wymaga miejsca siedzącego dla każdej osoby. Grupa mieści się dokładnie i przyjeżdża o 8:45. Gdyby dostępnych było tylko 28 miejsc, dwie osoby nie miałyby gdzie usiąść. Sam czas przejazdu nadal by pasował, ale trzeba byłoby znaleźć inną trasę.

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

**Opis:** Gdy opis słowny jest trudny do zrozumienia, narysuj problem, ułóż tabelę, zapisz równanie albo zbuduj model z przedmiotów. Możesz też inaczej oznaczyć zmienne. Chodzi o to, by łatwiej dostrzec zależności, a nie zmienić zadanie. Dlatego przenieś wszystkie ważne wielkości i warunki. To pomaga zwłaszcza przy długich zadaniach tekstowych i relacjach przestrzennych. Uważaj na przybliżenia: w odróżnieniu od dokładnego przekształcenia zmieniają problem i wymagają dodatkowej kontroli. Sam wygląd szkicu nie dowodzi dokładnej zależności.

**Przykład:** Prostokąt ma obwód 26 cm, a jego długość jest o 3 cm większa od szerokości. Oznacz szerokość przez w. Długość to wtedy w + 3. Zapisujesz obwód jako 2w + 2(w + 3) = 26 i upraszczasz do 4w + 6 = 26. Otrzymujesz w = 5, więc długość wynosi 8. Sprawdzenie daje 2 × 5 + 2 × 8 = 26. Równanie pozwoliło zobaczyć zależność między bokami bez pomijania warunków z treści.

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

**Opis:** Zanim zaufasz wzorowi, dopisz jednostki do mierzonych wielkości. Pomagają sprawdzić, co właściwie obliczasz: odległość podzielona przez czas daje prędkość, a odwrotne dzielenie daje czas potrzebny na jednostkę odległości. Wypróbuj też proste wartości, takie jak zero, jeden, równe wielkości lub dozwolone minimum i maksimum. Możesz wtedy zauważyć odwrócone działanie albo granicę, przy której model przestaje działać. Poprawne wyniki tych testów nie zastępują dowodu. Sprawdzaj tylko dopuszczalne dane: przy obliczaniu prędkości nie wolno dzielić przez zero godzin.

**Przykład:** Rowerzysta przejeżdża 18 km w 1,5 godziny. Jego prędkość to 18 ÷ 1,5 = 12 km/h. Leo omyłkowo dzieli odwrotnie i otrzymuje około 0,083 godziny na kilometr. Po jednostkach widzi, że obliczył coś innego. Sprawdza jeszcze 0 km: prawidłowy wzór daje 0 km/h. Dla 36 km w 1,5 godziny otrzymuje 24 km/h, czyli dwukrotnie większą prędkość przy dwukrotnie większej odległości. Odrzuca natomiast 0 godzin, bo przez zero nie można dzielić.

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

**Przykład:** Czworo graczy siedzi przy okrągłym stole bez oznaczonych miejsc. W grze liczy się kolejność osób zgodna z ruchem wskazówek zegara, więc odbicie daje inny układ, ale obrót wszystkich osób nie. Ustal miejsce Ani i ustaw pozostałych: 3 × 2 × 1 = 6 możliwości. Jeśli nauczyciel wyróżni jedno krzesło jako miejsce „przy drzwiach”, obrót też zmieni układ. Na tym krześle może siedzieć każdy gracz, a pozostałych można usadzić na 3! sposobów. Otrzymujesz 4 × 6 = 24 możliwości.

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

**Opis:** Przy każdej dostępnej opcji zapisz, co możesz zyskać, co stracić i z czego musisz zrezygnować. Jeśli wynik jest niepewny, określ możliwe skutki. Prawdopodobieństwa przypisuj im tylko wtedy, gdy masz ku temu podstawy w danych. Możesz wtedy obliczyć średni spodziewany wynik, uwzględniając szanse poszczególnych skutków. Brak wiedzy nie oznacza szansy 50 procent. Oprócz średniej sprawdź też niekorzystne scenariusze. Jedna liczba nie pokaże wszystkiego, zwłaszcza gdy dla różnych osób inne korzyści i straty są ważne.

**Przykład:** Rita porównuje dwa sposoby nauki. Plan A zajmuje dwie godziny. Na podstawie czterech podobnych kartkówek szacuje 75 procent szans na 80 punktów i 25 procent na 60. Przy tych założeniach wynik oczekiwany to 0,75 × 80 + 0,25 × 60 = 75 punktów. Plan B zajmuje godzinę, ale Rita nie ma danych o jego skuteczności. Może go wypróbować, lecz nie powinna wpisywać 50 procent tylko dlatego, że nie zna szans. Musi też rozważyć gorszy wynik planu A: jeśli 60 punktów to za mało, korzystna średnia nie rozstrzyga wyboru.

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

**Opis:** Zamiast rozpatrywać każdą osobę lub część osobno, narysuj, jak na siebie wpływają. Połącz je strzałkami pokazującymi zależności i przepływ pracy. Poszukaj miejsca, które spowalnia całość, czyli wąskiego gardła. Sprawdź też, czy skutki działań wracają do uczestników i wpływają na ich następne decyzje oraz co zachęca ich do określonego zachowania. Taki rysunek pomaga przewidzieć skutki uboczne zmiany. Nie dowodzi jednak, co jest przyczyną czego. Wypróbuj małą zmianę i oceń jej wpływ na całość.

**Przykład:** Czworo uczniów wysyła slajdy do jednej osoby, która składa prezentację. Nauczyciel przyznaje punkt za każdy slajd, więc uczniom opłaca się dodawać ich więcej. Osoba składająca dostaje późno 18 slajdów z powtarzającymi się treściami i nie nadąża z pracą. Grupa rozrysowuje tę zależność i prosi nauczyciela o próbę innych zasad: ocenę spójności całej prezentacji oraz limit trzech slajdów na osobę. Po jego zgodzie przygotowuje na czas 12 slajdów bez powtórzeń. Wynik sugeruje, że zmiana pomogła, ale nie dowodzi, że odpowiada za każdą poprawę.

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

**Przykład:** Układasz z patyczków kwadraty w rzędzie tak, żeby sąsiednie miały wspólny bok. Na jeden kwadrat potrzeba 4 patyczków, na dwa 7, a na trzy 10. Za każdym razem przybywa 3, więc na osiem kwadratów powinno wystarczyć 4 + 7 × 3 = 25 patyczków. Dlaczego? Nowy kwadrat ma już jeden bok wspólny z poprzednim, więc dokładasz tylko trzy patyczki. To wyjaśnienie działa dla całego prostego rzędu. Same liczby 4, 7 i 10 nie byłyby dowodem, bo można do nich dopasować również inne reguły.

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

**Opis:** Zapisz osobno założenia i wniosek, który chcesz sprawdzić. Następnie rozważ, co by było, gdyby wniosek był fałszywy. Jeśli razem z założeniami prowadzi to do niemożliwości, otrzymujesz dowód przez sprzeczność. Możesz też szukać kontrprzykładu: przypadku, który spełnia założenia, ale nie pasuje do wniosku. Taki przypadek obala twierdzenie lub pokazuje, że trzeba je zawęzić. Nieznalezienie kontrprzykładu jeszcze niczego nie dowodzi. Przy badaniu rzeczywistego zjawiska sprzeczne wyniki mogą natomiast oznaczać błąd modelu lub założeń.

**Przykład:** Rozważ twierdzenie „Każda wielokrotność 4 jest parzysta”. Gdyby liczba była podzielna przez 4 i jednocześnie nieparzysta, musiałaby być podzielna przez 2, a zarazem dawać przy dzieleniu przez 2 resztę 1. To niemożliwe. Inaczej sprawdzisz twierdzenie „Każda liczba kończąca się na 5 jest pierwsza”: wystarczy wskazać 15. Kończy się na 5, ale dzieli się przez 3 i 5. Ten kontrprzykład obala twierdzenie, bo spełnia jego założenie, a przeczy wnioskowi.

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

**Opis:** Wybierz z rozpatrywanego zbioru element najmniejszy, największy, pierwszy, ostatni albo taki, którego dotyczą najsilniejsze ograniczenia. Jego pozycja może uprościć rozumowanie, bo wyklucza część możliwości. Najpierw upewnij się, że taki element istnieje. Potem zapytaj, czy badana sytuacja wymagałaby czegoś jeszcze mniejszego lub większego. Jeśli tak, otrzymasz sprzeczność z wyborem elementu skrajnego. Nie chodzi tu o wpisanie bardzo dużej liczby do wzoru ani o zbliżanie się do granicy. Wybierasz konkretny element należący do zbioru.

**Przykład:** Pięciu graczy zdobyło 12, 8, 15, 10 i 9 punktów. Czy dla każdego można wskazać gracza z wyższym wynikiem? Wystarczy wybrać największy wynik: 15. Nikt na liście go nie przewyższa, więc odpowiedź brzmi „nie”. Nie trzeba sprawdzać po kolei wszystkich osób. Tak samo możesz postąpić z dłuższym, skończonym rankingiem. Dla zbioru nieskończonego trzeba jednak uważać: jeśli nie ma w nim największego elementu, ten argument nie zadziała.

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

**Opis:** Jeśli przedmiotów jest więcej niż szufladek i każdy trzeba gdzieś włożyć, przynajmniej jedna szufladka pomieści więcej niż jeden przedmiot. Na tym polega zasada szufladkowa. Szufladkami mogą być dowolne kategorie, a przypisujesz do nich na przykład osoby, daty, pliki lub pionki. Możesz tak dowieść, że pewne obiekty muszą trafić razem, nie wiedząc, które to będą. Aby wykazać, że w jednej kategorii znajdzie się jeszcze więcej obiektów, porównaj ich łączną liczbę z pojemnością kategorii.

**Przykład:** W klasie jest 25 uczniów. Podziel ich według miesiąca urodzin: masz 12 szufladek i każdy uczeń trafia do dokładnie jednej. Gdyby w każdej były najwyżej 2 osoby, w klasie mogłoby być najwyżej 12 × 2 = 24 uczniów. Jest ich 25, więc przynajmniej w jednym miesiącu urodziły się co najmniej 3 osoby. Wiesz to nawet bez sprawdzania dat urodzin. Sama zasada nie mówi jednak, który to miesiąc.

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

**Opis:** Niezmiennik to własność, której nie zmienia żaden dozwolony ruch. Opisz dokładnie ruchy i sprawdź, czy zachowują na przykład parzystość, resztę z dzielenia, sumę lub bilans kolorów. Jeśli taka własność różni się w stanie początkowym i docelowym, celu nie da się osiągnąć. Gdy się zgadza, nie masz jeszcze odpowiedzi: mogą istnieć inne przeszkody uniemożliwiające przejście między tymi stanami. Niezmiennik pomaga więc wykluczyć niektóre cele, ale żeby wykazać osiągalność pozostałych, trzeba dalej zbadać dozwolone ruchy.

**Przykład:** Trzy przełączniki są początkowo wyłączone: 000. Cyfra 1 oznacza przełącznik włączony. Jedyny dozwolony ruch przełącza jednocześnie przełączniki 1 i 2. Przy przełączeniu dwóch liczba włączonych zmienia się o +2, 0 albo -2, więc zachowuje parzystość. Stanu 100 nie da się osiągnąć, bo ma jeden włączony przełącznik. A stan 101? Ma dwa, ale też jest nieosiągalny: z 000 przejdziesz tylko do 110, a kolejnym ruchem wrócisz do 000. Sama zgodność parzystości nie wystarczyła.

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

**Opis:** Przypisz bieżącej sytuacji liczbę i sprawdź, jak zmienia ją każdy dozwolony krok. Jeśli nigdy nie rośnie albo nigdy nie maleje, nazywamy ją monowariantem. Może pomóc śledzić postęp, wykluczyć cel lub dowieść, że proces się skończy. Do tego ostatniego potrzeba jednak dodatkowego uzasadnienia. Na przykład nieujemna liczba całkowita nie może bez końca maleć o co najmniej 1. Liczba rzeczywista może natomiast maleć coraz wolniej, nigdy nie osiągając granicy. Kroki, które nie zmieniają liczby, mogą też prowadzić do powtarzania tych samych stanów.

**Przykład:** Zacznij od x = 1 i w każdej rundzie dziel x przez 2. Masz skończyć dopiero wtedy, gdy x = 0. Liczba za każdym razem maleje, ale nadal jest dodatnia: po n rundach x = 1/2^n. Żadna skończona liczba rund nie pozwoli więc zakończyć procedury. Porównaj to ze stosem 12 kulek, z którego w każdym kroku zabierasz co najmniej jedną. Liczba kulek jest całkowita i nieujemna, więc stos opróżnisz w najwyżej 12 krokach.

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

**Opis:** Rekurencja pozwala obliczyć kolejny wynik na podstawie wcześniejszych. Indukcja matematyczna służy natomiast do dowodzenia: najpierw sprawdzasz przypadki początkowe, a potem wykazujesz, że prawdziwość twierdzenia dla potrzebnych mniejszych przypadków pozwala przejść do następnego. Obie metody wykorzystują mniejsze przypadki, ale do czego innego. Obliczenie kilku wartości z rekurencji nie zastępuje dowodu dla każdego dopuszczalnego rozmiaru. W indukcji nie możesz zakładać poprawności właśnie tego przypadku, który masz dopiero wykazać. Musisz też sprawdzić wszystkie przypadki początkowe potrzebne do rozpoczęcia kolejnych kroków.

**Przykład:** Na ile sposobów robot może dotrzeć na n-ty stopień, skacząc o 1 albo 2 stopnie? Oznacz tę liczbę przez a(n). Masz a(1) = 1 i a(2) = 2. Ostatni skok na n-ty stopień musi prowadzić ze stopnia n-1 albo n-2, więc a(n) = a(n-1) + a(n-2). Stąd a(3) = 3 i a(4) = 5. Rekurencja pozwala obliczać kolejne wartości. Gdy chcesz dowieść ogólnego wzoru przez indukcję, potrzebujesz przypadków początkowych i uzasadnienia kroku przejścia dla dowolnego dopuszczalnego n.

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

**Opis:** Czasem łatwiej policzyć przypadki, które nie spełniają warunku, niż te, których szukasz. Tworzą one dopełnienie w zbiorze wszystkich dopuszczalnych wyników. Policz więc całość i odejmij dopełnienie. Przy prawdopodobieństwie możesz użyć P(sukces) = 1 - P(porażka), ale najpierw ustal model. Iloraz liczby wyników sprzyjających i wszystkich wyników daje prawdopodobieństwo tylko przy jednakowych szansach poszczególnych możliwości. Uważaj też na powtórzenia: jeśli kategorie niepowodzeń się nakładają, nie możesz po prostu dodać ich liczebności.

**Przykład:** Rzucasz dwa razy symetryczną sześcienną kostką. Jakie jest prawdopodobieństwo wyrzucenia co najmniej jednej szóstki? Łatwiej policzyć dopełnienie, czyli wyniki bez szóstki w obu rzutach. Wszystkich uporządkowanych wyników jest 6 × 6 = 36 i mają jednakowe szanse. Bez szóstki jest ich 5 × 5 = 25. Szukanych wyników pozostaje 36 - 25 = 11, więc prawdopodobieństwo wynosi 11/36. Gdyby liczyć osobno szóstkę w pierwszym i drugim rzucie, wynik z dwiema szóstkami zostałby policzony dwa razy.

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

**Opis:** Policz ten sam zbiór na dwa sposoby. Skoro obie metody dotyczą tych samych obiektów, powinny dać zgodne wyniki. Możesz tak odkryć wzór, uprościć rachunki lub znaleźć błąd. Najpierw dokładnie ustal, co liczysz i czy kolejność ma znaczenie. Przy każdej metodzie sprawdź, ile razy uwzględniasz jeden obiekt. Jeśli wcześniejsze wybory już przesądzają o następnym, nie licz go ponownie jako niezależnej możliwości. Inaczej wynik będzie zawyżony. Każdą różnicę między rachunkami trzeba wyjaśnić.

**Przykład:** Sześciu uczniów podaje sobie ręce, każda para dokładnie raz. Każdy uczeń uczestniczy w 5 uściskach, więc po zsumowaniu dla wszystkich otrzymujesz 6 × 5 = 30. Każdy uścisk policzono jednak u dwóch osób. Jeśli spojrzysz od strony uścisków, każdy z nich wnosi do tej sumy 2. Jest ich zatem 30/2 = 15. Możesz też od razu liczyć pary uczestników: 6 × 5 / 2 = 15. Oba sposoby dają ten sam wynik.

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

**Opis:** Czasem warto dorysować prostą, wprowadzić zmienną, obliczyć sumę częściową albo wyznaczyć cel pośredni, choć zadanie o to nie pyta. Taki element pomocniczy powinien pokazać związek między tym, co wiesz, a tym, czego szukasz. Zanim go dodasz, zastanów się, do czego go użyjesz. Opisz go dokładnie i sprawdź, czy może istnieć przy podanych warunkach. Nie wolno przemycić w ten sposób dodatkowego założenia ani uznać szukanego wniosku za prawdę. Na końcu odpowiedz na pierwotne pytanie.

**Przykład:** Prostokątne boisko szkolne ma boki 6 m i 8 m. Dorysuj przekątną: otrzymasz trójkąt prostokątny. Z twierdzenia Pitagorasa wiesz, że kwadrat jego najdłuższego boku jest sumą kwadratów pozostałych. Zatem d² = 6² + 8² = 100, czyli d = 10 m. Dorysowany odcinek pozwolił powiązać znane długości boków z szukaną odległością. Nie zmienił przy tym ani kształtu, ani wymiarów boiska.

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

**Opis:** Gdy możliwości jest niewiele, wypisz je w ustalonym porządku, na przykład w tabeli lub na rozgałęzionej liście. Podział powinien obejmować wszystko i nie zawierać powtórzeń. Najpierw sprawdź warunki, które szybko wykluczają wiele przypadków. Skreślaj niemożliwe warianty i zapisuj powód każdego odrzucenia. Dzięki temu łatwiej śledzić, co już sprawdzono, a co jeszcze zostało. Tylko pełne przeszukanie pozwala stwierdzić, że innych odpowiedzi nie ma. Sprawdzając część listy, możesz znaleźć rozwiązanie, lecz pozostałe możliwości nadal są niezbadane.

**Przykład:** Kod do szafki zawiera cyfry 1, 2, 3 i 4, każdą dokładnie raz. Ostatnia musi być parzysta, a pierwsza mniejsza od drugiej. Podziel możliwości według ostatniej cyfry. Jeśli jest nią 2, po sprawdzeniu pozostałych warunków zostają 1342, 1432 i 3412. Jeśli jest nią 4, zostają 1234, 1324 i 2314. Inna cyfra nie może być na końcu. Te sześć kodów obejmuje więc wszystkie możliwości, a każdy spełnia warunki.

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

**Opis:** Sprawdź dokładnie, o co pyta zadanie. Może potrzebujesz tylko sumy, różnicy, ilorazu albo czyjejś pozycji, a nie wszystkich wartości z osobna. Spróbuj połączyć znane zależności tak, żeby zbędne niewiadome się zredukowały lub przestały mieć znaczenie. Unikniesz niepotrzebnych rachunków i wyznaczania danych, których nie da się ustalić. Na końcu sprawdź, czy odpowiedź jest jednoznaczna. Znajomość sumy nie określa jej składników, a jeśli dopuszczalne przypadki dają różne odpowiedzi na zadane pytanie, informacji rzeczywiście brakuje.

**Przykład:** Prostokąt ma obwód 28 cm. Jaka jest suma jego długości i szerokości? Oznacz je przez a i b. Z równania 2a + 2b = 28 od razu wynika a + b = 14 cm. Nie musisz znać a i b osobno: prostokąt o bokach 6 i 8 oraz prostokąt o bokach 5 i 9 mają ten sam obwód i tę samą sumę długości i szerokości, równą 14. Zadanie pozwala ustalić tę sumę, choć nie wyznacza osobno długości każdego boku.

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

**Opis:** W metodzie zachłannej na każdym kroku wybierasz to, co w danej chwili wygląda najlepiej według ustalonej reguły. Możesz tak szybko ułożyć pierwszą trasę, plan lub podział zasobów, zwłaszcza gdy sprawdzanie wszystkich możliwości trwałoby zbyt długo. Potem oceń cały wynik, porównaj go z innymi i spróbuj poprawić. Wybór korzystny teraz może bowiem utrudnić resztę zadania, zwiększyć późniejszy koszt albo uniemożliwić dokończenie. Metoda daje propozycję rozwiązania, ale bez osobnego dowodu nie wiesz, czy jest ono najlepsze.

**Przykład:** W grze masz żetony warte 1, 3 i 4 punkty. Chcesz uzyskać dokładnie 6 punktów, używając jak najmniej żetonów. Wybierasz zachłannie największy pasujący żeton: najpierw 4, potem 1 i jeszcze 1. Potrzebujesz 3 żetonów. Można jednak wziąć dwa po 3 punkty i uzyskać 6 za pomocą 2 żetonów. Zachłanny wybór dał poprawną sumę, ale nie najlepszy wynik. Żeby uznać wynik tej metody za optymalny, trzeba osobno to udowodnić lub wykluczyć lepsze kombinacje.

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

**Przykład:** Chcesz lepiej napisać kartkówkę. Czytasz notatki przez 30 minut, a potem odpowiadasz na 10 pytań. Tylko 2 odpowiedzi są poprawne. Sprawdzasz błędy: rozumiesz przykłady, ale nie potrafisz przypomnieć sobie definicji. Zamiast tylko wydłużać czytanie, przechodzisz do fiszek i zadań. W podobnym teście uzyskujesz 7/10. To nie dowodzi, że materiał jest już w pełni opanowany, ale daje powód, by dalej pracować według poprawionego planu.

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

**Opis:** Wybierz jeden ustalony szczegół zadania i zastąp go parametrem, czyli symbolem oznaczającym różne dopuszczalne wartości. Możesz wtedy zbadać całą rodzinę podobnych zadań i zobaczyć zależność, którą trudno zauważyć w pojedynczym przykładzie. Ustal dokładnie, jakie wartości dopuszczasz. Sprawdzenie kilku z nich podpowiada wzór, ale go nie dowodzi. Potrzebujesz uzasadnienia obejmującego cały wskazany zakres, na przykład wszystkie dodatnie liczby całkowite. Wymień też wyjątki. Gdy już uzasadnisz ogólną zależność, podstaw wartość z pierwotnego zadania.

**Przykład:** Dodajesz kolejne dodatnie liczby nieparzyste: 1 = 1² oraz 1 + 3 = 2². Czy suma pierwszych n takich liczb zawsze wynosi n²? Przypadek początkowy już masz. Załóż teraz, że wzór działa dla n. Kolejna liczba nieparzysta to 2n + 1, więc po jej dodaniu otrzymujesz n² + 2n + 1 = (n + 1)². Przypadek początkowy i krok indukcyjny uzasadniają wzór dla każdego dodatniego całkowitego n. Możesz teraz podstawić 4: suma wynosi 4² = 16. Samo sprawdzenie kilku przykładów nie wystarczyłoby do dowodu.

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
