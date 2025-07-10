export const fetchNumber = async () => {
    try {
        const response = await fetch('http://numbersapi.com');
        const data = await response.text();
        const numberRegex = /\d+/;
        const extractedNumber = data.match(numberRegex)[0].substring(0, 3);
        return extractedNumber;
    } catch (error) {
        console.error('Error fetching number:', error);
    }
};
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
document.getElementById('day').innerHTML = day;
document.getElementById('month').innerHTML = month;
document.getElementById('year').innerHTML = year;


const fetchFactAndUpdate = async (number, targetElementId) => {
try {
    const response = await fetch(`http://numbersapi.com/${number}`);
    const data = await response.text();
    document.getElementById(targetElementId).innerText = data;
} catch (error) {
    console.error('Error fetching data:', error);
}
};

const updateValues = async () => {
const todayDate = new Date();
const currentDay = todayDate.getDate();
const currentMonth = todayDate.getMonth() + 1;
const currentYear = todayDate.getFullYear();

document.getElementById('yearCopy').innerText = currentYear;
await fetchFactAndUpdate(currentMonth, 'monthText');
await fetchFactAndUpdate(currentDay, 'dayText');
await fetchFactAndUpdate(currentYear, 'yearText');
};

window.onload = updateValues;