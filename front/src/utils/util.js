export const isNameValid = (name) => {
  return name.length >= 2;
};

export const isNickNameValid = (nickname) => {
  return nickname.length >= 2;
};

export const isIDVaild = (id) => {
  return id.length >= 4;
};

export const isPasswordValid = (password) => {
  return password.length >= 4;
};

export const isPasswordSame = ({password, confirmPassword}) => {
  return password === confirmPassword;
};