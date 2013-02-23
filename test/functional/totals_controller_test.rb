require 'test_helper'

class TotalsControllerTest < ActionController::TestCase
  test "should get total" do
    get :total
    assert_response :success
  end

end
