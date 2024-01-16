const LoginForm = ({ changeForm }) => {
  return (
      <div class="center wrapper">
        <form class="login" >
          <h2>Sign in to access your library</h2>
          <div class="input-box">
            <input type="text" placeholder="Email"></input>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password"></input>
          </div>
          <div class="remember-forgot">
            <button href="#">Forgot password?</button>
          </div>
          <div class="sign-in">
            <button class="sign-in-btn">Sign in</button>
          </div>
          <div class="no-acc">
            <label>Don't have an account?</label>
            <button onClick={changeForm}>Register now</button>
          </div>
        </form>
      </div>
  )
}

export default LoginForm