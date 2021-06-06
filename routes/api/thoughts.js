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
    .route('/thoughts')
    .get(getAllThoughts)
    .post(addThought)
    .put(updateThought)
    .delete(removeThought);

// /api/thoughts/:thoughtId
router
.route('/thoughts/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// /api/thoughts/<thoughtId>/reactions
router
  .route('/:thoughtId/reactions')
  .put(addReaction)
  .delete(removeReaction);


module.exports = router;