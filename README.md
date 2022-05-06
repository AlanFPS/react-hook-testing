React created virtual DOM

in react you return html tags

Virtual DOM
Passing Props
State Hooks
Effect Hooks
Lifting State up
Routing
connecting to a backend

virtual DOM
index.js (only 2 things to change ever - add routing - add state provider)
App.js (final parent of the DOM)

<Hello name="Mike" age="29" /> props is an object

function Hello(props) --- always props

next js (for multipage)for more complex apps

before return is all JS and after return is all tags

one that guesses a random nuber and call it 3 times
modify hello, so it will say name, fav color, fav cereal tupe

&nbsp; (to add white space in REACT)

short cut to set up components rfce enter

if server issues:
npm audit fix --force

{tweetsArray.map(function(specificTweet){
return<Tweet tweet={SpecificTweet}/>
})

pure function versus impure function
pure function - treated as a box (never any side effect) referred to as stateless

example of pure function
function add(a,b) {
return a+b
}

example of impure function - (something that is introduced outside the function
and not introduced as parameter
let c = 1
function add(a,b) {
c++
return a+b+c
}

impure function should best be avoided

stateful component (somthing that can hold on to values and change)

Ctrl + mouser over + click on components adn it will open up the compoenent

<React.Fragment>
</React.Fragment> Using this react won't create a DOM node
OR <> </>

onChange={(e) => setUsername(e.target.value)}

review - hooks-testing from the respository

colors.json - in src
[
{ "color" = "red"
"id" = "248902809"
},
{ "color" = "red"
"id" = "248902809"
}
]

import colorsJson from './/'

Objects are not valid as a React Child (erro)
trying to map an object but DOM can't handle objects

each child needs aunique

{truthyStatement && SOMETHING}

{individualColor.color === "orange" && <p>FAVORITE</p>}

turnary operator - is like if else - preferred use for on condidtion but you can chain
isComplete ? "this this" : "else"

useEffect
Axios

Routing

npm react-router-dom

index.js - router or state management tool like redux (only these two time to)

import {BrowserRouter} from ''

wrap <BrowerRouter> around <App /> </BrowserRouter>

App.js
there should be an order to things that you import
first line should be
import React
--next-- packages
import { Routes, Route, Link } from "react-"

css - at the end

Routes used to be called Switch

<Routes>
<Route path='/hover' element={<Hover />}/>
<Route path='/hover/:name' element={<Hover />}/>
<Route path='/*' element={<NotFound />}/>
</Routes>

404 - create router - NotFound.js

import {useParams } from ""

Link to="/colors">Go to Colors</Link>

json web token instead of sessions

Import from react-router-dom

BrowserRouter - This goes in index.js, wrapped around <App/>.
This makes the router accessible to the app
Routes - The container that holds all pages
Route - The individual pages
Link - The equivalent of the <a> tag
useParams - used to pull dynamic values out of the url
useNavigate - 'redirects' to a different page
