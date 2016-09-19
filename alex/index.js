var league_squadmates = document.querySelectorAll('.js-league__squadmates');
var league_squadinfo = document.querySelectorAll('.js-league__squadinfo-person');

for (let mates of league_squadmates) {
  mates.addEventListener('click', function() {
    const squadmate = this.dataset.squadmate;

    if (!this.classList.contains('active')) {
      for (let mate of league_squadmates) {
        mate.classList.remove('active');
      }
      for (let info of league_squadinfo) {
        info.classList.remove('active');
      }
      this.classList.add('active');
      document.querySelector('[data-squadinfo="' + squadmate + '"]').classList.add('active');
    }
  });
}