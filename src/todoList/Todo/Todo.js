import React from 'react'
import SaisieTodo from './SaisieTodo/SaisieTodo'
import ListeTodos from './ListeTodos/ListeTodos'

class Todo extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         taches: []
      }
   }

   // Fonctionnalité d'ajout d'une nouvelle tâche
   addTodo(texte) {
      let newTodo = {
         id: 1,
         texte: texte,
         termine: false
      }
      this.setState({
         taches: this.state.taches.concat(newTodo)
      })
   }

   render() {
      return (
         <>
            {/* Récupération de la saisie utilisateur */}
            <SaisieTodo onClick={(txt) => this.addTodo(txt)} />
            {/* Affichage de la saisie utilisateur */}
            <ListeTodos
               tasks={this.state.taches}
            />
         </>
      )
   }
}

export default Todo