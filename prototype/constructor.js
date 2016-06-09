function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.firstName + " " + this.lastName;
}

var myFather = new Person("John", "Doe");
var myMother = new Person("Sally", "Silver");

console.log(myFather.name());
