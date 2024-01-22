import { getImageUrl } from "./utils/utils";
function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
      <br></br>
      <TeaSet></TeaSet>
      <>
        <Profile
          currentPerson={{
            imageId: "lrWQx8l",
            name: "Subrahmanyan Chandrasekhar",
          }}
        />
        <Profile
          currentPerson={{
            imageId: "MK3eW3A",
            name: "Creola Katherine Johnson",
          }}
        />
      </>
    </section>
  );
}

//   function Cup({ guest }) {
//     return <h2>Tea cup for guest #{guest}</h2>;
//   }

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

/* Understanding the Implications of Modifying Global Variables in React Components

  Using a variable like `let guest = 0;` outside a React component and then modifying it within a component, as done in the `Cup` function, is considered bad practice in React for several reasons:

1. **Loss of Reactivity**: React components are designed to be reactive and update the UI based on changes in state or props. By using an external variable and modifying it directly, you bypass React's state management, which can lead to unpredictable UI behavior.

2. **Side Effects**: The modification of `guest` inside the `Cup` component introduces a side effect. React components should ideally be pure functions that do not cause side effects. This helps in maintaining predictability and makes components easier to test and debug.

3. **Non-Local State**: The `guest` variable is external to the component, meaning it's not managed by the component's local state or context. This can lead to issues with component isolation and reusability, as the state is not encapsulated within the component.

4. **No Trigger for Re-render**: Since `guest` is not a state variable or a prop, changing its value will not cause the component to re-render. This means the UI will not update in response to changes in `guest`, leading to inconsistencies between the UI and the underlying data.

5. **Shared State Across Instances**: If multiple instances of the `Cup` component are rendered, they will all share the same `guest` variable. This shared state can lead to unexpected behavior and bugs, as each instance is not independent.

To fix this issue, you could use React's `useState` hook to manage the `guest` variable within each component, ensuring that each instance of the `Cup` component has its own independent state, and the UI correctly reflects changes to that state. For example:

```jsx
function Cup() {
  const [guest, setGuest] = useState(0);

  useEffect(() => {
    setGuest(guest + 1);
  }, []);

  return <h2>Tea cup for guest #{guest}</h2>;
}
```

In this revised code, each `Cup` component manages its own `guest` state, and the state is updated in a way that is compatible with React's lifecycle and re-rendering mechanism.


Recap
A component must be pure, meaning:
It minds its own business. It should not change any objects or variables that existed before rendering.
Same inputs, same output. Given the same inputs, a component should always return the same JSX.
Rendering can happen at any time, so components should not depend on each others’ rendering sequence.
You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.
Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll usually want to do it in an event handler. As a last resort, you can useEffect.
Writing pure functions takes a bit of practice, but it unlocks the power of React’s paradigm.

*/

function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}

function Profile({ currentPerson }) {
  return (
    <div
      style={{
        border: " 1px solid black",
        borderRadius: "10px",
        width: " 15vw",
        height: "fit",
        margin: "10px",
        padding: "10px",
      }}
    >
      <button onClick={() => buttonClicked(currentPerson.imageId)} id= {currentPerson.imageId + ' button'}>
        Collapse
      </button>
      <div id={currentPerson.imageId}>
        <Header person={currentPerson} />
        <Avatar person={currentPerson} />
      </div>
    </div>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

function buttonClicked( person ) {
  const children = document.getElementById(person);

  if (children.style.display === "block") {
    children.style.display = "none";
    document.getElementById(`${person} button`).innerHTML = 'Expand'
  } else {
    children.style.display = "block";
    document.getElementById(`${person} button`).innerHTML = 'Collapse'
  }
}


function StoryTray({ stories }) {
  var list = stories.filter((story) => story.label != 'Create Story');
  list.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
   
    <ul>
      {list.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
