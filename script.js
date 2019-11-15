namer=unescape(location.search).split('=')[1];
adr=location.href;
adr=adr.split('/');
adr=(!adr[adr.length-1])?'index':(namer)?'contact':adr[adr.length-1].split('.')[0];
fani=(adr!='index');
fcon=(adr=='contact');
fadr=fani&&(!fcon);
fam=fcon||(adr=='furniture');
names=['b','contact','design','furniture','interer','index','l'];
maines=new Array(names.length);
for(var i in names)
     {
      maines[i]=new Image;
      maines[i].src='img/'+srcs[i];
     }
amaines=new Array(names.length);
for(var i in names)
     {
      amaines[i]=new Image;
      amaines[i].src='img/'+asrcs[i];
     }
if(fani)for(var i=0;i<eval(adr).length;i++)eval(adr)[i]=new Image;
function loadf(n,m)
{
if(fani)for(var i=n;i<m;i++)
  {
eval(adr)[i].src=adr+'/'+i+'.jpg';
if(adr!='contact')document.images['m'+i].src=eval(adr)[i].src;
  }
}
function $(id){return document.getElementById(id)};
function _(id){return document.images[id]};
function set()
{
H=document.body.clientHeight;
W=document.body.clientWidth;
var lft=Math.round(0.5*(W-913));
lft=(lft>0)?lft:0;
var hght=(H>598)?H:598;
for(var i in names)
    {
_(i).style.left=lft+lefts[i];
_(i).style.top=tops[i];
_(i).src=maines[i].src;
if((i!=0)&&(i!=6))
       { 
_(i).onmouseover=function(){this.src=amaines[this.id].src};
_(i).onmouseout=function(){this.src=maines[this.id].src};    
_(i).onclick=function(){if(names[this.id]!=adr)location.href=names[this.id]+'.html'}
       }  
    }
if(fadr)
    {
for(var i in eval(adr))
          {
_('m'+i).onmouseover=function(){this.style.height=72;this.border=6} 
_('m'+i).onmouseout=function(){this.style.height=80;this.border=2} 
_('m'+i).onclick=function(){num=this.id.substring(1);vision()}
          }
if($('forpic'))$('forpic').style.left=lft+((adr!='interer')?46:146);
    }
if(fani)
    {
_('left').src=r[0].src;
_('left').style.left=lft+315;
_('left').onmouseover=function(){this.src=r[1].src};
_('left').onmouseout=function(){this.src=r[0].src};
_('left').onclick=function(){num--;vision()} 
_('right').src=r[2].src;
_('right').style.left=lft+600;
_('right').onmouseover=function(){this.src=r[3].src};
_('right').onmouseout=function(){this.src=r[2].src};
_('right').onclick=function(){num++;vision()} 
    }
else
    {
_('col1').style.left=lft;
_('col1').style.height=hght;
_('col2').style.left=lft+908;
_('col2').style.height=hght;
$('buf').style.left=lft;
hght=hght-598;
if(hght)$('buf').style.height=hght; else $('buf').style.display='none';
    } 
if($('h'))
     {
$('h').style.left=lft+lh;
$('h').style.top=th;
     }
if(fam)
  {
if(fcon)
        {
$('c0').style.left=lft;
$('c1').style.left=lft+100;
$('forfrm').style.left=lft+50;
if(!namer)
                  {
_('but').style.left=lft+240;
_('but').onmouseover=function(){this.src=abut.src}
_('but').onmouseout=function(){this.src=but.src}
_('but').onclick=function()
             {
$('c1').style.visibility='hidden';
$('forfrm').style.visibility='visible'
             }
                  }  
$('l').onmouseover=function(){this.style.color='red'}
$('l').onmouseout=function(){this.style.color='#57282B'}
$('l').onclick=function()
             {
$('c1').style.visibility='visible';
$('forfrm').style.visibility='hidden'
             }
        }
for(var i in family)
     {
p[i]=op(_('g'+i));p[i]();
_('g'+i).onclick=function(){num=this.id.substr(1);vision()}
_('g'+i).onmouseout=function(){fg=true;p[this.id.substr(1)]();clearInterval(timer)}
_('g'+i).onmouseover=function(){fg=false;p[this.id.substr(1)]();fg=true;
timer=window.setInterval(p[this.id.substr(1)],200)}
     }

loadf(0,m)
   }
else loadf(0,9);

$('ref').style.top=document.body.height-10;
document.body.style.visibility='visible'; 
}
fg=true;
function op(o){return function(){o.src=(fg)?g[o.id.substr(1)].src:ag[o.id.substr(1)].src}}
function vision()
{
_('filtr').style.left=0;
_('filtr').style.width=W;
_('filtr').style.height=600+document.body.scrollTop;
_('filtr').style.visibility='visible';
num=(num<b[mid])?b[mid]:num;
var e=b[parseInt(mid)+1]-1;
num=(num<e)?num:e;
_('light').src=eval(adr)[num].src;
var h=_('light').height
var w=_('light').width
_('light').style.left=Math.round((W-parseInt(w))*0.5);
_('light').style.top=document.body.scrollTop+Math.round((H-parseInt(h))*0.5);
_('light').style.visibility='visible';
_('left').style.top=510+document.body.scrollTop;
_('left').style.visibility='visible';
_('right').style.top=510+document.body.scrollTop;
_('right').style.visibility='visible'; 
}
f=fl=first=true;j=2;
r=new Array(4);
for(var i=0;i<4;i++)
  {
r[i]=new Image;
r[i].src='img/'+i+((fani)?'.png':'.jpg');
  } 
