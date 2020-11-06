import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Container,Row} from 'react-bootstrap'
import Recipe from './Recipe'
import "../App.css"
const Api = () => {
    const API_ID = "da34ab48",
          API_KEY = "ad18c26e653fded574b59174184599f5",
          [recipes,setRecipes] = useState([]),
          [search,setSearch] = useState(""),
          [clicked,setClicked] = useState("chicken");

    useEffect(() =>{
        getRecipes();
    }, [clicked]);
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${clicked}&app_id=${API_ID}&app_key=${API_KEY}`),
                data = await response.json();
        setRecipes(data.hits);
        // console.log(data.hits);
    }
    const updateSearch = e =>{
        setSearch(e.target.value);
    }
    const getSearch = e =>{
        e.preventDefault();
        setClicked(search);
        setSearch("")
    }
    return(
        <div className='bg-gradient'>
            <Form className="search-form" style={{display:'flex', justifyContent:'center' ,padding:' 20px 0px 20px 0px '}} onSubmit={getSearch}>
                <Form.Control style={{width:'60vh', marginRight:5}} type="text" className="search-bar" value={search} onChange={updateSearch}></Form.Control>
                <Button  variant="primary" type="submit" className="search-btn">Search</Button>
            </Form>
            <Container style={{textAlign:'center'}}>
                <Row>
                    {recipes.map(recipe =>(
                        <Recipe key={recipe.recipe.label} recipe={recipe.recipe}/>
                    ))}   
                    </Row>
            </Container>             
        </div>
    )
}
export default Api