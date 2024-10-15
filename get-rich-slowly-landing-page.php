<?php
/*
Template Name: Get Rich Slowly Landing Page
*/

get_header();
?>

<div class="landing-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-4">
            <h1 class="text-5xl font-bold mb-6">The Truth About Passive Income That No One Will Tell You</h1>
            <h2 class="text-3xl mb-8">No Courses to Buy, No Overnight Riches, Just Real Strategies for Lazy People Who Want Steady Cash Flow.</h2>
            <p class="text-xl mb-8">Discover the brutally honest guide to making passive income on your terms. Ready to ditch the get-rich-quick lies?</p>
            <a href="#" class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105">
                Get the Book Now
            </a>
        </div>
    </section>

    <!-- What You Will Learn Section -->
    <section class="learn py-20 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mb-12 text-center">What You'll Learn from "Get Rich Slowly"</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <?php
                $learn_points = [
                    "The reality of 'passive income' and how to make it truly passive (spoiler: it still takes work upfront).",
                    "AI tools that will do the heavy lifting for you (and how to use them properly).",
                    "The real methods behind self-publishing, affiliate blogs, print-on-demand, and dropshipping that no guru will tell you.",
                    "How to avoid the most common pitfalls of side hustles, from dropshipping disasters to crypto traps.",
                    "Scaling up your side hustle to an actual income stream without losing your sanity."
                ];

                foreach ($learn_points as $point) {
                    echo '<div class="flex items-start">';
                    echo '<svg class="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
                    echo '<p class="text-lg">' . $point . '</p>';
                    echo '</div>';
                }
                ?>
            </div>
            <div class="text-center mt-12">
                <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105">
                    Ready to Learn? Get the Book!
                </a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mb-12 text-center">What Readers Are Saying About Get Rich Slowly</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php
                $testimonials = [
                    [
                        "quote" => "Finally, someone who tells it like it is! I've tried dozens of passive income strategies, and this book is the first that's realistic.",
                        "author" => "John D., Amazon Reviewer"
                    ],
                    [
                        "quote" => "This book saved me from wasting thousands on useless courses. The chapter on affiliate blogs alone is worth the price.",
                        "author" => "Sarah L., Entrepreneur"
                    ],
                    [
                        "quote" => "If you're tired of the BS around passive income, this is your book. I went from being clueless to having my first profitable side hustle in 6 months.",
                        "author" => "Emma R., Side Hustle Enthusiast"
                    ]
                ];

                foreach ($testimonials as $testimonial) {
                    echo '<div class="bg-white p-6 rounded-lg shadow-lg">';
                    echo '<p class="text-lg mb-4">"' . $testimonial['quote'] . '"</p>';
                    echo '<p class="font-bold">- ' . $testimonial['author'] . '</p>';
                    echo '</div>';
                }
                ?>
            </div>
            <div class="text-center mt-12">
                <a href="#" class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105">
                    Join Thousands of Readers – Buy Now!
                </a>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq py-20 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div class="space-y-8">
                <?php
                $faqs = [
                    [
                        "question" => "How is this book different from other passive income guides?",
                        "answer" => "Most books sell you on the dream of getting rich quickly. Get Rich Slowly breaks down real, actionable strategies, cutting through the BS, and showing you how to actually make money (without the fluff)."
                    ],
                    [
                        "question" => "Do I need any prior experience to get started?",
                        "answer" => "Nope. This book is written for beginners and lazy pros alike. Whether you're a first-timer or you've already tried and failed at side hustles, you'll find step-by-step instructions that don't require you to be a tech genius."
                    ],
                    [
                        "question" => "How long will it take before I see results?",
                        "answer" => "It depends on the method you choose, but remember: this is Get Rich Slowly. You're not going to retire overnight, but you can expect a trickle of income that builds into something substantial over time."
                    ]
                ];

                foreach ($faqs as $faq) {
                    echo '<div class="bg-white p-6 rounded-lg shadow-lg">';
                    echo '<h3 class="text-2xl font-bold mb-4">' . $faq['question'] . '</h3>';
                    echo '<p class="text-lg">' . $faq['answer'] . '</p>';
                    echo '</div>';
                }
                ?>
            </div>
            <div class="text-center mt-12">
                <a href="#" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105">
                    Still Got Questions? Grab Your Copy Now!
                </a>
            </div>
        </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-6">Stop Dreaming, Start Earning (Slowly)</h2>
            <p class="text-xl mb-8">If you're ready to stop chasing quick-fix schemes and start building real passive income streams that grow over time, Get Rich Slowly is for you. No flashy promises, no fake gurus—just practical, step-by-step advice to help you get paid while staying sane.</p>
            <a href="#" class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-2xl transition duration-300 transform hover:scale-105">
                Get the Book and Start Your Journey to Real Passive Income Today!
            </a>
        </div>
    </section>
</div>

<?php
get_footer();
?>