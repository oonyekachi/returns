class CompanySerializer < ActiveModel::Serializer

  attributes :name, :authorization_code, :rc_number, :company_type_id, 
       :incorporation_date, :email_reminder, :registered_office_address, :registered_office_city, :registered_office_state,
       :annual_return_date, :accounts_date, :auth_share_capital, :number_of_shares, :share_price, :issued_share_capital,
       :paid_up_capital, :registered_office_address2, :registered_office_po, :situation_address, :situation_address2,
       :situation_city, :situation_state, :email, :zonal_office, :tstore,
       :created_at, :updated_at
end  