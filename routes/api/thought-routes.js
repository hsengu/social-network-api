const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Routes for getting all thoughts and creating a thought
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// Routes for getting thought by ID, updating thought, and deleting thought
router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Route for creating a reaction
router.route('/:id/reactions')
    .post(createReaction);

// Route for deleting a reaction
router.route('/:id/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;