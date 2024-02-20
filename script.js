const container = document.querySelector('.container');
// console.log(container);
// container.addEventListener('click', (e) => {
//   console.log(e.target);
//   if (e.target.classList.contains('decrease')) {
//     console.log('time to decrease');
//     const span = e.target.nextElementSibling;
//     let amount = Number(span.textContent);
//     span.textContent = amount - 1;
//   } else if (e.target.classList.contains('increase')) {
//     console.log('time to increase');
//     const span = e.target.previousElementSibling;
//     let amount = Number(span.textContent);
//     span.textContent = amount + 1;
//   }
// });

const data = [
  {
    title: 'Blaziken',
    image: './images/Blaziken.jpg',
    stamina: 5,
    defense: 2,
    attack: 2,
    remaining: 1,
  },
  {
    title: 'Charizard',
    image: './images/Charizard.jpg',
    stamina: 2,
    defense: 3,
    attack: 3,
    remaining: 2,
  },
  {
    title: 'Garchomp',
    image: './images/Garchomp.jpg',
    stamina: 1,
    defense: 1,
    attack: 8,
    remaining: 0,
  },
];

function renderCards() {
  //   const card = `
  //     <div class="pokemon-card">
  //         <h1>Blaziken</h1>
  //         <div>
  //           <img src="./images/Blaziken.jpg" alt="image" />
  //         </div>
  //         <div class="stats">
  //           <div class="stat">
  //             <p>Stamina:</p>
  //             <button class="decrease">-</button>
  //             <span id="stamina">1</span>
  //             <button class="increase">+</button>
  //           </div>
  //           <div class="stat">
  //             <p>Defense:</p>
  //             <button class="decrease">-</button>
  //             <span id="defense">1</span>
  //             <button class="increase">+</button>
  //           </div>
  //           <div class="stat">
  //             <p>Attack:</p>
  //             <button class="decrease">-</button>
  //             <span id="attack">1</span>
  //             <button class="increase">+</button>
  //           </div>
  //         </div>
  //         <p>Remaining Points: <span id="remaining-points">7</span></p>
  //       </div>
  //     `;

  const htmlArr = data.map(
    (item) => `
      <div class="pokemon-card">
        <h1>${item.title}</h1>
        <div>
          <img src="${item.image}" alt="image" />
        </div>
        <div class="stats">
          <div class="stat">
            <p>Stamina:</p>
            <button class="decrease stamina">-</button>
            <span id="stamina">${item.stamina}</span>
            <button class="increase stamina">+</button>
          </div>
          <div class="stat">
            <p>Defense:</p>
            <button class="decrease defense">-</button>
            <span id="defense">${item.defense}</span>
            <button class="increase defense">+</button>
          </div>
          <div class="stat">
            <p>Attack:</p>
            <button class="decrease attack">-</button>
            <span id="attack">${item.attack}</span>
            <button class="increase attack">+</button>
          </div>
        </div>
        <p>Remaining Points: <span id="remaining-points">${item.remaining}</span></p>
      </div>
`
  );

  container.innerHTML = htmlArr.join('');
}

container.addEventListener('click', (e) => {
  //   console.log(
  //     e.target.parentElement.parentElement.parentElement.firstElementChild
  //   );

  console.log(e.target.closest('.pokemon-card').firstElementChild);

  if (
    e.target.classList.contains('decrease') ||
    e.target.classList.contains('increase')
  ) {
    const title =
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .textContent;

    const index = data.findIndex((item) => item.title === title);
    console.log(index);

    const operation = e.target.classList.contains('decrease') ? -1 : 1;
    let field;
    if (e.target.classList.contains('stamina')) field = 'stamina';
    else if (e.target.classList.contains('defense')) field = 'defense';
    else field = 'attack';

    if (data[index].remaining > 0 || operation === 1) {
      data[index][field] = data[index][field] + operation;
      data[index].remaining = data[index].remaining - operation;
    } else {
      alert('No remaining points!');
    }

    renderCards();
  }
});

renderCards();
