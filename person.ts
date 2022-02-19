export class Person {

private firstName: string;
private middleName: string;
private lastName: string;
private year: number;
private age: number;

constructor(
 firstName: string,
 middleName: string,
 lastName: string,
 year: number,
 age: number
)
  {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.year = year;
    this.age = age;
  }

getFullName(): string {
  return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
}

getBirthdayYear(): number {
  let nowyear = new Date();
  let birthYear: number = nowyear.getFullYear()  - this.year;

  if (nowyear.getMonth() <= 2 && nowyear.getDate() < 27) {
    birthYear = birthYear - 1;
  } else {
    birthYear = birthYear;
  }
    return birthYear;
}

getAge(): number{
  let age = this.getBirthdayYear();
    return age;
}


}