import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    isReceived: {
        type: Boolean,
        require: [true, 'Must provide if message is or not received']
    },
    content:{
        type: Object,
        required: [true,'Message requires content']
    }
}, { timestamps: { createdAt: true, updatedAt: false } , versionKey: false , id: true, 
    toJSON: { 
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    }
})

export default mongoose.model('Message', messageSchema)