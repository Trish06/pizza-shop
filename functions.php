<?php
require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';

if ( ! function_exists( 'my_theme_name_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since My theme name 1.0
	 *
	 * @return void
	 */
	function my_theme_name_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;
add_action( 'after_setup_theme', 'my_theme_name_support' );


/**
 * Enqueue styles.
 */

 function reg_style() {

	wp_register_style('style', get_template_directory_uri() . '/dist/css/app.css', [], 1, 'all');
  wp_enqueue_style('style');

	wp_enqueue_style( 'bootstrap-min', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css', array(), '5.3', 'all');

	wp_enqueue_style( 'bootstrap-hero', 'https://unpkg.com/bs-brain@2.0.3/components/heroes/hero-1/assets/css/hero-1.css', array(), '5.3', 'all');

	wp_enqueue_style( 'bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css');

	wp_enqueue_style( 'fontawesome-icons', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');

}
add_action( 'wp_enqueue_scripts', 'reg_style' );

/**
 * Enqueue scripts.
 */

function reg_scripts() {

  wp_enqueue_script('jquery');

  wp_register_script('app',get_template_directory_uri() . '/dist/js/app.js', ['jquery'], 1, true);
  wp_enqueue_script('app');

	wp_enqueue_script( 'bootstrap-bundle', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3'. true);

}
add_action( 'wp_enqueue_scripts', 'reg_scripts' );


/**
 * Theme Options, Title, Logo
 */

  add_action( 'after_setup_theme', function() {

    add_theme_support( 'title-tag');
		add_theme_support('menus');
		add_theme_support('widgets');
		add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);

    add_theme_support( 'post-thumbnails', array( 'post', 'page') );

  });

	
 /**
 * Register Menu
 */

register_nav_menus(
	array(
		'top-menu' => 'Top Menu Location',
		'mobile-menu' => 'Mobile Menu Location',
		'footer-menu' => 'Footer Menu Location',
	)
);

/**
 * Menu Class
 */
function add_class_li($classes,$item,$args) {
	if(isset($args-> li_class)) {
		$classes[] = $args->li_class;
}
if(isset($args-> active_class) && in_array('current-menu-item',$classes)) {
	$classes[] = $args->active_class;
}
return $classes;
}
add_filter( 'nav_menu_css_class', 'add_class_li', 10, 3);

function add_anchor_class($attr,$item,$args) {
	if(isset($args->a_class)){
		$attr['class'] = $args->a_class;
	}
	return $attr;
}
add_filter('nav_menu_link_attributes', 'add_anchor_class', 10, 3);

/**
 * Custom Fonts
 */

function enqueue_custom_fonts() {
	if(!is_admin()) {
		wp_register_style('montserrat', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
	  wp_register_style('poppins', 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    wp_enqueue_style('montserrat');
    wp_enqueue_style('poppins');
  }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_fonts');
