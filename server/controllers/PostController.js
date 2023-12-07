const PostModel = require('../models/PostModel');

const getPost = async (req, res) => {
    try {
        const post = await PostModel.find();
        console.log('Demo Controller => getDemo: ' + post);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createPost = (req, res) => {
    try {
        const demoData = req.body;
        const demoModel = new PostModel(demoData);
        demoModel.save();
        res.status(200).json(demoData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updatePost = (req, res) => {
    try {
        const postDataUpdate = req.body;
        const postModelUpdate = PostModel.findOneAndUpdate(
            { _id: postDataUpdate._id },
            postDataUpdate,
            { new: true }
        );
        res.status(200).json(postModelUpdate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getPost, createPost, updatePost };
