// Pure Function
// It minds its own business. It does not change any objects or variables that existed before it was called.
// Same inputs, same output. Given the same inputs, a pure function should always return the same result.

let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  //This is a bad practice of changing the preexisting variable
  //This is an example of side effect
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}


//We can fix above mistake by passing guest as a prop
function Cup({guest}){
    return <h2>This is a new guest no : {guest}</h2>
}

export default function TeaSet(){
    return (
        <>
            <Cup guest={9}/>
            <Cup guest={10}/>
            <Cup guest={11}/>
        </>
    )
}



//Local Mutation
export default function TeaGathering() {
    //We are declaring the variable inside and then doing changes
    //This is completely fine as no code outside will know that this happened 
    let cups = [];
    for (let i = 1; i <= 12; i++) {
      cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}



//What are side effects
//Anything extra that we do outside of our function scope is called side effect for eg : coffee machine giving coffee and at the same time glowing coffee ready light outside
/*
In programming, a side effect is any operation that modifies some state or interacts with the outside world in a way that is not explicitly captured by the function's return value. Side effects can occur in various forms, such as:

Modifying a global or external variable.
Changing the state of an object.
Performing I/O operations (e.g., writing to a file, printing to the console).
Triggering network requests (e.g., fetching data from an API).

*/