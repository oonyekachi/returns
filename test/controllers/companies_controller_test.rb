require 'test_helper'

class CompaniesControllerTest < ActionController::TestCase
  setup do
    @company = companies(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:companies)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create company" do
    assert_difference('Company.count') do
      post :create, company: { accounts_date: @company.accounts_date, annual_return_date: @company.annual_return_date, authorization_code: @company.authorization_code, company_type_id: @company.company_type_id, email_reminder: @company.email_reminder, incorporation_date: @company.incorporation_date, name: @company.name, rc_number: @company.rc_number, registered_office_address: @company.registered_office_address, registered_office_city: @company.registered_office_city, registered_office_state: @company.registered_office_state }
    end

    assert_redirected_to company_path(assigns(:company))
  end

  test "should show company" do
    get :show, id: @company
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @company
    assert_response :success
  end

  test "should update company" do
    patch :update, id: @company, company: { accounts_date: @company.accounts_date, annual_return_date: @company.annual_return_date, authorization_code: @company.authorization_code, company_type_id: @company.company_type_id, email_reminder: @company.email_reminder, incorporation_date: @company.incorporation_date, name: @company.name, rc_number: @company.rc_number, registered_office_address: @company.registered_office_address, registered_office_city: @company.registered_office_city, registered_office_state: @company.registered_office_state }
    assert_redirected_to company_path(assigns(:company))
  end

  test "should destroy company" do
    assert_difference('Company.count', -1) do
      delete :destroy, id: @company
    end

    assert_redirected_to companies_path
  end
end
