## Laptop product nodejs with grpc

This project for training implementation remote procedure call framework with grpc. For focus GetAlllaptop, GetLaptopByID, and CreateLaptop

## Install

1. clone this project `git clone https://github.com/bimaagung/node-gprc-v2.git`
2. Install Package `npm install`
3. run terminal sever.js `node server.js`
4. call one api through terminal, example `node getAllLaptop.client.js` for call api all laptop

## API

### Create Laptop

Request

- change content :
  `const laptop = { merk: Mackbook, type: M1 Pro, price: 21000000, };`

- run terminal : `node createLaptop.client.js`

```
{
    "id":int,
    "merk":string,
    "type":string,
    "price":int
}
```

### Get All Laptop

Request

- run terminal : `node getAllLaptop.client.js`

```
{
    "laptops":
    [
        {
            "id":int,
            "merk":string,
            "type":string,
            "price":int
        }
    ]
}
```

### Get Laptop By Id

Request

- change laptop id : `let laptop_id = 1;`

- run terminal : `node getLaptopById.client.js`

```
{
    "id":int,
    "merk":string,
    "type":string,
    "price":int
}
```
