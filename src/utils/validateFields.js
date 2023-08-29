export const validate = (email, password) => {
  const validEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const validPass =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/.test(
      password
    );
  if (!validEmail) return "email not valid";
  if (!validPass) return "not valid password";

  return null;
};
