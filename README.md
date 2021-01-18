GET 
http://localhost:7999/rest/foods?pageNumber=0&pageSize=5&sortBy=price&sortDir=asc
GET BY ID 
http://localhost:7999/rest/foods/id
POST
http://localhost:7999/rest/foods
PUT
http://localhost:7999/rest/foods
DELETE BY ID
http://localhost:7999/rest/foods/id

-------------------------------------------------
[
    {
        "id": 100,
        "title": "Chaufa",
        "description": "Chaufa Salvaje con Cecina",
        "coverPhotoURL": "https://t1.rg.ltmcdn.com/es/images/7/4/1/ceviche_peruano_18147_600_square.jpg",
        "price": 12.99,
        "type": "Almuerzo"
    }
]