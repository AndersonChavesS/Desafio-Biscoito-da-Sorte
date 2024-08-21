const cookie = document.querySelector('.cookie');
const home = document.querySelector('.home');
const luck = document.querySelector('.luck');
const openCookie = document.querySelector('#open-cookie');
const message = document.querySelector('#message');

const messages = [
  {
    message:
      'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  },
  { message: 'Procure acender uma vela em vez de amaldiçoar a escuridão' },
  {
    message:
      'A vida é um eco. Se você não está gostando do que está recebendo, observe o que está emitindo.',
  },
  {
    message:
      'A vida é como andar de bicicleta. Para ter equilíbrio, você tem que se manter em movimento.',
  },
  {
    message: 'Sonhos são caminhos construídos pelo coração',
  },
  {
    message:
      'Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.',
  },
];

cookie.addEventListener('click', handleClickCookie);
openCookie.addEventListener('click', toggleScreen);
// funções
function toggleScreen() {
  home.classList.toggle('hide');
  luck.classList.toggle('hide');
}

function handleClickCookie() {
  const randomMessage = Math.floor(Math.random() * messages.length);
  message.innerHTML = messages[randomMessage].message;
  toggleScreen();
}
