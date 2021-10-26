import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
const Row = function(props){
    const {checked, value, onChange, onChecked} = props;
    return (
      <div>
        <input 
          type="checkbox" 
          checked={checked}
          onChange={onChecked}
          />
        <input type ="text" value={value}  onChange={onChange}/>
      </div>
    );
  }
  
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        rows: [
          {value: 'course1', checked: false},
          {value: 'course2', checked: true},
          {value: 'course3', checked: false},
        ]
      };
    }
    
    updateValue = (e, idx) => {
      const rows = [...this.state.rows];  
      rows[idx].value = e.target.value;
      this.setState({
          rows,
      });
    }
    
    onChecked = (idx) => {
      const rows = [...this.state.rows];  
      rows[idx].checked = !rows[idx].checked;
      this.setState({
          rows,
      });
    } 
    
    addRow = () => {
      const rows = [...this.state.rows, 
                    {value:'', checked: false}
                   ];
      this.setState({
          rows,
      });
    }
    
    deleteRows = () => {
      this.setState({
        rows: this.state.rows.filter(e => !e.checked)
      });
    }
   
    render(){
      return(
        <div>
          {this.state.rows.map((row, idx) => {
            return(
                <Row 
                  key={idx} 
                  value={row.value}
                  checked={row.checked}
                  onChange={(e) => this.updateValue(e, idx)} 
                  onChecked={() => this.onChecked(idx)}
                  /> 
              )
          })
          }
          <button onClick={this.addRow}>
            add 
          </button>
          <button onClick={this.deleteRows}>
            delete
          </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
  <div id="app"> </div>
