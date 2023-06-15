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

export const isPasswordSame = ({ password, confirmPassword }) => {
  return password === confirmPassword;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Format date as 'YYYY-MM-DD'
};
