import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"

const Post = ({url}) => {

  const {id} = useParams(); //Hook para para obtener los parámetros de la URL de la página.
  const [post, setPost] = useState({});
  const navigate = useNavigate(); //Hook para navegar entre rutas

  useEffect(() => {
    buscar(`/posts/${id}`, setPost).catch(() => {
        navigate("/not-found")
    })
  }, [id])

 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post;