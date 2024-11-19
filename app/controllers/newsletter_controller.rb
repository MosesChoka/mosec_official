class NewsletterController < ApplicationController
  before_action :set_name, only: %i[subscribe unsubscribe manage email]
  before_action :authenticate_user!


  def subscribe
    current_user.subscribe(@name) unless current_user.subscribed?(@name)

    # use turbo to update the page
    respond_to do |format|
      format.turbo_stream
      format.html { redirect_to root_path }
    end
  end

  def unsubscribe
    current_user.unsubscribe(@name) if current_user.subscribed?(@name)

    # use turbo to update the page
    respond_to do |format|
      format.turbo_stream
      format.html { redirect_to root_path }
    end

  end


  def manage
    if current_user.subscribed?(@name)
      current_user.unsubscribe(@name)
    else
      current_user.subscribe(@name)
    end

    respond_to do |format|
      format.turbo_stream
      format.html { redirect_to root_path }
    end
  end

  def email
    @users = User.subscribed(@name)
    puts "Sending #{@name} newsletter to #{@users.count} users"
    @users.each do |user|
      puts "Sending email to #{user.email}"

      # use action_mailer to send the email
      NewsletterMailer.with(user.first).email_blast(user, @name).deliver_later
    end

    redirect_to root_path
  end

  private

  def newsletter_params
    params.permit(:name, :_method, :authenticity_token)
  end

  def set_name
    @name = newsletter_params[:name]
  end
end
