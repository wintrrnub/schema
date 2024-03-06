** env_guide **

PORT= 8000

DATABASE_URL="mysql://root:@localhost:3306/jirasak_back"

JWT_SECRET=leokungYT

---

** api_service **

method path authen params body

POST /auth/register 0 none {username, password, confirmPassword, email}
POST /auth/login 0 none {username, password}
GET /auth/me 1 none none
GET /recordINs 1 none none


<!-- service : getAllDuplicate
method : GET
path : /todos/get-duplicate?title=learn
authen : true
params : none
query : title=xxxx
body : none
response : { id, title, status, du.....} -->

---

Notes

MVC (Models, route+Controller, View)
