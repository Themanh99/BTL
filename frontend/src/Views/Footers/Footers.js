import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
            <i class="fas fa-shoe-prints"></i>
          <a href="http://google.com">Anh Cherry</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div style={
          {

          }
        }>
        <iframe title="12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119597.42691203956!2d105.9789924774454!3d20.48901872214842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135db704b6eb52d%3A0x4ab4ddc297fd39e3!2zQsOsbmggTOG7pWMsIEjDoCBOYW0sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1620625077049!5m2!1svi!2s" width={300} height={100} style={{"border":"0"}} allowFullScreen loading="lazy" />
        <iframe title="12" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAnh-Cherry-105297641736104&tabs=timeline&width=200&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={200} height={100} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        
        </div>
        <div className="copyright">Copyright &copy; 2021 Thế Mạnh</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;