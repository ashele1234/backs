"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    try {
        res.status(200).json({
            message: "Welcome to DB"
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error Occured",
            error: error.message
        });
    }
});
exports.default = router;
