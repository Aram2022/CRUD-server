import User from "../models/userModel.js"; 

const UserService = {
  // Function for user registration
  async registerUser(userData) {
    try {
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw error;
    }
  },

  // Function for user login
  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("User not found");
      }

      // Check if the provided password matches the stored hashed password
      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      return user.toJSON();
    } catch (error) {
      throw error;
    }
  },

  // Function for retrieving user profile
  async getUserProfile(userId) {
    try {
      const user = await User.findById(userId);

      if (!user) {
        throw new Error("User not found");
      }

      return user.toJSON();
    } catch (error) {
      throw error;
    }
  },

  // Function for updating user profile
  async updateUserProfile(userId, updatedData) {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
        new: true, 
        runValidators: true, 
      });

      if (!updatedUser) {
        throw new Error("User not found");
      }

      return updatedUser.toJSON();
    } catch (error) {
      throw error;
    }
  },

  // Function for deleting user account
  async deleteUserAccount(userId) {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        throw new Error("User not found");
      }

      return { message: "User deleted successfully" };
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
