module.exports = (req, res) => {

    res.render("login", {
        invalidUserError: null,
        invalidUserPassword: null
    })
}
