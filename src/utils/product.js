const path=require('path')
const fs=require('fs')
const productPath=path.join(__dirname,'../../product.json')

const getList=()=>{
    try {
        const buffer=fs.readFileSync(productPath)
        const list =JSON.parse(buffer)
        return list
    }catch{
        return []
    }
}


const saveList=(newList)=>{
    let newlist=JSON.stringify(newList)
    fs.writeFileSync(productPath,newlist)
}

const addProduct=(newProduct)=>{
    if(!newProduct.id || !newProduct.name){
        return console.log('id and name must be provided')
    }
    let listProduct=getList()
    const isIdExist=listProduct.find((product)=>product.id===newProduct.id
    )
    if(isIdExist){
        return console.log('id is exist')
    }
    listProduct.push(newProduct)
    saveList(listProduct)
    return console.log(newProduct)
}

const deleteProduct=(id)=>{
    let listProduct=getList()
    const productIndex=listProduct.findIndex((product)=>product.id===id)
    if(productIndex===-1){
        return console.log('unable to find product')
    }
    const product=listProduct[productIndex]
    listProduct.splice(productIndex,1)
    saveList(listProduct)
    return console.log(product)
}

const getProduct=(id)=>{
    let listProduct=getList()
    const product=listProduct.find((product)=>product.id===id)
    if(!product){return console.log('unable to find product')}
    return console.log(product)
}

const updateProduct=(update)=>{
    let listProduct=getList()
    if(!update.id){
        return console.log('Id must be provided')
    }
    const productIndex=listProduct.findIndex((product)=>product.id===update.id)
    if(productIndex===-1){
        return console.log('unable to find product')
    }
    const updateProperties=Object.keys(update)
    
    for (index of updateProperties){
        listProduct[productIndex][index]=update[index]
    }
    saveList(listProduct)
    console.log(listProduct[productIndex])
}


const importProduct=(id)=>{
    listProduct=getList()
    const product=listProduct.find((product)=>product.id===id)
    if(!product){return console.log('unable to find product')}
    product.amount+=50
    saveList(listProduct)
    return console.log(product)
}
module.exports={
    getList,addProduct,deleteProduct,getProduct,updateProduct,importProduct
}
