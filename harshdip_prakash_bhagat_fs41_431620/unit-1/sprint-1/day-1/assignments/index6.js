let generateMessage = (user) => {
    if (user.role === 'admin') {
        if (user.active) {
            return "Admin Access Granted!";
        } else {
            return "Admin Access Revoked";
        }
    } else if (user.role === 'user') {
        if (user.active) {
            return "User Access Granted!";
        } else {
            return "User Access Revoked";
        }
    } else {
        return "Access Denied";
    }
};
let user1 = { name: "Alice", role: "admin", active: false };
console.log(generateMessage(user1)); 
let user2 = { name: "Bob", role: "user", active: true };
console.log(generateMessage(user2)); 
let user3 = { name: "Charlie", role: "guest", active: true };
console.log(generateMessage(user3)); 