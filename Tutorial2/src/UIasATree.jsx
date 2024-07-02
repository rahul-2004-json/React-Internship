/* 
UI as a Tree
Concept: The main idea here is to think of your UI as a tree-like structure where everything is a Node. 
Just like a physical tree has branches and leaves, your UI has different components that can be nested inside each other.



Root Component: This is the top-level component that represents the entire UI.
Child Components: These are the components nested inside the root component or other components.
Leaf Components: These are the components that don’t have any children.



Virtual DOM: React uses a Virtual DOM to keep track of changes in the component tree. When a change occurs, React updates the Virtual DOM first, and then efficiently updates the actual DOM to reflect those changes.
Reconciliation: This process of updating the Virtual DOM and the real DOM is called Reconciliation. React compares the new Virtual DOM with the old one to determine the minimal set of changes required.
*/