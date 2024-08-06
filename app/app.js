const express = require("express");
const morgan = require("morgan");
const app = express();
// console.log(app)

//MiddleWare
app.use(morgan("dev"));

//Routes

//Admin Register
app.post("/api/v1/admins/register", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin has been registered'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});

//Admin Login
app.post("/api/v1/admins/login", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin has been login'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});
//Get All Admins
app.get("/api/v1/admins", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'All Admins'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});

//Get single Admin
app.get("/api/v1/admins/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Single Admins'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});

//Update Admin
app.put("/api/v1/admins/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin Updated'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});


//Delete Admin
app.delete("/api/v1/admins/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin Deleted'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});


//Admin Suspending Teacher
app.put("/api/v1/admins/suspend/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin Suspending Teacher'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});


//Admin Unsuspending Teacher
app.put("/api/v1/admins/unsuspend/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin Unsuspending Teacher'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});


//Admin Withdrawing Teacher
app.put("/api/v1/admins/withdraw/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin Withdraw Teacher'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});


//Admin Unwithdrawing Teacher
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin Unwithdraw Teacher'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});


//Admin publish exam results
app.put("/api/v1/admins/publish/exam/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin Publish Exam'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});

//Admin unpublish exam results
app.put("/api/v1/admins/unpublish/exam/:id", (req, res) => {
    try {
        res.status(201).json({
            status: 'success',
            data: 'Admin unpublish Exam'
        })
    } catch (error) {
        res.json({
            status: "Failed",
            error: error.message,
        });

    }
});






module.exports = app;