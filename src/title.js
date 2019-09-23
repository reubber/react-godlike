import React from 'react'


const Title = (props) => (
    <h1>Olá {`${props.name} ${props.lastname}`}</h1>

)

Title.defaultProps = {
    name: 'desconhecido',
    lastname: 'desconhecido'
}

// const Title = React.createClass({

//     getDefaultProps: function () {
//         return {
//             name: 'desconhecido',
//             lastname: 'sem sobrenome'
//         }
//     },

//     render: function () {
//         return (
//             <h1> olá {this.props.name + ' ' + this.props.lastname}</h1>
//         )

//     }
// })

export default Title