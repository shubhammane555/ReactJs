// import { Component } from "react";
import "./App.css";
// import Greet from "./component/Greet";
// import App1 from "./component/app1";
// import Message from "./component/Massage";
// import Count from "./component/Count";
// import Child from "./component/Child";
// import SearchFilterDemo from "./component/SearchFilterDemo";
// import {ClassCount } from "./component/ClassCount";
// import Text from "./component/Classtext";
// import MyComponent from "./component/new";
// import UserDetail from "./component/UserDetail";
import App11 from './component/new1';
import { Header } from "./component/Forms";
import { Form } from "./component/Forms";
import MyDemo from "./MyDemo";
function App() {
  return (
    <div>
      {/* <Greet name='shubham' heroname='superman' >
        <p>This is childern prop</p>
      </Greet>
      <App1/>
      <Message/>
      <Count val={1}/> */}
      {/* <Child val={10} />
      <SearchFilterDemo/> */}
     {/* <ClassCount cnt={0}  />
     <Text/>
<MyComponent/> */}

<Header/>
<Form/>
<App11/>
<MyDemo/>
{/* <UserDetail/> */}


    </div>
  );
}


export default App;
