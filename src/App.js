import React from 'react'
import Greet from './components/GreetFunctional'
import Welcome from './components/WelcomeClass'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import ChildComponent from './components/ChildComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameListt'
import Style from './components/Style'
import Inline from './components/inline'
import Form from './components/Form'
import LifecycleA from './components/lifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComponent from './components/PureComponent'

export class App extends React.Component {
  render() {
    return (
      <div className='app'>
       
       
        <PureComponent />
     
        {/*          
            <Greet name="john" wews2 = '1111'> <p> 1st child of john</p>  </Greet>
            <Greet name="joseph" wews2 = '1111' />
            <Greet name="jade" wews2 = '1111' />

            <Welcome name="john" wews = '1111'> <p> 1st child of john</p>  </Welcome>
            <Welcome name="joseph" wews = '1111' />
            <Welcome name="jade" wews = '1111' />
            
            <Table />
            <FragmentDemo />
            <Form /> 
            <h2 className={StyleModule.success}>Module Style</h2>
            <Inline />   
            <Style primary={true} />             
            <NameList />
            <UserGreeting />
            <ParentComponent />
            <EventBind />
            <FunctionClick />
            <Counter />
            <Message />
        */}
      </div>
    )
  }
}

export default App