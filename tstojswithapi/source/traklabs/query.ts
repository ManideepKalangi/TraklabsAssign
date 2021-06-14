const getAllUsers='SELECT * FROM users';
const getUserWithID='SELECT * FROM users WHERE id=$1'; //$1 for parameter/Arugument
const EmailCheck='SELECT u FROM users u WHERE u.uemail=$1';
const AddUser='INSERT INTO users (uname,upass,uemail,uphone,udob) VALUES ($1,$2,$3,$4,$5)';
const DeleteUser='DELETE FROM users WHERE id=$1';
const UpdateUserPass='UPDATE users SET upass=$1 WHERE id=$2';
module.exports={
    getAllUsers,
    getUserWithID,
    EmailCheck,
    AddUser,
    DeleteUser,
    UpdateUserPass,
}