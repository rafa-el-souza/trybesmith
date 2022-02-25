export default {
  newUserQuery: `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES(?, ?, ?, ?);
  `,
};