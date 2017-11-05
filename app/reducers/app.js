const app = (state, action)=>{
  switch(action.type){
    case 'LOGIN':
      state.push(action);
    default:
      return state;

  }
}

export default app;
