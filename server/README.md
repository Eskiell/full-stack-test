# MyTapp



1. Run `npm i` command
2. Run `docker-compose up` command
3. Run `npm start` command

### API
```
Create user
POST http://localhost:3000/users
{
   "name":"MyTappName",
   "email":"teste@teste.com",
   "password":"teste@teste.com"
}
```

```
Update user
PUT http://localhost:3000/users  Authorization: Bearer <token>
{
   "name":"MyTappName",
   "email":"teste@teste.com",
   "password":"teste@teste.com"
}
```
```
Delete user
DELETE http://localhost:3000/users  Authorization: Bearer <token>
```

```
Login
POST http://localhost:3000/login 
{
   "email":"teste@teste.com",
   "password":"teste@teste.com"
}
```

```
Profile user
GET http://localhost:3000/users  Authorization: Bearer <token>
```
