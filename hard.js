
let id = Symbol('id'); // символы всегда уникальны, даже если их имена совпадают.
let user = {
    tshort: 'black',
    snikers: 'nike',
    name: 'keker',
    number: 9007199254740991,
    alco(){
        console.log('obj_user_function');
    },
    [id]: 'ss345klkLL55lyy12',
}

// user.alco();

const bigInt = 1234567890123456789012345678901234567890n;



function getUser(obj){
    for (let x in obj) {
        let name = document.querySelector('.nameHTML');
        let tshort = document.querySelector('.torsHTML');
        let snikers = document.querySelector('.snikersHTML');


        name.innerHTML = `<p>${obj.name}</p>`;
        tshort.innerHTML = `<p>${obj.tshort}</p>`;
        snikers.innerHTML = `<p>${obj.snikers}</p>`;
    }
}

getUser(user);




function parallax() {
  let container = document.querySelector(".air");
  document.addEventListener("mousemove", function (e) { MoveBackground(e); });
  function MoveBackground(e){
      let lookX = e.clientX;
      let lookY = e.clientY;
      let looker = document.querySelector(".clientX");
      let lookerT = document.querySelector(".clientY");

      looker.innerHTML = `<p>${lookX}</p>`;
      lookerT.innerHTML = `<p>${lookY}</p>`;


     let offsetXX = `${(e.clientX / 30) + 150}vh`;
     let offsetYY = `${(e.clientY / 100) + 20}vh`;
     let offLookOne = document.querySelector(".offsetX");
     let offLookTwo = document.querySelector(".offsetY");
     offLookOne.innerHTML = `<p>${offsetXX}</p>`;
     offLookTwo.innerHTML = `<p>${offsetYY}</p>`;


     container.style.left = offsetXX;
     container.style.top = offsetYY;
  }
}

function parallax2() {
  let elem = document.querySelector('.num2');
  document.addEventListener("mousemove", function (e) {move(e); });
  function move(e) {
    let offsetXX = `${(e.clientX / 90) + 120}vh`;
    let offsetYY = `${(e.clientY / 120) + 20}vh`;

    elem.style.left = offsetXX;
    elem.style.top = offsetYY;
  }
}


function parallax3() {
  let elem = document.querySelector('.num3');
  document.addEventListener("mousemove", function (e) {move(e); });
  function move(e) {
    let offsetXX = `${(e.clientX / 150) + 150}vh`;
    let offsetYY = `${(e.clientY / 70) + 50}vh`;

    elem.style.left = offsetXX;
    elem.style.top = offsetYY;
  }
}


function parallax4() {
  let elem = document.querySelector('.num4');
  document.addEventListener("mousemove", function (e) {move(e); });
  function move(e) {
    let offsetXX = `${(e.clientX / 100) + 120}vh`;
    let offsetYY = `${(e.clientY / 150) + 50}vh`;

    elem.style.left = offsetXX;
    elem.style.top = offsetYY;
  }
}



parallax();
parallax2();
parallax3();
parallax4();
































function alerter(){
    let alrt = confirm('go game?');
    (alrt === true)?
        console.log('yep!'):
    (alrt === false)?
      console.log('nop!'):
    alert('ohh shit!');
}


let baba = {
    f:10,
    h:15,
}
let summ = 0;
function anan(obj){
    for(let pump in obj){
        summ += obj[pump];
    }
    console.log(summ);
}
// anan(baba);


function umno(obj) {
    for(let pump in obj){
        if (typeof obj[pump] === 'number'){
            obj[pump] *= 2;
        }
    }
}

umno(baba);

let kalkulatorBox = {
    qq(){
        let ravno = this.one + this.two;
        console.log(ravno);
    },
    qqw(){
        let ravno = this.one * this.two;
        console.log(ravno);
    },
}

function kalkulator(obj){
    let fish = confirm('go two game?');
    if (fish === true){
        let x = +prompt('enter first');
        let y = +prompt('enter second');
        obj.one = x;
        obj.two = y;
        obj.qq();
        obj.qqw();
    }
}

// kalkulator(kalkulatorBox);
