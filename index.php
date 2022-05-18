<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>An Vat Viet</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>

<body>
    <!-- header section -->
    <header class="header">
        <?php include_once "modules/header/logo.php"; ?>
        <?php include_once "modules/header/nav.php"; ?>
        <?php include_once "modules/header/product_count.php"; ?>
        <?php include_once "modules/header/search_box.php"; ?>
        <?php include_once "modules/header/cart_item_container.php"; ?>
    </header>
    <?php
    if (isset($_GET['page_layout'])) {
        switch ($_GET['page_layout']) {
            case 'menu':
                include_once "modules/menu/menu.php";
                break;
        }
    } else {
        include_once "modules/main/home.php";
        include_once "modules/main/sales.php";
        include_once "modules/main/selling.php";
        include_once "modules/main/review.php";
        include_once "modules/contact/contact.php";
        include_once "modules/main/about.php";
    }

    ?>
    <!-- footer section -->
    <section class="footer">

        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
            <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="links">
            <a href="#home">Trang Chủ</a>
            <a href="#menu">Thực Đơn</a>
            <a href="#about">Giới Thiệu</a>
            <a href="#contact">Liên hệ</a>
        </div>
        <div class="credit">Địa chỉ: <span>Số 123 Đường ABC BK</span> | SĐT: 123456789</div>
    </section>
    <script src="script/script.js"></script>
</body>

</html>