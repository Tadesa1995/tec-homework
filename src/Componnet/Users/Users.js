// import React from 'react';
//  my wayy

// class Users extends React.Component {
// state= [
//     {userName:"roni",lastName:"tadesa",id:20002020},
//     {userName:"mike",lastName:"kyle",id:39128382139821},
//     {userName:"vitor",lastName:"belfort",id:3432432432432432}
// ];
//     render() { 



//         return (
//         <div>
//       {this.state.map((userInfo,i) => {
//          return ( <div key={userInfo.id} >
//          userName: <p>{userInfo.userName}</p>
//          lastName: <p>{userInfo.lastName}</p>
//          id: <p>{userInfo.id}</p>
    
    
        
//          </div>
//          )
//       })}
//          </div>
//     );
//     }
// }

 
// export default Users;



//  teacher way!!


import React, { Component } from "react";

class Users extends Component {
  state = {
    persons: [
      { id: 1, first: "avi",last : "cohen" },
      { id: 2, first: "mickey", last: "berkovich" },
      { id: 3, first: "jim", last: "ber" },
    ],
    personToEdit: { first: "", last: "" },
    inputFirst: "",
    inputLast: "",
  };
  render() {
    const { persons, personToEdit, inputFirst, inputLast } = this.state;
    const personsElement = persons.map((person) => (
      <div key={person.id}>
        <p>
          first : {person.first} ,last : {person.last}
        </p>
        <th>
         
        <button
          onClick={() => {
            const newPersons = persons.filter((item) => item.id !== person.id);
            this.setState({ persons: newPersons });
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            this.setState({ personToEdit: person });
          }}
        >
          Edit
        </button>
        </th>
      </div>
    ));
    return (
      <div className="Users">
        <div>
          first name
          <input
            onChange={(evt) => {
              this.setState({ inputFirst: evt.target.value });
            }}
            defaultValue={personToEdit.first}
          />
          <br />
          last name
          <input
            onChange={(evt) => {
              this.setState({ inputLast: evt.target.value });
            }}
            defaultValue={personToEdit.last}
          />
          <br />
          <button
            onClick={() => {
            //   console.log(`personToEdit.id : ${personToEdit.id}`);
            //   let newPersons = [...persons];
            // we dont 

           
              let person = persons.find((it) => it.id === personToEdit.id);
              person.last = inputLast;
              person.first = inputFirst;
              this.setState({ persons });
            }}
          >
            Update
          </button>
        </div>
        {personsElement}
      </div>
    );
  }
}

export default Users;

