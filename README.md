# News Vue JS

##### A task
<details>
  <summary>Implement an application that can display the following pages:</summary>
  <ul>
    <li>/ - create</li>
    <li>/login - login and password entry page</li>
    <li>/news - page with news (any information of the same type)</li>
    <li>/profile - a page with accessible text, inaccessible without authorization</li>
  </ul>
</details>
<details>
  <summary>Implement links on the site, in the header or footer:</summary>
  <ul>
    <li>To main (/)</li>
    <li>News (/news)</li>
    <li>Profile (/profile)</li>
  </ul>
</details>
<details>
  <summary>More details:</summary>
  <p>If the user clicks on the "profile" page and he is not "authorized" - go to the page /login</p>
  <p>The login form (/login) accepts "fake" data:<br>
    username: Admin<br>
    password: 12345
  </p>
  <p>If other data is entered, the following messages are displayed:<br>
    Username or password entered incorrectly<br>
    If the data is correct, then redirect to the / profile page
  </p>
  <p>User authorization information can be stored in localStorage with a simple parameter true / false. You don't need to implement the database.</p>
  <p>Throw everything you need through Vuex.</p>
  <p>The design (design) is not important. Make it so that you can comfortably watch the example in a browser.</p>
</details>

---
### Used techs
* Vue JS
* Vuex
* SCSS
* Materializecss


### Demo
### https://bogdanaks.github.io/news-test
