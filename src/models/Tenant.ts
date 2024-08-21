import { Schema, model, models } from "mongoose";

const TenantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    domain: {
        type: String,
        required: true,
        unique: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now,
    },
});

TenantSchema.pre('save', function (next) {
    this.updateAt = new Date();
    next();
});

export default models.Tenant || model('tenants', TenantSchema);