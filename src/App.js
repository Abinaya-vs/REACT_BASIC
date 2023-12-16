/*
import PropsArrowFunctionExample from "./Day4/PropsArrowFunctionExample.js";
import PropsClass from "./Day4/PropsClass.js";
import PropsFunction from "./Day4/PropsFunction.js";
import PropsFunctionExample from "./Day4/PropsFunctionExample.js";
import StateClassCom from "./Day4/StateClassCom.js";
import StateFunction from "./Day4/StateFunction.js";
import StateHoldObject from "./Day4/StateHoldsObject.js";
import Parent from "./Day4/ParentChildCommunication.js";
import DynamicRendering from "./Day4/DynamicRendering.js";
import TwoWayBinding from "./Day4/TwoWayBinding.js";
import DefaultProps from "./Day4/DefaultProps.js";
import DynamicRenderingexample from "./Day4/DynamicRenderingexample.js"; 
import Login from "./Component/Day5/Login.js";
import Signin from "./Component/Day5/Signin.js";
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'; 



import { SvgIcon } from "@mui/material";
import BasicButtons from "./Component/Day6/Button.js";
import List from "./Component/Day6/List.js";
import TryCatch from "./Component/Day 8/TryCatch"
import List2 from "./Component/Day6/List2.jsx"; */

import ComponentLifeCycle from "./Component/Day 8/ComponentLifeCycle"
import LifecycleClass from "./Component/Day 8/LifeCycleClass"
import LifecycleFunctional from "./Component/Day 8/LifeCycleFunction"
export default function App()
{
  return (
    /*
    <PropsFunction name ="Abinaya" sport="Boxing"></PropsFunction>
    <PropsClass college ="SKCT"></PropsClass>
    <PropsFunctionExample hob1 ="sleeping" hob2="Drawing"></PropsFunctionExample>
    <PropsArrowFunctionExample color="Purple"></PropsArrowFunctionExample>
    <StateClassCom></StateClassCom>
    <StateFunction/>
    <StateHoldObject/>
    <Parent></Parent>
    <DynamicRendering/>
    <TwoWayBinding/>
    <DefaultProps/>
    <DynamicRenderingexample/>
  */

  /*<div>
  <Router>
  <ul>
  <li>
  <Link to="/login">Login page</Link>
  </li>
  <li>
  <Link to="/signup">Signin</Link>
  </li>
  </ul>
  <Routes>
  <Route path="/login" element=<Login/>></Route>
  <Route path="/signup" element=<Signin/>></Route>
  </Routes>
  </Router>
  <TryCatch fruit="Onion"></TryCatch>
    </div> */
    <div>
    <ComponentLifeCycle></ComponentLifeCycle>
    <LifecycleFunctional></LifecycleFunctional>
    <LifecycleClass></LifecycleClass>
    </div>
  )
}

