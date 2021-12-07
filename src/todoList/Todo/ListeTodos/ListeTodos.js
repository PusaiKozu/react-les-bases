import React from 'react'

class ListeTodos extends React.Component {
   render() {
      let listeTaches = this.props.tasks.map((item, indice) => {
         return (
            <li key={indice}>
               {item.id} - {item.texte}
            </li>
         )
      })

      return (
         <ul>
            {listeTaches}
         </ul>
      )
   }
}

export default ListeTodos