import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import axios from 'axios';






function App() {
  return(
  <div className = 'App'>
     <Table/> {/*} Выносим компонент таблицы отдельно */}
    </div>
  )
}

export default App;

