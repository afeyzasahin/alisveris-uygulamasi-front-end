import './App.css';

function Menu() {
  return (
    <div className="navigation">
		<div className="container">
			<nav className="navbar navbar-default">
				
				<div className="navbar-header nav_2">
					<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
				</div> 
				<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
					<ul className="nav navbar-nav">
						<li><a href="/" className="act">Anasayfa</a></li>

	

						<li className="dropdown ">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">Ürünlerimiz <b className="caret"></b></a>
							<ul class="dropdown-menu multi-column columns-3">                   
							<div class="row">
							
							<div class="col-sm-3">
							
										<ul class="multi-column-dropdown">
										<h6>Üst Giyim</h6>
											<li><a href="products.html">Bluz</a></li>
											
										</ul>
									</div>

									<div class="col-sm-3">
									
										<ul class="multi-column-dropdown">
										<h6>Accessories</h6>
											<li><a href="products1.html">Kolye</a></li>
											
											
										</ul>
									</div>

									<div class="col-sm-2">
									
										<ul class="multi-column-dropdown">
										<h6>Yeni Gelenler</h6>
											<li><a href="products2.html">Ayakkabı</a></li>
											<li><a href="products2.html">Elbise</a></li>
											<li><a href="products2.html">Pantolon</a></li>
											
										</ul>
									</div>

									<div class="col-sm-4">
										<div class="w3ls_products_pos">
											<h4>%50<i>'ye varan yaz indirimi</i></h4>
											
											<img src="../assets/images/indirim.jpg" alt=" " class="img-responsive" />
										</div>
									</div>
									<div class="clearfix"></div>
									</div>
									</ul>

										
						           </li>

						
						<li><a href="info.html">Bize Ulaşın</a></li>
						<li><a href="about.html">Biz kimiz?</a></li>


						
					</ul>
				</div>
			</nav>
		</div>
	</div>
  );
}

export default Menu;