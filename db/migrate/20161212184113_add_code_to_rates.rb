class AddCodeToRates < ActiveRecord::Migration
  def change
    add_column :rates, :code, :string
  end
end
