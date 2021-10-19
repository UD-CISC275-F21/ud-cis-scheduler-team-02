import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>Yongxu Wang, Boyuan Yang, Yufan Jiang
                    Edit <code>src/App.tsx</code> and save to reload.</p>
            </header>
        </div>
    );
}
export default App;

//update test...
//const APP_KEY = 'appWithRedux'

//const App = () => {
  //const appState = localStorage.getItem(APP_KEY)
  //const initialState = appState ? JSON.parse(appState) : {
    //events: [],
    //operationLogs: []
  //}
  //const [state, dispatch] = useReducer(reducer, initialState)

  //useEffect(() => {
    //localStorage.setItem(APP_KEY, JSON.stringify(state))
 // }, [state])

 // return (
   // <AppContext.Provider value={{ state, dispatch }}>
  //    <div className="container-fluid">
  //      <EventForm />
  //      <Events />
   //     <OperationLogs />
   //   </div>
   // </AppContext.Provider>
 // )
//}

//export default App//

//Code update Test