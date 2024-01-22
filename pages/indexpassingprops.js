import { getImageUrl } from './utils/utils.js';
// const ratio = window.devicePixelRatio;


function Profile({
    person,
    alt,
    size,
    profession,
    awards,
    discovered }) {


    var thumbnailSize = 's';
    if (size > 90) {
        thumbnailSize = 'b';
    }
    return (

        <div>

            <h1>Notable Scientists</h1>
            <section className="profile">
                <h2>{person.name}</h2>
                <img
                    className="avatar"
                    src={getImageUrl(person, thumbnailSize)}
                    alt={alt}
                    width={size}
                    height={size}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {profession}
                    </li>
                    <li>
                        <b>Awards: {awards.length} </b>
                        ({awards})
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {discovered}
                    </li>
                </ul>
            </section>
        </div>)
}

export default function Gallery() {
    return (

        <div>
            <Profile
                person={{
                    name: 'Maria Skłodowska-Curie',
                    imageId: '7vQD0fP'
                }}
                alt={'Maria Skłodowska-Curie'}
                size={70}
                profession={'physicist and chemist'}
                awards={['Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal']}
                discovered={'polonium (chemical element)'}
            />
            <Profile
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
                size={90}
                alt={'Gregorio Y. Zara'}
                profession='geochemist'
                discovery="a method for measuring carbon dioxide in seawater"
                awards={[
                    'Miyake Prize for geochemistry',
                    'Tanaka Prize'
                ]}
            />
        </div>
    );
}
