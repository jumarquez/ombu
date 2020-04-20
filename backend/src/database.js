const mongoose = require('mongoose');

mongoose.connect("http://root:<zaq>@cluster0-uoqxp.mongodb.net/test?retryWrites=true&w=majority")
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));