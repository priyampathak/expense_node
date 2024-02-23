const User = require('../models/users')

const userController = {
    getUsers: async (req, res)=>{
        try{
            const users = await User.find()
            res.json(users)
        } catch (error){
            console.error(error);
            res.status(500).json({ message: "Internal server error"});
        }
    },

    getUser: async (req, res)=>{
        try{
            const userId = req.params.id;
            const user = await User.findById(userId);
            if(!user) {
                return res.status(404).json({ message: 'User not found'});
            }
            res.json(user);
        }
        catch (error){
            console.error(error);
            res.status(500).json({ message: 'Internal server Error'})
        }
    },

    deleteUser: async (req, res)=>{
        try{
            const userId = req.params.id;
            const deleteUser = await User.findByIdAndDelete(userId);
            if(!deleteUser){
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' })
        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Internal server Error' });
        }
    },

    createUser: async (req, res) => {
        try {
            // Extract user data from request body
            const { first_name, last_name, goal, start_date } = req.body;
            // Create a new user instance
            const newUser = new User({
                first_name,
                last_name,
                goal,
                start_date
            });
            // Save the new user to the database
            const savedUser = await newUser.save();
            // Send the saved user as the response
            res.status(201).json(savedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const { first_name, last_name, goal, start_date } = req.body;

            // Find the user by ID and update their information
            const updatedUser = await User.findByIdAndUpdate(userId, {
                first_name,
                last_name,
                goal,
                start_date
            }, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server Error' });
        }
    },
    patchUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const updateFields = req.body;
    
            // Find the user by ID and update only specified fields
            const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true });
    
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server Error' });
        }
    }
};

module.exports = userController;