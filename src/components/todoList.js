// state component 
import React ,{ Component, Fragment } from "react";
import "./components.css";



class TodoList extends Component {
state = {
    isEdit : false 
}
toggleSate = () =>{
    let {isEdit} = this.state;
    this.setState({
        isEdit: !isEdit
    })
}



// render Items : *********************************************
renderItems = () => {
    return(

        <div className="container ">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 todoItem">
                <div className="row">
                    <div className="col-md-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path></svg></div>
                    <div className="col-md-1"><i class="fa-regular fa-circle-check"></i></div>
                    <div className="col-md-2 delete"><i class="fa-solid fa-trash" onClick={ ()=>{this.props.deletItem(this.props.index)} }></i></div>
                    <div className="col-md-6"><h3>{this.props.items.title}</h3></div>
                    <div className="col-md-2 edit"><i class="fa-solid fa-pencil"  onClick={()=>{this.toggleSate()}}></i></div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
        </div>
    );
}

// render Edit : *********************************************
UpdateItem = (e)=>{
  e.preventDefault();
  this.props.editItem(this.props.index , this.input.value );
  this.toggleSate();
}

renderEdit = () => {
    return(
        <div className="container">
            <div className="row Save">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form onSubmit={this.UpdateItem}>
                        <input className="inp2" type="text" ref={(v)=>{this.input = v}}  defaultValue={this.props.items.title}/>
                        <button className="sub2">Save</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}





render(){
    let {isEdit} = this.state;
    return (
      <Fragment>
        { isEdit ? this.renderEdit() : this.renderItems()}
      </Fragment>
    );
  }
}

export default TodoList ;