export const getLogedInUser = (values, setUser, setShowApp) => {
  const { email, password, employeeID } = values;
  const date = new Date();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const year = date.getFullYear();

  const users = JSON.parse(localStorage.getItem("userData")) || [];
  const logedInUser = users.find(
    (user) =>
      user.email === email &&
      user.employeeID === employeeID &&
      user.password === password
  );

  if (logedInUser) {
    const logedInUserAndTheLoginTime = {
      ...logedInUser,
      logedInTime: `${day}/${month}/${year} ${hours}:${minutes}`,
    };

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(logedInUserAndTheLoginTime)
    );
    setUser(logedInUser);
    setShowApp(true);
  }
};
