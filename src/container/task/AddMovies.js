  
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardNew, startUploading, Edit,clearCard} from '../../actions/taskAction';
import { useForm } from '../../hooks/useForm'



export const AddMovies = () => {
    //dispatch para traer funciones asincronicas
    const dispatch = useDispatch();

    const { active } = useSelector(state => state.card);

    const [formValue, handleInputChange, reset] = useForm(active)
  
    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
        reset(active)
        }
        activeId.current = active.id
    }, [active])


    //desectructuro
    const {title , year , description , score } = formValue;

    //Metodo para agregar una pelicula nueva

    const handleNewMovie = (e) => {
        e.preventDefault();
    
        if (active.title == "") {
          dispatch(CardNew(formValue))
          reset()
        } else if(active.id !== ""){
          dispatch(Edit(formValue))
        }
        dispatch(clearCard())
      }

    //Metodo para agregar mi imagen
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        //console.log(file)
        if (file) {
          dispatch(startUploading(file))
        }
      }

    return (

        <div>
            <h1 id="title-addMovies">Agregar Pelicula </h1>
            <form onSubmit={handleNewMovie} id="form-addMovie"> 

                <label htmlFor="title" className="form-label">Titulo</label>
                <input  type="text" name="title" value={title} onChange={handleInputChange}/>
                
                <label htmlFor="year" className="form-label">Año</label>
                <input  type="text" name="year" value={year} onChange={handleInputChange}/>
                
                <input id="fileSelector" type="file" name="file" onChange={handleFileChange}/>
                
                <label htmlFor="description" className="form-label">Descripcion</label>
                <input  type="text" name="description" value={description} onChange={handleInputChange}/>

                <label htmlFor="score" className="form-label">Score</label>
                <input  type="text" name="score" value={score} onChange={handleInputChange}/>
                
                <button type="submit" className="btn btn-primary mt-2">Agregar</button>
            </form>

        </div>
    
    )
}
