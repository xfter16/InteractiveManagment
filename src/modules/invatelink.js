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
                    firstName: user.firstName,
                    lastName: user.lastName
                });
                // res.send(user);
                db.close();
            });
        });
    });
}
module.exports = invateLink;