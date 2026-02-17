import {Welcome} from "./Welcome"
import Button from "./Button"
import {UserProfile} from "./UserProfile"
import {ContactForm} from "./ContactForm"
import {StyledForm} from "./StyledForm"
import {Profile} from "./Profile"
import {Product} from "./Product"
import {Greeting} from "./Greeting"
import {UserInfo} from "./UserInfo"
import {UserCard} from "./UserCard"
import {ProductList} from "./ProductList"
import './App.css'




function App() {

  return (
    <div>
   <ProductList/>
   <UserCard name="Ali" age={14} weight={56} height={172}/>   
   <UserInfo name="Ali" age={14} weight={56} height={172}/>    
   <Greeting name="kamran" message="Goodmorning"/>
   <Greeting name="Hamza"/>
   <Greeting message="Welcome"/>
   <Greeting/>
   <Product name="Iphone 17 PM" price={1200} instock={true} categories={["Gaming","electrinics","entertainment"]} />   
   <Welcome name="Hamza" alias="Batman"/>
   <Welcome name="Ali" alias="Superman"/>
   <Welcome name="Wasey" alias="Spiderman"/>
   <Profile/>   
   <StyledForm/>
   <ContactForm/>
   <UserProfile/>   
   
   <Welcome name="Kamran" alias="The special one"/>
   <Button/>
   </div>
  )
}

export default App
