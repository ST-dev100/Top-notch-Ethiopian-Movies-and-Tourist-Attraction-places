class ADD{
 result = document.getElementById("film-board")
 search = document.forms[0].search;
 sul()
 {
document.forms[0].addEventListener('submit',async function(e){
    e.preventDefault();
    if(document.forms[0].children[0].value === 'ta')
{
    document.getElementById("film-board").children[0].style.backgroundImage= "url('lal.jpg')";
    document.getElementById("film-board").children[1].style.backgroundImage= "url('lal2.jpg')";
    document.getElementById("film-board").children[2].style.backgroundImage= "url('lal3.jpg')";
    document.getElementById("film-board").children[3].style.backgroundImage= "url('lal4.jpg')";
    document.getElementById("film-board").children[4].style.backgroundImage= "url('25.jpg')";
    document.getElementById("film-board").children[5].classList.add('add');
    document.getElementById("film-board").children[6].classList.add('add');
}
else if(document.forms[0].children[0].value === 'film'){
    document.getElementById("film-board").children[5].classList.remove('add');
    document.getElementById("film-board").children[6].classList.remove('add');
    
    document.getElementById("film-board").children[0].style.backgroundImage= "url('1.jpg')";
    document.getElementById("film-board").children[1].style.backgroundImage= "url('2.jpg')";
    document.getElementById("film-board").children[2].style.backgroundImage= "url('3.jpg')";
    document.getElementById("film-board").children[3].style.backgroundImage= "url('6.jpg')";
    document.getElementById("film-board").children[4].style.backgroundImage= "url('9.jpg')";
    document.getElementById("film-board").children[5].style.backgroundImage= "url('10.jpg')";
    document.getElementById("film-board").children[6].style.backgroundImage= "url('lamba.jpg')";
    // document.getElementById("film-board").children[7].style.backgroundImage= "url('10.jpg')";

}
});
}
}
class Film{
  full()
  {
    document.getElementById("film-board").addEventListener('click',(e)=>{
      if(e.target.classList.contains('A')&& document.forms[0].children[0].value === 'film')
      {
        console.log(e.target)
    document.getElementById("film-board").style.display = "none";
    document.getElementById("search-engine").style.display = "none";
    document.getElementById("hello").style.display="block";
    document.getElementById("desc").textContent = "Description";
    if(e.target.style.backgroundImage === 'url("2.jpg")')
    {
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=E91ScAR60wE&t=438s";
  
     exit.textContent = "X";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "Siryet.jpeg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
  
     he.textContent= `Directed by	Yidnekachew Shumete
     Written by	Dereje Kikiru
     Produced by	Yidnekachew Shumete
     Starring	
     Girum Ermias
     Bertukan Befikadu
     Enkusilassie Workagegnehu
     Alebachew Mekonnen
     Solomon Tashe
     Thomas Tora
     Felek Kassa
     Kassahun Fisseha
     Production
     company	
     Tom Film Production
     Release date	2007
     Running time	110 minutes
     Country	Ethiopia
     Language	Amharic` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1])
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit)
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
  
    else if(e.target.style.backgroundImage === 'url("1.jpg")')
    {
  
      
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=EFxMJLQ6d6E";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "yew.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
  
     he.textContent= `Yewendoch Guday is a 2007 Ethiopian romantic comedy film directed by Henok Ayele and produced by Arkey Sera Production. The film has been domestically successful and gained large viewers in national cinemas shortly since its release on 17 February 2007. Wikipedia
     Initial release: February 17, 2007
     Director: Henok Ayele
     Cast: Shewit Kebede, Zerihun Asmamaw, Admasu Kebede, MORE
     Production company: Arkey Sera Production` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
    else if(e.target.style.backgroundImage === `url("3.jpg")`)
    { 
  
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=jPmWHAyAny4";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "si.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
  
     he.textContent= `Siset best Amharic movie` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
  
    else if(e.target.style.backgroundImage === `url("6.jpg")`)
    { 
  
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=tGtaOGPqBGI&t=1s";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "yera.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
  
     he.textContent= `Ye eras Ashekir best Amharic movie` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
    else if(e.target.style.backgroundImage === `url("9.jpg")`)
    { 
  
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=1rehFiB91mA";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "33.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
     imgg.setAttribute('style','max-width:25%')
     he.textContent= `sostegnaw ayen best Amharic movie` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
    else if(e.target.style.backgroundImage === `url("10.jpg")`)
    { 
  
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=1rehFiB91mA";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "ala.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
     imgg.setAttribute('style','max-width:25%')
     he.textContent= `አላዳንኩሽም ETHIOPIAN AMHARIC MOVIE ALADANKUSHIM FULL LENGTH NEW FILM` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
    else if(e.target.style.backgroundImage === `url("lamba.jpg")`)
    { 
  
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=bTJMOyuTVLY";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "lala.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
     imgg.setAttribute('style','max-width:25%')
     he.textContent= `Lamba Ethiopian Movie` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
      }
  })
  }
}
//Tousit attarctive Places

document.getElementById("film-board").addEventListener('click',(e)=>{
      if(e.target.classList.contains('A')&& document.forms[0].children[0].value === 'ta')
      {
        console.log(e.target)
    document.getElementById("film-board").style.display = "none";
    document.getElementById("search-engine").style.display = "none";
    document.getElementById("hello").style.display="block";
    document.getElementById("desc").textContent = "Description";
    if(e.target.style.backgroundImage === 'url("lal.jpg")')
    {
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=HBq_zOzhTqw";
  
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "lali.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
  
     he.textContent= `Outstanding Universal Value
     Brief synthesis
     
     In a mountainous region in the heart of Ethiopia, some 645 km from Addis Ababa, eleven medieval monolithic churches were carved out of rock. Their building is attributed to King Lalibela who set out to construct in the 12th century a ‘New Jerusalem’, after Muslim conquests halted Christian pilgrimages to the holy Land. Lalibela flourished after the decline of the Aksum Empire.
     
     There are two main groups of churches – to the north of the river Jordan: Biete Medhani Alem  (House of the Saviour of the World), Biete  Mariam (House of Mary), Biete  Maskal (House of the Cross), Biete Denagel (House of Virgins), Biete Golgotha Mikael (House of Golgotha Mikael); and to the south of the river, Biete Amanuel (House of Emmanuel), Biete Qeddus Mercoreus (House of St. Mercoreos), Biete Abba Libanos (House of Abbot Libanos), Biete Gabriel Raphael (House of Gabriel Raphael), and Biete Lehem (House of Holy Bread). The eleventh church, Biete Ghiorgis (House of St. George), is isolated from the others, but connected by a system of trenches.
     
     ` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1])
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit)
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
  
    else if(e.target.style.backgroundImage === 'url("lal2.jpg")')
    {
  
      
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=IJCy64adY3Y";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "vm.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%');
     imgg.setAttribute('style','max-width:25%');

  
     he.textContent= `Abuna Yemata Guh is a monolithic church located in the Hawzen woreda of the Tigray Region, Ethiopia. It is situated at a height of 2,580 metres (8,460 ft)[1] and has to be climbed on foot to reach. It is notable for its dome and wall paintings dating back to the 5th century and its architecture.` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
    else if(e.target.style.backgroundImage === `url("lal3.jpg")`)
    { 
  
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=jPmWHAyAny4";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "axum.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%');
     imgg.setAttribute('style','max-width:25%');

  
     he.textContent= `Axum, or Aksum (pronounced: /ˈɑːkˈsuːm/), is a town in the Tigray Region of Ethiopia with a population of 66,900 residents (as of 2015).[2] It is the site of the historic capital of the Aksumite Empire,[3][4][5] a naval and trading power that ruled the whole region in addition parts of West Asia as Saudi Arabia, and Yemen. It ruled the region from about 400 BCE into the 10th century.

     Axum is located in the Central Zone of the Tigray Region, near the base of the Adwa mountains. It has an elevation of 2,131 metres (6,991 feet) and is surrounded by La'ilay Maychew, a separately administered woreda of the Tigray region.
     
     In 1980, UNESCO added Axum's archaeological sites to its list of World Heritage Sites due to their historic value. Prior to the beginning of the Tigray War in 2020, Axum was a leading tourist destination for foreign visitors.` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
  
    else if(e.target.style.backgroundImage === `url("lal4.jpg")`)
    { 
  
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=KMvModjVxhM";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "hamr.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%');
     imgg.setAttribute('style','max-width:25%');

  
     he.textContent= `The Hamar are known for their unique custom of "bull jumping," which initiates a boy into manhood. First, female relatives dance and invite whipping from men who have recently been initiated; this shows their support of the initiate, and their scars give them a say on who they marry.

     The boy must run back and forth twice across the backs of a row of bulls or castrated steers, and is ridiculed if he fails.[3]
     
     The men of the tribe will often style their hair with clay, creating a sculpture of sorts that is styled with various pigments, mostly red and white, and in smoothing the clay they create very small protruding tube in which they house ostrich feathers from their hunts.` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
    else if(e.target.style.backgroundImage === `url("25.jpg")`)
    { 
  
      document.getElementById("hello").innerHTML = ""
     let he = document.createElement('h1');
     let exit = document.createElement('h1');
     let movie = document.createElement('a');
     let brea = document.createElement('br');
     movie.textContent = "Full movie Link here";
     movie.href = "https://www.youtube.com/watch?v=XwjVL3BwYtU";
     exit.textContent = "X Close";
     exit.setAttribute("id","exit");
     exit.setAttribute("style","cursor: pointer");
     let imgg = document.createElement('img');
     imgg.src = "dankil.jpg";
     imgg.setAttribute('style','float:center');
     imgg.setAttribute('style','min-width:25%')
     imgg.setAttribute('style','max-width:25%')
     he.textContent= `The Danakil Depression lies at the triple junction of three tectonic plates and has a complex geological history. It has developed as a result of Africa and Asia moving apart, causing rifting and volcanic activity. Erosion, inundation by the sea, the rising and falling of the ground have all played their part in the formation of this depression. Sedimentary rocks such as sandstone and limestone are unconformably overlain by basalt which resulted from extensive lava flows.[3]` 
     
     document.getElementById("hello").prepend(he);
     document.getElementById("hello").insertBefore(imgg,document.getElementById("hello").children[1]);
     document.getElementById("hello").appendChild(brea);
     document.getElementById("hello").appendChild(movie);
     document.getElementById("hello").appendChild(exit);
     exit.addEventListener('click',()=>{
      document.getElementById("film-board").style.display = "flex";
      document.getElementById("search-engine").style.display="flex";
    document.getElementById("desc").textContent = "Ethiopian best movies and Tursit attract places";
      document.getElementById("hello").style.display="none";
  })
    }
    

      }
  })

// document.getElementById("exit").addEventListener('click',()=>{
//     document.getElementById("film-board").style.display = "flex";
//     document.getElementById("hello").style.display="none";
// })
let add = new ADD();
let film = new Film();
add.sul();
film.full();