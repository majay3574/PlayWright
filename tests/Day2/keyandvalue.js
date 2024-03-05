var _a;
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Editor"] = "Editor";
    Roles["Viewer"] = "Viewer";
})(Roles || (Roles = {}));
var rolePermissions = (_a = {},
    _a[Roles.Admin] = {
        create: true,
        edit: true,
        delete: true
    },
    _a[Roles.Editor] = {
        create: false,
        edit: true,
        delete: false
    },
    _a[Roles.Viewer] = {
        create: false,
        edit: false,
        delete: false
    },
    _a);
function hasPermission(role, permission) {
    var permissions = rolePermissions[role];
    if (!permissions)
        return false; // Role not found
    return !!permissions[permission]; // Convert undefined to false
}
// Test cases
console.log("Admin can delete:", hasPermission(Roles.Admin, 'delete')); // Should return true
console.log("Editor can delete:", hasPermission(Roles.Editor, 'delete')); // Should return false
console.log("Viewer can edit:", hasPermission(Roles.Viewer, 'edit')); // Should return false
console.log("Viewer can view:", hasPermission(Roles.Viewer, 'view')); // Should return false
