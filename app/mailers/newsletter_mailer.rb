class NewsletterMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.newsletter_mailer.email_blast.subject
  #
  def email_blast(user = User.first, name = Newsletter.first.name)
    @greeting = "Hi"
    @user = user
    @name = name
    attachments.inline["mosec-logo.webp"] = File.read("app/assets/images/mosec-logo.webp")

    mail(to: user.email, subject: "Welcome to The Mosec Newsletter")
  end
end
