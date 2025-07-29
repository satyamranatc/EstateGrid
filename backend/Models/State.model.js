import mongoose from "mongoose";

let stateSchema = new mongoose.Schema({

    statePoster: {
        type: String,
        required: true
    },
    stateName: {
        type: String,
        required: true
    },

    stateCode: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

});

export default mongoose.model("StateModel",stateSchema);