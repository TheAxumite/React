const drinks = {
    tea: {
        part: 'leaf',
        caffeine: '15–70 mg/cup',
        age: '4,000+ years'
    },
    coffee: {
        part: 'bean',
        caffeine: '80–185 mg/cup',
        age: '1,000+ years'
    }
};


function Drink({ name }) {
    const info = drinks[name];
    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{info.part}</dd>
                <dt>Caffeine content</dt>
                <dd>{info.caffeine}</dd>
                <dt>Age</dt>
                <dd>{info.age}</dd>
            </dl>
        </section>
    );
}

function DrinkList() {
    return (
        <div>
            <Drink name="coffee" />
            <Drink name="coffee" />
        </div>
    );
}
function DeletedItem({ name, isPacked }) {
    return <li className='item'><del>{isPacked ? name + '✔' : name} </del></li>
}

function Item({ name, isPacked }) {
    return <li className='item'>{isPacked ? name + '✔' : name}</li>
}

function AndItem({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked && '✔'}
        </li>
    );
}
function ItemConditional({ name, isPacked }) {
    var itemContent = ''
    if (isPacked) {
        itemContent = name + " ✔";
    }
    return (
        <li className="item">
            {itemContent}
        </li>);
}

function ItemArbitaryJSX({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent =
            <del>
                {name + " ✔"}
            </del>
    }

    return (
        <li className="item">
            {itemContent}
        </li>);
}

function ItemAnotherAnd({ name, importance }) {
    return (
        <li className="item">
            {name} {importance > 0 && <i> (Importance {importance})</i>}

        </li>
    );
}






export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space Suit">
                </Item>
                <Item
                    isPacked={false}
                    name="Space Suit">
                </Item>

                <Item
                    isPacked={true}
                    name="Helmet with a golden leaft">
                </Item>

                <DeletedItem
                    isPacked={true}
                    name="Helmet with a golden leaft">
                </DeletedItem>

                <AndItem
                    isPacked={true}
                    name="Photo of Tam">
                </AndItem>

                <ItemConditional
                    isPacked={true}
                    name="Photo of Tam">
                </ItemConditional>

                <ItemArbitaryJSX
                    isPacked={false}
                    name="Pack it up boys">
                </ItemArbitaryJSX>

                <ItemAnotherAnd
                    importance={9}
                    name="Pack it up boys">
                </ItemAnotherAnd>
                <ItemAnotherAnd
                    importance={0}
                    name="Pack it up boys">
                </ItemAnotherAnd>

                <DrinkList></DrinkList>
                
            </ul>
        </section>
    )
}