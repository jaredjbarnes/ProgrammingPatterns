Design Patterns
===

There are three Categories to design patterns, they are namely, Creational, Structural, and Behavioral. These categories are known as "Purposes". What is our pattern trying to solve? Is it a Creational issue, or is it a behavioral issue.

The reason for this is that most problems can be categorized in these three ways. 

## Flexability

After figuring out what our category or "Purpose" is, then we can move to the next step. In what way will my application need to be flexable. It what way will it grow in ways I can't predict. This will determine which pattern we choose. Beacuse each pattern is flexable in different ways. 

React.js for example couldn't even dream of the ways it would be extended. What components would be built by the world. But they knew they needed a solution that was both structural and behavioral, so they used the composite pattern for the structure and the strategy pattern for the behavior. 

The Composite pattern is the component model. a component can have children, and composed with any other component. The life cycle hooks in react are exactly what the strategy pattern is. React didn't know what you would render in your component, but it could create a set of methods it could call to make decisions from there.  

This is the key to writing great software. This is also where we go very very wrong. If we don't know what our clients want in the future. We will choose the wrong pattern and not have it flexable where we need it. 