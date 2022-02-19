// Import stylesheets
import { Person } from './person';
import './style.css';
// Write TypeScript code!

let person = new Person('Renê', 'Silva', 'Pádua', '1984');

const appfullName: HTMLElement = document.getElementById('person.fullName');
appfullName.innerHTML = person.getFullName();

const appAge: HTMLElement = document.getElementById('person.age');
appAge.innerHTML = 'Idade: ' + person.getAge();
