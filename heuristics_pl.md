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
| Nie wiem dokładnie, co mam ustalić, albo wydaje mi się, że brakuje danych. | 17: Doprecyzuj problem; 34: Ustal tylko to, o co pytają |
| Wiem, co chcę osiągnąć, ale nie wiem, od czego zacząć. | 1: Rozumuj od końca; 2: Wykorzystaj analogię; 32: Dodaj element pomocniczy |
| W zadaniu jest tyle elementów lub zależności, że trudno mi je rozpatrzyć naraz. | 3: Podziel na części; 16: Wypróbuj mały przypadek; 18: Zmień sposób przedstawienia |
| Każde znalezione rozwiązanie łamie któryś z warunków zadania. | 9: Złagodź ograniczenie; 10: Dopuść ułamki; 13: Dodawaj uzasadnione ograniczenia |
| Chcę szybko oszacować wynik albo sprawdzić, czy obliczona wartość ma sens. | 6: Oszacuj skalę; 7: Wykorzystaj podobne przypadki; 19: Sprawdź jednostki i granice |
| Mam rozwiązanie spełniające warunki, ale chcę znaleźć lepsze. | 5: Ulepszaj i próbuj od nowa; 11: Wyznacz oszacowania; 35: Zacznij od metody zachłannej |
| Plan ma kilka etapów, a wcześniejsze wybory wpływają na późniejsze. | 14: Podejmuj decyzje etapami; 15: Sprawdzaj szczegóły względem ogólnego planu |
| Nie znam skutków wyboru albo różnym osobom zależy na czymś innym. | 8: Sprawdź błędy poznawcze; 12: Wyceń kompromisy; 21: Porównaj skutki; 22: Rozrysuj zależności |
| Widzę powtarzającą się zależność i chcę sprawdzić, czy działa zawsze. | 23: Eksperymentuj i wyjaśniaj; 29: Użyj rekurencji lub indukcji; 37: Uogólnij |
| Podejrzewam, że twierdzenie jest fałszywe albo celu nie da się osiągnąć przy podanych zasadach. | 24: Sprawdź zaprzeczenie; 25: Wybierz element skrajny; 27: Znajdź niezmiennik |
| Chcę policzyć możliwości lub znaleźć ustawienia spełniające warunki. | 20: Symetria; 26: Zasada szufladkowa; 30: Dopełnienie; 31: Policz na dwa sposoby; 33: Uporządkuj przypadki |
| Badam powtarzający się proces albo moje kolejne próby nie przynoszą postępu. | 28: Śledź zmianę w jednym kierunku; 36: Oceń postęp i popraw plan |

## Schematy

### 1. Rozumuj od końca, zaczynając od celu

**Opis:** Zacznij od celu. Zapytaj: „Co trzeba zrobić tuż przed jego osiągnięciem?”. Potem cofnij się o kolejny krok. Powtarzaj to, aż dojdziesz do czynności, którą możesz wykonać teraz. Następnie przeczytaj plan od początku do końca i sprawdź, czy żaden krok nie został pominięty. Samo wskazanie potrzebnych działań nie dowodzi jeszcze, że plan się uda.

**Przykład:** Zadanie: w piątek masz oddać plakat naukowy. Dziś jest poniedziałek. Przed oddaniem plakat musi sprawdzić nauczyciel. Jak rozłożyć pracę?

Rozumuj od końca: aby oddać plakat, potrzebujesz wersji po poprawkach. Aby nanieść poprawki, potrzebujesz uwag nauczyciela. Nauczyciel musi dostać ułożony plakat, a do jego przygotowania potrzebujesz szkicu i źródeł.

Plan: poniedziałek – zbieranie źródeł; wtorek – szkic; środa – układanie tekstu i ilustracji; czwartek – uwagi nauczyciela i poprawki; piątek – oddanie.

Sprawdzenie: czy nauczyciel może obejrzeć plakat w czwartek i czy zostanie wtedy czas na poprawki? Jeśli nie, trzeba przesunąć wcześniejsze kroki.

**Kiedy się przydaje:** Gdy znasz cel, ale nie wiesz, jakie działania lub informacje pozwolą do niego dojść.

**Procedura:**
1. Zapisz, co dokładnie chcesz osiągnąć.
2. Zapytaj, co trzeba zrobić tuż przed osiągnięciem celu.
3. Cofaj się o kolejne kroki, aż dojdziesz do czegoś, co już wiesz lub możesz zrobić teraz.
4. Odwróć kolejność i sprawdź plan od początku do końca.
5. Sprawdź, czy masz czas i warunki potrzebne do wykonania każdego kroku.

**Uwaga:** Rozumowanie wstecz może wskazać drogę, ale samo nie dowodzi, że ta droga działa.

