const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// /api/thoughts/:thoughtId
router
.route('/thoughts/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// /api/thoughts/<thoughtId>/reactions
router
  .route('/thoughts/:thoughtId/reactions')
  .put(addReaction)
  .delete(removeReaction);


module.exports = router;