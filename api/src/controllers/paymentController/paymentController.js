class PaymentController{
    constructor(subscriptionService){
        this.subscriptionService = subscriptionService
    }
    async getPymentLink(req, res){
        try {
            const productId = req.query.producto_id;
            const payment = await this.subscriptionService.createPayment(productId);
            res.json(payment)
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:true, mesg:`failed to create payment: ${error.message}`})
        }
    }
    
}

module.exports = PaymentController