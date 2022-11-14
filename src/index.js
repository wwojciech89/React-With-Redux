// import { configureAppStore }  from './store/configureStore'
// import { bugAdded, bugRemoved, bugResolved, unresolvedBugsSelector } from "./store/bugs";
// import { projectAdded } from "./store/projects";
//
// const store = configureAppStore();
//
// store.subscribe(() => {
//     console.log('store changed');
// })
// store.dispatch(projectAdded({name: "FirstProject"}))
// store.dispatch(bugAdded({description: "Bug 1"}));
// store.dispatch(bugAdded({description: "Bug 2"}));
// store.dispatch(bugAdded({description: "Bug 2"}));
// store.dispatch(bugResolved({id: 2}))
// store.dispatch(bugRemoved({id: 1}));
//
//
// const unresolvedBugs = unresolvedBugsSelector(store.getState())
// console.log(unresolvedBugs)
//
// console.log(store.getState());

import { store } from './store2/store'
import { BUG_REMOVED, BUG_ADDED, PROJECT_ADDED, PROJECT_REMOVED} from "./store2/actionTypes";

const unsubscribe = store.subscribe(() => {
    console.log("store change", store.getState());
})

store.dispatch({
    type: PROJECT_ADDED,
    payload: {
        description: 'Projekt1',
    }
})
store.dispatch({
    type: PROJECT_ADDED,
    payload: {
        description: 'Projekt2',
    }
})
store.dispatch({
    type: PROJECT_ADDED,
    payload: {
        description: 'Projekt3',
    }
})

store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "bug1",
        projectId: 1,
    }
});

store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "bug1",
        projectId: 2,
    }
});

store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "bug2",
        projectId: 2,
    }
});

store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "bug3",
        projectId: 3,
    }
});

store.dispatch({
    type: BUG_REMOVED,
    payload: {
        id: 1,
    }
})

store.dispatch({
    type: PROJECT_REMOVED,
    payload: {
        projectId: 3,
    }
})


unsubscribe();

console.log(store.getState());
