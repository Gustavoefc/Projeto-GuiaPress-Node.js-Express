function adminAuth(req, res, next) {
    if(req.session.user != undefined) {
      res.locals.user = req.session.user;
      next();
    }else{
      res.redirect("/login");
    }
}

module.exports = adminAuth