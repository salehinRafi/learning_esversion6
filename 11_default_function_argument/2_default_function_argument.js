function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

// Default Function Argument
createAdminUser();

// 

const user = new User(generateId());
createAdminUser(user);