const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
  function animOnScroll(paramas){
    for(let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight/animStart;
      if(animItemHeight > window.innerHeight){
        animItemPoint= window.innerHeight - animItemHeight/animStart
      }

      if((pageXOffset> animItemOffset - animItemPoint) && pageXOffset <(animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }else{
        animItem.classList.remove('_active');
      }
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrjllTop = window.pageXOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
}
