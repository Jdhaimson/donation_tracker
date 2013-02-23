class TotalsController < ApplicationController
  def total
    @donations = Donation.all
    @total = 0
    @donations.each { |donation| @total += donation.amount }
    
    respond_to do |format|
      format.html # total.html.erb
      format.json { render json: @total }
    end
  end
end