function rotor()
{
if(first)
   {
_('6').style.height=103;
_('6').style.width=360;
first=false;
   }  
var H=_('6').style.height.split('p')[0];
var T=_('6').style.top.split('p')[0];
if(f)
   {
T++;H--;H--;
f=(H>1);
if(H<2){var i=(fl)?j:(j>1)?j-2:3;_('6').src=r[i].src;j--};
   }
else
   {
T--;H++;H++;
f=(H>102);
   } 
_('6').style.height=H;
_('6').style.top=T;
if((j<1)&&f){j=2;fl=!fl;return}
setTimeout('rotor()',7);
}
function krash()
{
_('light').style.visibility='hidden';
_('filtr').style.visibility='hidden';
_('left').style.visibility='hidden';
_('right').style.visibility='hidden';
}
function w(txt){document.write(txt)};
function wrpic()
{
w('<TABLE width=670><TBODY>');
for(var i=0;i<m;)
                { 
w('<TR height=131><TD align=center><img id=m'+(i++)+' class=t height=80 border=2></TD>');
w('<TD align=center>'+((i<m)?'<img id=m'+(i++)+' class=t height=80 border=2></TD>':'</TD>'));
w('<TD align=center>'+((i<m)?'<img id=m'+(i++)+' class=t height=80 border=2></TD></TR>':'</TD></TR>'))  
                }
w('</TBODY></TABLE>');
}
function wrvis()
{
w('<img id="filtr" src="img/filtr.png">');
w('<img id="light" onclick="krash()" title="Чтобы вернутся на страницу кликни!">');
w('<img id="left" title="Предыдущая фотография">');
w('<img id="right" title="Следующая фотография">')
}
function wrh()
{
for(var i in heads)
  {
w('<H3 id=h'+i+' style="top:'+((navigator.appName=="Netscape")?htops[i]-20:htops[i]));
w(';left:'+hlefts[i]+'">'+heads[i]+'</H3>')
  } 
}
mid=0;
function wrstr(id,n,m)
{
w('<marquee id='+id+' scrollamount=1 scrolldelay=5 onmouseover="mid=this.id.substr(1)">');
for(var i=n;i<m;i++)w('<img id="m'+i+'" class=t height=80 border=2>');
w('</marquee>');             
}
function wrimg()
{for(var i in names)w('<IMG id='+i+(((i!=6)&&(i!=0))?' class=r>':'>'))}
function wrfam(id,n,m)
{
w('<div id='+id+' onmouseover="mid=this.id.substr(1)">');if(id!='c5')wrh();
for(var i=n;i<m;i++)w('<img id="g'+i+'" class=r>');w('</div>')
}
if(fam)
{
g=new Array(family.length);
ag=new Array(family.length);
for(var i in family)
   {
g[i]=new Image;
g[i].src='img/'+family[i]+'.jpg'
ag[i]=new Image;
ag[i].src='img/a'+family[i]+'.jpg';
   }
}
function ref()
{
w('<div id="ref">сайт создан <a href="http://www.citronmp.ru/">');
w('ООО&quot;МП&quot;Цитрон&quot;</a></div>')
}
