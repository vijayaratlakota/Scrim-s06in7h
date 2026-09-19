/*
    The App.jsx will bring the data from data.js, and it will extract the data from data.js
     with the help of the `map` function. We are calling the Entry React component and assigning
      the values for the template here.

    Here, we are not assigning the data for every entry. We will not type every piece of data here.
     Instead, we will extract it from data.js and assign it using the `map` function,
     like `entry.image`, `entry.title`, and `entry.country`.
     The `entry` function will iterate over the data.js array, so `entry.image` will bring the image data
     from data.js. In that way, if there is another piece of data that we want to use on our website,
     we don't need to enter it manually. If we put the data in data.js, the `.map` will automatically iterate and extract it
     using this `entry`. It will show the data as many times as we call the `entry`. 

    Here is one thing we have to know: there are so many objects in the data.js array. For example, there are 3 objects. For every object, there is:  
        \- image  
        \- title  
        \- country  
        \- Google Maps link  
        \- dates  
        \- etc.  
    In App.jsx, there is a map function. The map function will iterate over every object in the array and fit the data into image, title, country,
     Google Maps link, dates, etc. If there are 1,000, it will iterate over 1,000 objects and give the data to Entry. This will assign image, title, country, Google Maps, date, and text in Entry,
     meaning Entry.jsx. Entry.jsx will extract this data, image, title, country, Google Maps link, and date, using props. Automatically, the data we are fetching from data.js using the map method
     is getting fetched into Entry.jsx with the help of props. It will iterate the data, so again, the props will iterate the data.  
     Once we call the Entry here, the whole objects will iterate, and we will show all the data. There is only one data item in Entry.jsx, 
     one HTML template in Entry.jsx. We are calling the Entry component only one time here, but there is so much data in data.js. We are calling it one time,
     so the map method was iterating the data and sending it to the template. We are using the template multiple times.
*/

import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}