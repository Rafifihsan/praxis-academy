const day = 24*60*60*1000;
const july172014 = new Date(day * (10+10+10+10));
console.log(july172014);

const option = {year :'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',timeZoneNmae:'short'}
const americanDateTime = new Intl.DateTimeFormat(option).format;

console.log(americanDateTime(july172014));