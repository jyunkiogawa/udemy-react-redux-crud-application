import React from 'react';

const App = () => {
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

User.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
