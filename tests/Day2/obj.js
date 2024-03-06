var _a;
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Editor"] = "EDITOR";
    Role["Viewer"] = "VIEWER";
})(Role || (Role = {}));
var rolePermissions = (_a = {},
    _a[Role.Admin] = { create: true, edit: true, delete: false, view: true },
    _a[Role.Editor] = { edit: true, view: true },
    _a[Role.Viewer] = { view: true },
    _a);
function hasPermission(role, permission) {
    var permissions = rolePermissions[role];
    return permissions[permission] === true;
}
console.log("Admin has delete permission: ".concat(hasPermission(Role.Admin, 'delete')));
console.log("Editor has create permission: ".concat(hasPermission(Role.Editor, 'create')));
console.log("Viewer has view permission: ".concat(hasPermission(Role.Viewer, 'view')));
