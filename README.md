GET 
http://localhost:7999/rest/foods
GET BY ID 
http://localhost:7999/rest/foods/100
POST
http://localhost:7999/rest/foods
PUT
http://localhost:7999/rest/foods

DELETE BY ID
http://localhost:7999/rest/foods/100

---
[
    {
        "id": 100,
        "title": "Ceviche",
        "description": "Ceviche de concha negra",
        "coverPhotoURL": "https://t1.rg.ltmcdn.com/es/images/7/4/1/ceviche_peruano_18147_600_square.jpg",
        "price": 12.99,
        "type": "Almuerzo"
    },
    {
        "id": 101,
        "title": "Chaufa",
        "description": "Ceviche de cecina",
        "coverPhotoURL": "https://img-global.cpcdn.com/recipes/c7130aa1a17e8912/751x532cq70/arroz-chaufa-con-cecina-foto-principal.jpg",
        "price": 14.99,
        "type": "Almuerzo"
    },
    {
        "id": 102,
        "title": "Lomo",
        "description": "Lomo de Carne",
        "coverPhotoURL": "https://t2.rg.ltmcdn.com/es/images/5/7/4/lomo_saltado_peruano_11475_orig.jpg",
        "price": 20.5,
        "type": "Almuerzo"
    },
    {
    "id": 103,
    "title": "Jugo",
    "description": "Jugo de Fresa",
    "coverPhotoURL": "https://t2.uc.ltmcdn.com/images/8/2/8/img_como_hacer_jugo_de_fresa_28828_600_square.jpg",
    "price": 4.5,
    "type": "Desayuno"
}
]