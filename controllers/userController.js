const Portfolio = require('../models/portfolio.js');
const Experience = require('../models/experience.js');
const Skill = require('../models/skill.js');
const Education = require('../models/education.js');
const Achievement = require('../models/achievement.js');


//getting homepage
exports.getHomePage = (req,res,next)=>{ 
    let portfolio = Portfolio.fetchAll();
    let experience = Experience.fetchAll();
    let skills = Skill.fetchAll();
    let education = Education.fetchAll();
    let achievement = Achievement.fetchAll();
    res.render('index', {
        title: "Amadi Chukwuemeka Austin | Software Engineer",
        description:"Am a Software Engineer who is passionate about solving complex problems by Building technological solutions out of business needs",

        portfolio: portfolio,
        experience: experience,
        skills: skills,
        education: education,
        achievement: achievement,
    });
}