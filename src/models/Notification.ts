import { Schema, model, models } from "mongoose";

const NotificationSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

NotificationSchema.pre('save', function (next) {
    this.createdAt = new Date();
    next();
});

export default models.Notification || model('notifications', NotificationSchema);