
const initialState = [
	{
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: true
	}
]
const ADDTODO = "app/todos/ADDTODO"
const DELTODO = "app/todos/DELTODO"
const FINTODO = "app/todos/FINTODO"
const FIXTODO = "app/todos/FIXTODO"

export const delTodo =(payload) =>{
  return{
    type : DELTODO,
    payload: payload
  }
}

export const addtodo = (payload) =>{
  return{
    type: ADDTODO,
    payload: payload,
  };
}

export const finTodo = (payload) =>{
  return{
    type: FINTODO,
    payload: payload,
  }
}

export const fixTodo = (payload, updates) => {
  return {
    type: FIXTODO,
    payload: payload, //item
    updates:updates

  }
}

const todos = (state = initialState, action)=> {
  switch(action.type){
    case ADDTODO : 
    const max= state.length-1
    const maxId = state[max]
    const id = maxId.id
    const newTodo = {
      id: id,
      title: action.payload.title,
      body: action.payload.body,
      isDone: false
    }
    return [...state, newTodo]

    case DELTODO : 
      const delState = state.filter((item)=>item.id !== action.payload.id)
    return state = delState

    case FINTODO : 
      const finState = state.map((item) => item.id === action.payload.id?{...item,isDone:!action.payload.isDone}:item)
      return state = finState

    case FIXTODO :
      // 아이디값이 같은 애를 찾아서, 그친구의 인덱스를 찾아. ==> findIndex
      // 그 인덱스로부터 1개를 삭제하고 바뀐내용이 담긴 배열 ? 을 추가해준다 ==> splice
      const changeId = action.payload.id
      const fixStateIndex = state.findIndex((item)=> item.id === changeId)
      const newTodos =[...state]
      newTodos.splice(fixStateIndex, 1,{
        id: changeId,
        title: action.updates.editTitle,
        body: action.updates.editBody,
        isDone:action.payload.isDone
      })
      return newTodos;

    default:
      return state;
}
};
export default todos;

