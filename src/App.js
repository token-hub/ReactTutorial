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
import PparentComponent from './components/PparentComponent'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import ErrorHero from './components/ErrorHero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounter2 from './components/ClickCounter2'
import HoverCounter2 from './components/HoverCounter2'
import Counter2 from './components/Counter2'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext'
import PostList from './components/Axios/PostList'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        
    
        <PostList />
        {/*          
            <Greet name="john" wews2 = '1111'> <p> 1st child of john</p>  </Greet>
            <Greet name="joseph" wews2 = '1111' />
            <Greet name="jade" wews2 = '1111' />
        
        <UserProvider value={'chenelin'}>
            <ComponentC />
        </UserProvider>

        <Counter2>
            { (chenilin, eklabush) => <ClickCounter2 count={chenilin} incrementCount={eklabush} />}
        </Counter2>

        <Counter2 render={ (count, incrementCount) => ( <ClickCounter2 count={count} incrementCount={incrementCount} /> ) } />
        <Counter2 render={ (count, incrementCount) => ( <HoverCounter2 count={count} incrementCount={incrementCount} /> ) } />

            <Welcome name="john" wews = '1111'> <p> 1st child of john</p>  </Welcome>
            <Welcome name="joseph" wews = '1111' />
            <Welcome name="jade" wews = '1111' />
            
            <ClickCounter2 />
            <HoverCounter2 />

            <HoverCounter name='john' />
            <ClickCounter />
            <ClickCounter />
            <ErrorBoundary> 
            <ErrorHero heroName={'superman'} />
            </ErrorBoundary>
            <ErrorBoundary> 
            <ErrorHero heroName={'batman'} />
            </ErrorBoundary>
            <ErrorBoundary> 
            <ErrorHero heroName={'joker'} />
            </ErrorBoundary>
            
            <PortalDemo />
            <FRParentInput />
            <FocusInput />
            <RefsDemo />
            <PparentComponent />
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