export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(user => {
        if (user[objPropName] === itemId.userId) {
            return {...user, ...newObjProps}
        }
        return user;
    })
};