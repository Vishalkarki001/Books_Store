import React from 'react';
import About from './About';
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <div className="font-sans ">


            <section className="bg-gradient-to-r from-sky-400 to-sky-300 h-screen flex items-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Great Things Comes with Knowledge</h2>
                    <p className="text-lg mb-8">Discover amazing content and features.</p>
                    <NavLink to='/About' className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition duration-200">Get Started</NavLink>
                </div>
            </section>

         
            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="border rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
                            <p className="text-gray-700">Description of feature one goes here.</p>
                        </div>
                        <div className="border rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
                            <p className="text-gray-700">Description of feature two goes here.</p>
                        </div>
                        <div className="border rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
                            <p className="text-gray-700">Description of feature three goes here.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© 2024 My Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
