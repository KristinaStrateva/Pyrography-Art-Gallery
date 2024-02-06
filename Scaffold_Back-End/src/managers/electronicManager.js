const Electronic = require('../models/Electronic');

exports.getAllElectronics = async (name, type) => {
    let result = await Electronic.find().populate('owner').lean();

    if (name) {
        result = result.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (type) {
        result = result.filter(x => x.type.toLowerCase().includes(type.toLowerCase()));
    }

    return result;
};

exports.getElectronicById = (partId) => Electronic.findById(partId).populate('owner').populate('buyingList.user');

exports.create = (electronicData) => Electronic.create(electronicData);

exports.update = (partId, electronicData) => Electronic.findByIdAndUpdate(partId, electronicData);

exports.delete = (partId) => Electronic.findByIdAndDelete(partId);