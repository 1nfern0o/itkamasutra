export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProps: any) => {
    return items.map((user: any) => {
        if (user[objPropName] === itemId.userId) {
            return {...user, ...newObjProps}
        }
        return user;
    })
};