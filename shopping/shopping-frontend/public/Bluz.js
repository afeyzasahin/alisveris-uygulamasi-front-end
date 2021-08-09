
 import { useEffect, useState } from 'react';
 import './App.css';
 import Menu from './Menu';
 import {httpPost,httpPostwithToken} from './HttpConfig';
 
 export default function Bluz() {
	 return (
		 <div class="single">
		 <div class="container">
			 <div class="col-md-4 single-left">
				 <div class="flexslider">
					 <ul class="slides">
						 <li data-thumb="images/a.jpg">
							 <div class="thumb-image"> <img src="../assets/images/a.jpg" data-imagezoom="true" class="img-responsive" alt=""/> </div>
						 </li>
						 
					 </ul>
					 </div>
					 </div>
				
 
		 <div class="col-md-8 single-right">
				 <h3>SAMSUNG s8</h3>
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
					 <h5><i>Description</i></h5>
					 <p>   buraya bi şeyler yaz </p>
				 </div>
			 
				 
				 <div class="simpleCart_shelfItem">
					 <p><i class="item_price">***₺</i></p>
					 
						   
						 <button type="submit" class="w3ls-cart">Sepete Ekle</button>
				 
				 </div> 
			 </div>
			
				 </div>
				 </div>
	 )
 }