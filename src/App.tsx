import React from 'react';
import { Book, DollarSign, ShieldCheck, Clock, ThumbsUp, CheckCircle, Star, User, BarChart, PiggyBank, TrendingUp, Award, Coffee } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-600 text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Get Rich Slowly</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#learn" className="hover:text-blue-200">What You'll Learn</a></li>
              <li><a href="#testimonials" className="hover:text-blue-200">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-blue-200">FAQ</a></li>
              <li><a href="#cta" className="hover:text-blue-200">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Get Rich Slowly – Your No-BS Guide to Building Real Passive Income (Without Losing Your Sanity!)</h2>
          <h3 className="text-3xl mb-6">The Truth About Passive Income That No One Will Tell You</h3>
          <p className="text-2xl mb-8">No Courses to Buy, No Overnight Riches, Just Real Strategies for Lazy People Who Want Steady Cash Flow.</p>
          <p className="text-xl mb-8">Discover the brutally honest guide to making passive income on your terms. Ready to ditch the get-rich-quick lies? Click below to grab your copy now!</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-2xl transition duration-300 transform hover:scale-105">
            Get the Book Now
          </button>
        </section>

        <section id="learn" className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center">What You'll Learn from "Get Rich Slowly"</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <DollarSign className="text-green-500 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">The Reality of "Passive" Income</h4>
              <p>Discover how to make income truly passive (spoiler: it still takes work upfront).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart className="text-green-500 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">AI Tools for Heavy Lifting</h4>
              <p>Learn about AI tools that will do the heavy lifting for you (and how to use them properly).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Book className="text-green-500 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Real Methods Exposed</h4>
              <p>Uncover the real methods behind self-publishing, affiliate blogs, print-on-demand, and dropshipping that no guru will tell you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ShieldCheck className="text-green-500 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Avoid Common Pitfalls</h4>
              <p>Learn how to avoid the most common pitfalls of side hustles, from dropshipping disasters to crypto traps.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="text-green-500 w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Scale Your Side Hustle</h4>
              <p>Discover how to scale up your side hustle to an actual income stream without losing your sanity.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105">
              Ready to Learn? Get the Book!
            </button>
          </div>
        </section>

        <section id="testimonials" className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center">What Readers Are Saying About Get Rich Slowly</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="text-yellow-400 w-8 h-8 mb-4" />
              <p className="italic mb-4">"Finally, someone who tells it like it is! I've tried dozens of passive income strategies, and this book is the first that's realistic."</p>
              <div className="flex items-center">
                <User className="text-gray-400 w-6 h-6 mr-2" />
                <div>
                  <p className="font-semibold">John D.</p>
                  <p className="text-sm text-gray-600">Amazon Reviewer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="text-yellow-400 w-8 h-8 mb-4" />
              <p className="italic mb-4">"This book saved me from wasting thousands on useless courses. The chapter on affiliate blogs alone is worth the price."</p>
              <div className="flex items-center">
                <User className="text-gray-400 w-6 h-6 mr-2" />
                <div>
                  <p className="font-semibold">Sarah L.</p>
                  <p className="text-sm text-gray-600">Entrepreneur</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="text-yellow-400 w-8 h-8 mb-4" />
              <p className="italic mb-4">"If you're tired of the BS around passive income, this is your book. I went from being clueless to having my first profitable side hustle in 6 months."</p>
              <div className="flex items-center">
                <User className="text-gray-400 w-6 h-6 mr-2" />
                <div>
                  <p className="font-semibold">Emma R.</p>
                  <p className="text-sm text-gray-600">Side Hustle Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105">
              Join Thousands of Readers – Buy Now!
            </button>
          </div>
        </section>

        <section id="faq" className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">How is this book different from other passive income guides?</h4>
              <p>Most books sell you on the dream of getting rich quickly. Get Rich Slowly breaks down real, actionable strategies, cutting through the BS, and showing you how to actually make money (without the fluff).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Do I need any prior experience to get started?</h4>
              <p>Nope. This book is written for beginners and lazy pros alike. Whether you're a first-timer or you've already tried and failed at side hustles, you'll find step-by-step instructions that don't require you to be a tech genius.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">How long will it take before I see results?</h4>
              <p>It depends on the method you choose, but remember: this is Get Rich Slowly. You're not going to retire overnight, but you can expect a trickle of income that builds into something substantial over time.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105">
              Still Got Questions? Grab Your Copy Now!
            </button>
          </div>
        </section>

        <section id="cta" className="text-center mb-20">
          <h3 className="text-3xl font-semibold mb-6">Stop Dreaming, Start Earning (Slowly)</h3>
          <p className="text-xl mb-8">If you're ready to stop chasing quick-fix schemes and start building real passive income streams that grow over time, Get Rich Slowly is for you. No flashy promises, no fake gurus—just practical, step-by-step advice to help you get paid while staying sane.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-2xl transition duration-300 transform hover:scale-105">
            Get the Book and Start Your Journey to Real Passive Income Today!
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">About the Author</h4>
              <p>John Doe is a renowned financial expert with over 20 years of experience in personal finance and investing.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p>Email: support@getrichslowly.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Get Rich Slowly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;