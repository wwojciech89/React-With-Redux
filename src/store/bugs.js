import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";


// DUX(ducks) pattern

let lastId = 0

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        // creating action handlers from action
       bugAdded: ( bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
        })
    },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true;
        },
        bugRemoved: (bugs, action) => {

        }
}})

export const { bugAdded, bugResolved, bugRemoved } = slice.actions
export default slice.reducer

//Selector
export const unresolvedBugsSelector = state =>
state.entities.bugs.filter(bug => !bug.resolved);
    // state.entities.bugs.filter(bug => !bug.resolved)


// Action Creators
// export const bugAdded = (description) => {
//     return {
//         type: actionTypes.BUG_ADDED,
//         payload: {
//             description: description,
//         }
//     }
// }

// Action Creator using CreateAction from redux toolkit
// export const bugAdded = createAction('bugAdded')
// export const bugRemoved = createAction('bugRemoved')
// export const bugResolved = createAction('bugResolved')

// Reducer, if we use createReducer we don't need to worry about mutating code
// inside this function. If we don't use it, remember that reducers should be immutable
// create Reducer doesn't use switch case, so we don't need default case

// export default createReducer([], {
//     // this syntax give us a dynamic name for reducer from action creator type
//     [bugAdded.type]: ( bugs, action) => {
//         bugs.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false,
//         });
//     },
//     bugResolved: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id)
//         bugs[index].resolved = true;
//     },
//     bugRemoved: (bugs, action) => {
//         bugs.filter(bug => bug.id !== action.payload.id)
//     }
// })

// export const reducer = (state = [], action ) => {
//     switch (action.type) {
//         case bugAdded.type:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false,
//                 }
//             ];
//         case bugRemoved.type:
//             return state.filter(bug => bug.id !== action.payload.id)
//         case bugResolved.type:
//             return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
//
//     }
// }
