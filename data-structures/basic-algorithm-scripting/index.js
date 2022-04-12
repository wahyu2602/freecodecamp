// Cara Menemukan kata yang paling panjang dari sebuah kalimat -----------------
function findLongestWordLength(str) {
  let panjangKata = 0;
  let pecahanKalimat = str.split(' ');
  for (let i = 0; i < pecahanKalimat.length; i++) {
    if (pecahanKalimat[i].length > panjangKata) {
      str = pecahanKalimat[i];
      panjangKata = pecahanKalimat[i].length;
    }
  }
  return str.length;
}
let test = findLongestWordLength("The quick brown fox jumped over the lazy dog");
// console.log(test);


// Cara menemukan angka terbesar dari setiap sub-array -----------------------------
function largestOfFour(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const elementL = element.length;
    const hasil = element.sort((a, b) => a - b).slice(elementL - 1)
    for (let j = 0; j < hasil.length; j++) {
      const arrayHasil = hasil[j];
      data.push(arrayHasil)
    }
  }
  return data;
}
let b = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// console.log(b);


// Memeriksa apakah string diakhiri dengan string target yang diberikan ------------
function confirmEnding(str, target) {
  // return str.endsWith(target); use simple
  const strL = str.length;
  const targetL = target.length;
  const hasilStr = str.substring(strL - targetL);
  return hasilStr == target;
}
let c = confirmEnding("He has to give me a new name", "name");
// console.log(c);


// Mengulang string sebanyak data yang dikirim oleh argument -----------------------
function repeatStringNumTimes(str, num) {
  // return str.repeat(num); use simple
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push(str)
  }
  return data.join('');
}
let d = repeatStringNumTimes("abc", 3);
// console.log(d);


// Memberikan Truncate(memotong) kalimat yang panjang dengan '...' --------------
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}
let e = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// console.log(e);


// Menguji kebenaran argumen ----------------------------------------------------
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (func(num)) {
      return num
    }
  }
}
let f = findElement([1, 3, 5, 9], num => num % 2 === 0);
// console.log(f);


// Memeriksa nilai type data Bolean ------------------------------------------------
function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  } else {
    return false;
  }
}
let g = booWho(false);
// console.log(g);


// Mengembalikan setiap kata yang diawali dengan awalan kata huruf Besar -----------
function titleCase(str) {
  let kata = str.split(' ');
  let dataKata = [];
  for (let i = 0; i < kata.length; i++) {
    const perkata = kata[i];
    const perkataL = perkata.length;
    const kataDepan = perkata.slice(0, 1).toUpperCase();
    let hasilKata = kataDepan + perkata.slice(1, perkataL).toLowerCase();
    dataKata.push(hasilKata);
  }
  return dataKata.join(' ');
}
let h = titleCase("sHoRt AnD sToUt");
// console.log(h);


