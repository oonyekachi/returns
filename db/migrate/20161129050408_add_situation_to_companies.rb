class AddSituationToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :situation_address, :string
    add_column :companies, :situation_address_2, :string
    add_column :companies, :situation_city, :string
    add_column :companies, :situation_state, :string
  end
end
