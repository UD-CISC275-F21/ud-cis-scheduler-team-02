import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});



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

