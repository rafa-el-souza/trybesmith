export default {
  newUserQuery: `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES(?, ?, ?, ?);
  `,
  loginQuery: `
    SELECT id, username
    FROM Trybesmith.Users
      WHERE username = ? AND password = ?;
  `,
  createProductQuery: `
    INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?);
  `,
};