**Źródła:** [S1](#s1); [S4](#s4), podrozdział 2.2, strategia przedostatniego kroku, s. 27.

### 2. Wykorzystaj metodę z podobnego zadania

**Opis:** Przypomnij sobie rozwiązane zadanie, w którym występowały podobne zależności. Temat może być inny: napełnianie basenu i malowanie płotu łączy to, że dwie osoby lub dwa urządzenia wykonują części wspólnej pracy. Takie podobieństwo nazywamy analogią. Ustal, co czemu odpowiada, i sprawdź, czy warunki pozwalają zastosować wcześniejszą metodę. Przenosisz sposób rozumowania, nie gotową odpowiedź.

**Przykład:** Znane zadanie: kran A napełnia basen w 3 godziny, a kran B w 6 godzin. Przy stałym tempie w godzinę napełniają razem 1/3 + 1/6 = 1/2 basenu, więc potrzebują 2 godzin.

Nowe zadanie: Ola maluje płot w 3 godziny, a Kuba w 6 godzin. Ile czasu potrzebują razem?

Dopasuj elementy: kran odpowiada osobie, a basen – płotowi. Jeśli oboje pracują w stałym tempie i sobie nie przeszkadzają, w godzinę malują 1/3 + 1/6 = 1/2 płotu. Cały płot pomalują w 2 godziny.

Sprawdzenie: czy mogą malować jednocześnie i niezależnie? Jeśli mają tylko jeden pędzel, ten model nie pasuje.

**Kiedy się przydaje:** Gdy nowe zadanie przypomina zależności ze znanego zadania, choć dotyczy innego tematu.

**Procedura:**
1. Wypisz cel, dane i warunki nowego zadania.
2. Znajdź rozwiązane zadanie z podobnymi zależnościami.
3. Zapisz, który element znanego zadania odpowiada któremu elementowi nowego.
4. Sprawdź różnice, które mogłyby uniemożliwić użycie tej samej metody.
5. Zastosuj metodę i sprawdź wynik w warunkach nowego zadania.

**Uwaga:** Zewnętrzne podobieństwo to słaby argument. Zależności, dzięki którym wcześniejsze rozwiązanie działało, muszą zachodzić również tutaj.

**Źródła:** [S1](#s1).

### 3. Podziel problem na części

**Opis:** Podziel duży problem na mniejsze zadania. Przy każdym zapisz, co ma być gotowe po jego wykonaniu i na co trzeba wcześniej poczekać. Rozwiąż części, a potem połącz wyniki. Sprawdź także wspólne warunki, na przykład budżet i termin. To, że każda część działa osobno, nie oznacza, że wszystkie pasują do siebie.

**Przykład:** Zadanie: klasa organizuje wieczór filmowy. Co trzeba przygotować?

Podzielcie pracę na pięć zadań: uzyskanie zgody, rezerwację sali, wybór filmu, zakup przekąsek i przygotowanie ogłoszenia. W tym planie salę rezerwujecie po uzyskaniu zgody, a ogłoszenie przygotowujecie po wyborze sali i filmu.

Jedna osoba planuje napoje za 6 euro, druga jedzenie za 6 euro. Wspólny budżet wynosi 10 euro. Po połączeniu list wychodzi 6 + 6 = 12 euro, czyli o 2 euro za dużo. Usunięcie pozycji za 2 euro pozwala zmieścić się w budżecie.

Wniosek: podział ułatwił pracę, ale dopiero sprawdzenie całości ujawniło przekroczenie budżetu.

**Kiedy się przydaje:** Gdy projekt, obliczenie lub plan ma wiele powiązanych części.

**Procedura:**
1. Podziel problem na części o jasno określonych wynikach.
2. Zaznacz, które części zależą od innych.
3. Najpierw rozwiąż niezależną część lub spełnij ważny warunek wstępny.
4. Połącz wyniki częściowe, uwzględniając pracę potrzebną do ich połączenia.
5. Sprawdź całość względem pierwotnego celu i ograniczeń.

**Uwaga:** Nie oceniaj części wyłącznie osobno. Mogą korzystać z tego samego czasu, pieniędzy lub sprzętu.

**Źródła:** [S1](#s1).

### 4. Stosuj kontrolowane próby i błędy

**Opis:** Każdą próbę zaplanuj tak, żeby czegoś się z niej dowiedzieć. Najpierw zapisz, co chcesz sprawdzić i jakiego wyniku się spodziewasz. Potem wykonaj bezpieczny test i zanotuj wynik. Jeśli to możliwe, zmieniaj tylko jedną rzecz naraz. Dzięki temu łatwiej ustalisz, co mogło wpłynąć na wynik. Nieudana próba też pomaga, jeśli pozwala odrzucić pomysł.

**Przykład:** Pytanie: czy większa liczba papierowych pasków zwiększa wytrzymałość papierowego mostu?

Przygotujcie dwa mosty o długości 20 cm. Mają mieć ten sam papier, sposób złożenia i podpory, ale jeden ma 3 paski, a drugi 5. Przewidywanie: most z 5 pasków utrzyma więcej książek.

Dokładajcie po jednej takiej samej książce. Zapiszcie liczbę książek utrzymanych przed załamaniem: most z 3 pasków – 4 książki; most z 5 pasków – 8 książek.

W tej próbie wynik zgadza się z przewidywaniem. Powtórzcie test, aby sprawdzić, czy różnica nie wynikała z nierównego wykonania mostów. Testujcie nisko nad stabilną powierzchnią i nie wkładajcie dłoni pod obciążenie.

**Kiedy się przydaje:** Gdy możesz tanio i bezpiecznie sprawdzić pomysł, na przykład przy szukaniu usterki lub budowaniu modelu.

**Procedura:**
1. Zapisz pytanie i określ, po czym poznasz wynik próby.
2. Wybierz rozwiązanie i przewidź, co się wydarzy.
3. Sprawdź rozwiązanie w bezpiecznych warunkach, przy małym koszcie.
4. Zapisz wynik oraz to, który pomysł wynik wspiera lub podważa.
5. Zmień jedną rzecz albo powtórz test. Unikaj prób, które nie dostarczają nowych informacji.

**Uwaga:** Bez zapisu zmian trudno ustalić, co spowodowało poprawę. Nie eksperymentuj bez zabezpieczeń, jeśli skutki mogą być nieodwracalne lub niebezpieczne.

**Źródła:** [S1](#s1).

### 5. Ulepszaj rozwiązanie, a gdy utkniesz, spróbuj większej zmiany

**Opis:** Zacznij od rozwiązania, które spełnia wymagania. Ustal, co znaczy „lepsze”, na przykład krótszy czas albo więcej punktów. Wprowadzaj małe zmiany i zachowuj te, które poprawiają wynik. Jeśli żadna z takich zmian nie pomaga, spróbuj większej zmiany lub innego początku. Brak drobnych poprawek nie dowodzi, że masz najlepsze rozwiązanie ze wszystkich.

**Przykład:** Zadanie: rozłóż naukę pięciu przedmiotów na wieczory od poniedziałku do piątku, po jednym przedmiocie dziennie. Sprawdziany są w środę z matematyki, w czwartek z fizyki i w piątek z biologii. Przyznaj 1 punkt za naukę danego przedmiotu wieczorem przed jego sprawdzianem. To umowna ocena planu.

Plan początkowy: matematyka → fizyka → historia → biologia → geografia. Wynik: 1 punkt, za biologię w czwartek.

Zamień poniedziałek z wtorkiem: fizyka → matematyka → historia → biologia → geografia. Wynik: 2 punkty. Każda kolejna zamiana dwóch sąsiednich wieczorów obniża wynik do 1 punktu. To lokalne optimum dla takich zamian.

Zamień jednak poniedziałek ze środą: historia → matematyka → fizyka → biologia → geografia. Wynik: 3 punkty. Więcej nie można zdobyć, bo są tylko trzy sprawdziany.

**Kiedy się przydaje:** Gdy istnieje wiele poprawnych planów, tras lub ustawień, a chcesz znaleźć lepsze.

**Procedura:**
1. Ustal, co sprawia, że jedno poprawne rozwiązanie jest lepsze od innego.
2. Przygotuj rozwiązanie początkowe spełniające wymagania.
3. Wypróbuj niewielkie zmiany i zachowuj korzystne ulepszenia.
4. Gdy postęp ustanie, zachowaj kopię najlepszego rozwiązania i spróbuj zacząć od nowa lub wprowadzić większą zmianę.
5. Porównuj najlepszych kandydatów według tych samych kryteriów. Zakończ po osiągnięciu ustalonego poziomu jakości lub limitu czasu.

**Uwaga:** To, że żadna z wybranych małych zmian nie pomaga, nie wyklucza lepszego rozwiązania. Po każdej większej zmianie sprawdź wszystkie wymagania.

**Źródła:** [S1](#s1), „Improvement heuristics” i „Meta-heuristic methods”; [S3](#s3), części 7.2 i 8.2. To adaptacja do samodzielnej pracy, nie pełna specyfikacja tych algorytmów.

### 6. Oszacuj skalę, zanim zaczniesz dokładnie liczyć

**Opis:** Zanim zaczniesz dokładnie liczyć, ustal, jak dużego wyniku mniej więcej się spodziewasz. Użyj prostych, zaokrąglonych danych i zapisz założenia. Dla niepewnych danych sprawdź niższe i wyższe wartości. Otrzymasz orientacyjny zakres, który pomoże wychwycić błąd rachunkowy lub nierealny plan. Ten zakres zależy od założeń; nie jest gwarancją, że prawdziwy wynik się w nim znajdzie.

**Przykład:** Zadanie: klasa chce zebrać 100 euro ze sprzedaży przekąsek. Czy plan ma szansę się udać?

Założenie: 20 uczniów sprzeda średnio po 3 przekąski w cenie 2 euro. Wpływy wyniosą wtedy 20 × 3 × 2 = 120 euro.

Sprawdź dwa inne scenariusze: przy 2 sprzedanych przekąskach na osobę wpływy wyniosą 80 euro, a przy 4 – 160 euro. To zakres dla przyjętej sprzedaży od 2 do 4 sztuk na osobę, nie gwarantowane minimum i maksimum.

Cel 100 euro mieści się w tym zakresie, ale trzeba jeszcze sprawdzić popyt i koszty. Jeśli 100 euro ma zostać po zakupie składników, same wpływy nie wystarczą. Wynik 1200 euro przy tych samych danych powinien skłonić do sprawdzenia rachunków.

**Kiedy się przydaje:** Gdy potrzebujesz orientacyjnego wyniku albo chcesz sprawdzić, czy rachunek lub plan ma sens.

**Procedura:**
1. Nazwij szukaną wielkość i jej jednostkę.
2. Rozłóż ją na wielkości łatwiejsze do oszacowania.
3. Wybierz zaokrąglone wartości i zapisz stojące za nimi założenia.
4. Połącz wartości, sprawdzając zgodność jednostek.
5. Dla niepewnych danych wejściowych wypróbuj wiarygodne wartości niskie i wysokie. Podaj przybliżony zakres zamiast pozornej precyzji.

**Uwaga:** Oszacowanie zależy od przyjętych danych. Zapisz, czego nie uwzględnia, i nie traktuj orientacyjnego zakresu jak pewnej granicy wyniku.

**Źródła:** [S1](#s1), „What is Estimation?” i „Improving Estimation Accuracy”.

### 7. Szacuj na podstawie części i podobnych przypadków

**Opis:** Oszacuj czas zadania na dwa sposoby. Najpierw podziel je na części i skorzystaj z czasu podobnych prac z przeszłości. Dodaj czynności wspólne, na przykład sprawdzenie i wysłanie całości. Potem porównaj sumę z czasem podobnego całego zadania. Wyjaśnij różnicę. Rozróżniaj łączny czas pracy wszystkich osób od czasu, który minie od rozpoczęcia do zakończenia.

**Przykład:** Zadanie: oszacuj czas montażu podcastu z czterema wywiadami.

Montaż jednego wywiadu zajmował wcześniej 15 minut. Cztery wywiady to 4 × 15 = 60 minut pracy. Wstęp i wysłanie pliku wymagają kolejnych 30 minut. Razem: 90 minut pracy.

Jeśli dwie osoby montują jednocześnie po dwa wywiady, ta część trwa 30 minut. Potem jedna osoba przez 30 minut przygotowuje wstęp i wysyła plik. Od początku do końca mija więc 60 minut, choć łączny czas pracy wynosi 90 minut.

Podobny poprzedni odcinek wymagał 120 minut pracy, w tym 30 minut poprawek nauczyciela. Jeśli w nowym zadaniu te poprawki rzeczywiście nie są potrzebne, różnica jest wyjaśniona. Po zakończeniu porównaj szacunek z rzeczywistym czasem.

**Kiedy się przydaje:** Gdy szacujesz czas, ilość lub koszt i masz dane z podobnych wcześniejszych zadań.

**Procedura:**
1. Podziel zadanie na części tak, aby żadnej pracy nie liczyć dwa razy.
2. Oszacuj czas każdej części na podstawie podobnej wcześniejszej pracy.
3. Dodaj czas na uzgodnienia, połączenie części i sprawdzenie całości.
4. Porównaj sumę z czasem podobnego całego zadania. Sprawdź przyczynę różnicy.
5. Po zakończeniu zapisz rzeczywisty czas i popraw oszacowania na przyszłość.

**Uwaga:** Dwie osoby nie zawsze wykonają zadanie dwa razy szybciej. Część prac musi czekać na inne, a zgodne szacunki mogą pomijać ten sam etap.

**Źródła:** [S1](#s1), „Improving Estimation Accuracy” i „Business”.

### 8. Sprawdź, czy skrót myślowy cię nie zwodzi

**Opis:** Pierwsze wrażenie potraktuj jak przypuszczenie. Łatwo przecenić to, co mocno zapadło w pamięć, ocenić sytuację tylko po podobieństwie albo przywiązać się do pierwszej usłyszanej liczby. Poszukaj danych, także takich, które nie pasują do twojej pierwszej odpowiedzi. Spróbuj ocenić problem inną drogą, a potem porównaj wyniki i zapisz, czego nadal nie wiesz.

**Przykład:** Pytanie: ile z następnych dziesięciu kursów autobusu może się spóźnić? Dwa ostatnie były spóźnione, więc zgadujesz: pięć.

Sprawdź dane: w notatkach z ostatnich dziesięciu kursów widzisz dwa spóźnienia. To 2/10 = 20%, a nie 50%. Dwa irytujące zdarzenia przysłoniły ci osiem punktualnych kursów.

Wniosek: w obserwowanej dziesiątce spóźniły się dwa autobusy. Nie wynika z tego, że w następnej dziesiątce też spóźnią się dokładnie dwa. Masz mało danych, a warunki mogą się zmienić. Zamiast pewnej prognozy zapisz wynik obserwacji i sprawdzaj kolejne kursy.

**Kiedy się przydaje:** Gdy oceniasz niepewną sytuację, dane lub czyjeś wyjaśnienie.

**Procedura:**
1. Zapisz pierwszą odpowiedź i powód, dla którego wydaje się wiarygodna.
2. Zapytaj, czy wynika głównie z niedawnego lub zapadającego w pamięć przykładu, podobieństwa albo początkowej liczby.
3. Poszukaj odpowiednich danych i porównywalnych przypadków, w tym dowodów przeciwko pierwszej odpowiedzi.
4. Opracuj drugie oszacowanie lub wyjaśnienie inną drogą, zamiast tylko korygować pierwsze.
5. Porównaj wyniki i określ, co pozostaje niepewne.

**Uwaga:** Dostępność to ocenianie po tym, co łatwo sobie przypomnieć; reprezentatywność – po podobieństwie; zakotwiczenie – trzymanie się pierwszej liczby. Żaden z tych skrótów nie zastępuje sprawdzenia danych.

**Źródła:** [S1](#s1), „Examples of Common Heuristics” i „Limitations”.

### 9. Tymczasowo usuń trudne ograniczenie

**Opis:** W roboczym szkicu pomiń jeden warunek, który utrudnia zadanie. Spróbuj rozwiązać prostszą wersję, a potem sprawdź, gdzie szkic łamie pominięty warunek. To pokaże, co wymaga poprawy. Przywróć warunek i sprawdź całość ponownie. Uproszczenie może pomóc znaleźć pomysł, ale nie daje gwarancji, że szkic da się naprawić.

**Przykład:** Zadanie: ułóż dyżury od poniedziałku do piątku. Codziennie dyżurują 2 osoby z grupy A–E, każda dokładnie dwa razy. Nikt nie może dyżurować dwa dni z rzędu.

W szkicu pomiń ostatni warunek: poniedziałek AB; wtorek AC; środa DE; czwartek EB; piątek CD. Każdy ma dwa dyżury, ale A dyżuruje w poniedziałek i wtorek, a E w środę i czwartek.

Zamień A z wtorku z E ze środy. Nowy plan: poniedziałek AB; wtorek EC; środa DA; czwartek EB; piątek CD.

Sprawdź: A ma poniedziałek i środę; B – poniedziałek i czwartek; C – wtorek i piątek; D – środę i piątek; E – wtorek i czwartek. Wszystkie warunki są spełnione.

**Kiedy się przydaje:** Gdy trudno spełnić wiele warunków naraz, na przykład w grafiku lub podziale zadań.

**Procedura:**
1. Wypisz pierwotne ograniczenia, oddzielając rzeczywiste wymagania od założeń lub zwyczajów.
2. Wybierz jedno trudne ograniczenie i jawnie usuń je lub złagodź w roboczym modelu.
3. Rozwiąż tę wersję, nie zmieniając pierwotnego celu.
4. Sprawdź, które pierwotne ograniczenia narusza wynik.
5. Przywracaj je pojedynczo, dostosowując rozwiązanie lub wykorzystując wynik wyłącznie jako oszacowanie graniczne bądź wskazówkę.

**Uwaga:** Pominięcie warunku jest dozwolone tylko w roboczym modelu. Plan do wykonania musi spełniać wszystkie obowiązkowe wymagania, w tym zasady bezpieczeństwa.

**Źródła:** [S2](#s2), „Constraint Relaxation”.

### 10. Najpierw dopuść ułamki, potem wróć do całych jednostek

**Opis:** Jeśli musisz wybierać całe przedmioty lub zadania, rozważ najpierw wersję, w której wolno wybrać ich części. Zachowaj pozostałe warunki i cel. Ta wersja może być łatwiejsza i pomóc ocenić, jaki wynik jest w ogóle możliwy. Następnie wróć do całych wyborów. Samo zaokrąglenie nie wystarczy: trzeba ponownie sprawdzić wszystkie warunki. Dopuszczenie ułamków nie oznacza też, że w każdym zadaniu zadziała wybieranie najlepszej opcji na godzinę.

**Przykład:** Zadanie: wybierz stoiska na festyn, aby zdobyć jak najwięcej punktów. Masz łącznie 6 godzin pracy. Każde stoisko możesz wybrać najwyżej raz: A – 4 godziny i 8 punktów; B – 3 godziny i 6 punktów; C – 2 godziny i 3 punkty.

W modelu z częściami stoisk czas i punkty dzielą się proporcjonalnie. A i B dają po 2 punkty na godzinę, a C – 1,5. W 6 godzin nie zdobędziesz więc więcej niż 6 × 2 = 12 punktów. Całe A i 2/3 B dają właśnie 12 punktów, ale nie są dozwolonym rzeczywistym planem.

Wróć do całych stoisk: A + B wymaga 7 godzin, więc odpada. A + C daje 11 punktów w 6 godzin, a B + C – 9 punktów w 5 godzin. Pojedyncze stoiska dają mniej, a wszystkie trzy nie mieszczą się w limicie. Najlepszy dozwolony wybór to A + C.

**Kiedy się przydaje:** Gdy ostatecznie musisz wybierać całe przedmioty, zadania lub liczby sztuk.

**Procedura:**
1. Wskaż, co musi być wybrane w całości lub w całkowitej liczbie sztuk.
2. Dopuść części tych wyborów tylko w modelu. Zachowaj cel i pozostałe warunki.
3. Rozwiąż uproszczone zadanie. Jeśli wynik ma być granicą możliwego wyniku, uzasadnij tę granicę.
4. Wykorzystaj wynik do szukania rozwiązania z całymi wyborami.
5. Sprawdź wszystkie pierwotne warunki. Porównaj wynik z granicą, jeśli udało się ją wykazać.

**Uwaga:** Zaokrąglenie może naruszyć budżet, pojemność lub wymaganą dokładną sumę. Bliskie rozwiązanie całkowitoliczbowe może nie istnieć, a najlepsze poprawne rozwiązanie może leżeć daleko.

**Źródła:** [S2](#s2), „Continuous Relaxation” i „Linear (LP) Relaxation”.

### 11. Ustal, między jakimi wartościami leży najlepszy wynik

**Opis:** Ustal granice, między którymi musi leżeć najlepszy wynik. Gdy szukasz najkrótszej trasy, potrzebujesz dwóch informacji: dlaczego żadna trasa nie może być krótsza od pewnej długości oraz jak długa jest znaleziona poprawna trasa. Pierwsza daje granicę dolną, druga – górną. Różnica pokazuje, ile najwyżej możesz jeszcze zyskać. Gdy granice są równe, masz dowód, że znaleziony wynik jest najlepszy.

**Przykład:** Zadanie: znajdź najkrótszą trasę rowerową ulicami z domu do szkoły.

W linii prostej odległość wynosi 8 km. Żadna trasa między tymi punktami nie może być krótsza, więc najlepsza trasa ulicami ma co najmniej 8 km. To granica dolna.

Znasz dozwoloną trasę ulicami o długości 10 km. Najkrótsza trasa ma więc najwyżej 10 km. To granica górna. Szukany wynik leży w przedziale od 8 do 10 km. W porównaniu ze znaną trasą możesz zaoszczędzić najwyżej 2 km.

Znajdujesz trasę o długości 9 km: nowy przedział to 8–9 km. Gdyby udało się znaleźć dozwoloną trasę długości 8 km, granice by się zrównały. Byłby to dowód, że ta trasa jest najkrótsza.

**Kiedy się przydaje:** Gdy szukasz najlepszego wyniku i chcesz ocenić, ile można jeszcze poprawić.

**Procedura:**
1. Ustal, czy szukasz najmniejszego, czy największego wyniku.
2. Znajdź granicę, której żadne poprawne rozwiązanie nie może przekroczyć. Wyjaśnij dlaczego.
3. Znajdź rozwiązanie spełniające wszystkie warunki i oblicz jego wynik.
4. Zapisz przedział: przy szukaniu minimum znany poprawny wynik jest granicą górną; przy szukaniu maksimum – dolną.
5. Oblicz różnicę między granicami. Równość dowodzi najlepszego możliwego wyniku; różnica pokazuje, ile najwyżej można go poprawić.

**Uwaga:** Granica musi być uzasadniona. Sam przybliżony wynik łatwiejszego zadania nie dowodzi, że lepszego wyniku nie da się osiągnąć.

**Źródła:** [S2](#s2), „Mathematical problem relaxation” i „Concluding Remarks”.

### 12. Porównaj kompromisy za pomocą punktów

**Opis:** Oddziel wymagania, których nie wolno złamać, od preferencji, z których można częściowo zrezygnować. Za niespełnienie preferencji przyznawaj ustaloną liczbę punktów karnych. Zsumuj je, aby porównać plany spełniające wymagania. Potem sprawdź, czy zmiana punktacji zmieni wybór. Wynik zależy od tego, co uznajesz za ważne; punkty nie czynią tej oceny obiektywną.

**Przykład:** Zadanie: wybierz plan próby szkolnego zespołu. Oba plany muszą mieścić się w czasie rezerwacji sali i pozwalać wysłać nagranie do piątku.

Ustalcie punktację: 5 punktów karnych za każdą nieobecną osobę oraz 1 punkt za każde 15 minut po planowym zakończeniu o 18:00.

Plan A: wszyscy są obecni, próba kończy się o 18:45. Kara: 3 × 1 = 3 punkty. Plan B: nie ma jednej osoby, próba kończy się o 18:00. Kara: 1 × 5 = 5 punktów. Przy tej punktacji lepszy jest A.

Jeśli za nieobecność przyznacie 2 punkty, lepszy będzie B. Uzgodnijcie więc punktację przed wyborem. Jeśli sala nie jest dostępna do 18:45, plan A odpada niezależnie od punktów.

**Kiedy się przydaje:** Gdy wybierasz między planami spełniającymi obowiązkowe wymagania, ale różniącymi się spełnieniem preferencji.

**Procedura:**
1. Wypisz obowiązkowe wymagania i osobno preferencje.
2. Ustal, za co przyznajesz punkty karne i ile ich przyznajesz.
3. Odrzuć plany łamiące wymagania. Dla pozostałych zsumuj punkty.
4. Zmień próbną punktację i sprawdź, czy zmieni się najlepszy plan.
5. Przed wyborem pokaż punktację, wynik i to, z czego trzeba zrezygnować.

**Uwaga:** Mała liczba punktów karnych nie usprawiedliwia złamania obowiązkowej zasady. Wygrana dotyczy porównywanych planów i przyjętej punktacji, nie wszystkich możliwych rozwiązań.

**Źródła:** [S2](#s2), „Lagrangian Relaxation”.

### 13. Uzupełniaj warunki na podstawie wykrytych błędów

**Opis:** Przygotuj plan z podstawowymi warunkami i sprawdź, czego w nim brakuje. Jeśli nie działa, nazwij przyczynę i dopisz warunek, który wykluczy także inne plany z tym samym błędem. Powtarzaj sprawdzanie po każdej zmianie. Nowy warunek musi wynikać z zadania lub ustalonego faktu. Nie odrzucaj poprawnych rozwiązań tylko dlatego, że są nietypowe.

**Przykład:** Zadanie: zaplanuj robotykę, szachy i chór. Pracownia i aula są dostępne o 15:00 oraz 16:00. Zajęcia mają mieścić się w tych terminach i nie mogą kolidować uczniom, którzy uczestniczą w więcej niż jednym kole.

Pierwszy plan nie przydziela dwóch kół do tej samej sali naraz, ale robotyka i szachy odbywają się o 15:00. Jeden uczeń chodzi na oba koła. Dopisz regułę: koła ze wspólnymi uczestnikami nie mogą odbywać się jednocześnie.

Drugi plan daje robotyce aulę. Okazuje się, że potrzebne gniazdka są tylko w pracowni. Dopisz: robotyka musi być w pracowni.

Propozycja: o 15:00 robotyka w pracowni i chór w auli; o 16:00 szachy w auli. Sprawdź jeszcze, czy uczestnicy chóru nie mają konfliktu z robotyką. Jeśli nie ma innych przeszkód, plan spełnia wskazane warunki.

**Kiedy się przydaje:** Gdy sprawdzanie kolejnych planów ujawnia warunki, których wcześniej nie uwzględniono.

**Procedura:**
1. Przygotuj rozwiązanie z podstawowymi warunkami.
2. Sprawdź je względem pełnego zadania lub rzeczywistej sytuacji.
3. Nazwij przyczynę błędu i zapisz wynikający z niej warunek.
4. Upewnij się, że ten warunek nie wyklucza żadnego poprawnego rozwiązania.
5. Popraw plan i sprawdź go ponownie. Jeśli nic nie działa, odróżnij brak znalezionego rozwiązania od dowodu, że rozwiązania nie ma.

**Uwaga:** Nie wykluczaj odpowiedzi tylko dlatego, że jest nietypowa. Poprawne ograniczenie musi wynikać z pierwotnego problemu, nie z twoich preferencji.

**Źródła:** [S2](#s2), „Cutting Plane Methods”. To schemat do samodzielnego zastosowania, na którym opiera się formalna metoda.

### 14. Planuj etapami i zostaw miejsce na późniejsze zadania

**Opis:** Nie musisz od razu ustalać wszystkich szczegółów. Podziel plan na etapy. Najbliższy rozpisz dokładnie, a dla późniejszych oszacuj potrzebny czas, materiały i osoby. Zanim zatwierdzisz bieżący etap, sprawdź, czy zostanie dość zasobów na resztę. Jeśli nie, zmień wcześniejszy wybór. Planowanie etapami pomaga ograniczyć liczbę decyzji podejmowanych naraz, ale nie gwarantuje najlepszego planu.

**Przykład:** Zadanie: Maja ma salę na 4 godziny. Musi ją udekorować, poprowadzić gry i posprzątać.

Najpierw wybiera dekoracje wymagające 2,5 godziny. Późniejsze etapy szacuje wstępnie: gry – 1,5 godziny; sprzątanie – 1 godzina. Suma wynosi 2,5 + 1,5 + 1 = 5 godzin. Plan przekracza limit o godzinę.

Maja zmienia pierwszy wybór. Prostsze dekoracje zajmą 1,5 godziny, więc suma wyniesie 1,5 + 1,5 + 1 = 4 godziny.

Plan mieści się w limicie przy tych oszacowaniach, ale nie ma zapasu na opóźnienie. Przed jego przyjęciem trzeba sprawdzić, czy podane czasy są realne.

**Kiedy się przydaje:** Gdy plan ma wiele etapów i nie da się od razu ustalić wszystkich szczegółów.

**Procedura:**
1. Podziel plan na etapy.
2. Rozpisz bieżący etap, a dla późniejszych oszacuj potrzebne zasoby.
3. Sprawdź, czy po wykonaniu bieżącego etapu da się wykonać pozostałe.
4. Jeśli plan się mieści, przejdź do szczegółów następnego etapu.
5. Jeśli późniejszy etap nie mieści się w planie, wróć do wcześniejszych decyzji i je popraw.

**Uwaga:** Wczesne wybory mogą zablokować późniejsze etapy. To heurystyka, nie gwarancja wykonalności ani optymalności.

**Źródła:** [S2](#s2), „Relax-and-Fix Heuristics”.

### 15. Sprawdzaj ogólny plan na konkretnych szczegółach

**Opis:** Zapisz ogólny pomysł, a potem sprawdź, czego wymaga jego wykonanie: ile czasu, osób, materiałów i pieniędzy. Jeśli coś się nie zgadza, wskaż konkretną przyczynę i zmień plan. Następnie ponownie sprawdź szczegóły. Powtarzaj to, aż całość spełni wymagania. Zamiast ogólnego „to się nie uda” zapisz na przykład: „potrzebujemy 22 minut, a mamy 20”.

**Przykład:** Zadanie: czworo uczniów chce nagrać doświadczenie w szkolnej pracowni. Mają ją do dyspozycji przez 20 minut.

Plan: przygotować zestaw i nagrać doświadczenie w pracowni. Szczegóły: przygotowanie trwa 12 minut, a nagranie 10 minut. Razem 22 minuty, czyli o 2 minuty za dużo. Nie mieści się suma obu czynności, a nie samo przygotowanie.

Poprawka: przygotować zestaw wcześniej, o ile można to zrobić bezpiecznie poza pracownią i bezpiecznie go przenieść. Podłączenie go na miejscu zajmie wtedy 4 minuty.

Nowy rachunek: 4 + 10 = 14 minut. Pozostaje 6 minut zapasu. To może wystarczyć na drobną poprawkę, ale nie na ponowne nagranie całego 10-minutowego doświadczenia.

**Kiedy się przydaje:** Gdy dobry ogólny pomysł wymaga jeszcze sprawdzenia czasu, kosztów i sposobu wykonania.

**Procedura:**
1. Zapisz ogólny plan.
2. Wypisz czynności potrzebne do jego wykonania.
3. Sprawdź wymagany czas, zasoby i koszty.
4. Nazwij konkretną przeszkodę i zmień tę część planu, która ją powoduje.
5. Przelicz nowy plan i sprawdź wszystkie wymagania, nie tylko ostatnio poprawiony szczegół.

**Uwaga:** Poprawka musi usuwać rzeczywistą przeszkodę. Sprawdź, czy przeniesienie pracy na inny etap nie tworzy nowego problemu.

**Źródła:** [S2](#s2), „Benders Decomposition”.

### 16. Najpierw rozwiąż mały lub prosty przypadek

**Opis:** Jeśli duże zadanie cię przytłacza, spróbuj najpierw mniejszej wersji: z mniejszą liczbą obiektów, mniejszymi liczbami lub prostszymi regułami. Zachowaj jednak tę zależność, którą chcesz zrozumieć. Rozwiąż uproszczone zadanie do końca, a potem sprawdź nieco większy przypadek. Zwróć uwagę, które kroki można powtórzyć. To może podpowiedzieć metodę dla całego zadania. Sam sukces w kilku małych przypadkach nie jest jeszcze dowodem. Wróć do pierwotnych danych i wyjaśnij, dlaczego sposób nadal działa przy obowiązujących regułach.

**Przykład:** Zadanie: w turnieju gra 20 osób. Każda rozgrywa z każdą inną dokładnie jedną partię. Ile będzie partii?

Sprawdź mniejsze turnieje: 2 graczy – 1 partia; 3 graczy – 3 partie; 4 graczy – 6 partii. Nowy gracz musi zagrać po jednej partii z każdym dotychczasowym uczestnikiem. Dlatego każdy kolejny gracz dodaje odpowiednio 1, 2, 3, …, 19 partii.

Łącznie: 1 + 2 + … + 19. Połącz skrajne liczby: 1 + 19, 2 + 18, aż do 9 + 11. Masz 9 par po 20 i środkową liczbę 10. Wynik: 9 × 20 + 10 = 190 partii.

Małe przypadki podsunęły metodę. Uzasadnia ją to, że każdy nowy gracz rozgrywa partię z każdą wcześniejszą osobą, a żadna para nie jest liczona drugi raz.

**Kiedy się przydaje:** Gdy duże zadanie jest trudne, ale potrafisz rozwiązać jego mniejszą wersję.

**Procedura:**
1. Zastąp duże liczby, wiele obiektów lub kilka wymiarów przypadkiem, z którym łatwiej pracować.
2. Rozwiąż go w całości i zapisz ważne kroki.
3. Wypróbuj przypadek nieco większy lub mniej wygodny.
4. Wskaż, co pozostało takie samo, i zaproponuj metodę do ponownego użycia.
5. Wróć do pierwotnego rozmiaru i sprawdź, dlaczego metoda nadal działa.

**Uwaga:** Kilka poprawnie rozwiązanych małych przypadków nie dowodzi, że metoda działa zawsze. Wyjaśnij, dlaczego ten sam krok działa także dla pierwotnego zadania.

**Źródła:** [S2](#s2), „Problem Relaxation in K-12 Math Problem-Solving”, praktyczne strategie do pracy w klasie; [S3](#s3), część 5.

### 17. Ustal, o co chodzi w zadaniu i co naprawdę wiadomo

**Opis:** Zapisz własnymi słowami, co chcesz ustalić i co uznasz za poprawną odpowiedź. Oddziel podane lub sprawdzone fakty od założeń, które przyjmujesz bez sprawdzenia. Wypisz obowiązkowe warunki. Jeśli coś jest niejasne, doprecyzuj to przed liczeniem. Na końcu wróć do pytania: czy odpowiedź dotyczy właśnie tego zadania i spełnia wszystkie warunki?

**Przykład:** Pytanie klasy: „Czy wszyscy dotrą do muzeum przed 9:00?”. Najpierw doprecyzujcie: chodzi o wyjazd wybranym autobusem 28 uczniów i 2 nauczycieli, czyli 30 osób. Każdy ma mieć miejsce siedzące.

Autobus odjeżdża o 8:10, a przejazd trwa 35 minut. Planowany przyjazd to 8:45, więc warunek czasu jest spełniony. Autobus ma jednak tylko 28 miejsc dla uczestników. Brakuje dwóch.

Założenie „dwie osoby mogą postać” łamie podany warunek. Ten plan nie pozwala więc przewieźć całej grupy zgodnie z wymaganiami. Nie dowodzi to, że wycieczka jest niemożliwa: trzeba sprawdzić większy autobus lub dodatkowy pojazd.

**Kiedy się przydaje:** Na początku pracy, zwłaszcza gdy pytanie jest niejasne lub różnie rozumiane.

**Procedura:**
1. Zapisz pytanie własnymi słowami i określ, co będzie poprawną odpowiedzią.
2. Wypisz dane, niewiadome i obowiązkowe warunki.
3. Osobno zapisz niesprawdzone założenia. Ustal, które trzeba zweryfikować.
4. Sprawdź, czy danych wystarcza i czy nie są ze sobą sprzeczne.
5. Po rozwiązaniu porównaj odpowiedź z pierwotnym pytaniem i wszystkimi warunkami.

**Uwaga:** Rozwiązanie precyzyjnie postawionego pytania jest bezużyteczne, jeśli pytanie było niewłaściwe. Sprawdź, czy przyjęte sformułowanie nadal służy pierwotnemu celowi.

**Źródła:** [S3](#s3), części 3, 5 i 6; [S2](#s2), cztery etapy rozwiązywania problemów; [S5](#s5), s. 220-223, w tym potrzeba powrotów do wcześniejszych etapów.

### 18. Zmień sposób przedstawienia problemu

**Opis:** Przedstaw ten sam problem w inny sposób: narysuj go, ułóż tabelę, zapisz równanie albo użyj przedmiotów. Wybierz formę, która pokaże potrzebną zależność. Oznacz wielkości i przenieś wszystkie istotne dane oraz warunki. Po obliczeniu wyniku sprawdź go w pierwotnej treści. Rysunek może podsunąć pomysł, ale sam wygląd szkicu nie dowodzi, że zależność jest dokładna.

**Przykład:** Zadanie: prostokąt ma obwód 26 cm. Długość jest o 3 cm większa od szerokości. Oblicz oba wymiary.

Narysuj prostokąt. Niech w oznacza liczbę centymetrów szerokości. Długość ma wtedy w + 3 centymetry. Zapisz warunek obwodu:
2w + 2(w + 3) = 26
4w + 6 = 26
4w = 20
w = 5.

Szerokość wynosi 5 cm, a długość 5 + 3 = 8 cm.

Sprawdzenie obu warunków: 2 × 5 + 2 × 8 = 26 cm oraz 8 − 5 = 3 cm. Rysunek pomógł zapisać równanie; zgodność wyniku z treścią sprawdziliśmy rachunkiem.

**Kiedy się przydaje:** Gdy w opisie słownym, wzorze lub układzie danych trudno dostrzec potrzebne zależności.

**Procedura:**
1. Ustal, co trudno dostrzec w obecnym przedstawieniu.
2. Wybierz formę, która to uwidoczni, na przykład rysunek dla relacji przestrzennych lub tabelę dla przypadków.
3. Oznacz każdą ważną wielkość i przenieś wszystkie ograniczenia.
4. Rozwiąż lub zbadaj problem w nowej postaci.
5. Przełóż wynik z powrotem na pierwotną postać i sprawdź, czy niczego nie pominięto ani nie dodano.

**Uwaga:** Inny zapis ma zachować pytanie i jego warunki. Jeśli stosujesz przybliżenie, zaznacz, co uproszczono i jak może to wpłynąć na wynik.

**Źródła:** [S3](#s3), część 5, „Substitution or transformation” i „Abstraction”; [S2](#s2), modele z użyciem konkretnych przedmiotów.

### 19. Sprawdź jednostki i przypadki graniczne

**Opis:** Sprawdź jednostki: czy rachunek daje tę wielkość, której szukasz? Potem przetestuj wzór na prostych danych, na przykład zerze lub jedynce, jeśli są dozwolone. Zbadaj także wartości bliskie najmniejszej lub największej dopuszczalnej wartości. Takie próby pomagają znaleźć błąd lub wskazać, gdzie model przestaje działać. Nie zastępują jednak dowodu poprawności wzoru.

**Przykład:** Zadanie: rowerzysta pokonał 18 km w 1,5 godziny. Jaka była jego średnia prędkość?

Błędna próba: 1,5 ÷ 18 ≈ 0,083. Sprawdź jednostki: godziny podzielone przez kilometry dają h/km, a szukasz km/h. Trzeba odwrócić kolejność dzielenia.

Poprawny rachunek: 18 km ÷ 1,5 h = 12 km/h.

Kontrola prostego przypadku: 0 km w 1,5 godziny daje średnią prędkość 0 km/h. Kontrola zależności: 36 km w tym samym czasie daje 24 km/h, czyli dwa razy więcej. Dla czasu 0 godzin wzór z dzieleniem przez czas nie jest określony.

**Kiedy się przydaje:** Gdy sprawdzasz wzór, oszacowanie lub model przed użyciem go do dalszych obliczeń.

**Procedura:**
1. Dopisz jednostki do wszystkich mierzonych wielkości i sprawdź ich zgodność po obu stronach każdego równania.
2. Sprawdź proste dane wejściowe, takie jak zero, jeden, równe wielkości lub przypadek pusty, jeśli są dopuszczalne.
3. Zbadaj, co dzieje się w pobliżu dozwolonego minimum lub maksimum albo gdy wielkość staje się bardzo duża.
4. Porównaj to zachowanie z wymaganiami pierwotnej sytuacji.
5. Wyjaśnij każdą rozbieżność, w tym możliwość, że przy danej granicy model przestaje obowiązywać.

**Uwaga:** Przejście tych kontroli nie dowodzi poprawności. Nie oczekuj sensownego zachowania poza określonym zakresem stosowalności modelu.

**Źródła:** [S3](#s3), część 5, „Dimensional analysis” i „Limiting cases”.

### 20. Wykorzystaj symetrię, aby nie powtarzać pracy

**Opis:** Sprawdź, czy niektóre przypadki różnią się tylko zmianą, która nie ma znaczenia dla zadania, na przykład obrotem lub zamianą jednakowych elementów. Jeśli tak, wystarczy zbadać jeden z takich przypadków, zamiast powtarzać tę samą pracę. Najpierw sprawdź wszystkie warunki: oznaczone miejsce lub wyróżniony element może sprawić, że pozornie podobne przypadki jednak się różnią.

**Przykład:** Zadanie: na ile sposobów Ania, Bartek, Celina i Darek mogą usiąść przy okrągłym stole bez oznaczonych miejsc? Liczymy kolejność osób zgodnie z ruchem wskazówek zegara. Obrócenie całego układu nie daje nowego ustawienia, ale odwrócenie kolejności już tak.

Posadź Anię w dowolnym miejscu. Pozostałe trzy osoby można ustawić względem niej na 3 × 2 × 1 = 6 sposobów.

Sprawdzenie: przy czterech ponumerowanych miejscach byłoby 4 × 3 × 2 × 1 = 24 ustawienia. Bez numerów każdy układ policzylibyśmy cztery razy, więc 24 ÷ 4 = 6.

Gdyby jedno miejsce było wyróżnione, na przykład „przy drzwiach”, obrót zmieniałby osobę na tym miejscu. Wtedy rozróżnialibyśmy 24 ustawienia.

**Kiedy się przydaje:** Gdy różne ustawienia lub przypadki można uznać za takie same z punktu widzenia zadania.

**Procedura:**
1. Wskaż zmianę, która nie wpływa na warunki ani cel zadania.
2. Ustal, które przypadki po tej zmianie uznajesz za takie same.
3. Zbadaj jeden przypadek z każdej takiej grupy.
4. Wyjaśnij, dlaczego wynik można przenieść na pozostałe przypadki w grupie.
5. Przy zliczaniu sprawdź, ile razy liczysz każdy układ. Nie dziel automatycznie przez tę samą liczbę, jeśli układy mają różną liczbę powtórzeń.

**Uwaga:** Problem symetryczny nie musi mieć wyłącznie symetrycznych rozwiązań. Ograniczenia różnicujące elementy mogą zniszczyć pozorną symetrię.

**Źródła:** [S3](#s3), część 5, „Symmetry reduction”.

### 21. Porównaj możliwe skutki wyboru

**Opis:** Wypisz dostępne możliwości. Przy każdej zapisz korzyści, koszty i możliwe niepowodzenia. Jeśli wynik jest niepewny, sprawdź, na jakich danych możesz oprzeć ocenę jego szans. Nie zastępuj braku wiedzy liczbą 50%. Gdy masz uzasadniony model prawdopodobieństwa, możesz obliczyć wynik oczekiwany, czyli średnią przewidywaną w tym modelu. Osobno oceń ryzyko niekorzystnego wyniku: dobra średnia może je ukrywać.

**Przykład:** Zadanie: Rita wybiera sposób nauki. Plan A zajmuje 2 godziny, a plan B – 1 godzinę. Co może porównać?

Po planie A na czterech podobnych kartkówkach uzyskała 80, 80, 80 i 60 punktów. Średnia tych wyników wynosi (80 + 80 + 80 + 60) ÷ 4 = 75 punktów.

Gdyby roboczo przyjęła, że przyszłe wyniki będą miały taki sam rozkład, otrzymałaby wynik oczekiwany 0,75 × 80 + 0,25 × 60 = 75 punktów. To jednak założenie oparte na zaledwie czterech obserwacjach, a nie ustalone szanse przyszłych ocen.

Dla planu B Rita nie ma danych. Wie, że oszczędza godzinę, ale nie wie, jak wpłynie na wynik. Może go sprawdzić na próbnym teście. Jeśli 60 punktów nie wystarcza do zaliczenia, sama średnia 75 punktów nie usuwa ryzyka planu A.

**Kiedy się przydaje:** Gdy wybór ma niepewne skutki albo poprawa jednego wyniku pogarsza inny.

**Procedura:**
1. Wypisz możliwe do wykonania opcje.
2. Przy każdej zapisz korzyści, koszty i możliwe niepowodzenia.
3. Oddziel znane dane od założeń. Szanse oceniaj tylko na podstawie informacji, które potrafisz uzasadnić.
4. Porównaj opcje według tych samych kryteriów. Wynik oczekiwany licz tylko przy sensownych wartościach i prawdopodobieństwach.
5. Sprawdź, czy wybór się zmienia po zmianie niepewnych założeń i czy niekorzystny wynik jest dla ciebie do przyjęcia.

**Uwaga:** Korzystna średnia może ukrywać niedopuszczalną stratę. Nie wymyślaj prawdopodobieństw ani nie ukrywaj ocen wartościujących w jednym wskaźniku.

**Źródła:** [S3](#s3), części 7.3 i 9.

### 22. Rozrysuj zależności i motywacje uczestników

**Opis:** Narysuj osoby lub części procesu i połącz je strzałkami. Przy strzałkach zapisz, co jest przekazywane albo na co ktoś wpływa. Poszukaj miejsca, które spowalnia całą pracę, oraz zasad zachęcających ludzi do określonych działań. Przewidź, jak zmiana wpłynie na innych. Potem sprawdź ją w małej skali. Mapa porządkuje przypuszczenia o zależnościach, ale sama nie dowodzi przyczyn.

**Przykład:** Problem: cztery osoby przygotowują slajdy, a jedna koleżanka łączy je w prezentację. Każda osoba wysyła po 4 lub 5 slajdów. Razem przychodzi ich 18, część się powtarza, a na złożenie całości brakuje czasu.

Narysujcie cztery strzałki prowadzące do redaktorki. Wszystkie materiały przechodzą przez jedną osobę: to możliwe wąskie gardło. Nauczyciel daje punkt za każdy slajd, więc zasada oceniania zachęca do zwiększania liczby slajdów.

Próba zmiany: ocena całej prezentacji i najwyżej 3 slajdy od każdej osoby. Tym razem powstaje 12 slajdów bez powtórzeń, a redaktorka kończy na czas.

To zachęcający wynik jednej próby. Sam limit gwarantuje najwyżej 12 slajdów, nie brak powtórzeń ani terminowe zakończenie. Sprawdźcie również, co jeszcze zmieniło się w sposobie pracy.

**Kiedy się przydaje:** Gdy wynik zależy od współpracy wielu osób lub od kilku połączonych etapów pracy.

**Procedura:**
1. Narysuj osoby lub części procesu.
2. Połącz je strzałkami i opisz, co jest przekazywane lub co na co wpływa.
3. Znajdź miejsce spowalniające całość. Sprawdź też, do jakich zachowań zachęcają nagrody i zasady.
4. Przewidź skutki zmiany dla pozostałych osób, nie tylko dla jednej części pracy.
5. Przetestuj zmianę w małej skali i oceń wynik całego procesu.

**Uwaga:** Schemat sieci jest modelem, a nie dowodem istnienia związku przyczynowego. Nie zakładaj, że ludzie mają te same informacje lub zachowują się dokładnie tak, jak przewiduje model.

**Źródła:** [S3](#s3), części 8.1 i 8.4. Procedura jest praktyczną adaptacją tych podejść.

### 23. Eksperymentuj, znajdź wzorzec i go wyjaśnij

**Opis:** Wykonaj kilka małych eksperymentów, aby odkryć możliwy wzorzec, a potem znajdź powód, dla którego powinien się utrzymać. Wzorzec to powtarzająca się zależność, a dowód wyjaśnia, dlaczego musi ona zachodzić przy podanych regułach. Zapisuj przykłady w stały sposób. Kilka pierwszych wyników pasuje do wielu reguł, więc przykłady podpowiadają regułę, ale nie dowodzą, że działa zawsze. Gdy test zawiedzie, popraw regułę zamiast ukrywać wyjątek.

**Przykład:** Zadanie: układasz z zapałek kwadraty w prostym rzędzie. Sąsiednie kwadraty mają wspólny bok. Ile zapałek potrzeba na 8 kwadratów?

Sprawdź małe przypadki: 1 kwadrat – 4 zapałki; 2 kwadraty – 7; 3 kwadraty – 10. Za każdym razem przybywają 3 zapałki.

Wyjaśnij wzorzec: pierwszy kwadrat wymaga 4 zapałek. Każdy kolejny ma już jeden bok wspólny z poprzednim, więc dodajesz tylko 3 zapałki. Na 8 kwadratów potrzeba zatem 4 + 7 × 3 = 25 zapałek.

Wniosek wynika z budowy rzędu, a nie tylko z liczb 4, 7 i 10. Jeśli zmienisz sposób układania kwadratów, trzeba ponownie sprawdzić regułę.

**Kiedy się przydaje:** Gdy szukasz reguły w ciągu, powtarzającym się procesie lub wynikach zliczania.

**Procedura:**
1. Przygotuj kilka małych przykładów i zapisz je w spójnej tabeli lub na rysunku.
2. Poszukaj powtórzeń, różnic, ilorazów lub innych stałych zależności.
3. Sformułuj przypuszczalną regułę precyzyjnie, określając także przewidywany zakres jej obowiązywania.
4. Celowo sprawdzaj niewygodne przypadki, zamiast wybierać tylko przykłady, które prawdopodobnie pasują.
5. Jeśli reguła się utrzymuje, wyjaśnij ją lub udowodnij na podstawie struktury problemu. Jeśli zawodzi, wykorzystaj niepowodzenie do jej poprawienia.

**Uwaga:** Do tych samych początkowych przykładów może pasować wiele różnych reguł. Potwierdzenie w przykładach i ogólny dowód to dwie różne rzeczy.

**Źródła:** [S4](#s4), podrozdział 2.2, zwłaszcza s. 26-33, oraz podrozdział 6.1, s. 195; [S3](#s3), części 4 i 6.

### 24. Szukaj kontrprzykładu lub dowodu przez sprzeczność

**Opis:** Jeśli twierdzenie mówi o wszystkich przypadkach, poszukaj jednego, który spełnia założenia, ale nie spełnia wniosku. To kontrprzykład: wystarczy, by obalić takie twierdzenie. Inna droga to dowód przez sprzeczność. Załóż dokładne zaprzeczenie twierdzenia i sprawdź, czy prowadzi do czegoś niemożliwego. Jeśli tak, a rozumowanie jest poprawne, twierdzenie jest prawdziwe. Sam brak znalezionego kontrprzykładu niczego jeszcze nie dowodzi.

**Przykład:** Pierwsze twierdzenie: „Każda dodatnia liczba całkowita kończąca się cyfrą 5 jest pierwsza”. Liczba 5 pasuje, ale to nie wystarcza. Liczba 15 też kończy się cyfrą 5, a 15 = 3 × 5, więc nie jest pierwsza. To kontrprzykład obalający twierdzenie.

Drugie twierdzenie: „Nie istnieje największa liczba całkowita”. Załóż jego zaprzeczenie: istnieje największa liczba całkowita N. Wtedy N + 1 też jest liczbą całkowitą, a jest większa od N. Przeczy to założeniu, że N jest największa. Zatem największa liczba całkowita nie istnieje.

W pierwszym zadaniu wskazujesz przypadek obalający regułę. W drugim pokazujesz, że zaprzeczenie twierdzenia jest niemożliwe.

**Kiedy się przydaje:** Gdy sprawdzasz twierdzenie ogólne albo szukasz błędu w regule.

**Procedura:**
1. Oddziel założenia od wniosku i zapisz dokładnie, co chcesz sprawdzić.
2. Jeśli wniosek dotyczy wszystkich przypadków, spróbuj znaleźć przypadek spełniający założenia, ale nie wniosek.
3. Jeśli taki przypadek znajdziesz, twierdzenie ogólne jest fałszywe. Sprawdź, czy można je poprawić.
4. Jeśli próbujesz dowieść twierdzenia, załóż jego dokładne zaprzeczenie i wyprowadź konsekwencje.
5. Dowód kończy rzeczywista sprzeczność, nie samo to, że nie udało się znaleźć przykładu.

**Uwaga:** Brak znalezionego kontrprzykładu nie jest dowodem. W problemach empirycznych sprzeczność może wskazywać na błędny model lub założenie, a nie rozstrzygać o ogólnej prawdzie.

**Źródła:** [S4](#s4), podrozdział 2.3, s. 41-44.

### 25. Skup się na elemencie skrajnym

**Opis:** Wybierz element największy, najmniejszy, pierwszy albo ostatni według ustalonej cechy. Sprawdź, co z tego wynika: na przykład w grupie nie ma osoby wyższej od jej najwyższej osoby. Taka prosta obserwacja może zastąpić sprawdzanie wszystkich przypadków. Upewnij się, że wybrany element rzeczywiście istnieje. Jeśli kilka elementów jest równie skrajnych, wybierz jeden z nich.

**Przykład:** Zadanie: pięcioro przyjaciół stoi w kółku. Każde mówi: „Osoba po mojej prawej jest wyższa ode mnie”. Czy wszyscy mogą mówić prawdę?

Wybierz najwyższą osobę w grupie. Jeśli kilka osób ma ten sam największy wzrost, wybierz dowolną z nich. Po prawej stronie tej osoby nie może stać ktoś od niej wyższy, bo nikt w tej grupie nie jest wyższy.

Jej zdanie jest więc fałszywe. Wszyscy nie mogą mówić prawdy.

Nie trzeba znać wzrostu każdej osoby ani sprawdzać kolejnych ustawień. Wystarczył wybór osoby o największym wzroście.

**Kiedy się przydaje:** Gdy w zadaniu można wskazać największy, najmniejszy, pierwszy lub ostatni element.

**Procedura:**
1. Wybierz cechę, według której porównasz elementy.
2. Sprawdź, czy istnieje element największy, najmniejszy, pierwszy lub ostatni.
3. Wybierz taki element i zapisz, co jego pozycja wyklucza.
4. Sprawdź, czego wymagałoby od niego badane twierdzenie.
5. Jeśli wymaga czegoś niemożliwego, wyjaśnij sprzeczność i wyciągnij wniosek.

**Uwaga:** Zbiór nieskończony nie musi mieć minimum ani maksimum. W tym schemacie wybierasz rzeczywisty obiekt skrajny; to co innego niż sprawdzanie wzoru przy wartości granicznej.

**Źródła:** [S4](#s4), podrozdział 3.2, s. 73-83.

### 26. Sprawdź, czy powtórzenie jest nieuniknione

**Opis:** Jeśli przedmiotów jest więcej niż szufladek, a każdy przedmiot trafia do jednej z nich, w co najmniej jednej szufladce znajdą się dwa przedmioty. To zasada szufladkowa. Szufladkami mogą być dowolne kategorie, na przykład miesiące urodzenia. Możesz też sprawdzić, ile obiektów zmieściłoby się łącznie, gdyby w każdej kategorii były najwyżej dwa lub trzy. Większa liczba obiektów oznacza, że gdzieś ten limit zostanie przekroczony.

**Przykład:** Zadanie: w klasie jest 25 uczniów. Czy na pewno co najmniej troje urodziło się w tym samym miesiącu?

Przypisz każdego ucznia do miesiąca jego urodzenia. Masz 12 kategorii, a każdy uczeń należy do dokładnie jednej.

Gdyby w każdej kategorii było najwyżej 2 uczniów, łącznie byłoby ich najwyżej 12 × 2 = 24. W klasie jest jednak 25 uczniów.

Zatem w co najmniej jednej kategorii są przynajmniej 3 osoby. Co najmniej troje uczniów urodziło się w tym samym miesiącu. Nie musisz znać ich dat urodzenia, aby to wykazać, ale bez tych danych nie wskażesz miesiąca ani konkretnych osób.

**Kiedy się przydaje:** Gdy chcesz wykazać, że powtórzenie lub przekroczenie pojemności jakiejś grupy jest nieuniknione.

**Procedura:**
1. Ustal, jakie obiekty liczysz.
2. Wybierz kategorie tak, aby wspólna kategoria oznaczała to, co chcesz wykazać.
3. Przypisz każdy obiekt do dokładnie jednej kategorii.
4. Oblicz, ile obiektów zmieściłoby się łącznie przy założonym limicie w każdej kategorii.
5. Jeśli obiektów jest więcej, wyjaśnij, dlaczego co najmniej jedna kategoria musi przekroczyć limit.

**Uwaga:** Najtrudniej bywa wybrać odpowiednie kategorie. Zasada pozwala stwierdzić, że pewne obiekty muszą trafić do tej samej kategorii, ale nie musi wskazywać, do której.

**Źródła:** [S4](#s4), podrozdział 3.3, s. 84-91.

### 27. Znajdź coś, co nie może się zmienić

**Opis:** Poszukaj własności, której nie zmienia żaden dozwolony ruch. Może to być suma, parzystość albo reszta z dzielenia. Taką własność nazywamy niezmiennikiem. Udowodnij, że każdy dozwolony ruch ją zachowuje, a potem porównaj początek i cel. Jeśli własność się różni, celu nie da się osiągnąć. Jeśli jest taka sama, ten test nie rozstrzyga sprawy: potrzebujesz kolejnego argumentu lub sposobu dojścia do celu.

**Przykład:** Zadanie: trzy przełączniki są wyłączone. Zapisujemy to jako 000; cyfra 1 oznacza przełącznik włączony. Jedyny dozwolony ruch zmienia jednocześnie położenie pierwszego i drugiego przełącznika. Czy można uzyskać 100?

Sprawdź ruchy od początku: 000 → 110 → 000. Włączonych jest na zmianę 0 lub 2 przełączniki. Liczba włączonych pozostaje parzysta. Stan 100 ma jeden włączony przełącznik, więc jest nieosiągalny.

A stan 101? Ma dwa włączone przełączniki, więc test parzystości go nie wyklucza. Jest jednak również nieosiągalny: trzeci przełącznik nigdy się nie zmienia, a w 101 jest włączony.

Zgodność jednego niezmiennika nie wystarcza do wykazania, że cel jest osiągalny.

**Kiedy się przydaje:** Gdy sprawdzasz, czy sekwencja dozwolonych ruchów może doprowadzić do celu.

**Procedura:**
1. Dokładnie zdefiniuj dozwolone ruchy.
2. Sprawdź kandydatów na niezmienniki, takich jak suma, różnica, parzystość, reszta z dzielenia lub bilans kolorów.
3. Udowodnij, że każdy rodzaj ruchu zachowuje wybraną własność.
4. Porównaj jej wartość na początku i w pożądanym stanie końcowym.
5. Jeśli wartości się różnią, cel jest nieosiągalny przy tych ruchach. Jeśli są zgodne, kontynuuj poszukiwania, używając niezmiennika do kontroli.

**Uwaga:** Zgodność niezmiennika nie dowodzi osiągalności. Musisz sprawdzić każdy dozwolony ruch, nie tylko te występujące w pierwszych przykładach.

**Źródła:** [S4](#s4), podrozdział 3.4, s. 92-102; przykład z kolorowaniem w podrozdziale 2.4, s. 54-55.

### 28. Znajdź miarę, która pokazuje postęp

**Opis:** Wybierz liczbę opisującą stan zadania i sprawdź, czy po każdym ruchu zmienia się w tym samym kierunku. Może to pomóc dowieść, że proces się skończy. Sam spadek nie wystarcza: liczba może maleć bez końca. Prostym dowodem zakończenia jest znalezienie nieujemnej liczby całkowitej, która przy każdym ruchu maleje co najmniej o 1. To jeden ze sposobów uzasadnienia końca procesu, nie obowiązkowa postać każdej takiej miary.

**Przykład:** Zadanie: na stosie leży 12 żetonów. W ruchu gracz zabiera 1, 2 lub 3 żetony, ale nie więcej, niż zostało. Gra kończy się po opróżnieniu stosu. Czy na pewno się skończy?

Śledź liczbę żetonów. Jest nieujemna i całkowita. Każdy ruch zmniejsza ją co najmniej o 1, więc gra potrwa najwyżej 12 ruchów. Tyle ruchów będzie wtedy, gdy gracze za każdym razem zabiorą po jednym żetonie.

Dla porównania: ciąg 1, 1/2, 1/4, 1/8, … też maleje, ale po żadnej skończonej liczbie kroków nie osiąga zera. Dlatego sam spadek i dolna granica nie wystarczają. W grze z żetonami mamy dodatkowo spadek o co najmniej jedną całą sztukę.

**Kiedy się przydaje:** Gdy ruchy lub czynności się powtarzają i chcesz wykazać, że proces się zakończy.

**Procedura:**
1. Wybierz liczbę opisującą bieżący stan.
2. Sprawdź jej zmianę przy każdym dozwolonym ruchu.
3. Ustal, czy zmienia się w jednym kierunku i ma granicę, której nie może przekroczyć.
4. Wyjaśnij, dlaczego ruchy nie mogą trwać bez końca. Przykład: nieujemna liczba całkowita maleje o co najmniej 1.
5. Sprawdź, co oznacza zatrzymanie procesu. Czy daje wynik wymagany w zadaniu?

**Uwaga:** Malejąca liczba nie zawsze osiąga swoją dolną granicę. Jeśli niektóre ruchy nie zmieniają miary, sprawdź, czy nie można ich powtarzać bez końca.

**Źródła:** [S4](#s4), podrozdział 3.4, „Monovariants”, s. 102-106.

### 29. Zbuduj duży przypadek z mniejszych

**Opis:** Spróbuj obliczyć wynik większego zadania z wyników mniejszych. Najpierw rozwiąż potrzebne małe przypadki, a potem ustal regułę przejścia. To podejście nazywamy rekurencją. Przy zliczaniu sprawdź, czy uwzględniasz wszystkie możliwości i żadnej dwa razy. Indukcja służy innemu celowi: dowodzeniu, że twierdzenie działa dla kolejnych rozmiarów, na podstawie przypadku początkowego i uzasadnionego kroku przejścia.

**Przykład:** Zadanie: robot zaczyna u podnóża schodów. W każdym skoku pokonuje 1 albo 2 stopnie. Na ile sposobów może dotrzeć dokładnie na 4. stopień? Kolejność skoków ma znaczenie.

Na 1. stopień prowadzi 1 sposób: skok o 1. Na 2. stopień prowadzą 2 sposoby: 1 + 1 oraz 2.

Na 3. stopień robot dociera ostatnim skokiem ze stopnia 2 albo 1. Te możliwości się nie nakładają i obejmują wszystkie ostatnie skoki. Można więc dodać wyniki: 2 + 1 = 3 sposoby.

Na 4. stopień dociera ze stopnia 3 albo 2: 3 + 2 = 5 sposobów. Sprawdź listę: 1 + 1 + 1 + 1; 1 + 1 + 2; 1 + 2 + 1; 2 + 1 + 1; 2 + 2.

**Kiedy się przydaje:** Gdy wynik dla większego rozmiaru można wyznaczyć lub uzasadnić na podstawie mniejszych przypadków.

**Procedura:**
1. Ustal, co oznacza wynik dla zadania danego rozmiaru.
2. Rozwiąż potrzebne przypadki początkowe.
3. Pokaż, jak otrzymać większy przypadek z mniejszych.
4. Przy zliczaniu sprawdź kompletność i brak powtórzeń. Przy dowodzeniu uzasadnij przejście dla dowolnego dopuszczalnego rozmiaru.
5. Wykorzystaj przypadki początkowe i regułę przejścia. Sprawdź, czy nie pomijasz żadnego rozmiaru.

**Uwaga:** Sumuj wyniki mniejszych przypadków tylko wtedy, gdy odpowiadają rozłącznym możliwościom. W dowodzie nie zakładaj prawdziwości tego samego przypadku, który dopiero próbujesz wykazać.

**Źródła:** [S4](#s4), podrozdział 2.3, s. 45-50, i podrozdział 6.4, s. 214-217.

### 30. Policz to, co nie spełnia warunku, i odejmij od całości

**Opis:** Czasem łatwiej policzyć przypadki niespełniające warunku niż te, których szukasz. Tworzą one dopełnienie. Policz wszystkie możliwości i odejmij dopełnienie. Na przykład zamiast liczyć wyniki z co najmniej jedną szóstką, policz wyniki bez żadnej szóstki. Przy prawdopodobieństwie możesz odjąć prawdopodobieństwo przeciwnego zdarzenia od 1. Liczenie szans przez dzielenie liczby wyników wymaga, by wszystkie wyniki były jednakowo prawdopodobne.

**Przykład:** Zadanie: wykonujesz dwa niezależne rzuty uczciwą kostką. Jakie jest prawdopodobieństwo co najmniej jednej szóstki?

Każdy wynik zapisz jako parę: pierwszy rzut, drugi rzut. Jest 6 × 6 = 36 jednakowo prawdopodobnych par.

Policz dopełnienie, czyli brak szóstki w obu rzutach. W każdym rzucie masz 5 możliwości, więc takich par jest 5 × 5 = 25.

Pary z co najmniej jedną szóstką: 36 − 25 = 11. Szukane prawdopodobieństwo wynosi 11/36.

Sprawdzenie pułapki: dodanie 6 par z szóstką w pierwszym rzucie i 6 par z szóstką w drugim daje 12, bo para (6, 6) została policzona dwa razy. Trzeba odjąć jedno powtórzenie: 6 + 6 − 1 = 11.

**Kiedy się przydaje:** Gdy trudno policzyć przypadki spełniające warunek, a łatwo policzyć te, które go nie spełniają.

**Procedura:**
1. Określ wszystkie dopuszczalne wyniki.
2. Zapisz dokładne zaprzeczenie szukanego warunku, na przykład „żadnej szóstki” zamiast „co najmniej jedna szóstka”.
3. Sprawdź, czy każdy wynik należy do dokładnie jednej z dwóch grup: spełnia warunek albo go nie spełnia.
4. Od liczby wszystkich wyników odejmij liczbę wyników niespełniających warunku. Dla prawdopodobieństw odejmij prawdopodobieństwo przeciwnego zdarzenia od 1.
5. Sprawdź pominięcia i podwójne liczenie. Jeśli obliczasz szansę przez dzielenie liczby wyników, uzasadnij ich jednakowe prawdopodobieństwo.

**Uwaga:** Wyznaczanie prawdopodobieństwa przez dzielenie liczebności wymaga jednakowo prawdopodobnych wyników elementarnych. Nie można po prostu dodawać nakładających się kategorii niepowodzeń.

**Źródła:** [S4](#s4), podrozdział 6.3, s. 207-208.

### 31. Policz to samo na dwa sposoby

**Opis:** Policz ten sam zbiór obiektów na dwa różne sposoby. Oba poprawne rachunki muszą dać ten sam wynik. Jeśli się różnią, sprawdź, czy czegoś nie pominięto albo nie policzono kilka razy. Tę metodę można też wykorzystać do wyprowadzenia wzoru: trudny rachunek zastępujesz łatwiejszym, ale oba muszą dotyczyć dokładnie tych samych obiektów.

**Przykład:** Zadanie: sześcioro uczniów wita się uściskiem dłoni. Każda para robi to dokładnie raz. Ile jest uścisków?

Sposób pierwszy: policz pary po kolei. Pierwsza osoba tworzy 5 par, druga 4 jeszcze niepoliczone pary, a kolejne 3, 2 i 1. Razem: 5 + 4 + 3 + 2 + 1 = 15.

Sposób drugi: niech każdy zapisze osoby, z którymi ściskał dłoń. Każdy ma 5 zapisów, więc razem jest 6 × 5 = 30 zapisów. Każdy uścisk pojawia się u obu uczestników, czyli dwa razy. Liczba uścisków to 30 ÷ 2 = 15.

Obie drogi obejmują wszystkie pary. W pierwszej każdą liczymy raz, a w drugiej usuwamy podwójne liczenie przez dzielenie przez 2.

**Kiedy się przydaje:** Gdy chcesz sprawdzić liczenie, znaleźć prostszy rachunek lub uzasadnić wzór.

**Procedura:**
1. Określ dokładnie, co jest jednym liczonym obiektem.
2. Policz obiekty pierwszym sposobem.
3. Policz ten sam zbiór z innego punktu widzenia.
4. Sprawdź pominięcia i powtórzenia w obu rachunkach. Uwzględnij potrzebne dzielenie lub odejmowanie.
5. Porównaj wyniki i wyjaśnij różnicę, jeśli wystąpi. Zgodność liczb nie zastępuje kontroli obu rozumowań.

**Uwaga:** Nadmiarowe wybory prowadzą do wielokrotnego liczenia. Gdy wcześniejsze wybory jednoznacznie wyznaczają późniejszy, nie jest on już niezależnym wyborem.

**Źródła:** [S4](#s4), podrozdział 6.1, s. 191-192, i podrozdział 6.2, zwłaszcza s. 199-200.

### 32. Dodaj element, który połączy dane z pytaniem

**Opis:** Jeśli nie widzisz związku między danymi a celem, wprowadź pomocniczy element. Możesz dorysować odcinek, oznaczyć wielkość literą albo obliczyć pośrednią sumę. Najpierw ustal, jak ma to pomóc. Konstrukcja musi być możliwa, a nowa wielkość – poprawnie zdefiniowana. Nie wolno przy tym zakładać wyniku, który dopiero chcesz uzasadnić.

**Przykład:** Zadanie: prostokątne boisko ma boki 6 m i 8 m. Jaka odległość dzieli przeciwległe narożniki?

Narysuj przekątną i oznacz jej długość literą d. Przekątna oraz dwa boki boiska tworzą trójkąt prostokątny. Możesz więc użyć twierdzenia Pitagorasa.

d² = (6 m)² + (8 m)²
d² = 36 m² + 64 m² = 100 m²
d = 10 m.

Długość jest dodatnia, dlatego wybierasz 10 m. To więcej niż każdy z boków trójkąta prostokątnego, zgodnie z tym, że przekątna jest jego najdłuższym bokiem. Dorysowanie odcinka nie zmieniło boiska; pozwoliło zobaczyć potrzebny trójkąt.

**Kiedy się przydaje:** Gdy dane nie podpowiadają rozwiązania, ale dodatkowa linia, oznaczenie lub obliczenie może ujawnić zależność.

**Procedura:**
1. Zapytaj, jaka zależność pozwoliłaby odpowiedzieć na pytanie.
2. Dodaj element, który może ją ujawnić: odcinek, oznaczenie lub wielkość pośrednią.
3. Sprawdź, czy można go poprawnie wprowadzić przy warunkach zadania.
4. Wykorzystaj go do połączenia danych z szukaną wielkością.
5. Wróć do pierwotnego pytania i sprawdź odpowiedź.

**Uwaga:** Konstrukcja, która wygląda użytecznie, może być niemożliwa albo przemycać pożądany wniosek. Dodawanie elementów bez konkretnego celu rzadko pomaga.

**Źródła:** [S4](#s4), podrozdział 8.4, s. 282-284; [S3](#s3), część 5, zmienne i konstrukcje pomocnicze.

### 33. Systematycznie wypisuj przypadki i eliminuj niemożliwe

**Opis:** Wypisz wszystkie możliwości w ustalonym porządku, na przykład w tabeli albo na rozgałęzionej liście, i skreślaj te, które łamią regułę. Zacznij od reguły, która od razu skreśla najwięcej, a przy każdym skreśleniu zapisz powód. Podziel możliwości tak, żeby każda trafiła do dokładnie jednej gałęzi: niczego nie brakuje i nic się nie powtarza. Metoda działa, gdy pełna lista jest dość krótka. Jeśli sprawdzisz tylko część, możesz znaleźć rozwiązanie, ale nie możesz twierdzić, że innych nie ma.

**Przykład:** Zadanie: kod do szafki zawiera cyfry 1, 2, 3 i 4, każdą dokładnie raz. Ostatnia cyfra ma być parzysta, a pierwsza mniejsza od drugiej. Wypisz wszystkie kody.

Najpierw podziel kody według ostatniej cyfry. Końcówki 1 i 3 odpadają, więc zostają tylko 2 i 4.

Końcówka 2: wszystkie kolejności pozostałych cyfr dają 1342, 1432, 3142, 3412, 4132, 4312. Warunek pierwszej i drugiej cyfry spełniają tylko 1342, 1432 i 3412.

Końcówka 4: sprawdź 1234, 1324, 2134, 2314, 3124, 3214. Zostają 1234, 1324 i 2314.

Wynik: 6 kodów. Żaden się nie powtarza. Lista jest pełna, bo sprawdziliśmy obie dozwolone końcówki i wszystkie kolejności pozostałych cyfr.

**Kiedy się przydaje:** Gdy możliwości jest niewiele i chcesz sprawdzić je wszystkie, na przykład w zagadce logicznej.

**Procedura:**
1. Zapisz możliwe wybory i warunki poprawnej odpowiedzi.
2. Podziel możliwości na grupy tak, aby niczego nie pominąć i nie liczyć dwa razy.
3. Najpierw sprawdź warunek, który łatwo wyklucza wiele możliwości.
4. W każdej pozostałej grupie sprawdź kolejne warunki. Przy skreśleniu zapisz powód.
5. Sprawdź wszystkie pozostawione odpowiedzi. Jeśli twierdzisz, że lista jest pełna, pokaż, że obejmuje wszystkie możliwości.

**Uwaga:** Lista może nadmiernie się rozrosnąć. Jeśli ograniczysz poszukiwania, zaznacz, że są jeszcze niesprawdzone możliwości. Brak odpowiedzi po przejrzeniu części listy nie dowodzi, że rozwiązanie nie istnieje.

**Źródła:** [S5](#s5), s. 285-286, pełne wyliczenie tras, oraz s. 331-332, problem samochodów różnych kolorów; [S3](#s3), część 6, uporządkowane wypisywanie i eliminacja.

### 34. Oblicz tylko to, o co pyta zadanie

**Opis:** Przeczytaj dokładnie, o co pyta zadanie. Często potrzebna jest tylko suma, różnica, iloraz albo czyjeś miejsce, a nie każda liczba z osobna. Zapisz, co wiesz, i połącz te informacje tak, żeby niepotrzebne niewiadome zniknęły. Oszczędzasz rachunki i nie zmyślasz danych, których zadanie nie podaje. Na końcu sprawdź, czy odpowiedź jest jednoznaczna: jeśli dwa przypadki zgodne z danymi dają różne odpowiedzi na pytanie, informacji brakuje.

**Przykład:** Zadanie: cały obwód prostokątnej działki ogrodzono 28 m siatki, bez przerw. Ile wynosi suma długości i szerokości działki?

Nie musisz znać obu boków osobno. Obwód obejmuje dwie długości i dwie szerokości, więc suma jednej długości i jednej szerokości to połowa obwodu: 28 m ÷ 2 = 14 m.

Sprawdź dwa możliwe prostokąty: boki 6 m i 8 m oraz boki 5 m i 9 m. Oba mają obwód 28 m i sumę sąsiednich boków 14 m.

Gdyby pytanie dotyczyło pola, danych byłoby za mało. Te dwa prostokąty mają różne pola: 48 m² i 45 m². Znajomość sumy boków nie oznacza znajomości każdego boku ani pola.

**Kiedy się przydaje:** Gdy nie znasz wszystkich danych, ale pytanie dotyczy tylko ich sumy, różnicy lub innej wspólnej wielkości.

**Procedura:**
1. Podkreśl dokładnie to, co trzeba obliczyć lub ustalić.
2. Sprawdź, czy nie próbujesz niepotrzebnie wyznaczyć dodatkowych danych.
3. Połącz znane zależności tak, aby otrzymać szukaną wielkość bez zbędnych obliczeń.
4. Sprawdź, czy zależności wymuszają tę samą odpowiedź dla każdego przypadku zgodnego z danymi.
5. Jeśli podejrzewasz brak danych, spróbuj wskazać dwa zgodne z nimi przypadki dające różne odpowiedzi na zadane pytanie.

**Uwaga:** Ustalona suma nie wyznacza jej poszczególnych składników. Jeśli kilka dopuszczalnych konfiguracji daje różne wartości szukanej wielkości, informacji rzeczywiście jest za mało.

**Źródła:** [S5](#s5), s. 322-323, sumowanie kątów bez wyznaczania każdego z osobna, oraz s. 332, ustalenie pierwszego samochodu bez odtwarzania całej kolejności; [S4](#s4), podrozdział 3.4, przykład turnieju na s. 102.

### 35. Wybieraj to, co teraz wygląda najlepiej, i sprawdź całość

**Opis:** Metoda zachłanna polega na wybieraniu w każdym kroku tego, co jest najlepsze według jednej prostej reguły, na przykład największego żetonu, który jeszcze pasuje. Pozwala szybko zbudować pierwszą propozycję. Potem sprawdź całość i porównaj ją z innymi możliwościami. Dobry pojedynczy ruch może utrudnić następne kroki, więc metoda nie zawsze daje najlepsze rozwiązanie, a czasem nie pozwala go dokończyć.

**Przykład:** Zadanie: zbierz dokładnie 6 punktów jak najmniejszą liczbą żetonów. Dostępne wartości to 1, 3 i 4 punkty. Żetonów każdego rodzaju możesz użyć dowolnie dużo.

Reguła zachłanna: bierz największy żeton, który nie przekroczy brakującej sumy. Wybierasz 4. Brakuje 2 punktów, więc dokładasz 1 i 1. Wynik: 3 żetony.

Porównaj inny wybór: 3 + 3 = 6. Wystarczą 2 żetony. To lepsze rozwiązanie. Jest też najlepsze możliwe, bo jeden żeton nie wystarczy: nie ma żetonu o wartości 6.

Wniosek: największy pierwszy wybór dał poprawną sumę, ale nie najmniejszą liczbę żetonów.

**Kiedy się przydaje:** Gdy potrzebujesz szybko pierwszej propozycji, a sprawdzanie wszystkich możliwości trwałoby zbyt długo.

**Procedura:**
1. Wybierz prostą regułę określającą najlepszy kolejny ruch.
2. Wykonaj najlepszy dostępny ruch według tej reguły, nie łamiąc obowiązkowych warunków.
3. Powtarzaj, aż zbudujesz całe rozwiązanie albo utkniesz.
4. Sprawdź kompletne rozwiązanie względem wszystkich warunków.
5. Spróbuj innego początku lub poprawki. Aby uznać wynik za najlepszy możliwy, potrzebujesz osobnego uzasadnienia.

**Uwaga:** Najlepszy następny ruch może wymusić kosztowny ruch później albo prowadzić do ślepego zaułka. Uznanie wyniku metody zachłannej za optymalny wymaga osobnego dowodu.

**Źródła:** [S5](#s5), s. 285-286. W przykładzie z czterema miastami metoda najbliższego sąsiada daje trasę 635 km, podczas gdy pełne porównanie pozwala znaleźć trasę 625 km.

### 36. Sprawdzaj postęp i świadomie zmieniaj plan

**Opis:** Co pewien czas zatrzymaj się i zapytaj: „Co już wiem? Czego nadal nie wiem? Po co wykonuję następny krok?”. Jeśli próby dostarczają informacji, kontynuuj. Jeśli nie, sprawdź, czy brakuje ci wiedzy, czy metoda nie pasuje, czy może źle odczytano warunek. Zmień konkretną rzecz, zamiast zaczynać wszystko przypadkowo od nowa. Na końcu sprawdź wynik i zapisz wniosek na przyszłość.

**Przykład:** Problem: po 30 minutach czytania notatek rozwiązujesz próbny test i uzyskujesz 2/10. Co zrobić dalej?

Przejrzyj 8 błędów. Sześć dotyczy definicji, których nie udało się przypomnieć. To wskazówka, by sprawdzić definicje: czy je rozumiesz i czy potrafisz je podać bez zaglądania do notatek?

Zmiana planu: dodajesz fiszki z definicjami i zadania z przykładami. W kolejnym podobnym teście otrzymujesz 7/10.

Wynik się poprawił, ale jedna próba nie dowodzi, że przyczyną była wyłącznie nowa metoda. Mogły pomóc dodatkowy czas nauki, znajomość pytań lub łatwiejszy test. Sprawdź się jeszcze na nowych pytaniach. Wniosek roboczy: zamiast oceniać naukę po czasie czytania, regularnie sprawdzaj, co potrafisz odtworzyć i zastosować.

**Kiedy się przydaje:** Gdy długo pracujesz nad zadaniem, kolejne próby zawodzą lub nie wiesz, czy robisz postęp.

**Procedura:**
1. Zapisz, czego chcesz się dowiedzieć z bieżącej próby.
2. Po jej zakończeniu porównaj wynik z tym celem.
3. Sprawdź, czy trudność dotyczy wiedzy, metody czy odczytania warunków.
4. Jeśli masz postęp, kontynuuj. Jeśli nie, wybierz konkretną zmianę i sprawdź jej wynik.
5. Na końcu zweryfikuj odpowiedź i zapisz, co warto powtórzyć albo zrobić inaczej następnym razem.

**Uwaga:** Nie zmieniaj metody przy każdej trudności, ale też nie trzymaj się planu tylko dlatego, że poświęcono mu już czas. Te schematy nie zastąpią niezbędnej wiedzy z danej dziedziny.

**Źródła:** [S5](#s5), s. 27-28, 48-50 i 220-226, o samokontroli, cyklicznym rozwiązywaniu problemów oraz wzajemnym wpływie wiedzy, strategii, kontroli i przekonań.

### 37. Zastąp konkretny przypadek ogólniejszym pytaniem

**Opis:** Czasem łatwiej zobaczyć zależność, gdy pytasz nie o jedną liczbę, lecz o całą rodzinę podobnych zadań. Zastąp wybraną liczbę lub warunek parametrem i określ jego dozwolone wartości. Poszukaj reguły dla tej rodziny, uzasadnij ją, a potem wróć do pierwotnego przypadku. Możesz użyć rysunku, przekształceń lub dowodu przez indukcję. Uogólnienie to zmiana pytania na szersze; indukcja jest jednym ze sposobów dowodzenia odpowiedzi.

**Przykład:** Pytanie początkowe: ile wynosi 1 + 3 + 5 + 7? Bezpośrednio otrzymasz 16. Aby znaleźć metodę przydatną także dla innych długości sumy, zapytaj: ile wynosi suma pierwszych n dodatnich liczb nieparzystych? Tutaj n jest dodatnią liczbą całkowitą.

Domysł: suma wynosi n². Sprawdź początek: dla n = 1 suma to 1 = 1².

Teraz krok ogólny. Załóż, że dla pewnego n suma pierwszych n liczb wynosi n². Następna liczba nieparzysta to 2n + 1. Po jej dodaniu otrzymasz:
n² + 2n + 1 = (n + 1)².

Reguła jest prawdziwa na początku, a jej prawdziwość dla jednego rozmiaru pociąga prawdziwość dla następnego. To dowód przez indukcję. Dla pierwotnych czterech liczb podstaw n = 4: suma wynosi 4² = 16.

**Kiedy się przydaje:** Gdy konkretne liczby zasłaniają zależność lub chcesz znaleźć wzór przydatny w wielu podobnych zadaniach.

**Procedura:**
1. Wybierz konkretną liczbę lub warunek, które chcesz uogólnić.
2. Zastąp je parametrem i określ dopuszczalne wartości.
3. Zbadaj kilka przypadków, w tym pierwotny, aby znaleźć możliwą regułę.
4. Uzasadnij regułę dla całego wskazanego zakresu. Kilka przykładów nie wystarczy.
5. Podstaw pierwotną wartość i odpowiedz na pierwotne pytanie.

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
