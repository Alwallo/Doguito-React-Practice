import "../assets/css/blog.css"
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'
import { Routes, Route } from 'react-router-dom'
import { useParams } from "react-router-dom"

const Categoria = () => {    
    const {id} = useParams()

    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories></ListCategories>
            <Routes>
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`} />} />
            </Routes>
        </>
    )
}

export default Categoria;