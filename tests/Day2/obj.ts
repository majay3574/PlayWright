enum Role {
    Admin = 'ADMIN',
    Editor = 'EDITOR',
    Viewer = 'VIEWER'
}

const rolePermissions = {
    [Role.Admin]: {
        create: true,
        edit: true,
        delete: false,
        view: true
    },
    [Role.Editor]: {
        edit: true,
        view: true
    },
    [Role.Viewer]: { view: true }
};


function hasPermission(role: Role, permission: string): boolean {
    const permissions = rolePermissions[role];
    return permissions[permission] === true;
}


console.log(`Admin has delete permission: ${hasPermission(Role.Admin, 'delete')}`);
console.log(`Editor has create permission: ${hasPermission(Role.Editor, 'create')}`);
console.log(`Viewer has view permission: ${hasPermission(Role.Viewer, 'view')}`);