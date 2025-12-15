const Wallet=require('../models/Wallet');
const deductFromWallet=async (amount)=>{
    const wallet=await Wallet.findOne();
    if(!wallet){
        throw new Error("Wallet not found");
    }
    if(wallet.balance<amount){
        throw new Error("Insufficient wallet Balance");
    }
    wallet.balance-=amount;
    await wallet.save();
    return wallet.balance;

};
module.exports={deductFromWallet};