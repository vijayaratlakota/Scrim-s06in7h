/*
    This is an HTML template. We will enter the HTML template in a function. 
     The function is called the entry function. In that entry function, we will write HTML code.
     We are using this entry as a template, so we can use it multiple times, like a template. 
     We can use multiple entries and use it as a template multiple times.

    What are the things we want to use in this code multiple times? We will make them the data that should enter from App.jsx.
     With the help of props, it will extract the data from App.jsx. 
*/

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src} 
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}