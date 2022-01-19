const mongoose = require('mongoose')

const md = "24 hours daily; pay lot"

var routerSchema = new mongoose.Schema({
    StationName:{type: String, required: ' This field is required',},
    
    
    
    
    
});

mongoose.model("Station", routerSchema);
