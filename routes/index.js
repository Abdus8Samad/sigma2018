const router = require('express').Router();

router.get('/',(req,res) =>{
    res.render('home');
})

router.get('/home',(req,res) =>{
    res.render('home');
})

router.get('/CallforPapers',(req,res) =>{
    res.render('CallforPapers');
})

router.get('/Publications',(req,res) =>{
    res.render('Publications');
})

router.get('/Submission',(req,res) =>{
    res.render('Submission');
})

router.get('/ImportantDates',(req,res) =>{
    res.render('ImportantDates');
})

router.get('/Committees',(req,res) =>{
    res.render('Committees');
})

router.get('/KeyNoteSpeakers',(req,res) =>{
    res.render('KeyNoteSpeakers');
})

router.get('/AcceptedSpeakers',(req,res) =>{
    res.render('AcceptedSpeakers');
})

router.get('/Registration',(req,res) =>{
    res.render('Registration');
})

router.get('/Awards',(req,res) =>{
    res.render('Awards');
})

router.get('/SponsorshipInfo',(req,res) =>{
    res.render('SponsorshipInfo');
})

router.get('/Program',(req,res) =>{
    res.render('Program');
})

router.get('/SpecialSession',(req,res) =>{
    res.render('SpecialSession');
})

router.get('/Download',(req,res) =>{
    res.render('Download');
})

router.get('/Venue',(req,res) =>{
    res.render('Venue');
})

router.get('/HotelTravelVisa',(req,res) =>{
    res.render('HotelTravelVisa');
})

router.get('/ContactUs',(req,res) =>{
    res.render('ContactUs');
})

module.exports = router;