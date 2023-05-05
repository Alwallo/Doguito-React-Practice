import "../assets/css/blog.css"
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'
import { useState, useEffect } from "react"
import { buscar } from "../api/api"
import { useParams, Link, useResolvedPath, Routes, Route } from 'react-router-dom'

const Categoria = () => {    
    const {id} = useParams()
    const url = useResolvedPath("").pathname
    const [subcategorias, setSubcategorias] = useState([])

    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            setSubcategorias(response[0].subcategorias)
        })
    }, [id])

    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories></ListCategories>
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>  
            <Routes>
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`} />} />
            </Routes>
        </>
    )
}

export default Categoria;