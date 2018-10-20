// import { resolveCname } from "dns";

//~~~~~~~~~MOCK DB~~~~~~~~~//
let cardsDB = [
  { Card_ID: 1, Title: 'Learn React', Body: 'Read the docs', Priority: 'High', Status: 'In Progress', Created_By: 'Harsh', Assigned_To: 'Harsh' },

  { Card_ID: 2, Title: 'Get Shot By Kylo', Body: 'Sorry bruh.', Priority: 'Low', Status: 'Done', Created_By: 'Harsh', Assigned_To: 'Han Solo' },

  { Card_ID: 3, Title: 'Remake Death Star', Body: 'Gettem', Priority: 'High', Status: 'Done', Created_By: 'Harsh', Assigned_To: 'Kylo Ren' },

  { Card_ID: 4, Title: 'Who Is My Father', Body: 'No really who is it?', Priority: 'High', Status: 'In Progress', Created_By: 'Harsh', Assigned_To: 'Luke' },

  { Card_ID: 5, Title: 'Finish Project', Body: 'Must finish app and make it look nice', Priority: 'High', Status: 'In Queue', Created_By: 'Harsh', Assigned_To: 'Harsh' },

  { Card_ID: 6, Title: 'Style Style Style', Body: 'A pretty front end makes life better', Priority: 'Low', Status: 'In Progress', Created_By: 'Harsh', Assigned_To: 'Harsh' },

  { Card_ID: 7, Title: 'How Did I Get Here', Body: 'Smush???', Priority: 'Medium', Status: 'In Queue', Created_By: 'Harsh', Assigned_To: 'Snookie' }
]

let newId = 8;

//~~~~~GET ALL CARDS~~~~~//
export const getCardsFromDB = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(cardsDB.slice())
  }, 200)
});

//~~~~~ADD CARDS~~~~~//
export const addCardsFromDB = (card) => new Promise((resolve, reject) => {
  setTimeout(() => {
    card.Card_ID = newId;
    newId++;
    cardsDB.push(card);
    resolve(cardsDB)
  }, 200)
})

export const deleteCardsFromDB = (cardId) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const itemIndex = cardsDB.findIndex(card => card.Card_ID === cardId);
    if (itemIndex === -1) {
      reject({ status: 500, message: 'Item not found!' })
    } else {
      cardsDB = cardsDB.filter(card => {
        return card.Card_ID !== cardId
      })
      console.log('cardsDB: ', cardsDB);
      console.log('itemIndex: ', itemIndex);
      resolve({ status: 'ok' })
    }

  })
})