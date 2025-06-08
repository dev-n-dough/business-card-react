const z = require("zod");

const createCard = z.object({
    username : z.string(),
    description : z.string(),
    linkedin : z.string(),
    twitter : z.string(),
    interests : z.string()
});

const updateCard = z.object({
    id : z.string(),
    username : z.string().optional(),
    description : z.string().optional(),
    linkedin : z.string().optional(),
    twitter : z.string().optional(),
    interests : z.string().optional()
});

const deleteCard = z.object({
    id : z.string()
});

module.exports = {
    createCard,
    updateCard,
    deleteCard
};