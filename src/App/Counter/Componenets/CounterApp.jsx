import React from 'react';
import {connect } from 'react-redux'
import CounterDecrement from './CounterDecrement';
import CounterIncrement from './CounterIncrement';
import CounterValue from './CounterValue';





function CounterApp(){
    return <div ClassName="ui-App">
            <div ClassName="ui-counter">
              <CounterDecrement/>
              <CounterValue/>
              <CounterIncrement/>
            </div>
        </div>

    
}
export default connect()(CounterApp);