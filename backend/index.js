const express = require("express");
const app = express();
app.listen(3000);
app.use(express.json());
const cors = require("cors");
const { createCard,updateCard,deleteCard } = require("./types");
const { Card } = require("./db");
app.use(cors());

app.post("/card",async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createCard.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Incorrect inputs sent"
        });
    };
    
    await Card.create({
        username : createPayload.username,
        description : createPayload.description,
        linkedin : createPayload.linkedin,
        twitter : createPayload.twitter,
        interests : createPayload.interests,
    })

    res.json({
        msg: "Card created!"
    });

})

app.get("/cards",async function(req,res){
    const cards = await Card.find();
    res.json({
        cards
    });
})

app.put("/update",async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateCard.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Incorrect inputs sent"
        });
    };

    // if you use ternary operators to do the following, it will error out
    const updateFields = {};
    if (updatePayload.username) updateFields.username = updatePayload.username;
    if (updatePayload.description) updateFields.description = updatePayload.description;
    if (updatePayload.linkedin) updateFields.linkedin = updatePayload.linkedin;
    if (updatePayload.twitter) updateFields.twitter = updatePayload.twitter;
    if (updatePayload.interests) updateFields.interests = updatePayload.interests;

    await Card.updateOne({
        _id : updatePayload.id
    },{
        $set: updateFields
    })

    res.json({
        msg: "Card updated successfully"
    });
})

app.delete("/delete",async function(req,res){
    const deletePayload = req.body;
    const parsedPayload = deleteCard.safeParse(deletePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Incorrect inputs sent"
        });
    };

    await Card.deleteOne({
        _id : deletePayload.id
    });

    res.json({
        msg: "Card deleted successfully"
    });
})