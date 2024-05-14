import React, { useState } from 'react'

export const IndexContext = React.createContext();

const Context = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  return (
    <Context.Provider value={{ activeTab, setActiveTab, handleTabClick }}>
        {props.children}
      </Context.Provider>
  );
}

export default Context
