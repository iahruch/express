const { saveData } = require('./../repositories/user.repository');

const getName = (user) => {
    if (user) {
      return user.name;
    } else {
      return null;
    }
  };
  
  const saveName = (user) => {
    if (user) {
      return getName(user);
    } else {
      return null;
    }
  };
  
  module.exports = {
    getName,
    saveName
  };