import { db } from '../firebase/firebase-config'

export const loadMovie = async (uid) => {

    const cardStore = await db.collection(`${uid}/Movies/Movies`).get()
    const cardsList = [];

    cardStore.forEach(hijo=>{
        cardsList.push({
        id:hijo.id,
        ...hijo.data()
       })
    })
   
    return cardsList
}