import './App.css';

function Footer() {
  return (
    <div className="footer">
    <div className="container">
        <div className="w3_footer_grids">
            <div className="col-md-3 w3_footer_grid">
                <h3>Bize ulaşın</h3>
                <ul className="address">
                    <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>ABC caddesi 14.sokak <span>Ankara</span></li>
                    <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:contact.tr@abc.com">iletisim.tr@abc.com</a></li>
                    <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+90 555 666 88 77</li>
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                <h3>Hakkımızda</h3>
                <ul className="info"> 
                    <li><a href="about.html">Biz kimiz?</a></li>
                    <li><a href="mail.html">Bize görüşlerinizi bildirin</a></li>
                   
                    
                    
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                <h3>Ürünler</h3>
                <ul className="info"> 
                    <li><a href="products.html">Bluz</a></li>
                    <li><a href="products.html">Pantolon</a></li>
                    <li><a href="products.html">Elbise</a></li>
                    <li><a href="products.html">Ayakkabı</a></li>
                    <li><a href="products.html">Takı</a></li>
                </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
                

            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
    <div className="footer-copy">
        <div className="footer-copy1">
            <div className="footer-copy-pos">
                <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
            </div>
        </div>
        <div className="container">
            <p>&copy; Staj projesidir <a >W3layouts</a></p>
        </div>
    </div>
</div>
  )
}
export default Footer;