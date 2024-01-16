const RegisterForm = ({ changeForm }) => {
  return (
    <div class="center wrapper">
      <form class="registration">
        <h2>Register an account</h2>
        <div class="input-box">
          <input type="text" placeholder="Email"></input>
        </div>
        <div class="input-box">
          <input type="password" name="password" id="password" placeholder="Your password"></input>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Confirm password"></input>
        </div>
        <div class="register-div">
          <button class="register-btn">Register</button>
        </div>
        <div class="yes-acc">
          <label>Already have an account?</label>
          <button onClick={changeForm}>Sign in</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm