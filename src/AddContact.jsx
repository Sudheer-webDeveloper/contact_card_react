import React from "react";


class AddContact extends React.Component{
    state = {
        name: "",
        email: ""
    }
    add = (e) =>{
        e.preventDefault();

        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are Mandatory")
        }
        console.log(this.state);
        this.props.addContactHandler(this.state)

        this.setState({name:"" , email: ""})

        
    }
    render(){
        return (
            <div className="ui-main">
                <h2>Add Contact</h2>
                <form  className="ui-form" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" name= "name" placeholder= "name" value =  {this.state.name} onChange={(e) => this.setState({name :e.target.value})} />
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input type="text" name= "email" placeholder= "Email" value = {this.state.email} onChange={(e)=> this.setState({email: e.target.value})}/>
                    </div>

                    <button className="ui-button-blue">Add Contact</button>
                </form>
            </div>

        );
    }
}


export default AddContact;