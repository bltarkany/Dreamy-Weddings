const router = require('express').Router();
const evtRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');
const guestRoutes = require('./guestRoutes');
const wedpartyRoutes = require('./wedpartyRoutes');
const galleryRoutes = require('./galleryRoutes');
const layoutRoutes = require('./layoutRoutes');
const evt_guestRoutes = require('./evt_guestRoutes');

router.use('/users', userRoutes);
router.use('/events', evtRoutes);
router.use('/guests', guestRoutes);
router.use('/weddingparty', wedpartyRoutes);
router.use('/galleries', galleryRoutes);
router.use('/layouts', layoutRoutes);
router.use('/evtguests', evt_guestRoutes);

module.exports = router;
