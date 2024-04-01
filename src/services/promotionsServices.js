const Promotion = require('../database/models/promotion');
const Purchase = require('../database/models/purchase');

const services = {

    getPromotions: async (promotionId, reqQuery) => {


        const pipeline = [
            {
                $match: { promotionEnable: true } 
            },
            {
                $lookup: {
                    from: 'Purchase',
                    localField: '_id',
                    foreignField: 'Promotion_id',
                    as: 'purchases',
                },
            }
        ];
    
        if (reqQuery.max) {
            pipeline.push(
                { $sort: { purchaseCount: -1 } }, 
                { $limit: parseInt(reqQuery.max) } 
             );
        } else if (reqQuery.nameStore && reqQuery.validityEndDate) {
            pipeline.unshift(
                { $match: { 
                    nameStore: reqQuery.nameStore, 
                    validityStartDate: { $gte: new Date(reqQuery.validityStartDate) },
                    validityEndDate: { $lte: new Date(reqQuery.validityEndDate) }
                } } 
            );
        } else if (reqQuery.nameStore) {
            pipeline.unshift(
                { $match: { nameStore: reqQuery.nameStore } } 
            );
        } else if (promotionId) {
            pipeline.unshift(
                { $match: { _id: promotionId } } 
            );
        }
    
        const promotion = await Promotion.aggregate(pipeline);
        return promotion;
    },
    
    createPromotion: async (promotionData) => {

        await Promotion.create({
            code: promotionData.code,
            promotionTitle: promotionData.promotionTitle,
            nameStore: promotionData.nameStore,
            cuilStore:  promotionData.cuilStore,
            validityStartDate:  promotionData.validityStartDate,
            validityEndDate: promotionData.validityEndDate,
            comments:  promotionData.comments,
            Bank_id:  promotionData.Bank_id_mongo,
            type:  promotionData.type,
            numberOfQuotas:  promotionData.numberOfQuotas? promotionData.numberOfQuotas : null,
            interest:  promotionData.interest? promotionData.interest : null,
            discountPercentage: promotionData.discountPercentage? promotionData.discountPercentage : null,
            priceCap:  promotionData.priceCap? promotionData.priceCap : null,
            onlyCash:  promotionData.onlyCash? promotionData.onlyCash : null,
            promotionEnable:  promotionData.promotionEnable
        });

        return {code: 200, message: 'promotion created'};
    },

    updatePromotion: async (promotionData) => {

        let updatePromotion = {};

        if (!promotionData.code){
            return {code: 400, message: 'promotion code missing'};
        }

        if (promotionData.promotionTitle) {
            updatePromotion.promotionTitle = promotionData.promotionTitle;
        }

        if (promotionData.nameStore) {
            updatePromotion.nameStore = promotionData.nameStore;
        }

        if (promotionData.cuilStore) {
            updatePromotion.cuilStore = promotionData.cuilStore;
        }

        if (promotionData.validityStartDate) {
            updatePromotion.validityStartDate = promotionData.validityStartDate;
        }

        if (promotionData.validityEndDate) {
            updatePromotion.validityEndDate = promotionData.validityEndDate;
        }

        if (promotionData.comments) {
            updatePromotion.comments = promotionData.comments;
        }

        if (promotionData.Bank_id) {
            updatePromotion.Bank_id = promotionData.Bank_id;
        }

        if (promotionData.type) {
            updatePromotion.type = promotionData.type;
        }

        if (promotionData.numberOfQuotas) {
            updatePromotion.numberOfQuotas = promotionData.numberOfQuotas;
        }

        if (promotionData.interest) {
            updatePromotion.interest = promotionData.interest;
        }

        if (promotionData.discountPercentage) {
            updatePromotion.discountPercentage = promotionData.discountPercentage;
        }

        if (promotionData.priceCap) {
            updatePromotion.priceCap = promotionData.priceCap;
        }

        if (promotionData.onlyCash) {
            updatePromotion.onlyCash = promotionData.onlyCash;
        }

        if (promotionData.promotionEnable) {
            updatePromotion.promotionEnable = promotionData.promotionEnable;
        }
    
        const updatedPromotion = await Promotion.findOneAndUpdate(
            { code: promotionData.code },
            updatePromotion,
            { new: true }
        );

        if (updatedPromotion) {
            return { code: 200, message: 'Promotion updated'};
        } else {
            return { code: 404, message: 'Promotion not found' };
        }
    },

    deletePromotion: async (promotionData) => {
        
        const deletedPromotion = await Promotion.findOneAndUpdate(
            { code: promotionData.code },
            { promotionEnable: false },
            { new: true }
        );

        if (deletedPromotion) {
            return { code: 200, message: 'Promotion deleted'};
        } else {
            return { code: 404, message: 'Promotion not found' };
        }
    }
      
}

module.exports = services;