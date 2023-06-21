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


// Slice(Mengiris) dan Splice(Menyampung) dalam array ----------------------------
function frankenSplice(arr1, arr2, n) {
  const dataArry = [];
  const awal = arr2.slice(0, n);
  const akhir = arr2.slice(n);
  for (let i = 0; i < awal.length; i++) {
    const eAwal = awal[i];
    dataArry.push(eAwal);
  }
  for (let i = 0; i < arr1.length; i++) {
    const arr = arr1[i];
    dataArry.push(arr);
  }
  for (let i = 0; i < akhir.length; i++) {
    const eAkhir = akhir[i];
    dataArry.push(eAkhir);
  }
  return dataArry;
}
let i = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
// console.log(i);


// Hanya mengembalikan nilai String dan Number ------------------------------------
function bouncer(arr) {
  const dataArr = []
  for (let i = 0; i < arr.length; i++) {
    const element1 = arr[i];
    if (typeof element1 === 'number' && element1 > 0 || typeof element1 === 'string' && element1 !== NaN && element1 !== "") {
      dataArr.push(element1);
    }
  }
  return dataArr;
}
let j = bouncer([null, NaN, 1, 2, undefined]);
// console.log(j);


// Mengembalikan indeks terendah di mana nilai ----------------------------------
function getIndexToIns(arr, num) {
  let hasil = [];
  const urutan = arr.sort((a, b) => a - b);
  const urutanL = urutan.length;
  urutan.forEach((element, i) => {
    if (element >= num) {
      hasil.push(i);
    }
  });
  if (num > urutan[urutanL - 1]) {
    return urutanL;
  }
  if (urutan.length === 0) {
    return 0;
  } else {
    return hasil[0];
  }
}
let k = getIndexToIns([10, 20, 30, 40, 50], 35);
// console.log(k);


// Mengembalikan nilai true atau false ----------------------------------------
function mutation(arr) {
  const arr1 = arr[0].toLowerCase();
  const arr2 = arr[1].toLowerCase();
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0) return false;
  }
  return true;
}
let l = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// console.log(l);


// Membagi array (Chunky Monkey) --------------------------------------------
function chunkArrayInGroups(arr, size) {
  let array = [];
  let tambah = 0;
  for (let i = 0; i <= arr.length / size; i++) {
    tambah += size;
    let hasil = arr.slice(i * size, tambah);
    if (hasil.length !== 0) {
      array.push(hasil);
    }
  }
  return array;
}

let m = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// console.log(m);





// example coderbyte ----------------------
function StringChallenge(str) {

  // code goes here 
  let kata = str.split(/\*|\-|\s/);
  let dataKata = [];
  for (let i = 0; i < kata.length; i++) {
    const perkata = kata[i];
    const perkataL = perkata.length;
    const kataDepan = perkata.slice(0, 1).toUpperCase();
    let hasilKata = kataDepan + perkata.slice(1, perkataL).toLowerCase();
    console.log(perkata);
    dataKata.push(hasilKata);
  }
  return dataKata.join('');

}

// keep this function call here 
// console.log(StringChallenge("cats AND*Dogs-are Awesome"));


function ArrayChallenge(arr) {

  // code goes here 
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const elementOne = arr[i + 1];
    // console.log(element);
    // console.log(elementOne);
    if (elementOne < element) {
      console.log(element);
    }
    // console.log(element);
  }
  // return arr;

}
ArrayChallenge([14, 20, 4, 12, 5, 11]);

// keep this function call here 
// console.log(ArrayChallenge([10, 12, 4, 5, 9]));



// merubah nilai ke ribuan dengan koma
var numberString = '20000000'
var formattedNumber = parseFloat(numberString).toLocaleString('en')
console.log(formattedNumber)
