require "rails_helper"

RSpec.describe NewsletterMailer, type: :mailer do
  describe "email_blast" do
    let(:mail) { NewsletterMailer.email_blast }

    it "renders the headers" do
      expect(mail.subject).to eq("Email blast")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end
