// ** CRUD **

// shows all restaurants
1.1 db.restaurants.find()

// shows all cuisine = asian
1.2 db.restaurants.find({cuisine: "asian"}) 

// shows all kosher restaurants
1.3 db.restaurants.find({kosher:true})

// shows all holon restaurans
1.4 db.restaurants.find({"address.city": "Holon"})

// shows all with specific address
1.5 db.restaurants.find({"address.city":"Holon","address.street":"Herzel 15"}) 

// shows value in array
1.6 db.restaurants.find({"address.coordinates": 40.6774}) 

// sort by a-z name order
1.7 db.restaurants.find().sort({name: 1}) 

// sort by a-z city order
1.8 db.restaurants.find().sort({"address.city": 1}) 

// update new name to "bombay"
1.9 db.restaurants.updateOne({name: "bombay"},{$set:{name:"bomba"}}) 

// push an object in review of bombay restaurant
1.10 db.restaurants.updateOne({name: "bombay"},{$push:{reviews: {date:"5-1-13", score:3}}}) 

// update all restaurant to kosher true
1.11 db.restaurants.updateMany({},{$set:{kosher:true}}) 

// delete "bombay" restaurant
1.12 db.restaurants.deleteOne({name:"bombay"}) 

// delete all restaurants
1.13 db.restaurants.deleteMany({})

// ** ForEach **

// print all restaurant names
2.1 db.restaurants.find().forEach(function(doc) {print("name: " + doc.name);})

// print all restaurant city
2.2 db.restaurants.find().forEach(function(doc) {print("city: " + doc.address.city)})

// print all restaurant coordinates
2.3 db.restaurants.find().forEach(function(doc) {print("coordinate: " + doc.address.coordinates)})

// ** Advanced Queries **

// shows all restaurant that name start with b
3.1 db.restaurants.find({name:{$regex: /^b/i}})

// count all restaurants
3.2 db.restaurants.countDocuments()

// 3.3 Write a MongoDb query to get restaurants that include reviews from a specific date.
3.3 db.restaurants.find({ "reviews.date": new Date("2020-01-01") });

// ** Aggregation Operations **

// 4.1 Write a mongoDb query to display all restaurants average score.
4.1 db.restaurants.aggregate([{ $group: { _id: "_id", $avg: "$reviews.score" } }]);

// 4.2 Write a mongoDb query to display a specific restaurant average score.
4.2 db.restaurants.aggregate([{$project: { avgScore: { $avg: "$reviews.score" },}, },]);