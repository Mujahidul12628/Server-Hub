import React from 'react';
import DynamicTittle from '../Hook/DynamicTittle';

const Blog = () => {

    DynamicTittle('blog')

    return (

        <div className='w-full max-w-7xl mx-auto mt-10 mb-10 p-5 md:p-0'>


            <div className='text-center'>
                <h1 className='font-semibold text-3xl mb-5'>Blogs Component</h1>

            </div>

            <div className='grid grid-cols-1'>

                <div className='flex flex-col justify-center items-center border-2 border-slate-400 m-5 p-5 '>
                    <div className='text-justify'>
                        <h5 className=' text-2xl p-1 font-medium mb-4 text-center'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
                        <div className='my-5'>
                            <b >What is an access token and refresh token:</b> <span>
                                Access tokens and refresh tokens are credentials used in authentication. Access tokens authorize resource access, while refresh tokens obtain new access tokens. They enhance security by limiting token lifespan, reducing reauthentication needs, and mitigating unauthorized access risks.
                            </span>
                        </div>
                        <b >How do they work and where should we store them on the client-side:</b> <span>After successful authentication, the server issues an access token and a refresh token to the client.
                            <b>(Access Token)</b> Store the access token securely, preferably in memory or a short-lived storage mechanism, such as browser local storage or session storage. Ensure protection against cross-site scripting (XSS) attacks.
                            <b>(Refresh Token)</b> Store the refresh token securely, typically in a more persistent storage mechanism, such as an HTTP-only cookie or a secure server-side session. This mitigates the risk of token theft from client-side storage.
                        </span>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center border-2 border-slate-400 m-5 p-5 '>
                    <div className='text-justify'>
                        <h5 className=' text-2xl p-1 font-medium mb-4 text-center'>Compare SQL and NoSQL databases?</h5>
                        <div className='flex flex-col '>
                            <div>
                                <b>SQL Databases:</b><li>Relational data model with structured tables.</li>
                                <li>Query language for defining and manipulating data.</li>
                                <li>ACID transactions for maintaining data integrity.</li>
                                <li>Suitable for complex relationships, structured data</li>
                                <li> Scaling vertically (adding more resources to a single server).</li>
                            </div>
                            <div className='mt-5'>
                                <b>NoSQL Databases:</b><li>Relational data model with structured tables and predefined schemas.</li>
                                <li>Various data models, such as document, key-value, columnar, or graph.</li>
                                <li>Query languages specific to each database type.</li>
                                <li>Eventual consistency models instead of ACID transactions..</li>
                                <li>Scaling horizontally (adding more servers to a cluster).</li>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center border-2 border-slate-400 m-5 p-5 '>
                    <div className='text-justify'>
                        <h5 className=' text-2xl p-1 font-medium mb-4 text-center'>What is express js? What is Nest JS ?</h5>
                        <div>
                            <b>Express JS: </b><span>Express.js is a lightweight web framework for Node.js that simplifies building web applications with routing, middleware support, template engines, and seamless integration with other modules.</span>
                        </div>
                        <div>
                            <b>Nest JS: </b><span>Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications. It combines the best features of modern JavaScript with a modular architecture, dependency injection, and built-in support for TypeScript, making it ideal for creating robust and maintainable applications.</span>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center border-2 border-slate-400 m-5 p-5 '>
                    <div className='text-justify'>
                        <h5 className=' text-2xl p-1 font-medium mb-4 text-center'>What is MongoDB aggregate and how does it work?</h5>
                        <p >
                            The MongoDB aggregate function is a powerful tool for data analysis and processing. It operates on a pipeline-based approach, where stages are chained together to transform and manipulate data. Each stage applies operations like filtering, grouping, projecting, sorting, and more. It enables developers to perform complex calculations, join data from multiple collections, and derive meaningful insights from MongoDB documents. The aggregate function is flexible, scalable, and efficient, making it a valuable feature for extracting valuable information from data collections. </p>
                    </div>

                </div>



            </div>

        </div>
    );
};

export default Blog;

