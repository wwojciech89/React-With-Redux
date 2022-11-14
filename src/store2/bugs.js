import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED, PROJECT_REMOVED} from "./actionTypes";

let lastId = 0

export function bugsReducer (state = [], action) {
    switch (action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    projectId: action.payload.projectId,
                    description: action.payload.description,
                    resolved: false,
                }
            ];
        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
        case BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
        case PROJECT_REMOVED:
            return state.filter(bug => bug.projectId !== action.payload.projectId)
        default:
            return state
    }
}