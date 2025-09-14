const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({

        name: { type: String, required: true },
        email: { type: String, required: true , unique : true },
        isActive: { type: Boolean, default: true }

})

const studentModel = mongoose.model("Student" , studentSchema)

module.exports = studentModel;