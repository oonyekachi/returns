class CreateRates < ActiveRecord::Migration
  def change
    create_table :rates do |t|
      t.string :description
      t.decimal :amount

      t.timestamps null: false
    end
  end
end
