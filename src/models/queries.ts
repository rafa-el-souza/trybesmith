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
  getAllProductsQuery: `
    SELECT id, name, amount
    FROM Trybesmith.Products;
  `,
  createOrderQuery: `
    INSERT INTO Trybesmith.Orders (userId)
    VALUES (?);
  `,
  updateProductQuery: `
    UPDATE Trybesmith.Products
    SET Products.orderId = ?
      WHERE Products.id = ?;
  `,
};