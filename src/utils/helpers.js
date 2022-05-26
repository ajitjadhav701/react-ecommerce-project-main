export const formatPrice = (num) => {
    const newNum=Intl.NumberFormat('en-US',{style:'currency',currency:'USD',}).format(num/100)
    return newNum;
}

export const getUniqueValues = (data,type) => {
    let unique=data.map((item)=>item[type]);
    //console.log(unique);
    if(type==='colors'){
        unique=unique.flat();
    }
    return ['all',...new Set(unique)]
}
