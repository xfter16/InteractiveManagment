var invateLink = function(app, bodyParser, mongoClient, objectId) {
    app.get("/invate/:id", function(req, res) {
        var id = new objectId(req.params.id);
        // var id = req.params.id;
        var url = "mongodb://localhost:27017/usersdb";
        mongoClient.connect(url, function(err, db) {
            db.collection("users").findOne({
                _id: id
            }, function(err, user) {

                if (err) return res.status(400).send();

                res.render("invate.hbs", {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    birthday: user.birthday,
                    phone: user.phone, 
                    address: user.address,  
                    role: user.role
                });
                console.log(`
            firstName: ${user.firstName} \n    
            lastName: ${user.lastName} \n    
            birthday: ${user.birthday} \n    
            phone: ${user.phone} \n 
            address: ${user.address} \n 
            role: ${user.role}`);
                // res.send(user);
                db.close();
            });
        });
    });
}
module.exports = invateLink;