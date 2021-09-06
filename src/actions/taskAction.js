import Swal from 'sweetalert2'
import { fileUpload } from '../helpers/fileUpload'
import { db } from '../firebase/firebase-config'
import {types} from '../types/types'
import { loadMovie } from '../helpers/loadMovie'


//CREO UN ARRAY PARA ALMACENAR LA IMAGEN
let fileUrl=[]

//FUNCIONES ASINCRONICAS
export const CardNew = (card) => {

    return async (dispatch, getSate) => {
        const uid = getSate().auth.uid

        const newCard = {
            title: card.title,
            year: card.year,
            image: fileUrl,
            description: card.description,
            score: card.score
       }
       //AGREGO A MI COLECCION FIREBASE


    const docRef = await db.collection(`${uid}/Movies/Movies`).add(newCard)
    dispatch(addNewCard(docRef.id, newCard))

    }
}

export const Edit = (card) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        if (!card.url) {
            delete card.url;
        }
        const EditCard = {
            id:card.id,
            title: card.title,
            year: card.year,
            image: fileUrl,
            description: card.description,
            score: card.score
        }

        const cardFire = { ...EditCard  }
       // delete cardFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        await db.doc(`${uid}/Movies/Movies/${card.id}`).update(EditCard)
           console.log(EditCard)

        Swal.fire('Saved', card.title, 'success');
        dispatch(ListarCard(uid))
    }
}


export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;
        const card = getState().auth.card;

        await db.doc(`${uid}/Movies/Movies/${id}`).delete();

        dispatch(deleteCard(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
          })
          dispatch(ListarCard(uid))
    }
}


//METODO PARA LAS ALERTAS SON SWAL
export const startUploading = (file) => {
    return async (dispatch) => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await fileUpload(file)//CARGO MI IMAGEN
        //console.log(fileUrl)
        Swal.close()
       return fileUrl
    }
}

//FUNCIÓNES SINCRÓNICAS

export const addNewCard = ( id, card ) => ({
    type: types.cardAddNew,
    payload: {
        id, ...card
    }
})

export const ListarCard = (uid) => {
    return async (dispatch) =>{
        const cards =  await loadMovie(uid)
        dispatch(setCards(cards))
    }
}

export const setCards = (cards) => {
    return {
        type: types.cardLoad,
        payload: cards
    }
}

export const activeCard = (id,card) => {
    return{
        type:types.cardActive,
        payload:{
            id,
            ...card
        }
    }
}

export const clearCard = () => {
    return {
        type: types.cardLogoutClean
    }
}

export const deleteCard = (id) => ({
    type: types.cardDelete,
    payload: id
});
