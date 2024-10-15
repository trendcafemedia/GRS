<?php
// Add this to your theme's functions.php file or create a separate plugin

function get_rich_slowly_enqueue_styles() {
    wp_enqueue_style('tailwindcss', 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
}
add_action('wp_enqueue_scripts', 'get_rich_slowly_enqueue_styles');

function get_rich_slowly_add_meta_tags() {
    if (is_page_template('get-rich-slowly-landing-page.php')) {
        echo '<meta name="description" content="Learn how to generate real passive income with Get Rich Slowly. No get-rich-quick scams—just honest, actionable strategies for building a side hustle that pays.">';
        echo '<meta name="keywords" content="Passive Income, Slow Passive Income, Side Hustles, Make Money Online, AI Tools for Passive Income, Affiliate Marketing, Dropshipping, Print-on-Demand">';
    }
}
add_action('wp_head', 'get_rich_slowly_add_meta_tags');

function get_rich_slowly_modify_title($title) {
    if (is_page_template('get-rich-slowly-landing-page.php')) {
        return 'Get Rich Slowly | No BS Guide to Building Passive Income';
    }
    return $title;
}
add_filter('pre_get_document_title', 'get_rich_slowly_modify_title');
?>