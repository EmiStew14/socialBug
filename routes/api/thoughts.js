const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts/
router
    .route('/thoughts')
    .get(getAllThoughts)
    .post(getThoughtById)
    .put()
    .delete()

// /api/thoughts/<pizzaId>
router.route('/:pizzaId').post(addThought);

// /api/thoughts/<pizzaId>/<thoughtId>
router
  .route('/:thoughtId/reactions')
  .put(addReaction)
  .delete(removeReaction);

// /api/Thoughts/<pizzaId>/<ThoughtId>/<ReactionId>
router.route('/:pizzaId/:ThoughtId/:ReactionId').delete(removeReaction);

module.exports = router;