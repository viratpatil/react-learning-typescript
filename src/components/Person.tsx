import React, {ChangeEvent, createContext, FC, PropsWithChildren, useContext, useReducer, useState} from 'react';

interface Props {
    email: string;
    name: string;
    age: number;
    getName?: (name: string) => string;
}

enum HairColor{
    Blonde = "Blonde Color",
    Brown = "Diff Brown",
    Pink = "Pink Color"
}

interface userState {
  firstName: string;
  lastName: string;
}

interface ActionInterface {
  type: string;
  value: string;
}

const reducerFn = (state: userState, action: ActionInterface): userState => {
switch(action.type) {
  case 'INC': return state;
  default: return state;
}
  
}

interface TestC {
  a: number;
  b: number;
}

const TestContext = createContext<TestC | null>(null);

const TestContextProvider = ({children}: PropsWithChildren) => {

  return <TestContext.Provider value={{a: 1, b: 2}}>{children}</TestContext.Provider>
}

export const useTestContext = () => {
  return useContext(TestContext);
}

export const Person =  ({name, email, age}: Props) => {

  const [country, setCountry] = useState<string | null>("");
  const [state, dispatch] = useReducer(reducerFn, {firstName: '', lastName: ''})
  
  

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
    dispatch({type: 'INC', value: 'Virat'});
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input onChange={handleChange}></input>
      {country}
    </div>
  );
}
