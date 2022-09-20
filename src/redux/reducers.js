    const contacts={
      items: [
        { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
        { id: 2, name: 'Hermione Kline', number: '443-89-12' },
        { id: 3, name: 'Eden Clements', number: '645-17-79' },
        { id: 4, name: 'Annie Copeland', number: '227-91-26' }],
        filter:null
    } ,
    



  reducer=(oldState = contacts, action)=>{
    switch(action.type){
            case 'ADD_CONTACT':
             return  {...oldState, items: [...oldState.items, action.payload]}
             
             case 'REMOVE_CONTACT':
                return {...oldState, items:[...oldState.items.filter(item => item.id !== action.payload)]}
                case 'FILTER':
                  return  {...oldState, filter:  action.payload}
                  
        default:
            return oldState;
    }
}



export default reducer;