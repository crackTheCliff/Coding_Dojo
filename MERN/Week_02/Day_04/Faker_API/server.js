const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express()
const port = 8000;


class User {
    constructor(){
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.number()
        this.lastName = faker.name.lastName() 
        this.firstName = faker.name.firstName() 
        this._id = faker.database.mongodbObjectId()
    }
}

class Company {
    constructor(){
        this._id = faker.database.mongodbObjectId()
        this.name = faker.company.name()
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}


app.get("/api/user/new", (req, res) => {
    res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});

app.get("/api/user/company", (req, res) => {
    res.json( {user : new User(), company : new Company()} );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );