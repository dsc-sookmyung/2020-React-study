/*
    DSC Sookmyung React Study : Week 1
    [ javascript 기초 - ES6 ]
    - 템플릿 리터럴 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
    - 구조 분해 할당 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    - 화살표 함수 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
*/

// ES6 class
/*
    Q1. Cat 클래스를 생성하시오. 
    - Cat 클래스는 name 멤버변수를 가진다. 생성자에서 name 멤버변수를 초기화한다. 
    - Cat 클래스는 hello() 메소드를 가진다. hello 메서드는 "Mew~ I'm [name]" 을 콘솔에 출력한다. 출력하는 문자열은 템플릿 리터럴을 사용하여 작성한다. 
    
    myCat 이라는 Cat 인스턴스를 생성하고 hello() 메소드를 실행하시오. 메소드를 실행한 결과를 주석으로 작성하시오.
    인스턴스를 생성함과 동시에 name 멤버변수를 임의의 문자열로 초기화한다.
*/

// your code here...

myCat.hello(); //실행 결과

/*
    Q2. 위에서 만든 Cat 클래스를 상속받아 CheeseCat 자식클래스를 작성하시오. 
    - CheeseCat 클래스는 grooming 메소드를 가진다. grooming 메소드에서는 "grooming..." 이라는 문자열을 콘솔창에 출력한다. 
    - CheeseCat 클래스 Cat 클래스의 hello() 메소드를 오버라이딩한다. hello() 메소드에서는 "Mew~ I'm [name]" 을 콘솔에 출력한다. 출력하는 문자열은 템플릿 리터럴로 작성한다.

    myCheeseCat이라는 인스턴스를 생성하고(name 멤버변수는 임의의 문자열을 넣어 초기화) 다음을 실행한 결과를 쓰시오. 실행한 결과는 주석으로 작성하시요.
*/

// your code here...

myCheeseCat.hello(); // 실행 결과
myCheeseCat.grooming(); // 실행 결과

// arrow function
/*
    Q3-1. 아래의 함수 선언문(sum1)을 함수 표현식으로 바꾸시오. (sum2)
    Q3-2. 만든 함수 표현식의 익명함수를 arrow function으로 바꾸시오.(implicit return 하시오) (sum3)
    3가지 함수를 실행한 결과를 콘솔에 출력하시오.
*/

function sum1(x, y) {
    return x + y;
}

// your code here...

console.log(sum1(1,2));
console.log(sum2(1,2));
console.log(sum3(1,2));

// map
/*
    Q4-1. users 객체 배열을 생성하고 map 을 사용하여 콘솔창에 출력하시오.
    실행 결과는 주석으로 작성하시오.
    filter를 사용해서 나이가 28 이상인 사람만 출력하시오.
    
    Q4-2. 출력 형태: "[name], [age]"
    
    Q4-3. map을 사용하여 배열의 인덱스도 함께 출력하시오.
    출력 형태: "[index]. [name], [age]"
*/

const users = [
    { name: 'Alice', age: 18 },
    { name: 'Bob', age: 30 },
    { name: 'Carol', age: 22 },
    { name: 'Dave', age: 28 }
];

// your code here...

/*
04-1. 실행 결과

04-2. 실행 결과

04-3. 실행 결과

*/

// destructuring assignment
/*
    Q5-1. 배열 해체 할당
        다음을 실행한 결과를 주석으로 작성하시오.
*/
let a, b, rest;
[a, b] = [10, 20];

console.log(a); // 실행 결과
console.log(b); // 실행 결과

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); //실행 결과

/*
    Q5-2. 객체 해체 할당
        다음을 실행한 결과를 주석으로 작성하시오.
*/

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}

console.log(a); 
console.log(b);
console.log(rest);

