import React, { Component } from 'react'

 class AllDataAPI extends Component {
     constructor(props){
         super(props);
        this.state = {
            allWatch = [],
        }
     }
     async componentDidMount(){
         await axios.get(`${process.env.REACT_APP_SERVER}/getDataFromAPI`).then(results =>{
             this.setState({
                 allWatch: results.data
             })
         })
     }
     addToFav = async(watch) =>{
         watch.email = this.props.auth0.user.email;
         await axios.post(`${process.env.REACT_APP_SERVER}/createWatch`, watch);
     }
    render() {
        return (
            <div>
                <h1>All data from the API</h1>
                <h3>Select your Fav</h3>
                <Row xs={1} md={2} className="g-4">
 {this.state.allWatch.length !==0 && 
 this.state.allWatch.map((watch,idx) =>{
     <watch
     key ={idx},
     watch= {watch},
     addToFav = {this.addToFav}/>
 })}
</Row>
                
            </div>
        )
    }
}

export default AllDataAPI
