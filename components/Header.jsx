/*This is the header of the website. We are storing it in a different file so the main file 
will not be complex. We will call this using the React component. */

export default function Header() {
    return (
        <header>
            <img src="../images/globe.png" alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}