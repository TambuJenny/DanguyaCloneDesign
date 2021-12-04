
let listImg = [
 {
  id:1,
  img:'./img/PngItem_2129419.png',
  price:'56.000 Kz',
  ante: '85.000kz'
  },
  {
   id:2,
   img:'./img/PngItem_1298088.png',
   price:'106.000 Kz',
   ante: '155.000kz'
   },
   {
    id:3,
    img:'./img/PngItem_3302168.png',
    price:'46.000 Kz',
    ante: '75.000kz'
    }
]

function mouseEnterimgsmole(idelement)
{
  let getimgreference;
  let getImgid= document.getElementById(`${idelement}`)
  let imgprice = document.getElementById('nikeshoose');


 getImgid.classList.add('overmousecard');

 getImgid.addEventListener('mouseleave',()=>{
   getImgid.classList.remove('overmousecard')
 })

 listImg.forEach(element => {
  if(element.id ==idelement)
  getimgreference = element.img;
 });


  if (imgprice.classList.contains('slide-in-fwd-top'))
      {
       imgprice.classList.remove('slide-in-fwd-top')
      } 
      else
      {
        imgprice.src=getimgreference;  
        imgprice.classList.remove('slide-in-fwd-top')
       imgprice.classList.add('slide-in-fwd-top')
        
      }
       
 
 if (getImgid.classList.contains()) {
  
 }
  //alert(imgprice);
  //slide-in-fwd-top 
}

function changeColor(id)
{
    document.addEventListener('mouseenter',()=>{

    })
    let objectcub = document.getElementById(id);
    objectcub.style.cursor='pointer';
    var getcolorcub= objectcub.style.backgroundColor;
    document.body.style.background=`${getcolorcub}`;

    objectcub.addEventListener('mouseleave',()=>{
      document.body.style.background="radial-gradient(circle, rgba(246,246,246,1) 0%, rgba(255,255,255,1) 52%, rgba(246,246,246,1) 100%)";
     })
   
    
}