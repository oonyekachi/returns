class AddModelsToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :auth_share_capital, :integer, limit: 6
    add_column :companies, :number_of_shares, :integer, limit: 6
    add_column :companies, :share_price, :decimal
    add_column :companies, :issued_share_capital, :integer, limit: 6
    add_column :companies, :paid_up_capital, :integer, limit: 6
  end
end
