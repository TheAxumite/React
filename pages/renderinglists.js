import { getImageUrl } from "./utils/utils";
import { Fragment } from 'react';

 const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

const recipe = recipes.map((list) => (
  <div>
    <h2>{list.name}</h2>
    <ul>
      {list.ingredients.map((list) => (
        <li>{list + ", "} </li>
      ))}
    </ul>
  </div>
));

function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipe}
    </div>
  );
}



/*
Another way of writing the above function:Here, <Recipe {...recipe} key={recipe.id} /> is a syntax shortcut saying “pass all propertiesof the recipe object as props to the Recipe component”. 
You could also write each prop explicitly: <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />.
*/
// function Recipe({ id, name, ingredients }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map(ingredient =>
//           <li key={ingredient}>
//             {ingredient}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// }

// function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />
//       )}
//     </div>
//   );
// }



function List({ profession }) {
  if (profession === "chemists") {
    var list = people.filter((person) => person.profession === "chemist");
  } else {
    var list = people.filter((person) => person.profession != "chemist");
  }

  const listItems = list.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>{profession}</h1>
      <ul>{listItems}</ul>
    </article>
  );
}


const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];


const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}





export default function list() {
  return (
    <>
      <List profession="chemists"></List>
      <List profession="Everyone Else"></List>
      <RecipeList></RecipeList>
      <Poem></Poem>
    </>
  );
}



