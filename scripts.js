* {
  transition: .4s ease-in-out;
  font-family: var(--main-font);
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh; /* Make the content fill the page so the footer is at the bottom */
  display: flex;
  flex-direction: column;
  font-size: 26px;
  background-color: var(--body-background);
  color: var(--body-text-colour);
}

main {
  height: 100%;
  justify-content: center;
  margin: 0 auto; /* Center if the browser is really wide */
  min-width: 25rem; /* Don't let the content get too narrow */
  max-width: 70rem; /*  Don't let the content get too wide */
  padding: 0;
}

section {
  width: 95%;
  text-align: center;
  padding: 2.5% 2.5%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

h1 {
  width: 100%;
}

nav {
  height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--nav-bar);
}
