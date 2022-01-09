let navList = document.querySelector("#nav-list");
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navList.style.boxShadow = `1px 1px 10px #D3D3D3`;
  }
  else {
    navList.style.boxShadow = `0px 0px`;
  }
});

const sections = ["intro", "overview", "experience", "awards", "contact"];
const nextSection = (currSection) => {
  const index = sections.findIndex(section => section === currSection);
  console.log(sections[index + 1])
  document.getElementById(sections[index + 1]).scrollIntoView();
}

const introNext = document.querySelector('#intro-next');
introNext.addEventListener('click', () => nextSection('intro'));

const overviewNext = document.querySelector('#overview-next');
overviewNext.addEventListener('click', () => nextSection('overview'));

const experienceNext = document.querySelector('#experience-next');
experienceNext.addEventListener('click', () => nextSection('experience'));

const awardsNext = document.querySelector('#awards-next');
awardsNext.addEventListener('click', () => nextSection('awards'));