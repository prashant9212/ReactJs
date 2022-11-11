import React from "react";

  
class Userlist extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("https://gorest.co.in/public/v2/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return 
        <div> <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1 className="UserListHead"> User Data List </h1>  {
                items.map((item) => (                
                    <ul  key = { item.id } className="UserList1">
                        <li> ID : { item.id }</li>
                        <li> Name : { item.name}</li>
                        <li> Email : { item.email }</li>
                        <li> Gender : { item.gender }</li>
                        <li> Status : { item.status }</li>
                    </ul>
                ))
            }
        </div>
    );
}
}



export default Userlist;