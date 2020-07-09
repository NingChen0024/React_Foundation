import React from 'react'

// function Person({person}) {
//     return (
//         <div>
//             <h2>
//                 I am {person.name}. I am {person.age} years old and I know {person.skill}
//             </h2>
//         </div>
//     )
// }

function Person (props) {
  return (
    <div>
      <h2>
                I am {props.person.name}. I am {props.person.age} years old and I know {props.person.skill}
      </h2>
    </div>
  )
}
export default Person
