let user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Guillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer',
};

function logWelcomeUser(welcomeString) {
  return console.log(
    `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
  );
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Hello');
