export const StyledForm = () => {
    return(
        <form className="contact-form">
            <label for="username" >Username:</label>
            <input type="text" id="username" className="form-input" />
            <br />
            <label for="email" >Email:</label>
            <input type="email" id="email" className="form-input" tabIndex="1" />
        </form>
    )
}