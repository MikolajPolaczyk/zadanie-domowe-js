# Praca domowa: Podstawy JavaScript

W poniższych zadaniach celem jest zwrócenie wartości. Żadna z funkcji nie powinna nic wypisywać w konsoli.

## 1. Walidator silnego hasła

Plik źródłowy: [`is-strong-password.js`](./is-strong-password.js)

Napisz funkcję `isStrongPassword`, która sprawdzi, czy hasło (podane w parametrze) jest dostatecznie silne, tj.:
- min. 1 mała litera
- min. 1 wielka litera
- min. 1 cyfra
- min. 1 znak specjalny
- min. 12 znaków

Funkcja powinna zwrócić `true`, gdy zadane hasło spełnia wymogi, w przeciwnym przypadku `false`.

## 2. Generator identyfikatora

Plik źródłowy: [`create-id.js`](./create-id.js)

Napisz funkcję `createId` generującą losowy napis o długości 16 znaków, zawierający wyłącznie małe litery oraz cyfry.

Funkcja powinna każdorazowo zwracać inny napis.

## 3. Generator silnego hasła

Plik źródłowy: [`create-password.js`](./create-password.js)

Napisz funkcję `createPassword` generującą silne hasło spełniające następujące wymogi:
- min. 1 mała litera
- min. 1 wielka litera
- min. 1 cyfra
- min. 1 znak specjalny
- o długości 12 znaków

Funkcja powinna każdorazowo zwracać inne hasło.

## 4. Generator silnego hasła z preferencjami 🧐

Plik źródłowy: [`create-password-parametrized.js`](./create-password-parametrized.js)

Napisz funkcję `createPassword` generującą silne hasło jak powyżej, umożliwiającą uwzględnienie innych wymogów przy każdym wywołaniu, np.
- wykluczenie znaków specjalnych
- zwiększenie minimalnej ilość znaków dla wybranych grup znaków
- zmianę długości generowanego hasła

Przykładowe wywołanie:

```js
createPassword({minLowerCase: 2, minNumbers: 3, minLength: 16, exclude: ['specials']})
```

Funkcja powinna każdorazowo zwracać inne hasło.

## 5. Kalkulator warunków zaliczenia

Plik źródłowy: [`get-required-test-score.js`](./get-required-test-score.js)

Napisz funkcję `getRequiredTestScore`, która zwróci minimalny wynik z testu końcowego wymagany do zaliczenia kursu
na podstawie listy ocen z prac domowych.
Funkcja przyjmuje wyłącznie jeden parametr — imię i nazwisko (`fullName`).

Wartość obliczana jest za pomocą wzoru:

`( 0.7 - 0.3 * średni wynik z prac domowych ) / 0.7`

Zwracana wartość powinna zostać zaokrąglona do 2 miejsc po przecinku.

Przykładowe wywołanie:

```js
getRequiredTestScore('Jakub Nieobecny') // 0.67
getRequiredTestScore('Kacper Nowak') // 0.66
```

## 6. Weryfikator obecności

Plik źródłowy: [`get-rarely-present.js`](./get-rarely-present.js)

Napisz funkcję `getRarelyPresent`, która z podanej listy kursantów zwróci imiona i nazwiska tych, którzy nie mają niewystarczającą liczbę obecności do zaliczenia kursu. Próg obecności powinien być zawarty w parametrach wywołania funkcji.

Przykładowe wywołanie funkcji:

```js
getRarelyPresent(0.8) // ['Jakub Nieobecny']
getRarelyPresent(0.7) // []
```
