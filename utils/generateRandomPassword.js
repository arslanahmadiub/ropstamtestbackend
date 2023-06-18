const generateRandomPassword = () => {
  const min = Math.pow(10, 9 - 1);
  const max = Math.pow(10, 9) - 1;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum.toString();
};

module.exports = generateRandomPassword;
