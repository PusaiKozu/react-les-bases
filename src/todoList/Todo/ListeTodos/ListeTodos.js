import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class ListeTodos extends React.Component {
   render() {
      let listeTaches = this.props.tasks.map((item, indice) => {
         return (
            <li key={indice}>
               <FontAwesomeIcon
                  icon={faCoffee}
               />
               {item.id} - {item.texte}
            </li>
         )
      })

      return (
         <>
            <Row>
               <Col>
                  <ul>
                     {listeTaches}
                  </ul>
               </Col>
            </Row>
         </>
      )
   }
}

export default ListeTodos