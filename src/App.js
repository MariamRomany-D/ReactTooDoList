import React ,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from "./components/todolistInputFoem" ;
import TodoList from "./components/todoList";



class App extends Component {

state = {
    items : [
      // {title : " "},
     
    ],
    current : ''
    
}


//catchValueOfFormInput : 1111111111111111111111111111111111111111111111111111111111
catchInputValue = (e)=>{
console.log(e.target.value);
this.setState({
  current: e.target.value 
})
}
//AddTheValueinList :  2222222222222222222222222222222222222222222222222222222222222
addList = (e)=>{
  e.preventDefault();
  let current = this.state.current ; 
  let items = this.state.items;
  items.push({title:current});
  this.setState({
    items,
    current:''
  });
  console.log("new item");
}
//DeletItem : 3333333333333333333333333333333333333333333333333333333333333333333333
deletItem = (index)=>{

  let items = this.state.items;
  items.splice(index,1);
  this.setState({
    items
  })
  console.log("Delete");

}
//EditItem : 44444444444444444444444444444444444444444444444444444444444444444444444
editItem = (index , value) =>{
  let items = this.state.items;
  let item = items[index];
  item['title'] = value ;
  this.setState({
    items
  }) 
}




render(){
  const {items} = this.state ;
  const ListOfItems = items.map((item , index ) => {
    return ( <TodoList items={item} key={index} index={index} deletItem={this.deletItem} editItem={this.editItem}/> )
})


    return (
      <div className="App">
         <TodoForm catchInputValue={this.catchInputValue} addList={this.addList} current={this.state.current}/>
         <div>{ListOfItems}</div>
      </div>
    );
  }
}

export default App ;