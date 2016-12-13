class AddZonalToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :zonal_office, :string
  end
end
