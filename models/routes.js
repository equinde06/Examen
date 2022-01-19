const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://equinde:equinde@station.pmw4u.mongodb.net/estaciones?retryWrites=true&w=majority', {
    useNewUrlParser: true,
},

(err) => {
    if (!err) {
        console.log('Connection suceeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./routes.model');

