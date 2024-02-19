import {v4 as uuid} from 'uuid'


const INITIAL_STATE = {
    tasks:[
        {
            id:uuid(),name:'read',date:'11-26-2023',completed:false , isActive: false
        },

        {
            id:uuid(),name:'codage',date:'11-26-2023',completed:false ,isActive: false
        }
    ]
};

export default function ReducerTask(state=INITIAL_STATE,action) {

    switch (action.type) {
        case 'add':
            const newTask = {
            id: action.payload.id,
            name: action.payload.name,
            date: action.payload.date,
            completed: false
        };

    return { tasks: [...state.tasks, newTask] };

        case 'del' :
            let delTasks = state.tasks.filter((t)=>{
                return t.id != action.payload
            })
            return {tasks:delTasks}

        case 'done' : 
            const doneTasks = state.tasks.map((t) => {
                if(t.id === action.payload){
                    return {...t,completed : !t.completed}
                }
                return t;
            })
            return {tasks:doneTasks}

           

        default : 
            return state;
    }
 
}
