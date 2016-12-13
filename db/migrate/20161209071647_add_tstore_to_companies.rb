class AddTstoreToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :tstore, :jsonb, null: false, default: '{}'
    add_index  :companies, :tstore, using: :gin    
  end
end
