const API_BASE_URL = "http://localhost:5000/api"; // Backend URL

// User Signup
export const signupUser = async(userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Signup failed");
        }

        return await response.json();
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

// User Login
export const loginUser = async(userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Login failed");
        }

        return await response.json();
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

// OAuth Login (e.g., Google)
export const oauthLogin = async() => {
    try {
        const response = await fetch(`${API_BASE_URL}/oauth-login`, {
            method: "GET",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("OAuth login failed");
        }

        return await response.json();
    } catch (error) {
        console.error("Error with OAuth login:", error);
        throw error;
    }
};

// Add Task
export const addTask = async(taskData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/add-task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            throw new Error("Failed to add task");
        }

        return await response.json();
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
};