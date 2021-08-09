import { useEffect, useState } from 'react';
import './App.css';
import Menu from './Menu';
import {httpPost,httpPostwithToken} from './HttpConfig';
import {CartContextValue} from './ContextProvider';
import { Link } from 'react-router-dom';
import {React} from "react";

export default function Product() {


	const [categoryList,setCategoryList] = useState([]);
	const [productList,setProductList] = useState([]);
	const [cartData,dispatch] = CartContextValue()
	useEffect(()=>{
		
		getCategory();
		getCartApi()
	},[])
	
	const getCartApi = ()=>{		
		httpPostwithToken("addtocart/getCartsByUserId",{})
		.then((res)=>{				
			res.json() .then(data=>{
				if(res.ok){
					dispatch({
						"type":"add_cart",
						"data":data
					})
				
				}else{
					alert(data.message)
				}
			})
		},error=>{
			alert(error.message);
		}
		)
	}
	const addCartApi=(productObj)=>{
		let obj = {
			"productId":productObj.id,			
			"qty":"1",
			"price":productObj.price
			
		}
		httpPostwithToken("addtocart/addProduct",obj)
		.then((res)=>{		
			res.json() .then(data=>{
				if(res.ok){
					dispatch({
						"type":"add_cart",
						"data":data
					})
					alert("Sepete Eklendi..")
				}else{
					alert(data.message)
				}
			})     
		}).catch(function(res){
			console.log("Error ",res);
			
		}
		)
	}
	const getCategory = ()=>{
		httpPostwithToken("product/getAllCategory",{}).
		then((res)=>{
			res.json().then(response=>{
				if(res.ok){
					setCategoryList(response);
					getProductsByCategory(response[0].id);
				}else{
					alert("Error1")
				}
			})
			
			
		})
	}
	const getProductsByCategory = (cat_id)=>{
		let obj = {
			"cat_id":cat_id
		}
		
		httpPostwithToken("product/getProductsByCategory",obj)
		.then((res)=>{
			res.json().then(response=>{
				if(res.ok){
					if(response.length > 0){
						setProductList(response)
					}else{
						alert("Ürün bulunamadı!");	
					}
				}else{
					setProductList([])
					alert("Ürün bulunamadı!");
				}
			})
		},error=>{
			alert(error.message);
		}
		)
	}





	
    return (
        <div class="single">
		<div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/9.jpg">
							<div class="thumb-image"> <img src="../assets/images/9.jpg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Lila Fermuar Detaylı Bluz</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4" checked/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" />
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Modelin Ölçüleri: Boy: 1.76, Göğüs: 84 Bel: 60, Kalça: 89
Mankenin üzerindeki ürün S/36 bedendir.
%55 Pamuk %45 Polyester, Dokuma Kumaş
Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 10 adetten fazla stok sunulmuştur.
Listelenen fiyat 10 Ağustos 2021 tarihine kadar geçerlidir.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">69.99₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>


                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/4.jpg">
							<div class="thumb-image"> <img src="../assets/images/4.jpg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Lacivert Bağlama Detaylı Örme Bluz</h3>
				<div class="rating2">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating2">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Modelin Ölçüleri: Boy: 1.77, Göğüs: 85 Bel: 61, Kalça: 90
Mankenin üzerindeki ürün S/36 bedendir.
%100 Polyester, Örme Kumaş
Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
Listelenen fiyat 10 Ağustos 2021 tarihine kadar geçerlidir..</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">44.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/12.jpeg">
							<div class="thumb-image"> <img src="../assets/images/12.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Siyah Yırtık Detaylı Yüksek Bel</h3>
				<div class="rating3">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Terrenova koleksiyonundan Siyah Süper Yüksek Salaş Likralı jean pantolon Extra yüksek bel Salaş paça model ölçüleri: Boy: 179 cm bel: 61 cm göğüs: 88 cm kalça: 89 cm model üzerindeki ürün bedeni jeanler için, bel: 36 boy: 32 diğer ürünlerde: S
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">139.99₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/11.jpeg">
							<div class="thumb-image"> <img src="../assets/images/11.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Mavi Bel Detaylı Yüksek Bel 90's Wide</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Modelin Ölçüleri: Boy: 1.75, Göğüs: 82, Bel: 60, Kalça: 88
Mankenin üzerindeki ürün S/36 bedendir.
%100 Pamuk, Dokuma Kumaş
Düğmeli ve Fermuarlı Kapama, Yırtık Detaylı, Yüksek Bel, 90's Wide Leg
İç Boy Ölçüsü: 84 cm
Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
Listelenen fiyat 10 Ağustos 2021 tarihine kadar geçerlidir.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">129.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/13.jpeg">
							<div class="thumb-image"> <img src="../assets/images/13.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Siyah Geniş Kesim Elbise</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Modelin Ölçüleri: Boy: 1.75, Göğüs: 81 Bel: 60, Kalça: 88
Mankenin üzerindeki ürün S/36 bedendir.
%100 Polyester, Dokuma Kumaş
Omuzdan Boy: 120 cm
Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 10 adetten fazla stok sunulmuştur.
Listelenen fiyat 10 Ağustos 2021 tarihine kadar geçerlidir.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">99.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/14.jpeg">
							<div class="thumb-image"> <img src="../assets/images/14.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Yeşil Multi Desenli Sırt Dekolteli</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Modelin ölçüleri: Boy:175, göğüs:88, bel:62, kalça: 90. Mankenin üzerindeki beden s/36/1. Ürün kumaşı %100 viskon stüdyo çekimlerinde renkler ışık farklılığından dolayı değişiklik gösterebilir.
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">69.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/15.jpeg">
							<div class="thumb-image"> <img src="../assets/images/15.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Cali Glow Sneaker</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Puma Cali Glow Wn"S Te Kadın Günlük Ayakkabı - 37256301
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 5 adetten az stok bulunmaktadır.
İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.
Bir ürün birden fazla satıcı tarafından satılabilir. Ürün liste ve detay sayfalarında tüketici memnuniyeti göz önüne alınarak fiyat avantajı, teslimat hızı, iade oranları ve genel hizmet kalitesine göre belirlenmiş puanı en yüksek satıcı görünür satıcı olur. Diğer satıcılar, ürün detay sayfasında alternatif olarak listelenirler.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">699.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/16.jpeg">
							<div class="thumb-image"> <img src="../assets/images/16.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>CARINA LIFT Sneaker</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Puma Kadın Siyah Calı Glow Ayakkabı
37256302 ürün hikayesi 1980'lerde puma, california adlı rahat ayakkabıyı tanıttı. 40 yıl sonra ise bu klasik modelin yeni versiyonu ile karşınızda. Cali olarak tekrar adlandırılan modele gelişmiş kauçuk malzemeyle şıklık katıldı. Topuğunda ve kenarlarında parıltılı paneller bulunan deri üst yüzeyden tasarlanan model ismini aldığı amerikan eyaletinin yumuşak havasında tasarlandı. Detaylar kısa boy bilek yapısı deri ve sentetik üst yüzey üç parçalı kauçuk orta taban kauçuk dış taban topukta ve yanlarda parlak paneller dilde puma yazı işlemesi sol dış tarafta puma yazısı ve puma cat logosu tabanda renkle uyumlu puma cat logosu yanda klasik puma formstripe deseni
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 5 adetten fazla stok sunulmuştur.
İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.
Bir ürün birden fazla satıcı tarafından satılabilir. Ürün liste ve detay sayfalarında tüketici memnuniyeti göz önüne alınarak fiyat avantajı, teslimat hızı, iade oranları ve genel hizmet kalitesine göre belirlenmiş puanı en yüksek satıcı görünür satıcı olur. Diğer satıcılar, ürün detay sayfasında alternatif olarak listelenirler.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">556.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/17.jpeg">
							<div class="thumb-image"> <img src="../assets/images/17.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Dorika Kolye</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Kolye Zincir Uzunluğu:43 Cm 2 Yıl Garantilidir. Kararma Yapmaz.Rodyum Güçlendirmelidir.Anti Alerjeniktir. Ürün Bakımınızı Pamuklu Yumuşak Kuru Bir Bez İle Yapabilirsiniz Birlikte Gönderilen Hediye Kutusunda Muhafaza Edebilirsiniz
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">39.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/18.jpeg">
							<div class="thumb-image"> <img src="../assets/images/18.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Fimo Kolye</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Uzunluğu: 45cm
kapaması: Klips kapamalı
Aksesuarınız hediye paketi ile gönderilmektedir
Birinci sınıf üründür
ürünü birlikte gönderilen saklama kutusun da saklayabilirsiniz
Parfüm, sabun, alkol ve benzeri kimyasal maddelerden uzak tutulduğu sürece aksesuarın kullanım süresi uzar
Ürün üzerinde alerjiye, kararmaya ve oksitlenmeye karşı kaplama bulunmaktadır
Türkiye'de üretilmiştir.
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.
Bir ürün birden fazla satıcı tarafından satılabilir. Ürün liste ve detay sayfalarında tüketici memnuniyeti göz önüne alınarak fiyat avantajı, teslimat hızı, iade oranları ve genel hizmet kalitesine göre belirlenmiş puanı en yüksek satıcı görünür satıcı olur. Diğer satıcılar, ürün detay sayfasında alternatif olarak listelenirler.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">9.49</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/19.jpeg">
							<div class="thumb-image"> <img src="../assets/images/19.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Siyah Cut Out Detaylı Mayo</h3>
				<div class="rating1">
					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>
				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>Sabit Kaplı
%80 Polyamid %20 Elastan
Modelin Ölçüleri: Boy: 1.81, Göğüs: 89, Bel: 70, Kalça: 98,
Numune Beden: M/38/2
Ürünlerimiz TRENDYOL etiketi ile gönderilecektir.
Her kullanımdan sonra sabunlu ılık suda elde yıkayınız. Ağartıcı ve deterjan kullanmayınız.Mayoyu ıslak, havasız, kapalı, naylon torbada bekletmeyiniz.Tersinden sererek gölgede kurutunuz.Florasan renkler güneşte solar, klorlu su ve güneş yağı mayonuzu bozar.
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 50 adetten fazla stok sunulmuştur.
Listelenen fiyat 10 Ağustos 2021 tarihine kadar geçerlidir.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">119.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                <div class="container">
			<div class="col-md-4 single-left">
				<div class="flexslider">
					<ul class="slides">
						<li data-thumb="images/20.jpeg">
							<div class="thumb-image"> <img src="../assets/images/20.jpeg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						</li>
						
					</ul>
                    </div>
                    </div>
               

        <div class="col-md-8 single-right">
				<h3>Mürdüm Korse Detaylı Mayo</h3>
				<div class="rating1">

					<span class="starRating">
						<input id="rating5" type="radio" name="rating" value="5"/>
						<label for="rating5">5</label>
						<input id="rating4" type="radio" name="rating" value="4"/>
						<label for="rating4">4</label>
						<input id="rating3" type="radio" name="rating" value="3" checked/>
						<label for="rating3">3</label>
						<input id="rating2" type="radio" name="rating" value="2"/>
						<label for="rating2">2</label>
						<input id="rating1" type="radio" name="rating" value="1"/>
						<label for="rating1">1</label>
					</span>
				</div>

				<div class="description">
					<h5><i>Ürün Açıklaması</i></h5>
					<p>%80 Polyamid %20 Elastan
Modelin Ölçüleri: Boy: 1.76, Göğüs: 84, Bel: 69, Kalça: 89
Numune Beden: S/36/2
ÜrünlerimizTRENDYOL etiketi ile gönderilecektir.
Her kullanımdan sonra sabunlu ılık suda elde yıkayınız. Ağartıcı ve deterjan kullanmayınız.Mayoyu ıslak, havasız, kapalı, naylon torbada bekletmeyiniz.Tersinden sererek gölgede kurutunuz.Florasan renkler güneşte solar, klorlu su ve güneş yağı mayonuzu bozar.
Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.
Kampanya fiyatından satılmak üzere 10 adetten fazla stok sunulmuştur.
Listelenen fiyat 10 Ağustos 2021 tarihine kadar geçerlidir.</p>
				</div>
			
				
				<div class="simpleCart_shelfItem">
					<p><i class="item_price">129.99 ₺</i></p>
					
						  
						<button type="submit" class="w3ls-cart">Sepete Ekle</button>
				
				</div> 
			</div>
           
                </div>

                </div>
    )
}