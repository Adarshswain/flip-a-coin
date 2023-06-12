//let flip the coin we have svg image of head and tail and alerady styled it in css

const coin = document.querySelector("#coin");

const btn = document.querySelector("#flip-button");
console.log(btn);
const reset = document.querySelector("#reset-button");
console.log(reset);
//head and tail logic

let head = 0;
let tail = 0;

const flip = () => {
    coin.style.animation = "";
    const random_event = Math.floor(Math.random() *2);
      if(random_event)
      {
        coin.style.animation = "spin-heads 3s forwards";
            head++;
      }
      else{

        coin.style.animation = "spin-tails 3s forwards";
               tail++;
      }
    console.log(random_event);
}
// function updateStats(){
//   document.querySelector("#heads-count").textContent = `Heads: ${head}`;
//   document.querySelector("#tails-count").textContent = `Tails: ${tail}`;
// }

//btn logic
btn.addEventListener("click",flip);
//reset btn 
reset.addEventListener("click",() => {
    coin.style.animation = "";
    // head = 0;
    // tail =0 ;
    // updateStats();

})


