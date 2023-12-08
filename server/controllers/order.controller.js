const Order = require('../models/order');

module.exports.addOrder = async (req, res, next) => {
    const order = await Order.create({
        orderName: req.body.orderName,
        price: req.body.price,
        quantity: req.body.quantity,
    });

    res.status(201).json({
        status: 'success',
        data: {
            order,
        },
    });
};

module.exports.getAllOrders = async (req, res, next) => {
    const orders = await Order.find();
    if (!orders.length) {
        return res.status(404).json({
            status: 'success',
            message: 'No orders found',
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            orders,
        },
    });
};

module.exports.getOrderById = async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return res.status(404).json({
            status: 'success',
            message: 'No order found',
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            order,
        },
    });
};

module.exports.updateOrderById = async (req, res, next) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!order) {
        return res.status(404).json({
            status: 'success',
            message: 'No order found',
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            order,
        },
    });
};

module.exports.deleteOrderById = async (req, res, next) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
        return res.status(404).json({
            status: 'success',
            message: 'No order found',
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            order,
        },
    });
};
