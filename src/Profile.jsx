export const Profile = () =>{
    const name = "Kamran Faiz";
    const role = "Web Developer";
    const experience = "5";
    const isAvailable = true;
    return(
        <>
        <h1>{name}</h1>
        <p>{role} with {experience} of experience</p>
        <p>Started in {2026 - experience}</p>
        <p>Status: {isAvailable ? "Available for hire" : "Not available"}</p>
        <p>Contact: {name.toLowerCase().replace(" ",".")}@gmail.com</p>

        </>
    )
}