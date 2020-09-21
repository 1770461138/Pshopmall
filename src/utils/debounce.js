//防抖函数
export function debounce(func,delay){//防抖函数,delay:等待的时间
        let timer = null
        return function(...a){
          if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this,a)
        },delay)
    }
  }