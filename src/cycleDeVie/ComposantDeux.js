import { useEffect, useState } from 'react'
import SaisieTodo from '../todoList/Todo/SaisieTodo/SaisieTodo'

// Newschool
//function ComposantDeux(props) {
//const ComposantDeux = (props) => {
function ComposantDeux({ width, height, id, shape, alt }) {
//const ComposantDeux = ({ onClick }) => {

   // Hook d'état (création de clés)
   const [tache, setTache] = useState("")
   const [posts, setPosts] = useState([])

   // Hook d'effet - tout le temps (construction, mise à jour, tout)
   useEffect(() => {
      console.log("Je suis dans le useEffect")
   })

   // Hook d'effet - équivalent ComponentDidMount
   useEffect(() => {
      console.log("Je suis dans le useEffect")
   }, [])

   // Hook d'effet - spécifique à une clé
   useEffect(() => {
      console.log("Je suis dans le useEffect")
   }, [tache])

   // Hook d'effet - spécifique à une clé
   useEffect(() => {
      console.log("Je suis dans le useEffect")
   }, [posts])

   // Preparer une mise à jour
   const updateState = () => {
      onClick("")
      console.log("Je suis dans la prep")
      setTache("Rambo")
   }

   // Preparer une mise à jour
   const updatePosts = () => {
      console.log("Je suis dans la prep")
      setPosts()
   }

   const handleClick = () => {
      console.log("Je fais quelque chose")
   }

   let listeTodo = todo.map((item, indice) => {
      return (
         <li>

         </li>
      )
   })

   // Rendu initial
   return (
      <>
         <p>Hello World ! {value}</p>
         <button type="submit" onClick={updateState}>Clic</button>
         <button type="submit" onClick={updatePosts}>Clic</button>
         <SaisieTodo
            onClick={handleClick}
         />
      </>
   )
}

export default ComposantDeux