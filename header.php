<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <?php wp_head(); ?>
</head>
<body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="100">

<!-- Navbar -->
    <!-- <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container"> -->
        <!-- Logo -->
        <!-- <a class="navbar-brand fs-4" href="#"><?php the_custom_logo(); ?></a> -->
        <!-- Toggle bar -->
        <!-- <button
          class="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->

        <!-- Sidebar -->
        <!-- <div
          class="sidebar offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        > -->
          <!-- Sidebar Hader -->
          <!-- <div class="offcanvas-header text-white border-bottom">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <?php the_custom_logo(); ?>
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div> -->
          <!-- Sidebar Body -->
          <!-- <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
            <?php wp_nav_menu(array(
              'menu' => 'top-menu',
              'menu_class' => 'navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3',
              'container' => '',
              'li_class' => 'nav-item mx-2',
              'a_class' => 'nav-link',
              'active_class' => 'active'
              )
            )?> -->

            <!-- Login /Sign Up -->
            <!-- <div
              class="d-flex flex-column flex-lg-row align-items-center gap-3"
            >
              <i class="bi bi-search"></i>
              
            </div>
          </div>
        </div>
      </div>
    </nav> -->
<!-- End of Navbar -->

 <header>
   
    <nav class="navbar navbar-expand-lg navigation-wrap">
      <div class="container">
        <a href="#" class="navbar-brand">
          <img src="<?php echo get_template_directory_uri(); ?>/images/img-pizza/logo.png" alt="Logo" class="img-fluid">
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-stream"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <?php wp_nav_menu(array(
              'menu' => 'top-menu',
              'menu_class' => 'navbar-nav ms-auto mb-2 mb-lg-0',
              'container' => '',
              'li_class' => 'nav-item',
              'a_class' => 'nav-link',
              'active_class' => 'active'
              )
            )?>
        </div>
      </div>
    </nav>
  
  </header> 

