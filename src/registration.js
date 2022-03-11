// eslint-disable-next-line no-unused-vars
const registration = `
    <img class="petspace-logo" id="petspaceLogo" src="img/PetSpaceLogo.png" >
    <section class="reg-box">
        <p>Crea un usuario y contraseña</p>
        <form id="registrationForm" action="submit">
            <input placeholder="Nombre" id="regName"></input><br>
            <input placeholder="Correo electrónico" id="regEmail"></input><br>
            <input type="password" placeholder="Contraseña" id="regPW"></input><br>
            <p id="message"></p>
            <button id="seePasswordReg"> <i class="fas fa-eye" ></i></button>
            <button class="register-button" type="button" id="regBtn">Regístrate</button>
        </form>
        <p>o regístrate con:</p>
        <img src="img/facebook.png" class="facebook-logo">
        <img src="img/google.png" class="gmail-logo">
    </section>
    <br>
    <button class="return-button" id="returnButton">Regresa al inicio</button>
`;
