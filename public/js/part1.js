$(`#app`).html(`<div class="cssload-wrap">
	<div class="cssload-circle"></div>
	<div class="cssload-circle"></div>
	<div class="cssload-circle"></div>
	<div class="cssload-circle"></div>
	<div class="cssload-circle"></div>
</div> `);
setTimeout(function() {
x();
}, 6000)

function x(){
$.ajax({ 
url: "http://www.omdbapi.com/?t=Transformers&y=2007"
}).done(function(res){
console.log(res);
let html = `
<font size="5" face="Calibri Light" color="#808080">
<a href="/app">Return</a>
<center>
<img src="${res.Poster}"/>
<font color="#ce6171">
<p><font size="10">${res.Title}</font></p>
<h3> Year: ${res.Year}</h3>
<h2>Plot</h2>                                                                                                                                                                                                                                            
<font size="5" color="#ce6171">${res.Plot}</font>
<h3> Rated: ${res.Rated}</h3>
<h3> Released: ${res.Released}</h3>
<h3> Runtime: ${res.Runtime}</h3>
<h3> Genre: ${res.Genre}</h3>
<h3> Director: ${res.Director}</h3>
<h3> Writer: ${res.Writer}</h3>
<h3> Language: ${res.Language}</h3>
<h3> Country: ${res.Country}</h3>
<h3> Awards: ${res.Awards}</h3>
<h3> Metascore: ${res.Metascore}</h3>
<h3> imdbRating: ${res.imdbRating}</h3>
<h3> imdbVotes: ${res.imdbVotes}</h3>
<p>Actors</p>
<h4>${res.Actors}</h4>
</font>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dxQxgAfNzyE" frameborder="0" allowfullscreen></iframe>
<font color="#66ffcc">
<h1>Screenshots</h1>
</font>
    <main>
     <section>
         <figure>
             <a target="_blank" href="img/20071.jpg" alt="image-1" title="image-001"><img src="img/20071.jpg" width="900" height="400"></a>
           
         </figure>
         <figure>
           <a target="_blank" href="img/20072.jpg"><img src="img/20072.jpg" alt="image-2" title="image-002" width="900" height="400"></a>
          
       </figure>
       <figure>
           <a target="_blank" href="img/20073.jpg"><img src="img/20073.jpg" alt="image-3" title="image-003" width="900" height="400"></a>
          
       </figure>
       <figure>
           <a target="_blank" href="img/20074.jpg"><img src="img/20074.jpg" alt="image-4" title="image-004" width="900" height="400"></a>
           
       </figure>
       <figure>
           <a target="_blank" href="img/20075.jpg"><img src="img/20075.jpg" alt="image-5" title="image-005" width="900" height="400"></a>
          
       </figure>
         
     </section>
    </main>
</center>
`;
$('#app').html(html);
});

}

