import './styles.css';
import { add } from './math';

const submitButton = document.getElementById('sum') as HTMLButtonElement;
const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const answer = document.getElementById('answer') as HTMLSpanElement;

submitButton.addEventListener('click', () => {
    const sum = add(num1.valueAsNumber, num2.valueAsNumber);
    answer.innerText = sum.toString();
});
