const express = require("express");
const router = express.Router();

const user = require("./users");
const board = require("./board");
const like = require("./like");
const message = require("./message");

router.use("./user", user);
router.use("./board", board);
router.use("./like", like);
router.use("./message", message);


router.get("/", (req,res) => {
    return res.status(200).send({
      test: "test",
    });

}); //localhost: 5000/api


module.exports = router;