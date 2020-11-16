exports.checkLoggedIn = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();

}

exports.checkIsAdmin = (req, res, next) => {
    if (!req.session.user.admin) {
        return res.redirect('/');
    }
    next();
}