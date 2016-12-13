class AddMoreAddressesToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :registered_office_address_2, :string
    add_column :companies, :registered_office_po, :string
  end
end
