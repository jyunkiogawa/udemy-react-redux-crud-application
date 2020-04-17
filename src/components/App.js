import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 12 },
    { name: "Kate", age: 13 },
  ]
  return (
    <div> {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </div>
  )
}

const User = (props) => {
  return <div>Hi I am {props.name}!, and {props.age}years old! </div>
}


export default App;
