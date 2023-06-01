const data=[
 {
  id:1,
  name:'family',
  img:'./images/image-12.jpeg',
  category:'wedding',
  price:'2500',
  desc:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione voluptatibus illum consectetur maiores ut sint' 
 },
 {
  id:2,
  name:'chocolate cookies',
  img:'./images/image-9.jpeg',
  category:'wedding',
  price:'200',
  desc:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione voluptatibus illum consectetur maiores ut sint' 
 },
 {
  id:3,
  name:'cream-triangle',
  img:'./images/image-6.webp',
  category:'birthday',
  price:'180',
  desc:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione voluptatibus illum consectetur maiores ut sint' 
 },
 {
  id:4,
  name:'strawberry-top',
  img:'./images/image-7.webp',
  category:'surprise',
  price:'180',
  desc:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione voluptatibus illum consectetur maiores ut sint quasi vero obcaecati provident, amet vel. Tenetur iusto'
 },
 {
  id:5,
  name:'honey-smeared',
  img:'./images/image-3.jpeg',
  category:'birthday',
  price:'120',
  desc:'  Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
 },
]

const productsCont=document.querySelector('.section-center')
const BtnContainer=document.querySelector('.btn-container')
bannerBtn=document.querySelector('.scroll')
const navbar=document.getElementById('nav')

const links=document.querySelector('.links')
const btn=document.querySelector('.nav-toggle')
btn.addEventListener('click',()=>{
 if(links.classList.contains('show-links')){
links.classList.remove('show-links')
 }
 else{
  links.classList.add('show-links')

 }
})
window.addEventListener('DOMContentLoaded',()=>
{displayProducts(data),
displayfilterBtns()
})

const displayProducts=(items)=>{
 const Items=items.map((item)=>{
  return `  <article class="single-event" data-id=${item.category}>
          <img
            src=${item.img}
            alt=${item.name}
            class="event-img"
           
          />
          <div class="article-div">
            <header class="header">
              <h4 class="name">${item.name}</h4>
              <h5 class="price">$${item.price}</h5>
            </header>
            <div class="desc">
             ${item.desc}
            </div>
          </div>
        </article>`
 }).join(' ')
 productsCont.innerHTML=Items
}

// filtering

const displayfilterBtns=()=>{
 const categories=data.reduce((values,item)=>{
  if(!values.includes(item.category)){
   values.push(item.category)
  }
  return values;
 },
 ['all']
 );
 const categoryBtns=categories.map((category)=>{
  return`<button type="button" class="btn filter-btn" data-id=${category}>${category}</button>`
 }).join(' ')
 BtnContainer.innerHTML=categoryBtns
 const filterBtns=[...BtnContainer.querySelectorAll('.filter-btn')]
 filterBtns.forEach(btn=>{
  btn.addEventListener('click',(e)=>{
 const btnCategory=e.currentTarget.dataset.id;
const itemCategory=data.filter(item=>{
 if(item.category === btnCategory){
  return item;
 }
})
if(btnCategory === 'all'){
 displayProducts(data)
}
else{
 displayProducts(itemCategory)
}
  })
 })
}

bannerBtn.addEventListener('click',(e)=>{
const id=e.currentTarget.getAttribute('href').slice(1)
const element=document.getElementById(id)
const navHeight=navbar.getBoundingClientRect().height;
let position=element.offsetTop-navHeight
console.log(position);
window.scrollTo({
 left:0,
 top:position,
})
})