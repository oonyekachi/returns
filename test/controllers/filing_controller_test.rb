require 'test_helper'

class FilingControllerTest < ActionController::TestCase
  test "should get annual" do
    get :annual
    assert_response :success
  end

  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get new" do
    get :new
    assert_response :success
  end

end
