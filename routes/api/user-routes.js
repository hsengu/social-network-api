const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Routes for getting all users, and creating a user
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// Routes for getting a single user by ID, updating a user, and deleting a user
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Routes for adding a friend, and removing a friend
router.route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;