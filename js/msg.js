const bgPics = [];
for (let i = 83; i >= 1; i--) {
  bgPics.push(`${i}.jpg`);
}

const randomIndex = Math.floor(Math.random() * bgPics.length);
const randomBg = bgPics[randomIndex];

const msgPage = document.querySelector('.msg-page');
msgPage.style.background = `url(../images/${randomBg})`;
msgPage.style.backgroundPosition = `center`;
msgPage.style.backgroundRepeat = `no-repeat`;
msgPage.style.backgroundSize = `cover`;


msgPage.addEventListener('dblclick', () => {
    const randomIndex = Math.floor(Math.random() * bgPics.length);
    const randomBg = bgPics[randomIndex];
    msgPage.style.background = `url(../images/${randomBg})`; 
    msgPage.style.backgroundPosition = `center`;
    msgPage.style.backgroundRepeat = `no-repeat`;
    msgPage.style.backgroundSize = `cover`;
})



const bgColors = ['#EAE7DC', '#5CDB95', '#333', '#907163', '#5D5C61', '#557A95', '#C2CAD0', '#FFB3FF'];


const container = document.querySelector('.container');
container.addEventListener('dblclick', (e) => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    const randomBg = bgColors[randomIndex];
    container.style.background = randomBg;


    switch (randomBg) {
        case '#8EE4AF':
        case '#C2CAD0':
        case '#EAE7DC':
        case '#5CDB95':
        case '#FFB3FF':
          container.style.color = `#000000`;
          break;
        case '#557A95':
        case '#333':
        case '#5D5C61':
        case '#907163':
          container.style.color = `#fff`;
          break;
        default:
          // code to be executed if randomBg is none of the above values
      }
      
    e.stopPropagation();
})
