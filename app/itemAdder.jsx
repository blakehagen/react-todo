var React = require('react');

var ItemAdder = React.createClass({
    getInitalState: function(){
        return {
            newItem: '' 
        };
    },
    
    updateItem: function(e){
        this.setState({newItem: e.target.value});
    },
    
    
    render: function(){   
        return (
            <div>
                <input type="text" placeholder="Add a task..."  onChange={this.updateItem} />
                <button onClick={() => this.props.addItem(this.state.newItem)}> Add Task </button>
            </div>
        );
    }    
});

module.exports = ItemAdder;