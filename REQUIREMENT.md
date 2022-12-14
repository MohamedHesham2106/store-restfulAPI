# API and Database Requirements

## API Endpoints

### Users

- Index - `token required`
  - HTTP [`GET`]
  - Endpoint `/store/users`
  - Req Body : `N/A`
  - Response Body : `Array of objects`
  ```bash
  {
      "id": 1,
      "email": "test2@test2.com",
      "username": "Mohamed Hesham",
      "firstname": "Mohamed",
      "lastname": "Hesham",
  }
  ```
- Show - `token required`
  - HTTP [`GET`]
  - Endpoint `/store/users/:id`
  - Req Body : `N/A`
  - Response Body : `User as an object`
  ```bash
  {
  "id": 1,
  "email": "test2@test2.com",
  "username": "MohamedHesham2",
  "firstname": "Mohamed",
  "lastname": "Hesham"
  }
  ```
- Create - `token required`

  - HTTP [`POST`]
  - Endpoint `/store/users`
  - Req Body :

  ```bash
  {
      "email":"test2@test1.com",
      "username":"MohamedHesham1",
      "firstname":"Mohamed1",
      "lastname":"Hesham1",
      "password":"password1"
  }
  ```

  - Response Body : `Token`

  ```bash
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3QyQHRlc3QxLmNvbSIsInVzZXJuYW1lIjoiTW9oYW1lZEhlc2hhbTEiLCJmaXJzdG5hbWUiOiJNb2hhbWVkMSIsImxhc3RuYW1lIjoiSGVzaGFtMSIsInBhc3N3b3JkIjoiJDJiJDEwJGJEZUl6TGJ1MFk0WVczZUUzWDRSMS53d2VQUWEzMHBCLnhHZHMyODVCUTVMSk5tdi53TloyIn0sImlhdCI6MTY2MTE2Nzg2Nn0.aydV2JLX270Yt5rESq_JbJOHBhUhL0_fWu6UjFgH2ZQ"

  ```

- Authentication
  - HTTP [`POST`]
  - Endpoint `/store/users/authenticate`
  - Req Body :
  ```bash
   {
       "username":"MohamedHesham1",
       "password":"password1"
   }
  ```
  - Response Body : `Token`
  ```bash
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3QyQHRlc3QxLmNvbSIsInVzZXJuYW1lIjoiTW9oYW1lZEhlc2hhbTEiLCJmaXJzdG5hbWUiOiJNb2hhbWVkMSIsImxhc3RuYW1lIjoiSGVzaGFtMSIsInBhc3N3b3JkIjoiJDJiJDEwJGJEZUl6TGJ1MFk0WVczZUUzWDRSMS53d2VQUWEzMHBCLnhHZHMyODVCUTVMSk5tdi53TloyIn0sImlhdCI6MTY2MTE2ODE2NH0.ipeIGA-X98PXYzOP3zx2ZLd0sbg8SUAWz1j-Q-m9K1Y"
  ```

### Products

- Index
  - HTTP [`GET`]
  - Endpoint `/store/products`
  - Req Body : `N/A`
  - Response Body : `Array of objects`
  ```bash
    [
        {
            "id": 1,
            "name": "product 1",
            "description": "desc",
            "price": 210,
            "category": "category 1"
        }
    ]
  ```
- Show

  - HTTP [`GET`]
  - Endpoint `/store/products/:id`
  - Req Body : `N/A`
  - Response Body : `Product Objects`

  ```bash
    {
        "id": 1,
        "name": "product 1",
        "description": "desc",
        "price": 210,
        "category": "category 1"
    }

  ```

- Create - `token required`

  - HTTP [`POST`]
  - Endpoint `/store/products`
  - Request Headers: `Authorization : Bearer [token required]`
  - Req Body :

  ```bash
    {
        "name":"product 1",
        "description":"desc",
        "price":210,
        "category":"category 1"
    }
  ```

  - Response Body : `User as an object`

  ```bash
     {
      "product": {
                "id": 1,
                "name": "product 1",
                "description": "desc",
                "price": 210,
                "category": "category 1"
            },
            "message": "Successfully created product 1"
     }
  ```

- Update - `token required`
  - HTTP [`PUT`]
  - Endpoint `/store/products/:id`
  - Req Body :
    ```bash
    {
        "name": "edited",
        "description": "edited",
        "price": 210,
        "category": "edited 1"
    }
    ```
  - Response Body : `Product Objects`

```bash
{
      "product": {
          "id": 1,
          "name": "edited 1",
          "description": "edited",
          "price": 210,
          "category": "edited 1"
      },
      "message": "Successfully updated edited 1"
  }
```

- Delete - `token required`
  - HTTP [`DELETE`]
  - Endpoint `/store/products/:id`
  - Req Body : `N/A`
  - Response Body : `Product Objects`

```bash
  {
      "product": {
          "id": 1,
          "name": "edited 1",
          "description": "edited",
          "price": 210,
          "category": "edited 1"
      },
      "message": "successfully removed edited 1"
  }
```

### Orders

- Create - `token required`
  - HTTP [`POST`]
  - Endpoint `/store/orders`
  - Req Headers :`Authorization : Bearer [token required]`
  - Req Body :
    ```bash
      {
      "quantity":5,
      "productId":1
      }
    ```
  - Response Body : `Order Object`
    ```bash
          {
          "order": {
              "id": 1,
              "status": "active",
              "user_id": "1"
          },
          "message": "Created order successfully"
      }
    ```
- get Order By UserId - `token required`
  - HTTP [`GET`]
  - Endpoint `/store/orders`
  - Req Headers :`Authorization : Bearer [token required]`
  - Req Body : `N/A`
  - Response Body : `Order Object & Message`
    ```bash
          {
          "showOrder": [
              {
                  "id": 1,
                  "status": "active",
                  "user_id": "1"
              }
          ],
          "message": "Retrieved order successfully"
      }
    ```
- Add Product to Cart:
  - HTTP [`POST`]
  - Endpoint `/store/orders/:id/products`
  - Req Body :
    ```bash
      {
          "quantity":5,
          "productId":1
      }
    ```
  - Response Body : `Order Object`
    ```bash
      {
      "Order": {
          "id": 1,
          "order_id": "1",
          "product_id": "1",
          "quantity": 5
      },
      "message": "Successfully added product to the order"
     }
    ```

## Database Schema

# User Schema

```bash
  CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email varchar(100) unique NOT NULL,
  username varchar(100) NOT NULL,
  firstName varchar(100) NOT NULL,
  lastName varchar(100) NOT NULL,
  password varchar(255) NOT NULL
  );
```

# Product Schema

```bash
  CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  category VARCHAR(255) NOT NULL
  );
```

# Order Schema

```bash
  CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  status VARCHAR(50),
  user_id bigint REFERENCES users(id) NOT NULL
  );
```

# Order-Product Schema

```bash
  CREATE TABLE order_products(
  id SERIAL PRIMARY KEY,
  order_id bigint REFERENCES orders(id)  NOT NULL,
  product_id bigint REFERENCES products(id) NOT NULL,
  quantity INTEGER
  );
```

## Data (types) Shape

### User:

```bash
  type User = {
  id?: number;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  };
```

### Product:

```bash
  type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  category: string;
  };
```

### Order:

```bash
  type Order = {
  id?: number;
  status: string;
  user_id: number;
  };
```
