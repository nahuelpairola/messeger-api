
import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    isFavourite: {
        type: Boolean,
        default: false,
    },
    customer:{
        type: Object,
        firstName: {
            type: String,
            require: [true,'must provide a first name'],
            trim: true,
            maxlength: [20, 'first name can not be more than 20 characters']
        },
        lastName: {
            type: String,
            require: [true,'must provide a last name'],
            trim: true,
            maxlength: [20, 'last name can not be more than 20 characters']
        },
        role: {
            type: String,
            enum: ['vip','regular'],
        }
    },
    messagesList : [ // ids array
        {
            type: mongoose.Types.ObjectId,
            ref: 'Message',
            required: false,
            default: null
        }
    ]
}, { timestamps: { createdAt: false, updatedAt: false } , versionKey: false , id: true, 
        toJSON: { 
            transform(doc, ret) {
                ret.id = ret._id
                delete ret._id
            }
        }
    })

export default mongoose.model('Chat',chatSchema)