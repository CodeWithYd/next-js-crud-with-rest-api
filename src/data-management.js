export let users = [
    {
        id: '1',
        userName: 'user1'
    },
     {
        id: '2',
        userName: 'user2'
    }
]

export const addUser = (userInfo) =>{
    users.push(userInfo)
}

export const updateUser  = ({id, userName}) => {
  const currUser = users.find(i=> i.id === id);
    if(currUser){
        currUser.userName = userName;
    } else {
        throw new Error('No User Found.')
    }
}

export const deleteUser  = (id) => {
    const newUserList = users.filter(i=> i.id !== id);

    if(newUserList){
        users = newUserList;
    } else {
        throw new Error('No User Found.')
    }
}