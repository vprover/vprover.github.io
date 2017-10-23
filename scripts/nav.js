var links = new Array ("index", "download","license","usage","team", "pubs","history","trophies","projects"); 
var links_text = new Array ("Vampire", "Download","License","Usage","Team", "Publications","History","Trophies","Projects"); 


/* Resolve the location */
var loc=String(this.location);
loc=loc.split("/");
loc=loc[loc.length-1].split(".");
loc=loc[loc.length-2];
var project = String(this.location).includes("projects/");


/* Menu generating function */
function dyn_menu_gen()
{
document.write('<td class="menu">');
for(var i=0; i<links.length; i++)
{
var link = links[i]+".html";
if(project){ link = "../"+link; }
if(loc==links[i])
{
document.write('<div class="active"><a href="'+link+'">'+links_text[i]+'</a></div>');
}
else
{
document.write('<div><a href="'+link+'">'+links_text[i]+'</a></div>');
}
}
document.write('</td>');
}

/* Generate the menu */
dyn_menu_gen();


