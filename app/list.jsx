var React = require('react');

 var List = React.createClass({
     render: function(){
         toDoItems = this.props.toDo.map((item, index) => {
             return <li key={index}> {item} </li>
         })
         return (
             <ul>
                {toDoItems}
             </ul>
         )
     }
     
     
 })
 
 module.exports = List