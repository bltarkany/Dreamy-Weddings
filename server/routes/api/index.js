const router = require('express').Router();
const evtRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');
const guestRoutes = require('./guestRoutes');
const wedpartyRoutes = require('./wedpartyRoutes');
const galleryRoutes = require('./galleryRoutes');

router.use('/users', userRoutes);
router.use('/events', evtRoutes);
router.use('/guests', guestRoutes);
router.use('/weddingparty', wedpartyRoutes);
router.use('/galleries', galleryRoutes);

module.exports = router;
