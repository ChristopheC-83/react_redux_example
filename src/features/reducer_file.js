/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "kiki",
    age: 44,
    taille: 184,
  },
  {
    id: 2,
    name: "van",
    age: 46,
    taille: 169,
  },
  {
    id: 3,
    name: "lucas",
    age: 16,
    taille: 188,
  },
  {
    id: 4,
    name: "loris",
    age: 13,
    taille: 172,
  },
];

export const membersFamily = createSlice({
  name: "userFamily",
  initialState,
  reducers: {
    feterAnniv: (state, action) => {
      //Permet de mener l'action sur le bouton lié au personnage en fonction de l'id
      // dans le composant, la fonction doit renvoyer l'id
      //<BtnFam foo={feterAnniv({ id: userFam.id })} btnName="Vieillir"/>
      const member = state.find((obj) => obj.id === action.payload.id);
      member.age = member.age + 1;
    },
    grandir: (state, action) => {
      const member = state.find((obj) => obj.id === action.payload.id);
      if (member.age <= 39) {
        member.taille = member.taille + 2;
      } else if (member.age >= 40) {
        member.taille = member.taille - 1;
      }
    },
  },
});

//les fonctions à exporter dans les composants en ayant besoin
export const { grandir, feterAnniv } = membersFamily.actions;
// les données à exporter dans les composants en ayant besoin
export default membersFamily.reducer;
