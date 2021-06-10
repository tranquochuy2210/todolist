const yargs=require('yargs')
const {getList,addProduct,deleteProduct,getProduct,updateProduct,importProduct}=require('./utils/product')


yargs.command({
    command:'add',
    description:'',
    builder:{
        id:{
            type:String},
        name:{
            type:String},
        price:{
            type:Number},
        amount:{
            type:Number},
        description:{
            type:String},

    },
    handler:(args)=>{
        const newProduct={id:args.id,name:args.name,price:args.price,amount:args.amount,description:args.description}
        addProduct(newProduct)
    }     
    })
 yargs.command({
     command:'remove',
     description:'',
     builder:{
        id:{
            type:String},
     },
    handler:(args)=>{
        deleteProduct(args.id)
    }
    })
yargs.command({
    command:'get-all',
    handler:()=>{
        console.log(getList())
    }
})
yargs.command({
    command:"get",
    builder:{
        id:{type:String}
    },
    handler:(args)=>{
        getProduct(args.id)
    }
})
yargs.command({
    command:"update",
    builder:{
        id:{
            type:String},
        name:{
            type:String},
        price:{
            type:Number},
        amount:{
            type:Number},
        description:{
            type:String},
    },
    handler:(args)=>{
            const orther1='$0'
            const orther2='_'
            const update={...args}
            delete update[orther1]
            delete update[orther2]
            updateProduct(update)
        
    }
})
yargs.command({
    command:"import",
    builder:{
        id:{type:String}
    },
    handler:(args)=>{
        importProduct(args.id)
    }
})






yargs.parse()
