import { PROJECT_ADDED , PROJECT_REMOVED } from "./actionTypes";

let projectLastId = 0

export function projectsReducer (state = [], action) {
    switch (action.type) {
        case PROJECT_ADDED:
            return [
                ...state,
                {
                    projectId: ++projectLastId,
                    description: action.payload.description,
                }
            ];
        case PROJECT_REMOVED:
            return state.filter(project => project.projectId !== action.payload.projectId)
        default:
            return state
    }
}