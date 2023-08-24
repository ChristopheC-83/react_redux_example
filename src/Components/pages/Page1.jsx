/* eslint-disable react/no-unescaped-entities */

function Page1() {
  return (
    <div className="notice-redux">
      <p className="truc">On installe npm i redux, react-redux et @reduxjs/toolkit</p>
      <p>On crée le fichier store.js à la racine, à coté de main.jsx</p>
      <p>
        on hydrate le fichier main.jsx avec le store (qui contient tous les
        fichiers reducer)
      </p>
      <p>
        dans un dossier "features", on crée un fichier reducer qui contiendra
        les données à diffuser
      </p>
      <p>on appelle les données (useSelector) dans le fichier cible</p>
      <p>on appelle les fonctions (useDispatch) dans le fichier cible</p>
      <p className="gris"> const dispatch = useDispatch();</p>
      <p className="gris"> const userFamily = useSelector((state) {"=>"} state.reducer_file);</p>

      <p>changer le state dans un composant le modifie de partout</p>
    </div>
  );
}

export default Page1;
