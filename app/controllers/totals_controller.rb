class TotalsController < ApplicationController
  def total
    @donations = Donation.all
    @total = 0
    @donations.each { |donation| @total += donation.amount }
  end
end
