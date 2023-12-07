const DemoModel = require('../models/DemoModel');

const getDemo = async (req, res) => {
    try {
        const demo = await DemoModel.find();
        console.log('Demo Controller => getDemo: ' + demo);
        res.status(200).json(demo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postDemo = (req, res) => {
    try {
        const demoData = req.body;
        const demoModel = new DemoModel(demoData);
        demoModel.save();
        res.status(200).json(demo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDemo = (req, res) => {
    try {
        const demoDataUpdate = req.body;
        const demoModelUpdate = DemoModel.findOneAndUpdate(
            { _id: demoDataUpdate._id },
            demoDataUpdate,
            { new: true }
        );
        res.status(200).json(demoModelUpdate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getDemo, postDemo, updateDemo };
