import Third from "./Third";

export default function Location({ city, state, country, planet, galaxy, num }) {
    return <>
        <center>
            <div>
                <p>City : {city}</p>
                <p>State : {state}</p>
                <p>Country : {country}</p>
                <p>Planet : {planet}</p>
                <p>Galaxy : {galaxy}</p>
            </div>
            <num>{num}</num>

            <Third number={num}></Third>

        </center>
    </>
}