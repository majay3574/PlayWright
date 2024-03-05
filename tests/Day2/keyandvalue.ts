enum Roles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const rolePermissions = {
    [Roles.Admin]: {
        create: true,
        edit: true,
        delete: true
    },
    [Roles.Editor]: {
        create: false,
        edit: true,
        delete: false
    },
    [Roles.Viewer]: {
        create: false,
        edit: false,
        delete: false
    }
};

/* The reason for using role: 
Roles instead of role: 
Roles in the function signature hasPermission(role: Roles, permission: string) is 
primarily for clarity and consistency in your code.

Clarity: By using role: Roles, you explicitly state that the role parameter is expected to be of type Roles,
 which is the enum you've defined. 
 This makes it clear to anyone reading your code 
 that role should be one of the predefined roles (Admin, Editor, Viewer), and 
 TypeScript will enforce this type checking.

Consistency: Throughout your codebase, you've defined Roles as an enum to represent different roles. 
 By using role: Roles, you maintain consistency in your code by sticking to the same type definition.
 It also makes your code more predictable since developers working on the codebase would expect to see 
 the same type usage across functions and methods dealing with roles. */



function hasPermission(role: Roles, permission: string): any {
    const permissions = rolePermissions[role];
    if (!permissions) return false; // Role not found
    return !!permissions[permission]; // Convert undefined to false
}

// Test cases
console.log("Admin can delete:", hasPermission(Roles.Admin, 'delete')); // Should return true
console.log("Editor can delete:", hasPermission(Roles.Editor, 'delete')); // Should return false
console.log("Viewer can edit:", hasPermission(Roles.Viewer, 'edit')); // Should return false
console.log("Viewer can view:", hasPermission(Roles.Viewer, 'view')); // Should return false
