import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    topic: String,
    liked: Boolean,
    handle: String,
    title: String,
    attachments: {
        image: String,
    },
    verified: Boolean,
    time: String,
    logoImage: String,
    avatarImage: String,
    tuits: Number,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number
    },
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});
export default schema;