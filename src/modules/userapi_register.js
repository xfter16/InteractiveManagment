/* 
User
**  id
**  firstName
**  lastName
**  birthday
**  phone
**  address
*/

var userapi = function(app, bodyParser, mongoClient, objectId) {

    var jsonParser = bodyParser.json();
    var url = "mongodb://localhost:27017/usersdb";

    var jsonParser = bodyParser.json();

    //FIND ALL
    app.get("/api/users", function(req, res) {

        mongoClient.connect(url, function(err, db) {
            db.collection("users").find({}).toArray(function(err, users) {
                res.send(users)
                db.close();
            });
        });
    });

    //FIND ONE BY ID
    app.get("/api/users/:id", function(req, res) {

        var id = new objectId(req.params.id);

        mongoClient.connect(url, function(err, db) {
            db.collection("users").findOne({
                _id: id
            }, function(err, user) {

                if (err) return res.status(400).send();

                res.send(user);
                db.close();
            });
        });
    });

    //INSERT
    app.post("/api/users", jsonParser, function(req, res) {

        console.log('======================================= \n POST ')

        if (!req.body) return res.sendStatus(400);
        console.log('req.body: ')
        console.log(req.body);

        var u1 = new User(req.body.firstName, req.body.lastName, req.body.birthday, req.body.phone, req.body.address, req.body.role);
        

        mongoClient.connect(url, function(err, db) {
            db.collection("users").insertOne(u1, function(err, result) {

                if (err) return res.status(400).send();
                console.log('u1: ')
                console.log(u1.firstName);
                res.send(u1);
                db.close();
                console.log(`INSERT user: { \n ${u1.getInfo()} \n } \n OK`);
                console.log('=======================================');
            });
        });
        
    });

    //DELETE
    app.delete("/api/users/:id", function(req, res) {

        var id = new objectId(req.params.id);
        mongoClient.connect(url, function(err, db) {
            db.collection("users").findOneAndDelete({
                _id: id
            }, function(err, result) {

                if (err) return res.status(400).send();

                var user = result.value;
                res.send(user);
                db.close();
            });
        });
    });

    //UPDATE
    app.put("/api/users", jsonParser, function(req, res) {
        console.log('=======================================\n PUT  ')

        if (!req.body) return res.sendStatus(400);
        var id = new objectId(req.body.id);
        var u1 = new User(req.body.firstName, req.body.lastName, req.body.birthday, req.body.phone, req.body.address, req.body.role);

        mongoClient.connect(url, function(err, db) {
            db.collection("users").findOneAndUpdate({
                _id: id
            }, {
                $set: {
                    firstName: u1.FirstName(),
                    lastName: u1.LastName(),
                    birthday: u1.Birthday(),
                    phone: u1.Phone(),
                    address: u1.Address(),
                    role: u1.Role()
                }
            }, {
                returnOriginal: false
            }, function(err, result) {

                if (err) return res.status(400).send();

                var user = result.value;
                res.send(user);
                db.close();
            });
        });
        console.log(`UPDATE user { \n ${u1.getInfo()}\n} \n OK`);
        console.log('=======================================')
    });

    function User(firstName, lastName, birthday, phone, address, role) {

        // this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.phone = phone;
        this.address = address;
        this.role = role;
        this.getInfo = function() {
            return `
            firstName: ${firstName} \n    
            lastName: ${lastName} \n    
            birthday: ${birthday} \n    
            phone: ${phone} \n 
            address: ${address} \n 
            role: ${role}`
        }

        this.FirstName = function(name) {
            if (!arguments.length) return firstName;
            firstName = name;
        }
        this.LastName = function(name) {
            if (!arguments.length) return lastName;
            lastName = name;
        }
        this.Birthday = function(date) {
            if (!arguments.length) return birthday;
            birthday = date;
        }
        this.Phone = function(number) {
            if (!arguments.length) return phone;
            phone = number;
        }
        this.Address = function(adrs) {
            if (!arguments.length) return address;
            address = adrs;
        }
        this.Role = function(val) {
            if (!arguments.length) return role;
            role = val;
        }
    }
}
module.exports = userapi;