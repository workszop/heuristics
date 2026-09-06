# Praktyczne heurystyki rozwiązywania problemów

Heurystyka to użyteczny sposób poszukiwania rozwiązania, a nie gwarancja, że będzie ono poprawne lub najlepsze. Ten przewodnik zbiera schematy wielokrotnego użytku z dokumentów znajdujących się w tym folderze, z pominięciem plików HTML. Przy każdym schemacie znajdziesz wyjaśnienie, kiedy go użyć i co zrobić dalej.

Procedury są opracowaniami napisanymi prostym językiem, nie cytatami. Przykłady spoza matematyki pokazują, jak można przenieść dany schemat na inny obszar; nie oznacza to, że źródła potwierdzają jego skuteczność w tych zastosowaniach. Podobne pomysły połączono, zamiast je powtarzać. Krótkie oznaczenia źródeł odsyłają do przeglądu dokumentów na końcu.

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

**Opis:** Zacznij od pożądanego wyniku i zapytaj, co musiałoby być prawdą bezpośrednio przed jego uzyskaniem. Zamień odległy cel w ciąg wymagań.

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

**Opis:** Znajdź wcześniejszy problem oparty na tych samych zależnościach, nawet jeśli dotyczy czegoś innego. Przenieś metodę, a nie samą odpowiedź.

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

**Opis:** Zastąp jedno duże zadanie mniejszymi, których wyniki można połączyć.

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

**Opis:** Wypróbuj możliwe rozwiązanie, wyciągnij wnioski z wyniku i świadomie wybierz następną próbę.

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

**Opis:** Zacznij od akceptowalnego rozwiązania i ulepszaj je małymi zmianami. Gdy przestają pomagać, wypróbuj inny punkt wyjścia lub większą zmianę.

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

**Opis:** Użyj zaokrąglonych wielkości i prostych zależności, aby ustalić przybliżoną wartość wyniku.

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

**Opis:** Zbuduj oszacowanie z mniejszych elementów, a następnie porównaj je z rzeczywistymi przykładami lub tempem pracy zmierzonym przy podobnych zadaniach.

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

**Opis:** Potraktuj pierwszą ocenę jako hipotezę wstępną. Sprawdź, czy nie opiera się głównie na wyrazistych wspomnieniach, stereotypach lub pierwszej napotkanej liczbie.

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

**Opis:** Rozwiąż wersję z mniejszą liczbą ograniczeń, aby odkryć, co jest możliwe i które warunki powodują trudność. To relaksacja ograniczeń.

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

**Opis:** Tymczasowo pozwól, by niepodzielne wybory przyjmowały wartości ułamkowe. Łatwiejszy problem może wskazać użyteczny cel lub oszacowanie graniczne. To relaksacja ciągła.

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

**Opis:** Umieść najlepszy możliwy wynik między udowodnioną granicą a wartością rozwiązania, które rzeczywiście spełnia wymagania.

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

**Opis:** W roboczym modelu przypisz koszt naruszeniu negocjowalnego celu, zamiast traktować każdy cel jako bezwzględny. Pozwala to ujawnić kompromisy, a czasem podzielić zagmatwany problem na mniejsze.

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

**Opis:** Zacznij od modelu, z którym potrafisz pracować. Sprawdź proponowany wynik i dodaj uzasadnioną regułę wykluczającą wykryty rodzaj błędu. Powtarzaj ten proces, zamiast z góry zapisywać każde możliwe ograniczenie.

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

**Opis:** Podziel długi ciąg decyzji na bloki. Rozstrzygaj jeden blok, korzystając z uproszczonego modelu tego, co nastąpi później.

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

**Opis:** Wybierz ogólny plan, sprawdź, czy da się zrealizować jego szczegóły, i popraw go na podstawie konkretnych informacji zwrotnych.

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

**Opis:** Zmniejsz rozmiar lub złożoność problemu, zachowując zależność, którą chcesz zrozumieć.

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

**Opis:** Zamień niejasną trudność w pytanie z wyraźnym celem, znanymi danymi i jawnymi warunkami.

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

**Opis:** Przedstaw ten sam problem w formie, w której łatwiej dostrzec zależności: jako rysunek, tabelę, równanie, model fizyczny lub inny zestaw zmiennych.

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

**Opis:** Sprawdź, czy wynik opisuje właściwy rodzaj wielkości i czy zachowuje się sensownie w prostych sytuacjach granicznych.

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

**Opis:** Jeśli zamiana, obrót, odbicie lub zmiana oznaczeń części nie zmienia problemu, pracuj na jednym przedstawicielu każdego rzeczywiście odmiennego przypadku.

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

**Opis:** Jasno opisz możliwe wybory, w tym to, z czego rezygnujesz przy każdym z nich. Oddziel własne decyzje od zdarzeń, na które nie masz wpływu.

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

**Opis:** Spójrz szerzej niż na pojedyncze części. Przyczyną problemu mogą być zależności, ograniczony przepływ, sprzężenia zwrotne lub reakcje ludzi na wzajemne bodźce.

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

**Opis:** Na podstawie przykładów odkryj możliwą regułę, a następnie poszukaj powodu, dla którego miałaby obowiązywać.

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

**Opis:** Gdy trudno wykazać twierdzenie wprost, zapytaj, co by było, gdyby było fałszywe. Możesz też spróbować skonstruować przypadek spełniający założenia, ale przeczący wnioskowi.

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

**Opis:** Wybierz obiekt najmniejszy, największy, pierwszy, ostatni lub najbardziej ograniczony. Jego skrajna pozycja dostarcza informacji niedostępnych dla dowolnego obiektu.

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

**Opis:** Jeśli obiektów jest więcej niż dostępnych kategorii, co najmniej jedna kategoria musi zawierać więcej niż jeden obiekt. To zasada szufladkowa.

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

**Opis:** Poszukaj wielkości lub własności zachowywanej przez każdy dozwolony ruch. To niezmiennik.

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

**Opis:** Znajdź miarę, która nigdy nie rośnie albo nigdy nie maleje. To monowariant; może ujawnić postęp, wykluczyć cel lub pomóc udowodnić, że proces się zatrzyma.

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

**Opis:** Zastąp problem dotyczący całości regułą łączącą jeden rozmiar z wcześniejszymi. Użyj rekurencji do obliczania wyników lub indukcji do dowodzenia twierdzenia dla wszystkich rozmiarów.

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

**Opis:** Gdy pożądane przypadki są skomplikowane, opisz przypadki niepożądane i usuń je z całości.

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

**Opis:** Dwa różne sposoby zliczania tych samych obiektów muszą dać tę samą sumę. Wzajemnie jednoznaczne przyporządkowanie może również zastąpić trudne zliczanie łatwiejszym.

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

**Opis:** Wprowadź coś, czego nie żąda wprost zadanie, na przykład prostą, zmienną, sumę częściową lub cel pośredni, aby połączyć znane fakty z pożądanym wynikiem.

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

**Opis:** Uporządkuj poszukiwania o rozsądnym rozmiarze w tabelę lub rozgałęzioną listę. Wykorzystuj każdy warunek do usuwania przypadków, zamiast wielokrotnie zgadywać.

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

**Opis:** Czasem można wyznaczyć sumę, różnicę, iloraz lub pozycję bez poznawania każdej pojedynczej wartości.

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

**Opis:** Buduj kandydata na rozwiązanie, za każdym razem wybierając najbardziej atrakcyjny następny krok według prostej reguły.

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

**Opis:** Kontroluj rozumowanie podczas pracy, nie dopiero po uzyskaniu odpowiedzi. Samo zajęcie czymś czasu nie oznacza postępu.

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

**Opis:** Zastąp konkretną liczbę lub obiekt zmienną i zbadaj rodzinę powiązanych problemów. Ogólniejsze twierdzenie może ujawnić zależność ukrytą przez szczegóły pierwotnego zadania.

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
