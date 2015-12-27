var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list.jsx');
var ItemAdder = require('./itemAdder.jsx');

var App = React.createClass({
    getInitialState: function(){
        return {
            toDo: []
        };
    },
    
    addItem: function(newItem){
        this.setState({
            toDo: this.state.toDo.concat(newItem),
        });
    },
    
    render: function(){
        return (
            <div>My To-Do List:  
                <ItemAdder addItem={this.addItem} />
                <List toDo={this.state.toDo} />
            </div>

        );
    }
});


ReactDOM.render(
    <App />, document.getElementById('app')
);