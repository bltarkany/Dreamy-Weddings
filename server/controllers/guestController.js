const { Event, Guest, EventGuest } = require('../models');

module.exports= {
    // TODO: create guest
    async createGuest({user, body}, res){
        try {
            const guest = await Guest.create(body);
            res.status(201).json(guest);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    // TODO: update guest
        async updateGuest({user, body, params}, res){
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
    // TODO: delete guest
        async deleteGuest({user, params}, res){
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
    // TODO: get all guests
        async getGuests({user}, res){
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
    // TODO: get one guest
        async getGuestbyId({user, params}, res){
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    }
    // TODO: get guest count
    // async createGuest({user, body}, res){
    //     try {
            
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }
    // }
}