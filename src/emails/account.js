const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hnkakadiya2705@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hnkakadiya2705@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}