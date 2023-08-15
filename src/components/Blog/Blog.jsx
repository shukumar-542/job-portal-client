
const Blog = () => {
    const questions = [
        {
            id: 1,
            title: 'What is react js?',
            answer: " react js is a javascript library for creating user interfaces. It is a faster and component base library. React js developed and maintained by facebook By using react easy to break down web elements into reusable components that make it more easy to manage user interface."
        },
        {
            id: 2,
            title: "What is JSX?",
            answer: " jsx(javascript XML) it is a syntax extension for react js library. In the jsx file you can write html code inside the js file. In a jsx file you need to return multiple files and wrap them into an empty fragment or div container."
        },
        {
            id: 3,
            title: "What is  react useState?",
            answer: "react useState is a react hook that provides you set the value in the component and contain the value. useState returns an array with two values. Current value will be the initial value that you set. Any event occurring value will be changed and triggered to re render."
        },
        {
            id: 4,
            title: "What are react props?",
            answer: "react props are used when we need to pass data from parent component to child component. Props value is immutable that is why child components can’t change props value. By using props we can pass any types of valid js values."
        },
        {
            id: 5,
            title: "What is the component in react?",
            answer: "component is a fundamental concept for building  user interface. Compone is  similar in different in data. And a regular javascript function.component name always starts with a capital letter.and return jsx markup language."
        },
        {
            id: 6,
            title: "What is Virtual DOM?",
            answer: "In react virtual dom is like actual dom. When any update appears in react component then virtual dom compares the actual dom with virtual dom where the content will change then virtual dom update only this difference. Virtual dom done this work by diif algorithm."
        }
    ]
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-serif font-semibold p-10">Our Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {
                    questions.map(question => <div key={question.id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-serif">{question.title}</h2>
                            <p>{question.answer}</p>
                            
                        </div>
                    </div>)
                }
            </div>
           

           

        </div>
    );
};

export default Blog;