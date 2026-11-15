<!-- header site -->
<a href=""></a>
<header class="container-fluid">
      <div class="row">
        <div class="navbar navbar-default menu_block">
          <div class="container-fluid"> 
            <div class="navbar-header .col-lg-3 col-md-3 .col-sm-3">
              <a href="../index.php" class="link_site">
              	<img src="../img/logo.svg" class="muscovites" alt="logotype">
              </a>
               <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#res-menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
               </button>
            </div>
            <nav class="collapse navbar-collapse menu .col-lg-7 col-md-7 .col-sm-7" id="res-menu">
                <ul class="nav navbar-nav menu_item">
                  <li>
                    <a href="../index.php" class="a_item">О нас</a>
                  </li>
                  <li>                    
                    <a href="school.php">Школа</a></li>
                  <li>
                    <a href="passage.php">Галерея</a>
                  </li>
                  <li>
                    <a href="contacts.php">Контакты</a>
                  </li>
                </ul>
              </nav>

              <div class="contact navbar-header .col-lg-2 col-md-2 .col-sm-2">
                <div class="contact_block"> <!-- contact_block -->
                  <div class="phone_block phones">
                   <span class="phone">+7 (915)390-99-15</span>
                  </div>
                  <script>
                    jQuery(document).ready(function($) {
                        $('.popup-with-form').magnificPopup({
                         type: 'inline',
                         focus: '#name'
                      });
                    });
                  </script>
                  <div class="callback phones">
                    <a href="#form-popup" class="popup-with-form">Заказать обратный звонок</a>
                  </div>
                  <ul class="network">
                    <li>
                      <a href="">
                        <img src="../img/icon/vk.svg" alt="VK" class="network_img">
                      </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="../img/icon/facebook.svg" alt="facebook" class="network_img">
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="../img/icon/instagram.svg" alt="instagram" class="network_img">
                        </a>
                      </li>
                     <li>
                      <a href="">
                        <img src="../img/icon/mail.svg" alt="mail" class="network_mail">
                      </a>
                    </li>
                 </ul>
              </div> <!-- contact_block -->

              <div id="form-popup" class="white-popup mfp-hide">
                <div class="container_modal_form">
                  <buttom title="Close (Esc)" type="button" class="mfp-close close_form">X</buttom>
                  <form action="../mail/form.php" method="post" class="modal_form">
                    <fieldset class="modal_form_line">
                      <div class="call_back">
                        <h6>Оставьте заявку и мы перезвоним Вам!</h6>
                      </div>
                      <div class="modal_form_elem">
                        <label for="name_modal" class="form_name">Имя</label>
                        <input id="name_modal" class="inputbox" type="text" name="name" placeholder="Ваше имя" />
                      </div>
                      <div class="modal_form_elem">
                        <label for="phone_modal" class="form_name">Телефон</label>
                        <input id="phone_modal" class="inputbox" type="text" name="phone" placeholder="Ваш номер телефона" />
                      </div>
                      <div>
                        <button class="btn btn-default modal_form_btn" name="submit">Отправить</button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>

            </div>

          </div> <!-- container -->
        </div> <!-- menu_block -->
        
      </div>
    </header>